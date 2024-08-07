const { createServer } = require('node:http');

const hostname = '127.0.0.2';
const port = 4000;

// tao 1 may chu moi
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('xin chao the gioi, toi la nguoi dep trai top1 ');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
