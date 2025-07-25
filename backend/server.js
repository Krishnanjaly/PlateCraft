const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./Routes/userroutes.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI)

.then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
  );
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
