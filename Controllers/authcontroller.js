// controllers/authController.js
const User = require('../models/user');
const generateToken = require('../utils/generateToken');
// const cookie=require("cookie-parser")

// Register user
const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();

    const token = generateToken(user._id);
  
    return res.status(200).json({
        success:true,
        message:"user register successfully",
        token
    })
  } catch (error) {
    res.status(400).json({ message: 'User registration failed' });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);
    res.cookie("token",token).json({
        success:true,
        message:"user login successfully",
        token
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser, loginUser };
