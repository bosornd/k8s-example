var http = require('http');

var os = require('os');
var host = os.hostname();

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Server running at ' + host);
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');