// Задание 4. Асинхронная функция с динамическим временем выполнения
function createDelayedPromise(delay: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Promise resolved after ${delay} ms`);
    }, delay);
  });
}

async function runDelayedPromises(delays: number[]) {
    try {
        console.time("Total time");

        const delayPromises = delays.map(createDelayedPromise);
        const results = await Promise.all(delayPromises);
        console.log("All promises resolved:", results);
    } catch (error) {
        console.error("One of the promises rejected:", error);
    } finally {
        console.timeEnd("Total time");
    }
}

console.log('\nЗадание 4')
runDelayedPromises([500, 2000, 1500, 1000]);