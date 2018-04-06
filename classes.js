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
//# sourceMappingURL=classes.js.map