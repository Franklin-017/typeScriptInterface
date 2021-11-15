"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.ArrayManipulation = void 0;
var ArrayManipulation = /** @class */ (function () {
    function ArrayManipulation() {
    }
    ArrayManipulation.prototype.arrayFindMultiples = function (myArray) {
        return myArray.filter(function (num) { return (typeof num !== 'string') && (num % 10 == 0 || num % 5 == 0); });
    };
    ArrayManipulation.prototype.arraySeparate = function (myArray) {
        return myArray.filter(function (num) { return typeof num === 'string'; });
    };
    ArrayManipulation.prototype.isPrime = function (num) {
        num = parseInt(num);
        for (var i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    };
    ArrayManipulation.prototype.arraySplit = function (myArray) {
        var _this = this;
        return myArray.filter(function (num) { return !isNaN(num) && _this.isPrime(num); });
    };
    ArrayManipulation.prototype.arraySort = function (myArray) {
        var tempArr = __spreadArray([], myArray, true);
        tempArr.sort();
        return tempArr;
    };
    ArrayManipulation.prototype.arrayReplace = function (myArray) {
        return myArray.map(function (num) { return num = num % 3 == 0 ? 5 : num; });
    };
    return ArrayManipulation;
}());
exports.ArrayManipulation = ArrayManipulation;
var myArray = [34, 45, 60, 23, 13, 25, 70, 'Value', "string", "16", '17', '50'];
var array = new ArrayManipulation();
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
