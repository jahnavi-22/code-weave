# CodeWeave Backend

This is the backend server for CodeWeave, a real-time collaborative code editor.

## Features

- Real-time code collaboration using Socket.IO
- Room-based user management
- Code synchronization between users
- Language switching support
- User presence tracking

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
npm run dev
```

4. For production:
```bash
npm start
```

## API Endpoints

- `GET /health` - Health check endpoint
- WebSocket events for real-time communication

## Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS (default: http://localhost:3000)

## Socket Events

- `join` - Join a room
- `joined` - User joined notification
- `code-change` - Code changes
- `language-change` - Language switching
- `disconnected` - User disconnect
- `sync-code` - Code synchronization
- `output-change` - Output changes 