var mongoose = require('mongoose')

var linkSchema = require('./linkshortner.schema.server')

var linkModel = mongoose.model('LinkModel',linkSchema)

function createLink(Link) {
    return linkModel.create(Link)
}

function findShortLink(short) {
    return linkModel.find({'shortlink':short})
}

function findLinkCode(code){
    return linkModel.findOne({'linkcode':code})
}

function findLongLink(long) {
    return linkModel.find({'longlink':long})
}

module.exports ={
    createLink:createLink,
    findShortLink:findShortLink,
    findLinkCode:findLinkCode,
    findLongLink:findLongLink
}