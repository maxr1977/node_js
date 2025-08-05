import express from 'express';
import pool from './db.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({success: true, message: 'Hello, World!'});
});

app.get('/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products');
    res.status(200).json(rows);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({success: false, message: 'Internal Server Error'});
  }
});

app.post('/', (req, res) => {
    const {body} = req;
    if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({success: false, message: 'No data provided'});
    }
    res.json({success: true, message: 'Data received', data: body});
});

app.post('/products', async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({success: false, message: 'Name and price are required'});
    }
    const sql = 'INSERT INTO products (name, price) VALUES (?, ?)';
    const [result] = await pool.query(sql, [name, price]);

    res.status(201).json({
        success: true, 
        message: 'Product created', 
        productId: result.insertId
    });
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({success: false, message: 'Internal Server Error'});
  }
});
 
app.use((req, res, next) => {
    res.status(404).json({success: false, message: 'Not Found'});
});

app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({success: false, message: 'Internal Server Error'});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
