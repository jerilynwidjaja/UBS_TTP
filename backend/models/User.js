const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  careerStage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  skills: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  learningGoals: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  timeAvailability: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = User;
