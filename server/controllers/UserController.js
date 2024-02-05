const User = require('../models/User');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      username,
      email,
      password, 
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.authenticate(email, password);

    if (!user) {
      return res.status(401).send('Invalid credentials');
    }

    // Generate and send a token for authentication in a real application

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const { userId, updatedFields } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updatedFields },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send('User not found');
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get user details
exports.getUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
