var http = require('http');
var util = require('util');


//print request url
//http.createServer(function(req, res) {
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end(req.url);
//}).listen(4000);



//print request headers 
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.write(JSON.stringify(req.headers))    ;
  //res.write(req.headers);
  res.write('request headers');
  res.end(util.inspect(req.headers));
}).listen(8000);

//
var options = {
  host: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST'
};

/*
var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.write("data\n");
req.write("data\n");
req.end();
*/

/*
var options = { host:'www.google.com', path: '/' }; 

http.get(options,function(res) {
  res.on('data', function(d) {
  process.console.log(d.toString()); 
});
*/
