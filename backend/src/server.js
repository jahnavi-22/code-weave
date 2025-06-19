const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const { Server } = require('socket.io');
const ACTIONS = require('./actions');

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Socket.io setup
const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

// Store connected users
const userSocketMap = {};

// Helper function to get connected users in a room
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

// Socket connection handling
io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    // Handle join event
    socket.on(ACTIONS.JOIN, ({ roomID, username }) => {
        userSocketMap[socket.id] = username;
        socket.join(roomID);
        const users = getConnectedUsers(roomID);
        console.log(`User ${username} joined room ${roomID}`);

        // Emit JOINED event to the user who just joined (for user list update)
        socket.emit(ACTIONS.JOINED, {
            users,
            username,
            socketID: socket.id,
        });

        // Emit USER_JOINED event to other users in the room (for notification only)
        socket.broadcast.to(roomID).emit(ACTIONS.USER_JOINED, {
            username,
            socketID: socket.id,
        });

        // Also emit JOINED event to other users to update their user list
        socket.broadcast.to(roomID).emit(ACTIONS.JOINED, {
            users,
            username,
            socketID: socket.id,
        });
    });

    // Handle code change event
    socket.on(ACTIONS.CODE_CHANGE, ({ roomID, code }) => {
        socket.in(roomID).emit(ACTIONS.CODE_CHANGE, { code });
    });

    // Handle code sync event
    socket.on(ACTIONS.SYNC_CODE, ({ code, socketID }) => {
        io.to(socketID).emit(ACTIONS.CODE_CHANGE, { code });
    });

    // Handle language change event
    socket.on(ACTIONS.LANGUAGE_CHANGE, ({ roomID, language }) => {
        socket.in(roomID).emit(ACTIONS.LANGUAGE_CHANGE, { language });
    });

    // Handle output change event
    socket.on(ACTIONS.OUTPUT_CHANGE, ({ output, roomID }) => {
        socket.to(roomID).emit(ACTIONS.OUTPUT_CHANGE, { output });
    });

    // Handle disconnect event
    socket.on('disconnect', () => {
        const rooms = [...socket.rooms];
        rooms.forEach((roomID) => {
            socket.in(roomID).emit(ACTIONS.DISCONNECTED, {
                socketID: socket.id,
                username: userSocketMap[socket.id],
            });
        });
        delete userSocketMap[socket.id];
        console.log("Socket disconnected:", socket.id);
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve React app for production
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Health check available at http://localhost:${PORT}/health`);
}); 