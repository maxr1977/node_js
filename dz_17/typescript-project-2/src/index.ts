// Задание 1. Типизация функции с несколькими параметрами
function calculateTotal(price: number, quantity: number, discount: number = 0): number {
    const total = price * quantity;
    const discountedTotal = total - (total * discount / 100);
    return discountedTotal;
}
const total1 = calculateTotal(100, 2); 
const total2 = calculateTotal(100, 2, 10); 
console.log('\nЗадание 1')
console.log(`Total without discount: ${total1}`);
console.log(`Total with discount: ${total2}`);

// Задание 2. Использование Union типов
let id: string | number;
function displayId(id: string | number): void {
    console.log(`ID: ${id}`);
    if (typeof id === 'string') {
        console.log(`ID in uppercase: ${id.toUpperCase()}`);
    } else {
        console.log(`ID multiplied by 10: ${id * 10}`);
    }
}
console.log('\nЗадание 2')
id = "abc123";
displayId(id);
id = 456;
displayId(id);

// Задание 3. Объявление и типизация массивов объектов
interface Order {
    orderId: string;
    amount: number;
    status: 'pending' | 'shipped' | 'delivered';
}
const orders: Order[] = [
    { orderId: 'A001', amount: 250, status: 'pending' },
    { orderId: 'A002', amount: 450, status: 'shipped' },
    { orderId: 'A003', amount: 300, status: 'delivered' },
    { orderId: 'A004', amount: 150, status: 'shipped' },
    { orderId: 'A005', amount: 500, status: 'pending' },
    { orderId: 'A006', amount: 700, status: 'delivered' }
];
function filterOrdersByStatus(orders: Order[], status: 'pending' | 'shipped' | 'delivered'): Order[] {
    return orders.filter(order => order.status === status);
}
const shippedOrders = filterOrdersByStatus(orders, 'shipped');
console.log('\nЗадание 3')
console.log('Shipped Orders:', shippedOrders);

// Задание 4. Работа с кортежами и объектами
let inventory: { [key: string]: number } = {
    "Смартфон": 25,
    "Планшет": 15
};

function updateStock(
  inventory: { [key: string]: number },
  productInfo: [string, number, number] 
): { [key: string]: number } {
  const [name, , stock] = productInfo;

  if (inventory[name] !== undefined) {
    inventory[name] += stock; 
  } else {
    inventory[name] = stock; 
  }
  return inventory;
}
console.log('\nЗадание 4')
console.log('\nНачальное состояние склада:');
console.log(inventory);
let product1: [string, number, number] = ["Ноутбук", 75000, 5];
inventory = updateStock(inventory, product1);
console.log(`\nДобавлен новый товар: ${product1[0]}`);
console.log(inventory);
let product2: [string, number, number] = ["Смартфон", 35000, 10];
inventory = updateStock(inventory, product2);
console.log(`\nОбновлено количество товара: ${product2[0]}`);
console.log(inventory);
