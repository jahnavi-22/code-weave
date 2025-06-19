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
Technical interviews often rely on screen sharing or collaborative docs, which can be clunky and distracting. CodeWeave solves this by providing a dedicated, real-time collaborative code editor and compiler—making it easy for interviewers and candidates to write, run, and discuss code together in a focused environment. No more switching between docs and IDEs. Just code, collaborate, and communicate seamlessly.
## ⚙️Tech Stack
[![My Skills](https://skillicons.dev/icons?i=js,react,express,nodejs,html,css,npm,vscode)](https://skillicons.dev)

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

Got it! Here's the shortened version **without bash formatting**, clean and readable:

---

### 🚀 Quick Start

1. Clone the repository
2. `cd code-weave`
3. Run `npm run install:all`
4. Start dev mode: `npm run dev`

---

### ⚙️ Manual Setup

**Backend**

1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env`
4. `npm run dev`

**Frontend**

1. `cd frontend`
2. `npm install`
3. Copy `.env.example` to `.env`
4. `npm start`

---

### 📦 Production

1. Build frontend: `npm run build`
2. Start server: `npm start`

---


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

