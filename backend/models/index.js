const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Courses = require('./Courses')(sequelize, DataTypes);
db.Questions = require('./Questions')(sequelize, DataTypes);
db.User = require('./User')(sequelize, DataTypes);

db.Courses.hasMany(db.Questions, { foreignKey: 'courseId' });
db.Questions.belongsTo(db.Courses, { foreignKey: 'courseId' });

module.exports = db;
