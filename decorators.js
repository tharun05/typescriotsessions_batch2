"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('from decorators');
function logged(constructorFun) {
    console.log(constructorFun);
}
var Detailedperson = /** @class */ (function () {
    function Detailedperson() {
        console.log('hello');
    }
    Detailedperson = __decorate([
        logged
    ], Detailedperson);
    return Detailedperson;
}());
var detailedperson = new Detailedperson();
console.log(detailedperson);
// factory
function logwhentrue(value) {
    return value ? logged : null;
}
var Destination = /** @class */ (function () {
    function Destination() {
    }
    Destination = __decorate([
        logwhentrue(false)
    ], Destination);
    return Destination;
}());
//# sourceMappingURL=decorators.js.map