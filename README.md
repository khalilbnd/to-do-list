# Todo List Application

This is a full-stack Todo List application built with a **Node.js backend** and a **React frontend**. The backend uses **TypeORM** and **MySQL** for database management, while the frontend uses **Redux Toolkit** for state management and **Axios** for API requests. The application is containerized using **Docker** for easy setup and deployment.

---

## Features

### Backend
- **RESTful APIs** for managing tasks:
  - `GET /v1/tasks`: Fetch all tasks.
  - `GET /v1/tasks/:id`: Fetch a single task by ID.
  - `POST /v1/tasks`: Create a new task with `title` and `description`.
  - `PUT /v1/tasks/:id`: Update a task by ID (supports `title`, `description`, and `isCompleted`).
  - `DELETE /v1/tasks/:id`: Delete a task by ID.
  - `DELETE /v1/tasks`: Delete multiple tasks by providing an array of IDs.
  - `GET /v1/tasks/statistics`: Get statistics about tasks (total tasks, deleted tasks, and updated tasks).

- Built with **TypeORM** for database management and **MySQL** as the database.
- Containerized using **Docker** for easy setup.

### Frontend
- **Redux Toolkit** for state management.
- **Axios** for making API requests to the backend.
- Features:
  - Fetch and display all tasks.
  - Add a new task.
  - Update an existing task (mark as completed, edit title/description).
  - Delete a single task or multiple tasks.
  - View statistics about tasks (total, deleted, and updated tasks).

---

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Docker** (for running the backend with MySQL)
- **MySQL** (if not using Docker)

---

## Installation and Setup

### Backend

1. Navigate to the backend directory:
   ```bash
   cd todo-back
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application using Docker:
   ```bash
   npm run docker:run
   ```
   This will start the backend server and MySQL database in Docker containers.

4. The backend will be running at `http://localhost:3000`.

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd todo-front
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The frontend will be running at `http://localhost:5173` (or another port if specified).

---

## API Endpoints

### Tasks
- **GET** `/v1/tasks`: Fetch all tasks.
- **GET** `/v1/tasks/:id`: Fetch a single task by ID.
- **POST** `/v1/tasks`: Create a new task.
  ```json
  {
    "title": "Task Title",
    "description": "Task Description"
  }
  ```
- **PUT** `/v1/tasks/:id`: Update a task by ID.
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description",
    "isCompleted": true
  }
  ```
- **DELETE** `/v1/tasks/:id`: Delete a task by ID.
- **DELETE** `/v1/tasks`: Delete multiple tasks.
  ```json
  {
    "ids": [1, 2, 3]
  }
  ```

### Statistics
- **GET** `/v1/tasks/statistics`: Get task statistics.
  ```json
  {
    "totalTasks": 10,
    "deletedTasks": 2,
    "updatedTasks": 5
  }
  ```

---

## Frontend State Management

The frontend uses **Redux Toolkit** to manage the state of the Todo application. The state includes:
- `todoList`: Array of tasks.
- `statistics`: Object containing task statistics.
- `filterStatus`: Current filter status (`all`, `completed`, `incomplete`).
- `status`: Loading state (`idle`, `loading`, `succeeded`, `failed`).
- `error`: Error message (if any).

### Redux Slice
The `todoSlice` handles all actions related to tasks, including:
- Fetching tasks.
- Adding a new task.
- Updating a task.
- Deleting a single or multiple tasks.
- Fetching statistics.

---

## Technologies Used

### Backend
- **Node.js**
- **Express.js**
- **TypeORM** (for database management)
- **MySQL** (database)
- **Docker** (containerization)

### Frontend
- **React**
- **Redux Toolkit** (state management)
- **Axios** (HTTP requests)
- **Vite** (build tool)

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Redux Toolkit** for simplifying state management.
- **TypeORM** for seamless database integration.
- **Docker** for containerization and easy deployment.

---

Enjoy building and managing your tasks with this Todo List application! 🚀