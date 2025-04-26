# Health Program API

## Overview
The **Health Program API** is a backend system built using **Node.js (ES6)**, **Express**, and **MongoDB**. It manages **client registrations**, **health program creation**, and secure **authentication using JWT**. Admins manage health programs, while clients can enroll in them.

---

## 🌐 Live API  
You can access the deployed API here:  
🔗 [https://health-program-api-test.onrender.com/](https://health-program-api-test.onrender.com/)

---

## 📽️ Presentation  
📊 View the project slides here:  
🎨 [Health Program API Presentation on Canva](https://www.canva.com/design/DAGlsRAzI84/4PRPKXdiQCJu30z09eOdfA/view?utm_content=DAGlsRAzI84&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8f3914d3ca)

---

## 🎬 Demo Video  
📹 Watch the full demo video on Loom:  
🔗 [Watch Demo](https://www.loom.com/share/fb824eba36084e42a8e83fdb8d71887e?sid=f43384c3-2d44-4d79-84fa-6a076532a8bd)

---

## 📮 Postman Collection  
🧪 Test the API easily using the shared Postman collection:  
🔗 [Health Program API Postman Collection](https://www.postman.com/denny012/workspace/health-program-api/collection/42348136-938df3df-a56f-4221-b1e5-b6a275e2a196?action=share&creator=42348136)

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
- Admin-only access for program creation  

---

## 🛠️ Technologies Used
- **Backend**: Node.js (ES6 with `"type": "module"`), Express.js  
- **Database**: MongoDB + Mongoose ODM  
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

### 3. 🗂️ Create a `.env` file in the root directory
```env
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
PORT=5000
```

### 4. ▶️ Start the server

For development:
```bash
npm run dev
```

For production:
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
- Verifies the JWT and attaches user info to `req.user`  
- Secures protected routes

### 🛡️ Admin Middleware
- Ensures `req.user.isAdmin` is true  
- Restricts access to admin-only operations

---

## 🧪 Testing

### 🧷 Integration Tests
- Written with **Jest** and **Supertest**  
- Test client registration, login, and program enrollments

### ▶️ Run all tests
```bash
npm test
```

Or in watch mode:
```bash
npm run test -- --watchAll
```

### ✅ Coverage
```bash
npm run test:coverage
```

---

## 📄 License  
This project is licensed under the [MIT License](LICENSE).

---