const fs = require('fs');
const path = require('path');

function logMessage(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;

  fs.appendFile(path.join(__dirname, 'log.txt'), logEntry, (err) => {
    if (err) {
      console.error('Ошибка при записи лога:', err);
    } else {
      console.log('Лог записан:', message);
    }
  });
}

module.exports = { logMessage };
