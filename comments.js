//Create a web server that can respond to requests for /hello and /goodbye
//with the appropriate text.
//Use the fs module to create a server that reads and serves up the index.html
//file from the previous exercise.
//Use the fs module to create a server that reads and serves up the index.html
//file from the previous exercise.
//Use the fs module to create a server that reads and serves up the index.html
//file from the previous exercise.
//Use the fs module to create a server that reads and serves up the index.html
//file from the previous exercise.
//Use the fs module to create a server that reads and serves up the index.html
//file from the previous exercise.
//Use the fs module to create a server that reads and serves up the index.html
//file from the previous exercise.
//Use the fs module to create a server that reads and serves up the index.html
//file from the previous exercise.
//Use the fs module to create a server that reads and serves up the index.html
//file from the previous exercise.
//Use the fs module to create a server that reads and serves up the index.html
//file from the previous exercise.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  if (request.url === '/hello') {
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    response.write('hello world');
    response.end();
  } else if (request.url === '/goodbye') {
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    response.write('goodbye world');
    response.end();
  } else if (request.url === '/index.html') {
    fs.readFile('index.html', function(err, data) {
      if (err) {
        response.writeHead(404);
        response.write('Not Found!');
      } else {
        response.writeHead(200, {
          'Content-Type': 'text/html'
        });
        response.write(data.toString());
      }
      response.end();
    });
  } else {
    response.writeHead(404);
    response.write('Not Found!');
    response.end();
  }
});

server.listen(3000);






