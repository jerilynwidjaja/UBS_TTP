const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  difficulty_level: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['beginner', 'intermediate', 'expert']],
    },
  },
  programming_language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  replit_embed_url: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
});

module.exports = Course;
