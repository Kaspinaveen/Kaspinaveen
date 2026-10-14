const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Namma pudhusa create panna routes-a import pandrom
const orderRoutes = require('./routes/orderRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Intha URL-la thaan app data anupum
app.use('/api/orders', orderRoutes); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🎉 MongoDB Connected Successfully!'))
  .catch((err) => console.log('❌ MongoDB Connection Error: ', err));

app.get('/', (req, res) => {
  res.send('🌸 FlowerSpot Backend API is running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});