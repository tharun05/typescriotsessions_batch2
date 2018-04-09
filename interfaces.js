"use strict";
function greet(person) {
    console.log(person.firstname);
}
function changeName(person) {
    person.firstname = "digital";
}
var personlist = {
    firstname: 'tharun',
    hobbies: ['cooking', 'sports'],
    greet: function () {
        console.log(this.firstname);
    }
};
var Personone = /** @class */ (function () {
    function Personone() {
        this.firstname = 'sam';
        this.lastname = "joel";
    }
    Personone.prototype.greet = function (lastname) {
        console.log(this.firstname + ' ' + this.lastname);
    };
    return Personone;
}());
var myPerson = new Personone();
myPerson.firstname = "samuel";
myPerson.greet(myPerson.lastname);
console.log(myPerson);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstname: 'maya',
    greet: function () {
        console.log(this.firstname);
    }
};
console.log(oldPerson);
//# sourceMappingURL=interfaces.js.map