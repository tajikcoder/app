const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function(req,res){
    fs.readFile( "index.html", function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

}).listen(8089);

console.log('Server is lisening on port 8089');