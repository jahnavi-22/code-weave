const express = require('express');
const app = express();
const http = require("http");
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
    
    socket.on(ACTIONS.JOIN, ({roomID, username}) => {
        userSocketMap[socket.id] = username;
        socket.join(roomID);
        const users = getConnectedUsers(roomID);
        // console.log(users);
        users.forEach(({socketID}) => {                     //send the joined event to all the users in the room to notify them of the new user
            socket.in(socketID).emit(ACTIONS.JOINED, {          //sending to socketRef on editor page
                users,
                username,
                socketID: socket.id,
            })
        })
    });

    socket.on(ACTIONS.CODE_CHANGE, ({roomID, code}) => {
        socket.in(roomID).emit(ACTIONS.CODE_CHANGE,{code});
    })

    socket.on(ACTIONS.SYNC_CODE, ({code, socketID}) => {
        io.to(socketID).emit(ACTIONS.CODE_CHANGE, {code});
    })

    socket.on(ACTIONS.LANGUAGE_CHANGE, ({roomID, language}) => {
        socket.in(roomID).emit(ACTIONS.LANGUAGE_CHANGE, {language});
    })

    // socket.on(ACTIONS.RUN_CODE, async ({ language, sourceCode, roomID }) => {
    //     try {
    //       const { run: result } = await executeCode(language, sourceCode);
    //       io.to(roomID).emit(ACTIONS.OUTPUT_CHANGE, { output: result.output });
    //     } catch (error) {
    //       console.log(err);
    //     }
    //   });

    // socket.on(ACTIONS.RUN_CODE, async ({ language, sourceCode }) => {
    //     const { run: result } = await executeCode(language, sourceCode);
    //     io.to(roomID).emit(ACTIONS.OUTPUT_CHANGE, { output: result.output });
    // });


    socket.on('disconnecting', () => {
        const rooms = [...socket.rooms];
        rooms.forEach((roomID) => {
            socket.in(roomID).emit(ACTIONS.DISCONNECTED, {
                socketID: socket.id,
                username: userSocketMap[socket.id],
            });
        });
        delete userSocketMap[socket.id];
        socket.leave();
    })
})

server.listen(5000, () =>{
    console.log("Server is running on port 5000");
})