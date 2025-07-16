# 🔗 URL Shortener - Full Stack Project

A simple full-stack URL shortener web app built using:

- *Frontend*: React with Hooks and Axios  
- *Backend*: Node.js, Express.js  
- *Database*: MongoDB (Atlas or Local)  
- *API*: REST  

---

## 📁 Project Structure


url-shortener/
├── client/       # React frontend
├── server/       # Node + Express backend
├── README.md


---

## 🚀 Features

- Convert long URLs into short ones  
- Copy shortened links to clipboard  
- Backend stores shortened URLs in MongoDB  
- Redirect via short link  
- Clean, responsive UI  

---

## ⚙ Technologies Used

| Layer     | Tech                            |
|-----------|---------------------------------|
| Frontend  | React, Axios, CSS               |
| Backend   | Node.js, Express.js, nanoid     |
| Database  | MongoDB + Mongoose              |
| Hosting   | (optional) Netlify + Render     |

---

## 📦 Setup Instructions

### 🖥 Prerequisites

- Node.js and npm installed  
- MongoDB Atlas account (or local MongoDB)  
- Git (optional)  

---

### 📂 Step 1: Clone the Repository

bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener


---

### 🧱 Step 2: Setup Backend (Express + MongoDB)

bash
cd server
npm install


#### 🧾 Create .env File in server/

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000


> 🔐 Replace MONGO_URI with your MongoDB Atlas connection string.

#### ▶ Run the Backend

bash
npm run dev


---

### 🎨 Step 3: Setup Frontend (React)

bash
cd ../client
npm install
npm run dev


> Your app will run on: http://localhost:5173

---

## 🌐 API Routes (Backend)

| Method | Endpoint              | Description             |
|--------|-----------------------|-------------------------|
| POST   | /api/url/shorten    | Create a short URL      |
| GET    | /:shortId           | Redirect to long URL    |

---

## 🔁 How It Works

1. User types a long URL into the input box  
2. Frontend sends a POST request to /api/url/shorten  
3. Backend generates a shortId and saves it in MongoDB  
4. Short URL is returned and displayed on frontend  
5. Visiting the short URL redirects to the original URL  

---

## 📁 Example MongoDB Document

json
{
  "_id": "65e25dfc2aa3d26a388cd120",
  "longUrl": "https://example.com/very-long-url",
  "shortUrl": "http://localhost:5000/abc123",
  "shortId": "abc123",
  "createdAt": "2024-07-15T12:00:00Z"
}


---

## 📦 Optional: Deployment

### 🚀 Frontend (Netlify or Vercel)

bash
npm run build


- Deploy the /client/dist folder

### 🌐 Backend (Render, Railway, or Vercel Functions)

- Push backend to GitHub and deploy with:
  - [Render](https://render.com/)
  - [Railway](https://railway.app/)

---

## 🙋‍♂ Author

Made by *Dev Narang*

> Have a feature request or bug? Feel free to open an issue or PR.

---

## 📝 License

This project is licensed under the MIT License.
