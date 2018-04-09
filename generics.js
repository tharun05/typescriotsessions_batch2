"use strict";
console.log('FROM GENERICS');
//simple generic
function simpleGeneric(data) {
    return data;
}
console.log(simpleGeneric('digitallync'));
console.log(simpleGeneric(34));
console.log(simpleGeneric({ name: 'digitallync', location: 'gachibowli' }));
// better generic
function betterGeneric(data) {
    return data;
}
console.log(betterGeneric('digitallync'));
console.log(betterGeneric(23));
console.log(simpleGeneric({ name: 'digitallync', location: 'gachibowli' }));
var results = ['fjhdsa'];
var BetterGenericClass = /** @class */ (function () {
    function BetterGenericClass() {
    }
    BetterGenericClass.prototype.calc = function () {
        return +this.valueone * +this.valueTwo;
    };
    return BetterGenericClass;
}());
var betterclass = new BetterGenericClass();
betterclass.valueone = '10';
betterclass.valueTwo = '30';
console.log(betterclass.calc());
//# sourceMappingURL=generics.js.map