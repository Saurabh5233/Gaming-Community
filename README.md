
# Gaming Community Project

This project is a **Gaming Community** web application with features like user login, signup, and profile management. It includes a backend API and a frontend user interface. Below are the instructions to run both parts of the project.

---

## Table of Contents
- [Backend Setup](#backend-setup)
  - [Prerequisites](#prerequisites)
  - [Run the Backend](#run-the-backend)
- [Frontend Setup](#frontend-setup)
  - [Prerequisites](#prerequisites-frontend)
  - [Run the Frontend](#run-the-frontend)
- [Troubleshooting](#troubleshooting)

---

## Backend Setup

The backend is built with **Node.js** and **Express.js**. It handles user authentication, profile management, and other core functionalities.

### Prerequisites
Before starting the backend, make sure you have the following installed:
- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)

### Steps to Set Up the Backend

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/your-username/gaming-community.git
   cd gaming-community/backend
   ```

2. **Install dependencies**:
   Run the following command to install necessary packages:
   ```bash
   npm install
   ```

3. **Set up the environment variables**:
   - Copy `.env.example` to `.env` and configure the environment variables, including database connection details and secret keys.

4. **Run the Backend**:
   Start the server with:
   ```bash
   npm start
   ```
   The backend should now be running on `http://localhost:8080`.

---

## Frontend Setup

The frontend is built with **React.js** and communicates with the backend API for user authentication and other operations.

### Prerequisites (Frontend)
Before starting the frontend, make sure you have the following installed:
- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)

### Steps to Set Up the Frontend

1. **Navigate to the frontend directory**:
   ```bash
   cd gaming-community/frontend
   ```

2. **Install dependencies**:
   Run the following command to install necessary packages:
   ```bash
   npm install
   ```

3. **Run the Frontend**:
   Start the frontend development server with:
   ```bash
   npm start
   ```
   The frontend should now be running on `http://localhost:3000`.

---

## Troubleshooting

- If you encounter issues with missing dependencies, try running `npm install` in both the backend and frontend directories again.
- If the backend doesn't start, ensure the database and any required services are running and that your `.env` file is properly configured.
- For any other issues, check the browser console (for frontend issues) or the terminal (for backend errors) for more specific error messages.

---

### Additional Notes
- The backend uses JWT for authentication. Make sure you store the token in localStorage as specified in your code.
- You may need to enable CORS in the backend if you run the frontend and backend on different ports during development.

---

