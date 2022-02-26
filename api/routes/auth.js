const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt'); // For hashed password

// REGISTER NEW USER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    // Hash password for user
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
  
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
// LOGIN USER
router.post("/login", async (req, res) => {
  try {
    // Find user by username
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials1!");
    
    // Validate user and compare
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials2!");


    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;