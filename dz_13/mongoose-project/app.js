import express from 'express';
import connectToDatabase from './config/db.js';
import dotenv from 'dotenv';
import Publisher from './models/Publisher.js';
import Magazine from './models/Magazine.js';
import Tag from './models/Tag.js';
import Article from './models/Article.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(PORT, async () => {
    try {
        await connectToDatabase();
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (error) {
        console.error('Failed to start server:', error);
    } 
});