var express = require("express");
var fs = require("fs");

var app = express();

app.listen(3001,"127.0.0.1");

app.get("/", function (req, res) {
    res.send("qwertyuiopoiuytrewqwertyuiopoiuytrewq");
})

app.get("/favicon", function(req,res){
    res.writeHead(200, { 'Content-Type': 'image/x-icon' });
    fs.createReadStream(__dirname + '/favicon.ico').pipe(res);
})