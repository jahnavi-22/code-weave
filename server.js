const express = require('express');
const app = express();
const http = require("http");
const path = require('path');
const { Server } = require('socket.io');            //Server class is being imported to create a new instance of the server
const ACTIONS = require('./src/Actions');

const server = http.createServer(app);
const io = new Server(server);

const userSocketMap = {};


function getConnectedUsers(roomID) {
    const uniqueUsernames = new Set();

    // Collect unique usernames
    Array.from(io.sockets.adapter.rooms.get(roomID) || []).forEach(socketID => {
        const username = userSocketMap[socketID];
        if (username) {
            uniqueUsernames.add(username);
        }
    });

    // Convert set to array of objects with socketID and username
    return Array.from(uniqueUsernames).map(username => {
        const socketID = Object.keys(userSocketMap).find(id => userSocketMap[id] === username);
        return { socketID, username };
    });
}

io.on("connection", (socket) => {
    console.log("Socket connected " + socket.id);
    

    //listen to join event emitted by client
    socket.on(ACTIONS.JOIN, ({roomID, username}) => {
        userSocketMap[socket.id] = username;
        socket.join(roomID);
        const users = getConnectedUsers(roomID);
        console.log(users);
    
        // Emit JOINED event only to the user who just joined
        socket.emit(ACTIONS.JOINED, {
            users,
            username,
            socketID: socket.id,
        });
    
        // Emit updated user list to all users in the room
        socket.broadcast.to(roomID).emit(ACTIONS.JOINED, {
            users,
            username,
            socketID: socket.id,
        });
    });
    

    socket.on(ACTIONS.CODE_CHANGE, ({roomID, code}) => {        //listen to code change event emitted by client
        socket.in(roomID).emit(ACTIONS.CODE_CHANGE,{code});     //send the code change event to all the users in the room
    })

    socket.on(ACTIONS.SYNC_CODE, ({code, socketID}) => {        //same as  above.
        io.to(socketID).emit(ACTIONS.CODE_CHANGE, {code});
    })

    socket.on(ACTIONS.LANGUAGE_CHANGE, ({roomID, language}) => {
        socket.in(roomID).emit(ACTIONS.LANGUAGE_CHANGE, {language});
    })

    socket.on(ACTIONS.OUTPUT_CHANGE, ({ output, roomID }) => {
        socket.to(roomID).emit(ACTIONS.OUTPUT_CHANGE, { output });
  });
  

    socket.on('disconnect', () => {
        const rooms = [...socket.rooms];
        rooms.forEach((roomID) => {
            socket.in(roomID).emit(ACTIONS.DISCONNECTED, {
                socketID: socket.id,
                username: userSocketMap[socket.id],
            });
        });
        delete userSocketMap[socket.id];            //delete the disconnected user's entry from the userSocketMap
        socket.leave();
    })
})

require('dotenv').config();

const port = process.env.PORT;

/*
 //-----------------------------DEPLOYMENT---------------------------------------

    app.use(express.static(path.join(__dirname, 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });



const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}


console.log(__dirname);
console.log(path.join(__dirname, 'build'));


 //----------------------------------------------------------------------
*/




server.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})