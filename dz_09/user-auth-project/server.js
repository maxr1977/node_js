import express from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const users = [];

async function addAdmin() {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('adminpassword', salt);
    users.push({
        id: Date.now(),
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin',
        mustChangePassword: false,
    });
}
addAdmin();

const checkPasswordChangeRequired = (req, res, next) => {
    const { email } = req.body;
    const user = users.find(u => u.email === email);
    if (user && user.mustChangePassword) {
        return res.status(403).json({ message: 'Вам необходимо сменить пароль. Перейдите на /change-password.' });
    }
    next();
};

const isAdmin = (req, res, next) => {
    const { email } = req.body;
    const user = users.find(u => u.email === email);
    if (!user || user.role !== 'admin') {
        return res.status(403).json({ message: 'Доступ запрещен. Требуются права администратора.' });
    }
    next();
};

app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            return res.status(409).json({ message: 'Пользователь с таким email уже существует.' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = {
            id: Date.now(),
            email,
            password: hashedPassword,
            role: 'user',
            mustChangePassword: false,
        };
        users.push(newUser);
        console.log('Пользователи в системе:', users);
        res.status(201).json({ message: 'Пользователь успешно зарегистрирован.', userId: newUser.id });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка на сервере.' });
    }
});

app.post('/profile', checkPasswordChangeRequired, (req, res) => {
    const { email } = req.body;
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден.' });
    }
    res.json({ message: `Добро пожаловать в профиль, ${user.email}!` });
});

app.post('/change-password', async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден.' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashedPassword;
        user.mustChangePassword = false;
        console.log('Пользователь обновил пароль:', user);
        res.status(200).json({ message: 'Пароль успешно изменен.' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка на сервере.' });
    }
});

app.post('/delete-account', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userIndex = users.findIndex(u => u.email === email);
        if (userIndex === -1) {
            return res.status(404).json({ message: 'Пользователь не найден.' });
        }
        const user = users[userIndex];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Неверный пароль.' });
        }
        users.splice(userIndex, 1);
        console.log('Пользователь удален:', email);
        console.log('Оставшиеся пользователи:', users);
        res.status(200).json({ message: 'Аккаунт успешно удален.' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка на сервере.' });
    }
});

app.get('/admin/dashboard', isAdmin, (req, res) => {
    res.json({ message: 'Добро пожаловать в панель администратора!', users });
});

app.post('/change-email', async (req, res) => {
    try {
        const { currentEmail, password, newEmail } = req.body;
        const user = users.find(u => u.email === currentEmail);
        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Неверный пароль.' });
        }
        const emailExists = users.some(u => u.email === newEmail);
        if (emailExists) {
            return res.status(409).json({ message: 'Этот email уже используется.' });
        }
        user.email = newEmail;
        console.log('Пользователь сменил email:', user);
        res.status(200).json({ message: 'Email успешно изменен.' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка на сервере.' });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен и работает на порту http://localhost:${PORT}`);
});