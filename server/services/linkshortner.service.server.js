const shortid = require('shortid')

module.exports = function (app) {
    app.get("/api/link/:linkcode",findLink)
    app.post("/api/link",createShortLink)

    var linkModel = require('../models/linkshortener/linkshortner.model.server')

    function findLink(req,res) {
        var code = req.params.linkcode
        console.log(code)
        return linkModel.findLinkCode(code)
            .then(link=>res.send(link.longlink))

    }

    function createShortLink(req,res) {
        const { link, base } = req.body
        var code = shortid.generate()
        var shortlink = base + '/'+code

        var obj = {
            longlink:link,
            shortlink:shortlink,
            linkcode:code
        }
        linkModel.createLink(obj)
            .then(link=>res.send(link))
    }

}