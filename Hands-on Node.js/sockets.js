require('net').createServer(function(socket) {
  socket.on('data', function(data) {
  socket.write('Some data');
  });

  socket.on('end', function(data) {
  socket.write('Some end');
  });

  socket.write('Some string');
}).listen(5001);

