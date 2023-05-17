# net module
- The net module in Node.js is a built-in module that provides functionality for creating TCP servers and clients. It allows you to establish low-level network connections and communicate using the TCP protocol.

- With the net module, you can create TCP servers that listen for incoming client connections and handle the communication between the server and clients. You can also create TCP clients that connect to TCP servers and exchange data with them.

- The net module exposes classes and methods for creating and managing TCP sockets. It provides event-driven programming, allowing you to handle events such as client connections, data reception, disconnection, and errors.
## methods & events
### methods
1. ``createServer()`` method provided by the net module to create a TCP server. The method takes a callback function as an argument, which will be invoked whenever a client connects to the server.
2. ``socket.write()`` method to send the string to the connected client.
3. ``listen()`` method is called on the server object to start the server and make it listen on a specific port. the server starts successfully, the callback function is executed.
4. ``connect()`` method takes an object with the port property specifying the port to connect to. The second argument is a callback function that is executed when the client successfully establishes a connection to the server.
### events
1. ``data`` event is triggered whenever data is received from the server. You attach a listener to the data event using the on method. The callback function receives the data as a parameter.
2. ``end`` event is triggered when the server gracefully closes the connection. You attach a listener to the end event using the ``on()`` method.