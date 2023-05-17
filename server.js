const http = require('http');

const server = http.createServer((req, res) => {
   const url = req.url;
   if(url === '/') {
      res.write('<html><body><form action="/submit-form" method="POST"><input type="text" id="name" name="name" required><button type="submit">Submit</button></form></body></html>');
      return res.end();
   } 
   if(url === '/submit-form') {
      const body = [];

      // "data" event done when new chunk from request is ready
      req.on('data', chunk => {
         body.push(chunk);
      });

      // "end" event done parsing the incoming data or the request
      let bufferData;
      req.on('end', () => { 
         bufferData = Buffer.concat(body).toString();
      });

      return res.end();
   }
   res.end();


});

server.listen(8080, () => console.log('server is listing on port 8080'));
