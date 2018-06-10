const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    url: { type: mongoose.Schema.Types.String, required: true},
    creationDate: { type: mongoose.Schema.Types.Date, required: true, default: Date.now},
    description: { type: mongoose.Schema.Types.String},
    tags: [{ type: mongoose.Schema.Types.ObjectId }]
})

module.exports = mongoose.model('Image', imageSchema)