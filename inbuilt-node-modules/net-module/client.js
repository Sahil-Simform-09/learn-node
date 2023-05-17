// tcp connection
const net = require('net');
const client = net.connect({port: 8080}, () => {
   console.log('connected to server!');  
});

// attach a listener to the data event using the on method
client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});

client.on('end', function() { 
   console.log('disconnected from server');
});