var mongoose = require("mongoose")

var linkSchema = mongoose.Schema({
    longlink: String,
    shortlink: String,
    linkcode: String
},{collection:'linkshortner'})

module.exports = linkSchema