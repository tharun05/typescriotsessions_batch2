"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, designation) {
        this.age = 19;
        this.name = name;
        this.designation = designation;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setDesignation = function (designation) {
        this.designation = designation;
        console.log(this.designation);
    };
    return Person;
}());
// let person = new Person('jkhfasd','jfalsjkf');
// person.printAge();
// person.setDesignation("developer");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        var _this = _super.call(this, 'tharun', "dillikar") || this;
        _this.name = "microsoft";
        return _this;
    }
    return Employee;
}(Person));
var employee = new Employee();
console.log(employee);
// console.log(employee.)
// class Vehicle{
//     private type:string = "bmw vehicle";
//     getVehicles(){
//         return this.type;
//     }
//     vehicless(value:string){
//         if(value.length>4){
//             this.type = value;
//         }else{
//             this.type = 'bmw vehicle'
//         }
//     }
//     constructor(){
//     }
// }
// let vehicle = new Vehicle();
// vehicle.Vehicles()
// console.log(vehicle.vehicless('audilkfhasdlkfh'))
// abstract classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Shopping Cart";
        this.budget = 10000;
    }
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeProjectName = function (name) {
        this.projectName = name;
        console.log(this.projectName);
    };
    ITProject.companyLocation = function () {
        console.log('gachibowli');
    };
    ITProject.projectPeriod = '6months';
    return ITProject;
}(Project));
var newProject = new ITProject();
newProject.changeProjectName('product sales project');
ITProject.companyLocation();
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
// string 
var firstname = 'flkahsfkjashf;laskdfh';
var age = 24;
var hasHobbies = true;
var games = 'soccor';
games = 10;
var players = ['sachin', 'sania', 10];
var address = ['gachibowli', "street no", 10];
var fest;
(function (fest) {
    fest[fest["Diwali"] = 0] = "Diwali";
    fest[fest["ramadan"] = 12] = "ramadan";
    fest[fest["bhogi"] = 13] = "bhogi";
})(fest || (fest = {}));
var festival = fest.bhogi;
console.log(festival);
var isActive = true;
var obj = {
    name: 'digitallync',
    age: 23,
};
function returnName() {
    return 3 * 4;
}
console.log(returnName());
var printName = function (num1, num2) {
    return num1 * num2;
};
console.log(printName(3, 4));
var complexObj = {
    data: [200, 300, 400],
    output: function (all) {
        return this.data;
    }
};
console.log(complexObj);
var gameNamespace;
(function (gameNamespace) {
    gameNamespace.gameTiming = '2:00pm';
    gameNamespace.game = function () {
        console.log('football');
    };
})(gameNamespace || (gameNamespace = {}));
var gameTiming = "2:00pm";
// gameNamespace.game();
var gameNamespace;
(function (gameNamespace) {
    gameNamespace.gametwo = function () {
        console.log('cricket');
    };
})(gameNamespace || (gameNamespace = {}));
/// <reference path='namespace.ts' />
/// <reference path='namespacetwo.ts' />
gameNamespace.game();
gameNamespace.gametwo();
//# sourceMappingURL=main.js.map