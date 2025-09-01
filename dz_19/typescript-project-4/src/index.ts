// Задание 1.
const sumEvenNumbers = (numbers: number[]): number => {
    return numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
}
console.log('\nЗадание 1')
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); 

// Задание 2.
interface StringToBooleanFunction {
  (str: string): boolean;
}
const isStringEmpty: StringToBooleanFunction = (str) => {
    return str.length === 0;
}
console.log('\nЗадание 2')
console.log(isStringEmpty("")); 
console.log(isStringEmpty("Hello"));

// Задание 3.
type CompareStrings = (a: string, b: string) => boolean;
const areStringsEqual: CompareStrings = (a, b) => {
    return a === b;
}
console.log('\nЗадание 3')
console.log(areStringsEqual("test", "test")); 
console.log(areStringsEqual("test", "Test"));
console.log(areStringsEqual("hello", "world"));

// Задание 4.
function getLastElement<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[arr.length - 1];
}
console.log('\nЗадание 4')
console.log(getLastElement([1, 2, 3, 4])); 
console.log(getLastElement(["a", "b", "c"])); 
console.log(getLastElement([]));

// Задание 5.
function makeTriple<T>(a: T, b: T, c: T): T[] {
    return [a, b, c];
}
console.log('\nЗадание 5')
console.log(makeTriple(1, 2, 3)); 
console.log(makeTriple("a", "b", "c")); 
console.log(makeTriple(true, false, true));