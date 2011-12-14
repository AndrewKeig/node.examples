var http = require('http');
var fs = require('fs');
var util = require('util');

console.log('starting server on http://127.0.0.1:8001');

http.createServer(function(req, res) {
  console.log('reading file stream');
  var rs = fs.createReadStream('names.txt');
  console.log('pumping file content');
  util.pump(rs, res, function() {
    res.end();
  });
}).listen(8001);



/*
http.createServer(function(req, res) {
  var rs = fs.createReadStream('names.txt');
  rs.pipe(res);
}).listen(4000);
*/
