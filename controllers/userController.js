// require User
const { User, Thought } = require('../mode`ls');

module.exports = {
    //GET all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    //GET a user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No course w/ that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },
    // CREATE a user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err)
            })
    },
    // DELETE a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: ' User and thoughts deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
    //UPDATE a user 
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((course) =>
                !course
                    ? res.status(404).json({ message: 'No course with this id!' })
                    : res.json(course)
            )
            .catch((err) => res.status(500).json(err));
    }
};