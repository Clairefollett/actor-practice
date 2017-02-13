const http = require('http');
const app = require('express');

const server = http.createServer(app);
const port = 3000 || process.env.PORT;

server.listen(port, () => {
    console.log('server running', server.address());
})