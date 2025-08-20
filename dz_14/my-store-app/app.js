import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Category from './models/Category.js';
import Product from './models/Product.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Успешное подключение к MongoDB!');
  } catch (error) {
    console.error('Ошибка подключения к MongoDB:', error.message);
    process.exit(1);
  }
};

connectDB();

app.get('/', (req, res) => {
  res.send('Home page');
});

app.post('/categories', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Имя категории обязательно' });
    }
    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера', error: error.message });
  }
});

app.post('/products', async (req, res) => {
  try {
    const { name, price, categoryId } = req.body;
    if (!name || !price || !categoryId) {
      return res.status(400).json({ message: 'Все поля обязательны: name, price, categoryId' });
    }
    
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Категория не найдена' });
    }

    const newProduct = new Product({
      name,
      price,
      category: categoryId
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера', error: error.message });
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту http://localhost:${PORT}`);
});