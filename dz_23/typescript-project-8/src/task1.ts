// Задание 1. Обработка цепочки промисов с async/await
function taskOne(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 1 completed"), 1000);
    });
}

function taskTwo(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 2 completed"), 2000);
    });
}

async function executeTasks() {
    console.log('\nЗадание 1')
    const result1 = await taskOne();
    console.log(result1);
    const result2 = await taskTwo();
    console.log(result2);
}

executeTasks();

