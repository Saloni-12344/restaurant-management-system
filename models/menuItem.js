const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    trim: true
  },

  image: {
    type: String,
    default : "https://example.com/default-food.jpg",
    
    set: (v) =>
      v === "" || v === null
        ? "https://example.com/default-food.jpg"
        : v
  },

  price: {
    type: Number,
    required: true,
    min: 0
  },

  category: {
    type: String,
    required: true
  },

  cuisine: {
    type: String
  },

  isVeg: {
    type: Boolean,
    default: true
  },

  spiceLevel: {
    type: Number,
    min: 1,
    max: 5,
    default: 1
  },

  available: {
    type: Boolean,
    default: true
  },

  prepTime: {
    type: Number // minutes
  }
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
