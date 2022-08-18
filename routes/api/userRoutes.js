const router = require('express').Router() // first call in express.Router()
const {
    getUsers,
    getSingleUser,
    addFriend,
    removeFriend,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

// all users
// api/users 
router.route('/').get(getUsers).post(createUser);

// single user
// api/users/:userid 
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// post/delete new friend to user's list
// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend)
    .delete(removeFriend);

module.exports = router;