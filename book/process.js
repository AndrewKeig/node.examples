
/*
var exec = require('child_process').exec;

exec('cat *.js wc -l', function(err, stdout, stderr) {
  if (err) {
    console.log('child process exited with error code ' + err.code);
    return;
  }
console.log(stdout);
});
*/

var spawn = require('child_process').spawn;
  var child = spawn('tail', ['-f', 'names.txt']);
  child.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
  child.kill('SIGKILL');
});

