//Create a web server that can read from files in the server
// and serve them to the client

const http = require('http');
const fs = require('fs');
const path = require('path');

// create a server object
const server = http.createServer(function (req, res) {
    //console.log('Request was made: ' + req.url);
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(path.join(__dirname, 'contact.html')).pipe(res);
    } else if (req.url === '/api/comments') {
        let comments = [
            { name: 'John', comment: 'Hello World' },
            { name: 'Jane', comment: 'Hi, there!' },
            { name: 'Bob', comment: 'Aloha!' }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comments));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(path.join(__dirname, '404.html')).pipe(res);
    }
});

// listen for any incoming requests
server.listen(3000, '   ;	', () => {
    console.log('Server is running on port 3000');
});






