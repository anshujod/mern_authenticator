# MERN Authenticator

A full-stack authentication system built with the MERN stack (MongoDB, Express, React, Node.js). This project provides a robust, modern user authentication flow with email verification, secure password management, and a responsive React frontend styled with TailwindCSS.

## Features

- User registration with email verification
- Secure user login and JWT authentication (with cookies)
- Password strength meter and guidance
- Forgot password flow with reset email
- Responsive UI with animated backgrounds and modern React patterns
- Protected routes and state management via Zustand
- Backend separation for API (Express) and frontend (React/Vite)
- Email sending with Mailtrap integration

## Technologies Used

- **Frontend:** React, Vite, TailwindCSS, Zustand, Framer Motion, Lucide Icons, Axios
- **Backend:** Node.js, Express, MongoDB (with Mongoose), bcryptjs, dotenv, cookie-parser, Mailtrap

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB connection string (MONGO_URI)
- [Mailtrap](https://mailtrap.io/) account for email testing

### Installation

#### Backend

```bash
cd backend
npm install
```

- Add a `.env` file with:
  ```
  MONGO_URI=your_mongodb_connection_string
  PORT=5001
  NODE_ENV=development
  MAILTRAP_USER=your_mailtrap_username
  MAILTRAP_PASS=your_mailtrap_password
  ```

#### Frontend

```bash
cd frontend
npm install
```

### Running the Application

#### Development

- Start backend (from `/backend`):
  ```bash
  npm run dev
  ```
- Start frontend (from `/frontend`):
  ```bash
  npm run dev
  ```
- Frontend runs on [http://localhost:5173](http://localhost:5173)  
- Backend API runs on [http://localhost:5001](http://localhost:5001)

#### Production

- Build frontend:
  ```bash
  cd frontend
  npm run build
  ```
- Serve static frontend via Express by setting `NODE_ENV=production` and running the backend server.

## Usage

- **Sign Up**: Register with name, email, and password. A verification email will be sent.
- **Login**: Enter your credentials to log in. Only verified users can log in.
- **Forgot Password**: Request a password reset link via email.
- **Dashboard**: Authenticated users can view their profile and account activity.

## Folder Structure

```
mern_authenticator/
  ├── backend/
  │   ├── controllers/
  │   ├── db/
  │   ├── mailtrap/
  │   ├── models/
  │   ├── routes/
  │   └── index.js
  └── frontend/
      ├── src/
      │   ├── components/
      │   ├── pages/
      │   ├── store/
      │   └── utils/
      ├── index.html
      └── vite.config.js
```

## Environment Variables

- `MONGO_URI`: MongoDB connection string
- `PORT`: Backend server port
- `MAILTRAP_USER`, `MAILTRAP_PASS`: Mailtrap credentials for email sending

## License

This project is for educational and personal use.

---

Made with ❤️ by [anshujod](https://github.com/anshujod)
