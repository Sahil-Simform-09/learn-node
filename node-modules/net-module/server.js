const net = require("net");

const server = net.createServer();

server.listen(80, () => {
    console.log("server is running on port 8080");
});