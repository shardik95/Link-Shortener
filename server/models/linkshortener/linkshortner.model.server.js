var mongoose = require('mongoose')

var linkSchema = require('./linkshortner.schema.server')

var linkModel = mongoose.model('LinkModel',linkSchema)

