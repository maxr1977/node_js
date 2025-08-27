// Задание 1. Функция приветствия
function greetUser(name: string): string {
    return `Привет, ${name}!`;
}
console.log('\nЗадание 1')
console.log(greetUser("Алиса"));

// Задание 2. Типизация функции с объектом в качестве параметра
interface Person {
  name: string;
  age: number;
  city: string;
}
function printPersonInfo(person: Person): string {
    return `Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`;
}
console.log('\nЗадание 2')
const person: Person = { name: "Боб", age: 30, city: " Берлин" };
console.log(printPersonInfo(person));

// Задание 3. Простая типизация для числового параметра
function squareNumber(num: number): number {
    return num * num;
}
console.log('\nЗадание 3')
console.log(`Квадрат числа 5: ${squareNumber(5)}`);

// Задание 4. Типизация функции с boolean
function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log('\nЗадание 4')
console.log(`Число 4 четное? ${isEven(4)}`);
console.log(`Число 7 четное? ${isEven(7)}`);

// Задание 5. Создание интерфейса для объекта
interface Student {
  name: string;
  grade: number;
}
function printStudentInfo(student: Student): string {
    return `Студент: ${student.name}, Оценка: ${student.grade}`;
}
console.log('\nЗадание 5')
const student: Student = { name: "Чарли", grade: 85 };
console.log(printStudentInfo(student));

// Задание 6. Функция с типом void
function logMessage(message: string): void {
    console.log(`Сообщение: ${message}`);
}
console.log('\nЗадание 6')
logMessage("Это тестовое сообщение.");


