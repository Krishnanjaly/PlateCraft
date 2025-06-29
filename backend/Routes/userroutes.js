const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    console.log("🔹 Signup request body:", { username, email, phone });

    // Ensure all required fields are provided
    if (!username || !email || !password) {
      console.log("❌ Missing required fields");
      return res.status(400).json({ error: "Please provide all required fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("⚠️ User already exists");
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("✅ Password hashed successfully");

    const newUser = new User({
      name: username, // Note: your schema must have "name"
      email,
      phone,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log("✅ User saved to DB:", savedUser);

    return res.status(201).json({ message: 'User created successfully', username: savedUser.name });

  } catch (err) {
    console.error("❌ Signup error stack:", err.stack);
    return res.status(500).json({ error: 'Server error during signup' });
  }
});


// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt with:", email, password); // DEBUG

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ error: 'User not found' });
    }

    console.log("Found user:", user); // DEBUG

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch); // DEBUG

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    return res.status(200).json({ message: 'Login successful', username: user.name });

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: 'Server error during login' });
  }
});

module.exports = router;
