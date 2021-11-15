import { StringManipulationService } from "./app-service";

export class ArrayManipulation implements StringManipulationService {

    constructor() {}

    public arrayFindMultiples(myArray: any): Array<Number> {
        return myArray.filter((num:any) => (typeof num !== 'string') && (num % 10 == 0 || num % 5 == 0));
    }
    public arraySeparate(myArray: any): Array<any> {
        return myArray.filter((num: any) => typeof num === 'string');
    }

    isPrime(num) {
        num = parseInt(num);
        for (let i=2; i<=num/2; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    public arraySplit(myArray: any): Array<Number> {
        return myArray.filter((num: any) => !isNaN(num) && this.isPrime(num));
    }
    public arraySort(myArray: any): Array<Number> {
        let tempArr = [...myArray];
        tempArr.sort();
        return tempArr;
    }
    public arrayReplace(myArray: any): Array<Number> {
        return myArray.map((num: any) => num = num % 3 == 0 ? 5 : num)
    }
}

let myArray: any[] = [34, 45, 60, 23, 13, 25, 70, 'Value', "string" ,"16", '17', '50'];
let array = new ArrayManipulation();

console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));



