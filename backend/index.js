const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

(async () => {
  try {
    await sequelize.sync({ force: true });
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
