# Health Program API

## Overview
The **Health Program API** is a backend system built using **Node.js (ES6)**, **Express**, and **MongoDB**. It manages client registrations, health program creation, and secure authentication using **JWT**. Admins manage health programs, while clients can enroll in them.

---

## 🌐 Live API
You can access the deployed API here:  
🔗 **[https://health-program-api-test.onrender.com/](https://health-program-api-test.onrender.com/)**

---

## 🚀 Features

### 👥 Client Management
- Register new clients  
- Login and receive a JWT token  
- Search clients by name or national ID  
- View individual client profiles and enrolled programs  

### 🩺 Program Management
- Admins can create health programs  
- Clients can enroll in one or more programs  

### 🔐 Authentication & Authorization
- JWT-based authentication  
- Admin-only access for specific operations (e.g., creating programs)  

---

## 🛠️ Technologies Used

- **Backend**: Node.js (ES6 with `"type": "module"`), Express.js  
- **Database**: MongoDB + Mongoose  
- **Authentication**: JSON Web Tokens (JWT)  
- **Environment Config**: dotenv  
- **Testing**: Jest + Supertest  
- **Dev Tools**: ESLint, Nodemon, Babel  

---

## ⚙️ Installation & Setup

### 1. 📦 Clone the repository
```bash
git clone https://github.com/Dennis-DW/Health-program-api_test.git
cd health-program-api
```

### 2. 🧩 Install dependencies
```bash
npm install
```

### 3. 🗂️ Create a `.env` file
```env
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
PORT=5000
```

### 4. ▶️ Start the development server
```bash
npm run dev
```

Or for production:
```bash
npm start
```

---

## 🔌 API Endpoints

### 🔸 Client Routes

| Method | Endpoint                             | Description                          | Auth Required |
|--------|--------------------------------------|--------------------------------------|---------------|
| POST   | `/api/clients`                       | Register a new client                | ❌ No         |
| POST   | `/api/clients/login`                 | Login and receive JWT token          | ❌ No         |
| GET    | `/api/clients`                       | Search clients by name/national ID   | ✅ Yes        |
| GET    | `/api/clients/:id`                   | Get a client's profile               | ✅ Yes        |
| POST   | `/api/clients/:id/enrollments`       | Enroll a client in health programs   | ✅ Yes        |

### 🔸 Program Routes

| Method | Endpoint        | Description              | Auth Required | Admin Only |
|--------|-----------------|--------------------------|---------------|------------|
| POST   | `/api/programs` | Create a new program     | ✅ Yes        | ✅ Yes     |

---

## 🧩 Middleware

### ✅ Authentication Middleware
- Validates JWT and attaches user details to `req.user`.  
- Secures protected endpoints.

### 🛡️ Admin Middleware
- Checks `req.user.isAdmin` flag.  
- Restricts access to admin-only operations like creating health programs.

---

## 🧪 Testing

### 🧷 Integration Tests
- Written using **Jest** and **Supertest**.  
- Test major API routes and features.

### ▶️ Run all tests
```bash
npm test
```

Or watch tests continuously:
```bash
npm run test -- --watchAll
```

### ✅ Coverage
```bash
npm run test:coverage
```

---