const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const fileName = process.env.FILENAME;
const fileContent = 'Hello, World!';

if (!fileName) {
  console.error('FILE_NAME is not defined in the .env file');
  process.exit(1);
}

try {
  fs.writeFileSync(fileName, fileContent);
  console.log(`File ${fileName} created successfully with content`);

  const data = fs.readFileSync(fileName, 'utf8');
  console.log(`Content of ${fileName}:`, data);

} catch (error) {
  console.error(`Error writing to file ${fileName}:`, error);
}
