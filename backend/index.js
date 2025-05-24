const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const User = require('./models/user');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

(async () => {
  try {
    // In development, it's required to constantly update the user tables. So all previous info would be deleted
    await sequelize.sync({ force: true });
    app.listen(3000, () =>
      console.log('🚀 Server running on http://localhost:3000')
    );
  } catch (err) {
    console.error('Unable to connect to the DB:', err);
  }
})();
