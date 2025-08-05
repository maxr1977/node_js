import pool from './db.js';

const setupDatabase = async () => {
  try {
    const connection = await pool.getConnection();
    
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
  );
  `;
    await connection.query(createTableQuery);
    connection.release();
    await pool.end();
  } catch (error) {
    console.error('Error setting up the database:', error);
    process.exit(1);
    }
};

setupDatabase();
