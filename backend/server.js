

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// app.use(express.json());
// const_dirname=path.dirname("")
// const buildpath = path.join(_dirname,"../frontend/build")
// app.use(express.static(buildpath));
// app.use(
// cors({
//     "origin": "*",
// })
// );
// app.use(productroutes);
// app.use(userroutes);

// const express = require('express');
// const path = require('path');

// // const app = express();

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'build')));

// // Handles all requests by serving the index.html from the build folder
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




// Set up the app
const app = express();

// Enable CORS and JSON body parsing
app.use(cors());
app.use(bodyParser.json());

// Ensure the 'uploads' folder exists
const uploadsPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath);
}

// Set up the multer storage for profile photos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save images in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
  },
});

const upload = multer({ storage: storage });

// MongoDB connection

// const mongoose = require('mongoose');

const uri = 'mongodb+srv://Akash07i:Akash@17001@cluster0.bb241.mongodb.net/crowdig?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

  


// mongoose.connect('mongodb://localhost:27017/crowdig', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// Serve images from the 'uploads' folder
app.use('/uploads', express.static('uploads'));

// POST endpoint for registration
app.post('/api/register', upload.single('profileImage'), async (req, res) => {
  const { name, email, password, role } = req.body;
  const profileImage = req.file ? req.file.path.replace('\\', '/') : '';  // Ensure the path uses forward slashes

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already registered' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      profileImage, // Save the profile image path in the DB
    });

    await newUser.save();
    const fullImageUrl = `http://localhost:5000/${profileImage}`; // Full image URL to send

    res.status(201).json({
      msg: 'User registered successfully',
      profileImage: fullImageUrl, // Send full profile image URL
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});


// Get all users (including profile images)
app.get('/api/getAllUsers', async (req, res) => {
  try {
    const users = await User.find({});  // Get all users from the database

    // Map through the users and create a response with the profile image URL
    const formattedUsers = users.map(user => ({
      name: user.name,
      email: user.email,
      role: user.role,
      profileImage: user.profileImage ? `http://localhost:5000/${user.profileImage}` : null, // Full URL for image
    }));

    // Return the list of all users
    res.json({ users: formattedUsers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});


// POST endpoint for login
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ msg: 'Invalid email or password' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid email or password' });
//     }

//     const payload = { userId: user._id, name: user.name, role: user.role };
//     const token = jwt.sign(payload, 'secret_key', { expiresIn: '1h' });

//     res.json({
//       token,
//       userId: user._id,
//       role: user.role,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: 'Server error' });
//   }
// });
// POST endpoint for login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const payload = { userId: user._id, name: user.name, role: user.role };
    const token = jwt.sign(payload, 'secret_key', { expiresIn: '1h' });

    // Prepare the full profile image URL
    const profileImageUrl = user.profileImage ? `http://localhost:5000/${user.profileImage}` : '';

    res.json({
      token,
      userId: user._id,
      role: user.role,
      profileImage: profileImageUrl, // Send profile image URL
      name: user.name,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// POST endpoint for updating profile photo
app.post('/api/updateProfilePhoto', upload.single('profileImage'), async (req, res) => {
  const userId = req.body.userId; // You should send the userId in the body or from JWT token
  const profileImage = req.file ? req.file.path : '';

  if (!profileImage) {
    return res.status(400).json({ msg: 'Profile image is required' });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, { profileImage }, { new: true });
    res.status(200).json({
      msg: 'Profile photo updated successfully',
      profileImage: `http://localhost:5000/${profileImage}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get all users endpoint (for fetching users for the carousel)
app.get('/api/getUsers', async (req, res) => {
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
});

// Set the server to listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
