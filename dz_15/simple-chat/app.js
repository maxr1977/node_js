import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());  
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('Пользователь подключился: ', socket.id);

  socket.on('message', (msg) => {
    console.log(`Сообщение от ${socket.id}: `, msg);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Пользователь отключился: ', socket.id);
  });
});

app.post('/create-user', (_, res) => {  
    res.send('Пользователь создан');  
}) ;

server.listen(PORT, () => {
  console.log(`Сервер запущен на порту http://localhost:${PORT}`);
});