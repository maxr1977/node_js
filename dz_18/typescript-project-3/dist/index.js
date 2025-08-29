"use strict";
const adminUserObject = {
    name: "Alice",
    permissions: ["read", "write"],
    email: "alice@example.com"
};
function getAdminUserInfo(adminUser) {
    console.log(`Name: ${adminUser.name}`);
    console.log(`Email: ${adminUser.email}`);
    console.log(`Permissions: ${adminUser.permissions.join(", ")}`);
}
console.log('\nЗадание 1');
getAdminUserInfo(adminUserObject);
const car1 = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    engine: {
        type: "V6",
        horsepower: 301
    }
};
const car2 = {
    make: "Honda",
    model: "Civic",
    engine: {
        type: "I4",
        horsepower: 158
    }
};
function getCarInfo(car) {
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    if (car.year) {
        console.log(`Year: ${car.year}`);
    }
    console.log(`Engine Type: ${car.engine.type}`);
    console.log(`Horsepower: ${car.engine.horsepower}`);
}
console.log('\nЗадание 2');
getCarInfo(car1);
console.log('---');
getCarInfo(car2);
const calculateDiscount = (product, discount) => {
    return product.price - (product.price * discount / 100);
};
const product = { name: "Laptop", price: 1000 };
const discount = 15;
const discountedPrice = calculateDiscount(product, discount);
console.log('\nЗадание 3');
console.log(`Original Price: $${product.price}`);
console.log(`Discounted Price: $${discountedPrice}`);
const employees = [
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 60000 },
    { name: "Doe", salary: 55000 }
];
function calculateTotalSalary(employees) {
    return employees.map(emp => emp.salary);
}
const totalSalaries = calculateTotalSalary(employees);
console.log('\nЗадание 4');
console.log('Salary array:', totalSalaries);
const student = {
    firstName: "Emily",
    lastName: "Clark",
    grade: 10
};
function getStudentInfo(student) {
    console.log(`Name: ${student.firstName} ${student.lastName}`);
    console.log(`Grade: ${student.grade}`);
}
console.log('\nЗадание 5');
getStudentInfo(student);
const concftStrings = (str1, str2) => {
    return str1 + str2;
};
const result = concftStrings("Hello, ", "World!");
console.log('\nЗадание 6');
console.log(result);
//# sourceMappingURL=index.js.map