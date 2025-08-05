const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    if (req.method === 'PUT') {
        res.end('PUT request received');
    } else if (req.method === 'DELETE') {
        res.end('DELETE request received');
    } else {
        res.end('Unsupported request method');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
