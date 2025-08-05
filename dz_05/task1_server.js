const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const authHeader = req.headers['authorization'];

    res.setHeader('Content-Type', 'application/json');

    if (!authHeader) {
        res.statusCode = 401;
        res.end('Unauthorized');
    } else {
        res.statusCode = 200;
        res.end('Authorization header received');  
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
