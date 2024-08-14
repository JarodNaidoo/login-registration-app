const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Registration
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = new User({ name, email, password });
    await user.save();
    res.status(200).send('User registered successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).send('Invalid credentials');
    }
    res.status(200).send('User logged in successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
