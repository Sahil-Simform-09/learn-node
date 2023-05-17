# http module
- The http module in Node.js is a built-in module that provides functionality for creating HTTP servers and clients. It allows you to handle HTTP requests and responses, making it possible to build web servers and interact with other HTTP resources.

## methods & events
### methods
1. ``createServer()`` method takes a callback function that is called for each incoming HTTP request. Inside the callback, you can handle the request, process the data, and send back an appropriate response.
2. ``res.write()`` method is used to send data in the response body to the client. It is typically used in conjunction with the res object, which represents the HTTP response being sent from the server.
3. ``res.end()`` to indicate the end of the response.
4. ``Buffer.concat()`` method is used to concatenate multiple Buffer objects into a single Buffer. It allows you to combine buffers and create a new Buffer containing the concatenated data.

### events
1. ``data`` event is triggered whenever data is received from the server. You attach a listener to the data event using the on method. The callback function receives the data as a parameter.
2. ``end`` event is triggered when the server gracefully closes the connection. You attach a listener to the end event using the ``on()`` method.