const express = require('express');
const cors = require('cors');
const db = require('./models')

require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const authRoutes = require('./routes/authRoutes');
const codeRoutes = require('./routes/codeRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const questionsRoutes = require('./routes/questionsRoutes');
//const seedRoutes = require('./routes/seedRoutes');
app.use('/auth', authRoutes);
app.use('/code', codeRoutes);
app.use('/courses', coursesRoutes);
app.use('/questions', questionsRoutes);
//app.use('/seed', seedRoutes)
(async () => {
  try {
    await db.sequelize.sync();
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () =>
      console.log(
        '🚀 Server running on https://sapient-ground-460717-a8.df.r.appspot.com'
      )
    );
  } catch (err) {
    console.error('Unable to connect to the DB:', err);
  }
})();
