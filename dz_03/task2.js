const fs = require('fs');

const fileName = 'info.txt';
const fileContent = 'Node.js is awesome!';

fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`File ${fileName} has been created with content: "${fileContent}"`);
  }
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
        console.error('Error reading file:', err);
        } else {
        console.log(`Content of ${fileName}: ${data}`);
        }
    }); 
});

