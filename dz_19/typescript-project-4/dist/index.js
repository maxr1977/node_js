"use strict";
// Задание 1.
const sumEvenNumbers = (numbers) => {
    return numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
};
console.log('\nЗадание 1');
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
const isStringEmpty = (str) => {
    return str.length === 0;
};
console.log('\nЗадание 2');
console.log(isStringEmpty(""));
console.log(isStringEmpty("Hello"));
const areStringsEqual = (a, b) => {
    return a === b;
};
console.log('\nЗадание 3');
console.log(areStringsEqual("test", "test"));
console.log(areStringsEqual("test", "Test"));
console.log(areStringsEqual("hello", "world"));
// Задание 4.
function getLastElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[arr.length - 1];
}
console.log('\nЗадание 4');
console.log(getLastElement([1, 2, 3, 4]));
console.log(getLastElement(["a", "b", "c"]));
console.log(getLastElement([]));
// Задание 5.
function makeTriple(a, b, c) {
    return [a, b, c];
}
console.log('\nЗадание 5');
console.log(makeTriple(1, 2, 3));
console.log(makeTriple("a", "b", "c"));
console.log(makeTriple(true, false, true));
//# sourceMappingURL=index.js.map