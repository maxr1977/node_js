const http = require('http');
const fs = require('fs');

const PORT = 3000;
const LOG_FILE = 'errors.log';

const server = http.createServer((req, res) => {
  try {
    throw new Error('Simulated error for testing');
  } catch (error) {
    console.error('Error occurred:', error.message);

    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - Error: ${error.message}\nStack: ${error.stack}\n\n`;

    fs.appendFile(LOG_FILE, logMessage, (err) => {
      if (err) {
        console.error('Failed to write to log file:', err.message);
      } 
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Internal Server Error');
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
