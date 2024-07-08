const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

exports.registerUser = async (req, res) => {
  const { name, email, password, role, position } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ name, email, password, role, position });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      position: user.position,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

exports.authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log("user:::");
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      position: user.position,
      token: generateToken(user._id),
    });
    res.status(200).json("hello message su'ccessful login")
  } catch (error) {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

// exports.authUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     const isMatch = await user.matchPassword(password);

//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       position: user.position,
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid user data' });
//   }
// };
