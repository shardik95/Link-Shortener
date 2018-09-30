var express = require("express")
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/link-shortner')

var bodyparser = require('body-parser')
var app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",function (req,res) {
    res.send("Hello World")
})

app.listen(process.env.PORT || 4000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});