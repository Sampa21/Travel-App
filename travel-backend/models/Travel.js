const mongoose = require('mongoose');

// Define the schema for the 'Travel' model
const travelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  date: { type: Date }, // Optional field
  destination: { type: String }, // Optional field
  price: { type: Number, required: true } // New field
});

// Create the model based on the schema
const Travel = mongoose.model('Travel', travelSchema, 'destinations');

// Export the model so it can be used in other files
module.exports = Travel;
