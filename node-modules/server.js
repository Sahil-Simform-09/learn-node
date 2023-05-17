// tcp connection
const net = require('net');
const server = net.createServer( socket => { 
   console.log('client connected');
   
   socket.write('Hello World!');
   socket.on('end', function() {
      console.log('client disconnected');
   });
});

server.listen(8080, function() { 
   console.log('server is listening');
});
