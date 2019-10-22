var event = require("events");

var addEventListener = new event.EventEmitter();

addEventListener.on("having fun", function () {
    console.log("yes i am, what about you.");
});

addEventListener.on("question", function () {
    console.log("are you guys having fun??");
});


//************************ using util for inheritance ****************//

var util = require("util");
var son = function (childName, father, mother) {
    this.child = childName;
    this.parent = "I am the son of " + father + " and " + mother;
};

util.inherits(son, event.EventEmitter);

var jimmy = new son("jimmy", "mike", "sarah");
var ron = new son("ron", "harry", "hermoine");
var aaron = new son("aaron", "solomon", "sultana");

var families = [jimmy, ron, aaron];

//************************ using util for inheritance ****************//

module.exports = {
    addEventListener: addEventListener,
    families: families
};