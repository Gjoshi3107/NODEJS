var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log("request is :----> ", req.url);

    if (req.method === 'GET' && req.url === '/favicon.ico') {
        // MIME type of your favicon.

        // .ico = 'image/x-icon' or 'image/vnd.microsoft.icon'
        // .png = 'image/png'
        // .jpg = 'image/jpeg'
        // .jpeg = 'image/jpeg'

        res.writeHead(200, { 'Content-Type': 'image/x-icon' });              // for JSON:- application/json; html:- text/html
        fs.createReadStream(__dirname + '/favicon.ico').pipe(res);                   // a readStream is created and the output is piped to a writeStream.
    }
    else if (req.method === 'GET' && req.url === "/" || req.url === "/home") {
        res.writeHead(200, { 'Content-Type': "text/html" });
        fs.createReadStream(__dirname + "/home.html", "utf-8").pipe(res);
    }
    else if (req.method === 'GET' && req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': "text/html" });
        fs.createReadStream(__dirname + "/contact.html", "utf-8").pipe(res);
    }
    else if (req.method === 'GET' && req.url === '/json') {
        res.writeHead(200, { 'Content-Type': "application/json" });
        fs.createReadStream(__dirname + "/contactJSON.json").pipe(res);
    }
    else {
        res.writeHead(404, { 'Content-Type': "text/html" });
        fs.createReadStream(__dirname + "/failure.html", "utf-8").pipe(res);
    }
});

server.listen(3000, "127.0.0.1");
console.log("Listening to port 3000 of IP 127.0.0.1");