const mongoose = require('mongoose')
mongoose.Promise = global.Promise

require('../models/ImageSchema')
require('../models/TagSchema')


const connectionString = 'mongodb://localhost:27017/mongoplaygriund'

module.exports = mongoose.connect(connectionString)