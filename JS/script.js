var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response) {
    if (request.method === 'GET' && request.url === '/page') {
        response.setHeader("Content-type", "text/html; charset=utf-8");
        fs.readFile('../index.html', 'utf-8', function(err, data) {
            response.write(data);
            response.end();
        });
    } else {
        response.setHeader("Content-type", "image/jpeg");
        response.statusCode = 404;
        fs.readFile('../err.jpeg', function(err, data) {
            response.write(data);
            response.end();
        });
    }
});

server.listen(8080);