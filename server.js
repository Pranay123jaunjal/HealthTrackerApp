// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/configDb');
const cookiparser=require("cookie-parser")




// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());
app.use(cookiparser());
// Routes
app.use('/auth', require('./routes/authroutes'));
app.use('/health-records', require('./routes/healthrecord'));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
