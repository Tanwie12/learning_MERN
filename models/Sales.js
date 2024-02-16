// models/Sales.js
const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
  product_category: String,
  sales_amount: Number,
  sales_price: Number,
  date: Date,
});

const Sales = mongoose.model('Sales', salesSchema);

module.exports = Sales;
