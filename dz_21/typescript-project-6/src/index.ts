// Задание 1. Абстрактный класс Animal
abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bark");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow");
    }
}

console.log('\nЗадание 1')
const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach(animal => {
    animal.makeSound();
});

// Задание 2. Абстрактный класс Shape с цветом
abstract class Shape {
    abstract name: string;
    abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
    abstract color: string;
}

class ColoredCircle extends ColoredShape {
    name: string = "Circle";
    color: string;
    radius: number;

    constructor(color: string, radius: number) {
        super();
        this.color = color;
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class ColoredRectangle extends ColoredShape {
    name: string = "Rectangle";
    color: string;
    width: number;
    height: number;

    constructor(color: string, width: number, height: number) {
        super();
        this.color = color;
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}

console.log('\nЗадание 2')
const shapes: ColoredShape[] = [
    new ColoredCircle("Red", 5),
    new ColoredRectangle("Blue", 4, 6)
];
shapes.forEach(shape => {
    console.log(`${shape.name} (Color: ${shape.color}) - Area: ${shape.calculateArea()}`);
});

// Задание 3. Абстрактный класс Appliance
abstract class Appliance {
    abstract turnOn(): void;
    abstract turnOff(): void;
}

class WashingMachine extends Appliance {
    turnOn(): void {
        console.log("Washing Machine is now ON");
    }
    turnOff(): void {
        console.log("Washing Machine is now OFF");
    }
}

class Refrigerator extends Appliance {
    turnOn(): void {
        console.log("Refrigerator is now ON");
    }
    turnOff(): void {
        console.log("Refrigerator is now OFF");
    }
}

console.log('\nЗадание 3')
const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];
appliances.forEach(appliance => {
    appliance.turnOn();
    appliance.turnOff();
});

// Задание 4. Абстрактный класс Account
abstract class Account {
    protected balance: number;

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
    }

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;

    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends Account {
   private interestRate: number;

    constructor(initialBalance: number, interestRate: number) {
        super(initialBalance);
        this.interestRate = interestRate;
    }
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        }
    }
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }
    applyInterest(): void {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log(`Applied interest of ${interest}. New balance: ${this.balance}`);
    }
}
    
class CheckingAccount extends Account {
    private transactionFee: number;

    constructor(initialBalance: number, transactionFee: number) {
        super(initialBalance);
        this.transactionFee = transactionFee;
    }

    deposit(amount: number): void {
        if (amount >0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        }
    }

    withdraw(amount: number): void {
        const totalAmount = amount + this.transactionFee;
        if (amount > 0 && totalAmount <= this.balance) {
            this.balance -= totalAmount;
            console.log(`Withdrew ${amount} with fee ${this.transactionFee}. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }
}

console.log('\nЗадание 4')
console.log("--- Savings Account ---");
const savings = new SavingsAccount(1000, 0.05);
savings.deposit(500);
savings.withdraw(200);
savings.applyInterest();
console.log(`Final Savings Account Balance: ${savings.getBalance()}`);
console.log("\n--- Checking Account ---");
const checking = new CheckingAccount(1000, 2);
checking.deposit(500);
checking.withdraw(200);
checking.withdraw(1300);
console.log(`Final Checking Account Balance: ${checking.getBalance()}`);

// Задание 5. Абстрактный класс Media
abstract class Media {
    abstract play(): void;
}

class Audio extends Media {
    play(): void {
        console.log("Playing audio");
    }
}
class Video extends Media {
    play(): void {
        console.log("Playing video");
    }
}

const playList: Media[] = [new Audio(), new Video(), new Audio(), new Video()];
console.log('\nЗадание 5')
playList.forEach(media => {
    media.play();
});