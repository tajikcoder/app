const http = require('http');
const fs = require('fs');
const url = require('url');
const PORT = process.env.PORT || 5000

const server = http.createServer(function(req,res){
    fs.readFile( "index.html", function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

}).listen(PORT);

console.log('Server is lisening on port 8089');