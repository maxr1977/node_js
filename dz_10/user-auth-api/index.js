import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
app.use(express.json());

let users = [
    {
        id: 1,
        username: 'admin',
        email: 'admin@example.com',
        password: await bcrypt.hash('admin123', 10),
        role: 'admin'
    },
    {
        id: 2,
        username: 'user',
        email: 'user@example.com',
        password: await bcrypt.hash('user123', 10),
        role: 'user'
    }
];

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: 'Доступ запрещен: недостаточно прав' });
        }
        next();
    };
};

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Неверные учетные данные' });
    }
});

app.put('/update-email', authenticateJWT, (req, res) => {
    const { newEmail } = req.body;
    const user = users.find(u => u.id === req.user.id);
    if (user) {
        user.email = newEmail;
        res.json({ message: 'Email успешно обновлен', user });
    } else {
        res.status(404).json({ message: 'Пользователь не найден' });
    }
});

app.delete('/delete-account', authenticateJWT, (req, res) => {
    const initialUserCount = users.length;
    users = users.filter(u => u.id !== req.user.id);
    if (users.length < initialUserCount) {
        res.json({ message: 'Аккаунт успешно удален' });
    } else {
        res.status(404).json({ message: 'Пользователь не найден' });
    }
});

app.put('/update-role', authenticateJWT, authorizeRole('admin'), (req, res) => {
    const { userId, newRole } = req.body;
    const user = users.find(u => u.id === userId);
    if (user) {
        user.role = newRole;
        res.json({ message: 'Роль пользователя успешно обновлена', user });
    } else {
        res.status(404).json({ message: 'Пользователь не найден' });
    }
});

app.post('/refresh-token', authenticateJWT, (req, res) => {
    const newToken = jwt.sign({ id: req.user.id, username: req.user.username, role: req.user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token: newToken });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен и работает на порту http://localhost:${PORT}`);
});