var fs = require('fs');


//************************ File ****************//
{
    var writeDATA = "Hello Gaurav Joshi! This is the first file you have created in NODE.JS. CONGRATULATIONS!!!";


    // var i = 0;
    // while (i < 5) {
    //     console.log("qwertyuiop[");
    //     var data = fs.readFileSync("./writeMeForStreaming.txt");
    //     fs.writeFileSync('./writeME3.txt', data+"\n"+data);
    //     i=i+1;
    // }


    //************** Sync function **************//
    {
        fs.writeFileSync('./writeME.txt', writeDATA);
        console.log("file writeME made");

        console.log("read Output:-  " + fs.readFileSync('./writeME.txt', 'utf-8'));  //readFileSync

        fs.writeFileSync('./writeME2.txt', writeDATA + " 12345678909876543212345678");
        console.log("file writeME2 made");

        fs.unlinkSync('./writeMe2.txt');
        console.log("file writeME2 deleted");

        fs.unlinkSync("./writeMe.txt");
        console.log("file writeME deleted");
    }
    //************** Sync function **************//

    //************** Async function **************//
    {
        fs.writeFile('./writeME3.txt', writeDATA, function () {
            console.log("file writeME3 made callback");
        });
        console.log("file writeME3 made");

        console.log("read Output:-  " + fs.readFile('./writeME3.txt', 'utf-8', function (err, data) {
            console.log("read Output line 44 error:-  " + err);
            console.log("read Output line 45 data:-  " + data);
        }));

        fs.writeFile('./writeME4.txt', writeDATA + " 12345678909876543212345678", function () {
            console.log("file writeME4 made callback");
        });
        console.log("file writeME4 made");

        fs.unlink('./writeMe4.txt', function () {
            console.log("file writeME4 deleted callback");
        });
        console.log("file writeME4 deleted");

        fs.unlink("./writeMe3.txt", function () {
            console.log("file writeME3 deleted callback");
        });
        console.log("file writeME3 deleted");
    }
    //************** Async function **************//
}
//************************ File ****************//


//************************ Folder ****************//
{
    //************** Sync function **************//
    {
        fs.mkdirSync('GJ');
        console.log("Folder GJ created.");

        fs.writeFileSync('./GJ/writeMe.txt', writeDATA + " within first folder GJ");
        console.log("file writeME created within folder GJ.");

        fs.unlinkSync('./GJ/writeMe.txt');
        console.log("file writeME within folder GJ deleted.");

        fs.rmdirSync('GJ');
        console.log("folder GJ deleted.");

    }
    //************** Sync function **************//


    //************** Async function **************//
    {
        fs.mkdir('GJ2', function () {
            console.log("Folder GJ2 created callback function");
            fs.writeFile('./GJ2/writeME.txt', writeDATA + " within second folder GJ2", function () {
                console.log("file writeME created within folder GJ2.");
                return;
            });
            console.log("Folder GJ2 created callback function end.");


            fs.unlink('./GJ2/writeMe.txt', function () {
                console.log("file writeME within folder GJ2 callback function.");
                fs.rmdir("./GJ2", function () {
                    console.log("folder GJ2 deleted");
                    return;
                });
                console.log("file writeME within folder GJ2 callback end.");
            });
            console.log("file writeME within folder GJ2 deleted.");
        });
        console.log("Folder GJ2 created");



    }
    //************** Async function **************//
}
//************************ Folder ****************//