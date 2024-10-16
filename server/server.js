// controller

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const usersRoutes = require('./routes/usersRoutes');
const contactsRoutes = require('./routes/contactsRoutes');

dotenv.config();

const app = express();

app.use(express.json());

(async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    });
    console.log('Connected to MongoDB...');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
  }
})();

// display welcome message
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application' });
});

app.use('/users', usersRoutes);
app.use('/contacts', contactsRoutes);

app.listen(3000, () => {
  console.log('Server started');
});
