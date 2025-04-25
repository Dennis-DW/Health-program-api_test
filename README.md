# 🏥 Health Program API

## 📘 Overview
The **Health Program API** is a backend system built with **Node.js**, **Express**, and **MongoDB**. It handles client registrations, health program management, and secure authentication using JWT. Admins can manage health programs while clients can enroll in them.

---

## 🚀 Features

### 👥 Client Management
- Register new clients  
- Login and get a JWT token  
- Search for clients by name or national ID  
- View a client's profile including enrolled programs  

### 🩺 Program Management
- Admins can create new health programs  
- Clients can enroll in one or more programs  

### 🔐 Authentication & Authorization
- JWT-based user authentication  
- Admin-only access control for creating programs  

---

## 🛠️ Technologies Used
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Mongoose ODM  
- **Authentication**: JSON Web Tokens (JWT)  
- **Environment Configuration**: dotenv  

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Dennis-DW/Health-program-api_test.git
cd health-program-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a `.env` file in the root directory:
```env
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
PORT=5000
```

### 4. Start the server
```bash
nodemon app.js
```

---

## 🔌 API Endpoints

### 🔸 Client Routes

| Method | Endpoint                             | Description                          | Auth Required |
|--------|--------------------------------------|--------------------------------------|---------------|
| POST   | `/api/clients`                       | Register a new client                | ❌ No         |
| POST   | `/api/clients/login`                 | Login and receive JWT token          | ❌ No         |
| GET    | `/api/clients`                       | Search clients by name/national ID   | ✅ Yes        |
| GET    | `/api/clients/:id`                   | Get a specific client's profile      | ✅ Yes        |
| POST   | `/api/clients/:id/enrollments`       | Enroll a client in health programs   | ✅ Yes        |

### 🔸 Program Routes

| Method | Endpoint             | Description              | Auth Required | Admin Only |
|--------|----------------------|--------------------------|---------------|------------|
| POST   | `/api/programs`      | Create a new program     | ✅ Yes        | ✅ Yes     |

---

## 🧩 Middleware

### ✅ Authentication Middleware
- Validates JWT token and attaches user info to `req.user`.
- Protects private endpoints.

### 🛡️ Admin Middleware
- Restricts access to admin-only features like program creation.

---
