import express from 'express';
import sequelize from './config/db.js';
import Book from './models/book.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении списка книг', error });
  }
});

app.get('/books/:id', async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findByPk(bookId); 

    if (!book) {
      return res.status(404).json({ message: 'Книга не найдена' });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении книги', error });
  }
});

app.post('/books', async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const newBook = await Book.create({ title, author, year });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при создании книги', error });
  }
});

app.put('/books/:id', async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ message: 'Книга не найдена' });
    }

    const { title, author, year } = req.body;
    await book.update({ title, author, year });

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при обновлении книги', error });
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ message: 'Книга не найдена' });
    }

    await book.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при удалении книги', error });
  }
});

async function startServer() {
  try {
    await sequelize.sync(); 
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Не удалось запустить сервер:', error);
  }
}

startServer();