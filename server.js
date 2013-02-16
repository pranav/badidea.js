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
    fs.readFile('./scripts.js', function(err, content){
      var options = (content + "").split("\n");
      var i = Math.floor((Math.random()*options.length));
      res.end(options[i]);
    });

  }
  else {
    res.writeHead(404, { 'Content-Type' : 'text/html' });
    res.end('404. I don\'t have cookies for you');
  }
}).listen(80, '0.0.0.0');

console.log("Running server");
