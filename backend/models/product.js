const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    requied: true,
  }
 
});

const product = mongoose.model("product", productSchema);

module.exports = product;