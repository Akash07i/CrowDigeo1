const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');

// Set up the storage for profile photos using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save images in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use a unique filename
  },
});

const upload = multer({ storage: storage });

// Registration route (with image upload)
router.post('/register', upload.single('profileImage'), userController.registerUser);

// Login route
router.post('/login', userController.loginUser);

// Get all users (for carousel or other purposes)
router.get('/getUsers', userController.getAllUsers);

module.exports = router;
