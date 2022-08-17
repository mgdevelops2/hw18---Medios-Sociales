const router = require('express').Router(); // first call in express.Router()
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;
