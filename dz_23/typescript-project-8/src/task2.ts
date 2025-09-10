// Задание 2. Асинхронная обработка данных из массива
function processString(str: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(str.toUpperCase()), 1000);
    });
}
 
async function processArray(strings: string[]) {
    
    const promises = strings.map(processString);
    const results = await Promise.all(promises);
    console.log(results);
}
console.log('\nЗадание 2')
processArray(["apple", "banana", "cherry"]);
processArray(["dog", "elephant", "frog"]);