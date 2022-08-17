const router = require('express').Router(); // first call in express.Router()
const userRoutes = require('./userRoutes'); // add in userRoutes()
const thoughtRoutes = require('./thoughtRoutes'); // add in thoughtRoutes()

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
