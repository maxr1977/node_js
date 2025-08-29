// Задание 1. Объединение и пересечение типов
type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;
const adminUserObject: AdminUser = {
    name: "Alice",
    permissions: ["read", "write"],
    email: "alice@example.com"
};
function getAdminUserInfo(adminUser: AdminUser): void {
    console.log(`Name: ${adminUser.name}`);
    console.log(`Email: ${adminUser.email}`);
    console.log(`Permissions: ${adminUser.permissions.join(", ")}`);
}

console.log('\nЗадание 1')
getAdminUserInfo(adminUserObject);

// Задание 2. Вложенные объекты и опциональные поля
type Engine = {
  type: string;
  horsepower: number;
};
type Car = {
  make: string;
  model: string;
  year?: number;
  engine: Engine;
};
const car1: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    engine: {
        type: "V6",
        horsepower: 301
    }
};
const car2: Car = {
    make: "Honda",
    model: "Civic",
    engine: {
        type: "I4",
        horsepower: 158
    }
};
function getCarInfo(car: Car): void {
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    if (car.year) {
        console.log(`Year: ${car.year}`);
    }
    console.log(`Engine Type: ${car.engine.type}`);
    console.log(`Horsepower: ${car.engine.horsepower}`);
}
console.log('\nЗадание 2')
getCarInfo(car1);
console.log('---');
getCarInfo(car2);

// Задание 3. Интерфейс для функции с объектом
interface Product {
  name: string;
  price: number;
}
interface CalculateDiscount {
  (product: Product, discount: number): number;
}
const calculateDiscount: CalculateDiscount = (product, discount) => {
    return product.price - (product.price * discount / 100);
}
const product: Product = { name: "Laptop", price: 1000 };
const discount = 15;
const discountedPrice = calculateDiscount(product, discount);
console.log('\nЗадание 3')
console.log(`Original Price: $${product.price}`);
console.log(`Discounted Price: $${discountedPrice}`);

// Задание 4. Массив объектов и функции
interface Employee {
  name: string;
  salary: number;
}
const employees: Employee[] = [
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 60000 },
    { name: "Doe", salary: 55000 }
];
function calculateTotalSalary(employees: Employee[]): number [] {
    return employees.map(emp => emp.salary);
}
const totalSalaries = calculateTotalSalary(employees);
console.log('\nЗадание 4')
console.log('Salary array:',totalSalaries);

// Задание 5. Наследование интерфейсов и работа с объектами
interface Person {
    firstName: string;
    lastName: string;
}
interface Student extends Person {
    grade: number;
}
const student: Student = {
    firstName: "Emily",
    lastName: "Clark",
    grade: 10
};
function getStudentInfo(student: Student): void {
    console.log(`Name: ${student.firstName} ${student.lastName}`);
    console.log(`Grade: ${student.grade}`);
}
console.log('\nЗадание 5')
getStudentInfo(student);

// Задание 6. Интерфейс для функции с несколькими параметрами
interface StringConcatenator {
    (str1: string, str2: string): string;
}
const concftStrings: StringConcatenator = (str1, str2) => {
    return str1 + str2;
};
const result = concftStrings("Hello, ", "World!");
console.log('\nЗадание 6')
console.log(result);