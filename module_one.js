"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Aliase = __importStar(require("./module_two"));
var module_three_1 = __importDefault(require("./module_three"));
console.log(Aliase.calcCircum(20));
console.log(module_three_1.default(10, 20));
//# sourceMappingURL=module_one.js.map