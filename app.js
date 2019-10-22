var enjoy = require("./multifunctions");
var eventsRun = require("./multiEvents");

//************************ global object ****************//

// console can be called anywhere as it is global object
console.log("qwertyuiop");

//setTimeout can also be called anywhere as it too is global object
setTimeout(() => {
    console.log("3 seconds have passed");
}, 3000);

//setInterval can also be called anywhere as it too is global object
var time = 0;
var timers = setInterval(() => {
    time += 2;
    console.log(time + " seconds have passed");
    if (time > 13) {
        clearInterval(timers); // we should call clearInterval or the interval will be lifetime interval.
    }
}, 2000);

console.log(__dirname);   //tells the path of directory
console.log(__filename);    // tells the path of file

//************************ global object ****************//

//************************ function expression ****************//

function callfunction(passedVariable) {
    console.log("A FUNCTION IS CREATED");

    passedVariable();

    console.log("function expression passed as parameter is called");
};

var funcExpression = function () {
    console.log("A NEW FUNCTION EXPRESSION IS CREATED AND CALLED.");
};

callfunction(funcExpression);
//************************ function expression ****************//


//************************ require function ****************//

console.log("the number of letters in 'Animal' is " + enjoy.count("Animal"));
console.log(enjoy.sum(30, 12));

//************************ require function ****************//



//************************ events module example ****************//

eventsRun.addEventListener.emit("question");
eventsRun.addEventListener.emit("having fun");

//using util for inheritance
eventsRun.families.forEach(function (value, j) {
    value.on("childOf", function () {
        console.log(value.child + " says: " + value.parent);
    })
    eventsRun.families[j].emit("childOf");
});

//************************ events module example ****************//