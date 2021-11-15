"use strict";
exports.__esModule = true;
exports.NumbersManipulations = exports.StringManipulation = void 0;
var StringManipulation = /** @class */ (function () {
    function StringManipulation() {
    }
    StringManipulation.prototype.print = function (word) {
        console.log("Upper Case", word.toUpperCase());
        console.log("Lower Case", word.toLowerCase());
        console.log("Spec Char", word[1]);
        console.log("Concat", word.concat(" Hello"));
        console.log("Substr", word.substr(0, 3));
        console.log("Length", word.length);
    };
    StringManipulation.prototype.printWithSpace = function (sentence) {
        console.log(sentence.split('').join(' '));
    };
    StringManipulation.prototype.findVowel = function (str) {
        var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', "U"];
        var ans = [];
        for (var i = 0; i < str.length; i++) {
            if (vowel.includes(str[i])) {
                ans.push(str[i]);
            }
        }
        console.log(ans);
    };
    return StringManipulation;
}());
exports.StringManipulation = StringManipulation;
var array = new StringManipulation();
array.print("World!!");
array.printWithSpace('World');
array.findVowel('World');
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        for (var i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                console.log(num, ' is not a prime number!!');
                return;
            }
        }
        console.log(num, ' is a prime number!!');
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        var tempNum = num;
        var sum = 0;
        while (tempNum > 9) {
            while (tempNum > 0) {
                sum += tempNum % 10;
                tempNum = Math.floor(tempNum / 10);
            }
            tempNum = sum;
            sum = 0;
        }
        console.log(tempNum === 1 ? num + " is a magic number" : num + " is not a magic number");
    };
    return NumbersManipulations;
}());
exports.NumbersManipulations = NumbersManipulations;
var array1 = new NumbersManipulations();
array1.findPrime(10);
array1.findMagic(198);
