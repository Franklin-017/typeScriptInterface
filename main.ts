import { StringManipulationService, NumberManipulationService } from "./app-service";

export class StringManipulation implements StringManipulationService {

    constructor() {}

    public print(word: string): void {
        console.log("Upper Case",word.toUpperCase());
        console.log("Lower Case",word.toLowerCase());
        console.log("Spec Char",word[1]);
        console.log("Concat",word.concat(" Hello"))
        console.log("Substr",word.substr(0,3));
        console.log("Length",word.length);
    }
    public printWithSpace(sentence: string): void {
        console.log(sentence.split('').join(' '))
    }
    public findVowel(str: string): void {
        let vowel = ['a','e','i','o','u', 'A', 'E', 'I', 'O',"U"];
        const ans = [];
        for (let i=0; i<str.length; i++) {
            if(vowel.includes(str[i])) {
                ans.push(str[i]);
            }
        }
        console.log(ans);
    }
}

let array = new StringManipulation();

array.print("World!!");
array.printWithSpace('World');
array.findVowel('World');



export class NumbersManipulations implements NumberManipulationService {
    findPrime(num: number): void {
        for(let i=2;i<=num/2;i++) {
            if(num % i == 0) {
                console.log(num , ' is not a prime number!!')
                return;
            }
        }
        console.log(num , ' is a prime number!!')
    }
    findMagic(num: number): void {
        let tempNum = num;
        let sum =0;
        while(tempNum > 9) {
            while(tempNum > 0) {
                sum += tempNum % 10;
                tempNum = Math.floor(tempNum / 10);
            }
            tempNum = sum;
            sum = 0;
        }
        console.log(tempNum === 1 ? `${num} is a magic number` : `${num} is not a magic number`)
    }

}

let array1 = new NumbersManipulations();

array1.findPrime(10);
array1.findMagic(198);