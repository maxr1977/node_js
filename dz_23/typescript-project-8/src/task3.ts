// Задание 3. Обработка ошибки в параллельных промисах
function successfulPromise1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1 resolved"), 1000);
  });
}

function failingPromise2(): Promise<string> {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Promise 2 rejected"), 1200);
  });
}

function successfulPromise3(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Promise 3 resolved"), 1500);
  });
}

async function runPromises() {
  try {
    const results = await Promise.all([
      successfulPromise1(),
      failingPromise2(),
      successfulPromise3(),
    ]);
    console.log("All promises resolved:", results);
  } catch (error) {
    console.error("One of the promises rejected:", error);
  }
}

console.log('\nЗадание 3')
runPromises();


