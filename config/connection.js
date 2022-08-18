const { connect, connection } = require('mongoose')

const connectonString = 
    process.env.MONGODB_URI || 'mongodb://localhost:27017/usersDB'

connect(connectonString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

module.exports = connection