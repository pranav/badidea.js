var http = require('http');
var fs = require('fs');
var i = 0;

http.createServer(function(req, res) {
  if(req.url == '/'){
    fs.readFile('./index.html', function(error, content){
      if(error) {
        res.writeHead(500);
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(content, 'utf-8');
      }
    });
  }
  else if(req.url == "/server"){
    res.writeHead(200, { 'Content-Type' : 'text/javascript' });
    res.end('console.log("lolololol");');

  }
}).listen(80, '0.0.0.0');

console.log("Running server");
