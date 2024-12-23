const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());  // Enable CORS to allow requests from frontend

// Define the 'Travels' model schema
const travelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String },
  rating: { type: Number, min: 1, max: 5 }
});
const Travels = mongoose.model('Travels', travelSchema);

// Connect to MongoDB (updated to remove deprecated options)
mongoose.connect('mongodb://localhost:27017/travel_app_db')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define API routes
app.get('/api/travels', async (req, res) => {
  try {
    const travels = await Travels.find();  // Fetch all travels from the database
    console.log(travels);
     res.json(travels);  // Send the data as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching travels data' });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// API route to add a new travel
app.post('/api/travels', async (req, res) => {
  try {
    const newTravel = new Travels(req.body);  // Get the travel data from the request body
    await newTravel.save();  // Save the new travel to MongoDB
    res.status(201).json(newTravel);  // Return the saved travel as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error saving travel data' });
  }
});
