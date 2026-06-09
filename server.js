const express = require('express');
const cors = require('cors');

const sequelize = require('./src/config/database');
const authRoutes = require('./src/routes/authRoutes');

const app = express();

const userRoutes = require("./src/routes/userRoutes");
const profileRoutes = require("./src/routes/profileRoutes");
const resourceRoutes = require("./src/routes/resourceRoutes");
const recommendationRoutes = require("./src/routes/recommendationRoutes");


app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/recommendations', recommendationRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Database Connected');
  })
  .catch((err) => {
    console.error('❌ Database Error:', err);
  });

app.get('/', (req, res) => {
  res.send('Contextual Resource Curator API');
});

app.listen(3000, () => {
  console.log('🚀 Server Running on Port 3000');
});