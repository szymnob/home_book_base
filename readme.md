# 📖 Book Base – Book Management Application

Book Base is a simple web application for managing a book collection, built with **Node.js, Express, MongoDB, and EJS**.

---

## 📌 Requirements
Before starting, make sure you have installed:
- **Docker** (for running MongoDB in a container)
- **Node.js** (recommended version: 18+ or 20)

---

## ⚙️ Installation

```bash
git clone https://github.com/your-repo/book-base.git
cd book-base
npm install
```

---

## 🐳 Running MongoDB with Docker

The project includes a **`docker-compose.yml`** file that sets up a MongoDB instance.

1. **Start MongoDB in Docker:**

   ```bash
   docker-compose up -d
   ```

   This will start MongoDB in the background. You can check the running container with:

   ```bash
   docker ps
   ```

---

## 🚀 Running the Application

The project includes a **`.env`** file with database connection settings. Once MongoDB is running, start the app:

```bash
npm start
```

The application will run on **`http://localhost:3000`**.

---

## 📚 Features

- ✅ Add, edit, and delete books
- ✅ Form validation (both front-end and back-end)
- ✅ Dynamic views using EJS
- ✅ Automatic layout application across pages
- ✅ MongoDB runs in a Docker container

---

## 🎯 Sample Data

You can add sample books by running:

```bash
node seed.js
```

---

## 🔧 API Endpoints

| Method | Endpoint      | Description                   |
|--------|-------------|------------------------------|
| GET    | `/`         | Homepage with book list       |
| GET    | `/add`      | Book addition form            |
| POST   | `/add`      | Add a book to the database    |
| GET    | `/edit/:id` | Book editing form             |
| POST   | `/edit/:id` | Update book details           |
| GET    | `/delete/:id` | Delete a book               |

