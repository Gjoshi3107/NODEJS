var count = function (arr) {
    return ""+arr.length
};

var add = function(a,b) {
    return `The sum of ${a} and ${b} is :- ${a+b}`;
};



// can be exported as this as well:-

// module.exports.count = count;
// module.exports.sum = add;

module.exports = {
    count : count,
    sum : add
};