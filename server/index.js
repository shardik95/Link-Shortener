var express = require("express")
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/link-shortner')

var bodyparser = require('body-parser')
var app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-type,Accept,x-access-token,X-Key"
    );
    if (req.method == "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
})

app.get("/",function (req,res) {
    res.send("Link Shortner")
})

var service = require('./services/linkshortner.service.server')
service(app)

app.listen(process.env.PORT || 4000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});