<div align="center">
<img src="https://github.com/jahnavi-22/code-weave/blob/main/frontend/public/icon.png" style="width:30%; height:30%;" /> 
<hr/>
<table>
<tr>
<td align="center">
  
### Introducing CodeWeave - A real-time web based code editor
Revolutionize teamwork with CodeWeave, a real-time web based code editor and compiler for projects. Empower multiple developers to collaborate seamlessly on the same codebase, fostering instant feedback & unparalleled efficiency. 
<br/><br/>
</td>
</tr>
</table>
</div>

## 💡Project Idea
Traditional coding environments lack real-time collaboration features, causing challenges for multiple developers working on the same codebase. CodeWeave addresses this by providing a web-based code editor and compiler that enables seamless real-time collaboration among developers, streamlining the coding process and enhancing productivity in team-based software development projects.

## ⚙️Tech Stack
[![My Skills](https://skillicons.dev/icons?i=js,react,express,nodejs,html,css,npm,vscode)](https://skillicons.dev)

## 🏗️Project Structure

```
code-weave/
├── backend/           # Express.js + Socket.IO server
│   ├── src/
│   │   ├── server.js  # Main server file
│   │   └── actions.js # Socket event constants
│   ├── package.json
│   └── README.md
├── frontend/          # React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── README.md
├── package.json       # Root package.json with workspace scripts
└── README.md
```

## ✨Output Demo

### Home Page 
![Image 1](https://github.com/jahnavi-22/code-weave/blob/main/frontend/public/assets/Screenshot%202024-05-13%20225857.png)
![Image 2](https://github.com/jahnavi-22/code-weave/blob/main/frontend/public/assets/Screenshot%202024-05-13%20214503.png)

### Editor Page
![Image 3](https://github.com/jahnavi-22/code-weave/blob/main/frontend/public/assets/Screenshot%202024-05-13%20214850.png)

### Copy Room ID
![Image 6](https://github.com/jahnavi-22/code-weave/blob/main/frontend/public/assets/Screenshot%202024-05-13%20215532.png)

### Choose any language
![Image 5](https://github.com/jahnavi-22/code-weave/blob/main/frontend/public/assets/Screenshot%202024-05-13%20215037.png)

### Compile your code
![Image 4](https://github.com/jahnavi-22/code-weave/blob/main/frontend/public/assets/Screenshot%202024-05-13%20214953.png)
![Image 7](https://github.com/jahnavi-22/code-weave/blob/main/frontend/public/assets/Screenshot%202024-05-13%20221725.png)
![Image 8](https://github.com/jahnavi-22/code-weave/blob/main/frontend/public/assets/Screenshot%202024-05-13%20224300.png)
![Image 9](https://github.com/jahnavi-22/code-weave/blob/main/frontend/public/assets/Screenshot%202024-05-13%20225042.png)

## ▶️How to run

### Quick Start (Recommended)
```bash
# Clone the repository
git clone <repository-url>
cd code-weave

# Install all dependencies
npm run install:all

# Start both backend and frontend in development mode
npm run dev
```

### Manual Setup

#### Backend Setup
```bash
cd backend
npm install
cp env.example .env
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
cp env.example .env
npm start
```

### Production Build
```bash
# Build frontend for production
npm run build

# Start production server
npm start
```

## 🔧Available Scripts

- `npm run dev` - Start both backend and frontend in development mode
- `npm run dev:backend` - Start only backend in development mode
- `npm run dev:frontend` - Start only frontend in development mode
- `npm run build` - Build frontend for production
- `npm start` - Start production server
- `npm run install:all` - Install dependencies for all packages
- `npm run clean` - Clean all node_modules
- `npm test` - Run frontend tests

## 🌟 Features

- **Real-time Collaboration**: Multiple users can edit code simultaneously
- **Multiple Languages**: Support for JavaScript, TypeScript, Python, Java, C#, PHP
- **Live Code Execution**: Run code and see output in real-time
- **User Presence**: See who's currently in the room
- **Room-based**: Create or join rooms for different projects
- **Modern UI**: Built with Chakra UI for a beautiful experience

## 🔌API Endpoints

- `GET /health` - Health check endpoint
- WebSocket events for real-time communication

## 📝Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_BACKEND_URL=http://localhost:5000
```

Voila! 🌟 CodeWeave is running...
