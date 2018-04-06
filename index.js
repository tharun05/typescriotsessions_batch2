"use strict";
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
//# sourceMappingURL=index.js.map