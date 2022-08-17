const router = require('express').Router() // first call in express.Router()
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');


// api/users // all users
router.route('/').get(getUsers).post(createUser);

// api/users/:userid // single user
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;