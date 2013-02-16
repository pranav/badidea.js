var http = require('http');
var i = 0;
http.createServer(function(req, res) {
  console.log("Got connection " + i++);
  res.writeHead(200, {'Content-Type': 'text/javascript'});
  res.end('console.log("LOL");');
}).listen(8125, '0.0.0.0');

console.log("Running server");
