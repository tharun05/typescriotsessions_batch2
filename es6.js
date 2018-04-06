"use strict";
// let $ const
console.log("let and const");
var variable = "digitallync";
console.log(variable);
variable = "anathor value";
console.log(variable);
var adharNumber = 123456789012;
// adharNumber = 50;
// block scope
function set() {
    var variable = null;
    console.log(variable);
}
set();
console.log(variable);
// arrow functions
console.log('arrow functions starts here');
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(2, 5));
var addTwoNumbers = function (num1, num2) {
    return num1 + num2;
};
var multiplynumbers = function (num1, num2) { return num1 * num2; };
var countNumbers = function (start) {
    if (start === void 0) { start = 10; }
    console.log('start');
    while (start > 0) {
        console.log(start--);
    }
    console.log("done with the count");
};
countNumbers();
// rest and spread operators
var numbers = [1, 2, 3, 4, 101, 999];
console.log(Math.max.apply(Math, numbers));
function makearray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makearray('tharun', 1, 2, 3, 4));
console.log('Destructuring');
var game = ['cricket', 'volly ball'];
var gameone = game[0], gametwo = game[1];
console.log(gameone, gametwo);
var userData = { userName: "adam", ageone: 34 };
var userName = userData.userName, ageone = userData.ageone;
console.log(userName, ageone);
//# sourceMappingURL=es6.js.map