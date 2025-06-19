import { io } from  "socket.io-client";             //syntax to import module
                                                    //io is a function that takes url and options as arguments


export const initSocket = async() => {              //read documentation of socket.io-client again
    const options = {
        transports: ["websocket"],
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000
    };

    // Use environment variable or default to localhost:5000
    const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
    return io(backendUrl, options);            //backend url of react app
}