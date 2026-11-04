# 🎮 Games Collection

A React + Vite single-page application with a Node.js backend, built as a project for the SoftUni React course. It's a games catalog with user authentication, CRUD operations and an admin panel, with seed data included so you can run it locally right away.

## Features

- Browse the games catalog and view game details
- Register, log in and log out
- Create, edit and delete games (CRUD)
- Admin panel for managing content
- Optimistic comments for every game

## Tech Stack

| Area      | Technology                                                                                                                               |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend  | React 19, React Router, Vite (`@vitejs/plugin-react`)                                                                                    |
| Backend   | Node.js, [SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server) (single file: `server/server.js`) |
| Languages | JavaScript, HTML, CSS                                                                                                                    |

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Stanislav1s/games-collection-react-2025.git
   cd games-collection-react-2025
   ```

2. Start the backend:

   ```bash
   cd server
   node server.js
   ```

   The API runs at `http://localhost:3030`.

3. In a **second terminal**, start the frontend:
   ```bash
   cd client
   npm install
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

## Test Accounts

| Role | Email          | Password |
| ---- | -------------- | -------- |
| User | `peter@abv.bg` | `123456` |
| Admin |`admin@abv.bg` | `admin`  |

You can also register your own account.

## Project Structure

```
games-collection-react-2025/
├── client/   # React + Vite frontend
└── server/   # SoftUni practice server (REST API)
```
