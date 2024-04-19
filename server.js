const express = require('express');
const app = express();
const http = require("http");
const { Server } = require('socket.io');            //Server class is being imported to create a new instance of the server


const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("Socket connected " + socket.id);
})

server.listen(3000, () =>{
    console.log("Server is running on port 3000");
})