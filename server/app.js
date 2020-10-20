const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, '../', 'public', 'index.html'), (err, data) => {
            if (err) throw err; 
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data, 'utf8');
        });        
    } else if (req.url === '/api/users') {
        const data = {
            hello: 'what',
            up: 'cous'
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } else {
        const filename = path.extname(req.url) === '' ? 'index.html' : req.url;
        const filePath = path.join(__dirname, '../', 'public', filename);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    fs.readFile(path.join(__dirname, '../', 'public', '404.html'), (err, data404) => {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(data404);
                    });
                } else {
                    res.writeHead(500);
                    res.end(`<h1>Error ${err.code}</h1>`);
                    
                }
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data, 'utf8');
        });
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});