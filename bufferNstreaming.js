// var server = require('./server');

// var server = server.server;
// var port = 3000;
// var serverIP = "127.0.0.1";

// server.listen(port, serverIP);
// console.log("Listening to request at port number "+port+" in server ip "+serverIP+".");

var fs = require('fs');
var i = 0;

var readStream = fs.createReadStream(__dirname+"/readMeForStreaming.txt",'utf-8');
var writeStream = fs.createWriteStream(__dirname+"/writeMeWhileStreaming.txt");
var writeStream2 = fs.createWriteStream(__dirname+"/pipedFile.txt");

readStream.on('data',function(chunk){   //will only work on "data" event.
    i+=1;
    console.log("chunk number:----> "+i);
    writeStream.write(chunk);
})

readStream.pipe(writeStream2);   //writeStream2 is a writable Stream thus can be piped.