import { io } from  "socket.io-client";             //syntax to import module


export const initSocket = async() => {
    const options = {
        transports: ["websocket"],
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000
    };

    return io("http://localhost:3000", options);            //backend url of react app
}