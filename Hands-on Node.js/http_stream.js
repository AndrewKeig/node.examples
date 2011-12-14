var spawn = require('child_process').spawn;
var http =  require('http');

http.createServer(function(req, res) {
  var child = spawn('tail', ['-f', 'a.log']);
  child.stdout.pipe(res);
  res.on('end', function() {
  child.kill();
});
}).listen(4000);

