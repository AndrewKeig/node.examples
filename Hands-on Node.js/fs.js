var fs = require('fs');

//read a stream without buffers
/*
var readStream = fs.createReadStream('/etc/passwd');

readStream.on('data', function(data) {
    console.log(data.toString());
  });

  readStream.on('end', function() {
  console.log('file ended');
});
*/

//read stream with buffer
fs.open('names.txt', 'r', function(err, fd) {
  if (err) { throw err }
    console.log('file found ');
    
  var readBuffer = new Buffer(1024),
  bufferOffset = 0,
  bufferLength = readBuffer.length,
  filePosition = 0;

  fs.read(fd, readBuffer,bufferOffset, bufferLength, filePosition, function(err, readBytes) {
    console.log('reading');
    
    if (err) { throw err; }
      console.log('just read ' + readBytes + ' bytes');

    if (readBytes > 0) {  
      console.log(readBuffer.slice(0, readBytes).toString());
    }
  });
});

/*
//print stats
fs.stat('/etc/passwd', function(err, stats) {
  if (err) {console.log(err.message); return; }
  console.log(stats.isDirectory());
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isBlockDevice());
  console.log(stats.isCharacterDevice());
  console.log(stats.isSymbolicLink());
  console.log(stats.isFIFO());
  console.log(stats.isSocket());
  console.log('this file is ' + stats.size + ' bytes long.');
});
*/
