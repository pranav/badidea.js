var http = require('http');
var fs = require('fs');
var i = 0;

http.createServer(function(req, res) {

  // Route for '/'
  if(req.url == '/'){
    // Open file index.html
    fs.readFile('./index.html', function(error, content){
      if(error) {
        res.writeHead(500);
        res.end();
      } else {
        // Send index.html to the client
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(content, 'utf-8');
      }
    });
  }

  // Route for /getcat
  else if(req.url == "/getcat"){
    // Read scripts.js
    res.writeHead(200, { 'Content-Type' : 'text/javascript' });
    fs.readFile('./scripts.js', function(err, content){
      // Pick a random line from scripts.js
      var options = (content + "").split("\n");
      var i = Math.floor((Math.random()*options.length));
      // And send that line back to the client
      res.end(options[i]);
    });

  }

  // 404 Error
  else {
    res.writeHead(404, { 'Content-Type' : 'text/html' });
    res.end('404. I don\'t have cookies for you');
  }
}).listen(80, '0.0.0.0');

console.log("Running server");
