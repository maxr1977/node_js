// Задание 1. Класс Animal и его наследник Dog
class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    sound(): void {
        console.log("The animal makes a sound");
    }
}
class Dog extends Animal {
    breed: string;
    constructor(name: string, species: string, breed: string) {
        super(name, species);
        this.breed = breed;
    }
    sound(): void {
        console.log("The dog barks");
    }
}
console.log('\nЗадание 1')
const myDog = new Dog("Buddy", "Canine", "Golden Retriever");
myDog.sound();
console.log(`My dog's name is ${myDog.name}, species is ${myDog.species}, breed is ${myDog.breed}`);

// Задание 2. Статическое свойство для учета всех книг
class Library {
   static totalBooks: number = 0;

   addBook(): void {
         Library.totalBooks++;
         console.log(`Book added. Total books: ${Library.totalBooks}`);
   }
}
console.log('\nЗадание 2')
const lib1 = new Library();
const lib2 = new Library();
const lib3 = new Library();

lib1.addBook();
lib2.addBook();
lib3.addBook();

// Задание 3. Переопределение конструктора в классе Vehicle
class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}

class Motorcycle extends Vehicle {
    type: string;

    constructor(make: string, model: string, type: string) {
        super(make, model);
        this.type = type;
    }
}
console.log('\nЗадание 3')
const myMotorcycle = new Motorcycle("Harley-Davidson", "Street 750", "Cruiser");
console.log(`My motorcycle is a ${myMotorcycle.type} made by ${myMotorcycle.make}, model ${myMotorcycle.model}`);
