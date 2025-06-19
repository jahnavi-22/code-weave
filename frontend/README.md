# CodeWeave Frontend

This is the frontend React application for CodeWeave, a real-time collaborative code editor.

## Features

- Real-time code collaboration
- Monaco Editor integration
- Multiple programming language support
- User presence indicators
- Room-based collaboration
- Code execution and output display

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp env.example .env
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Environment Variables

- `REACT_APP_BACKEND_URL` - Backend server URL (default: http://localhost:5000)

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── App.js         # Main app component
├── index.js       # Entry point
├── socket.js      # Socket.io configuration
├── API.js         # API utilities
└── Actions.js     # Socket event constants
```

## Technologies Used

- React 18
- Chakra UI
- Monaco Editor
- Socket.IO Client
- React Router
- React Hot Toast 