# Full Stack Task Management Application

This project is a full-stack web application for task management, featuring user authentication, task creation, and commenting on tasks. The backend is built with Node.js, Express, and MongoDB, while the frontend is developed using React and Material-UI.

## Project Structure

The project is divided into two main directories: `backend` and `frontend`.

### Backend

- **`.env`**: Contains environment variables for database connection and other configurations.
- **`config/`**: Configuration files, including database setup.
- **`controllers/`**: Business logic for handling requests.
- **`middleware/`**: Express middleware, including authentication.
- **`models/`**: Mongoose models for User and Task.
- **`routes/`**: Route definitions for authentication and task management.
- **`server.js`**: Entry point for the backend server.

### Frontend

- **`src/`**: Contains all the React components, services, and assets.
  - **`api.js`**: Axios instance for API calls.
  - **`App.jsx`**: Main application component.
  - **`components/`**: Reusable components like `Task` and `AuthForm`.
  - **`pages/`**: Components representing pages, including `CreateTask` and `HomePage`.
  - **`services/`**: Services for interacting with the backend, such as `authService` and `taskService`.
- **`index.html`**: Entry point for the frontend application.
- **`vite.config.js`**: Configuration for Vite, the build tool.

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Navigate to the `backend` directory.
2. Copy the `.env.example` file to `.env` and fill in your database connection details and other configurations.
3. Install dependencies:

```sh
npm install
```

4. Start the Backend Server:
```sh
node server.js 
```

5. Start the Frontend Server:
```sh
npm run dev
```

## Usage

After starting both the backend and frontend servers, you can access the application at http://localhost:5173 by default.

## Contributing

Contributions are welcome! Please follow the standard fork and pull request workflow.

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes.
4. Push to your fork and submit a pull request.
