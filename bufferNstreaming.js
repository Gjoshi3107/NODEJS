var server = require('./server');

var server = server.server;
var port = 3000;
var serverIP = "127.0.0.1";

server.listen(port, serverIP);
console.log("Listening to request at port number "+port+" in server ip "+serverIP+".");