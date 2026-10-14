const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  items: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: String, required: true },
  address: { type: String, default: "" },
  reminderDate: { type: String, default: "" },
  isDelivered: { type: Boolean, default: false }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Order', orderSchema);