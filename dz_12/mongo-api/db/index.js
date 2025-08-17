import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.MONGO_URL;
const client = new MongoClient(URL);

let dbConnection;

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Успешное подключение к MongoDB');
    dbConnection = client.db();
  } catch (err) {
    console.error('Не удалось подключиться к MongoDB', err);
    process.exit(1);
  }
}

function getDb() {
  if (!dbConnection) {
    throw new Error('База данных не подключена!');
  }
  return dbConnection;
}

export { connectToDatabase, getDb };