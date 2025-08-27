"use strict";
// Задание 1. Функция приветствия
function greetUser(name) {
    return `Привет, ${name}!`;
}
console.log('\nЗадание 1');
console.log(greetUser("Алиса"));
function printPersonInfo(person) {
    return `Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`;
}
console.log('\nЗадание 2');
const person = { name: "Боб", age: 30, city: " Берлин" };
console.log(printPersonInfo(person));
// Задание 3. Простая типизация для числового параметра
function squareNumber(num) {
    return num * num;
}
console.log('\nЗадание 3');
console.log(`Квадрат числа 5: ${squareNumber(5)}`);
// Задание 4. Типизация функции с boolean
function isEven(num) {
    return num % 2 === 0;
}
console.log('\nЗадание 4');
console.log(`Число 4 четное? ${isEven(4)}`);
console.log(`Число 7 четное? ${isEven(7)}`);
function printStudentInfo(student) {
    return `Студент: ${student.name}, Оценка: ${student.grade}`;
}
console.log('\nЗадание 5');
const student = { name: "Чарли", grade: 85 };
console.log(printStudentInfo(student));
// Задание 6. Функция с типом void
function logMessage(message) {
    console.log(`Сообщение: ${message}`);
}
console.log('\nЗадание 6');
logMessage("Это тестовое сообщение.");
//# sourceMappingURL=index.js.map