module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    starter_code: DataTypes.TEXT,
    language_id: DataTypes.INTEGER,
  });
  return Question;
};
