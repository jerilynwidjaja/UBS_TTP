const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
require('dotenv').config();

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    await User.create({ email, password: hash });
    res.status(201).send({ message: 'User created' });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).send({ message: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).send({ message: 'Invalid password' });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.send({ token });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.post('/career-details', authMiddleware, async (req, res) => {
  try {
    const { careerStage, skills, goals, timeAvailability } = req.body;
    const user = await User.findByPk(req.user.userId);
    if (!user) return res.status(404).send({ message: 'User not found' });

    await user.update({
      careerStage,
      skills: skills.join(','),
      learningGoals: goals.join(','),
      timeAvailability,
    });
    res.json({ message: 'Career details updated successfully' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.get('/career-details', authMiddleware, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId, {
    attributes: ['email', 'careerStage', 'skills', 'learningGoals', 'timeAvailability'],
    });
    
    if (!user) return res.status(404).send({ message: 'User not found' });
    
    res.send(user);
    } catch (err) {
    res.status(500).send({ message: err.message });
    }
});

module.exports = router;
