const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

// POST endpoint for registration
exports.registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const profileImage = req.file ? `uploads/${req.file.filename}` : ''; // Store image path in DB

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already registered' });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      profileImage, // Save profile image path in DB
    });

    await newUser.save();
    res.status(201).json({ msg: 'User registered successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// POST endpoint for login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    // Generate JWT token
    const payload = {
      userId: user._id,
      name: user.name,
      role: user.role,
      profileImage: user.profileImage ? `http://localhost:5000/${user.profileImage}` : null, // Profile image URL
    };
    const token = jwt.sign(payload, 'secret_key', { expiresIn: '1h' });

    res.json({ token, userId: user._id, role: user.role, profileImage: payload.profileImage });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all users (for carousel or any other logic)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    const formattedUsers = users.map(user => ({
      ...user._doc,
      profileImage: user.profileImage ? `http://localhost:5000/${user.profileImage}` : null,
    }));
    res.json({ users: formattedUsers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
