# Health Tracking App

This is a simple Health Tracking App where users (patients) can log and track their daily health metrics like body temperature, blood pressure, and heart rate. The app provides authentication, allowing users to register and log in to manage their health records. It is built with Node.js, Express.js, MongoDB, and JWT for authentication.

## Features

- User Authentication (Register, Login)
- Log health metrics (body temperature, blood pressure, heart rate)
- View all logged health records
- Update or delete health records
- JWT-based secure authentication
- MongoDB for data storage


## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (locally or MongoDB Atlas)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Clone the repository

To clone the project to your local machine, run the following command:

```bash
git clone https://github.com/your-username/health-tracking-app.git
cd health-tracking-app

MONGO_URI=your_mongo_database_url
JWT_SECRET=your_jwt_secret_key
PORT=3000  # Or any port you'd like to use
---

### Notes for the README:

- Replace `https://github.com/your-username/health-tracking-app.git` with your actual GitHub repository URL.
- The `.env` file should not be committed to GitHub, so ensure it’s included in your `.gitignore` file.
- This README assumes you're using MongoDB as your database. Adjust accordingly if you're using a different database like MySQL.


