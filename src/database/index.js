const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/rest-api', {useMongoClient: true})
mongoose.Promise = global.Promise

module.exports = mongoose
