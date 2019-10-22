var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var FAVICON = path.join(__dirname, "", 'favicon.ico');
// var port = 3000;
// var serverIP = "127.0.0.1";
var server = http.createServer(function (req, res) {
    console.log("request is :----> ", req.url);

    var pathname = url.parse(req.url).pathname;
    if (req.method === 'GET' && pathname === '/favicon.ico') {
        // MIME type of your favicon.

        // .ico = 'image/x-icon' or 'image/vnd.microsoft.icon'
        // .png = 'image/png'
        // .jpg = 'image/jpeg'
        // .jpeg = 'image/jpeg'

        res.setHeader('Content-Type', 'image/x-icon');
        fs.createReadStream(FAVICON).pipe(res);

        return;
    }
    else {
        res.writeHead(200,{"Content-Type":"text/plain"});
    }

    res.end("hey GJ! congrats on making your first server ever. Hope you have many achievements in the future");
});

// server.listen(port, serverIP);
// console.log("Listening to request at port number "+port+" in server ip "+serverIP+".");

module.exports.server = server;