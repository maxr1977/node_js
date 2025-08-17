import express from 'express';
import { connectToDatabase, getDb } from './db/index.js';
import { ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.post('/products', async (req, res) => {
    try {
        const db = getDb();
        const { name, price, description } = req.body;

        if (!name || !price) {
            return res.status(400).json({ error: 'Имя и цена обязательны' });
        }

        const result = await db.collection('products').insertOne({ name, price, description });
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: 'Не удалось создать продукт' });
    }
});

app.get('/products', async (req, res) => {
    try {
        const db = getDb();
        const products = await db.collection('products').find().toArray();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: 'Не удалось получить продукты' });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const db = getDb();
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Неверный формат ID' });
        }

        const product = await db.collection('products').findOne({ _id: new ObjectId(id) });

        if (!product) {
            return res.status(404).json({ error: 'Продукт не найден' });
        }

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: 'Не удалось получить продукт' });
    }
});

app.put('/products/:id', async (req, res) => {
    try {
        const db = getDb();
        const { id } = req.params;
        const { name, price, description } = req.body;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Неверный формат ID' });
        }

        const result = await db.collection('products').updateOne(
            { _id: new ObjectId(id) },
            { $set: { name, price, description } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Продукт не найден' });
        }

        res.status(200).json({ message: 'Продукт успешно обновлен' });
    } catch (err) {
        res.status(500).json({ error: 'Не удалось обновить продукт' });
    }
});

app.delete('/products/:id', async (req, res) => {
    try {
        const db = getDb();
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Неверный формат ID' });
        }

        const result = await db.collection('products').deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Продукт не найден' });
        }

        res.status(200).json({ message: 'Продукт успешно удален' });
    } catch (err) {
        res.status(500).json({ error: 'Не удалось удалить продукт' });
    }
});

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Не удалось запустить сервер из-за ошибки подключения к MongoDB', err);
  });