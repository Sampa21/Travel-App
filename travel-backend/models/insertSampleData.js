const mongoose = require('mongoose');
const Travel = require('./Travel'); // Correctly import the Travel model

async function insertSampleData() {
  try {
    const sampleDestinations = [
      { 
        name: 'Pune', 
        country: 'India', 
        description: 'Known for its cultural heritage.', 
        rating: 4, 
        date: new Date(), // Add a date field
        destination: 'Shaniwar Wada' // Add a destination field
      },
      { 
        name: 'Mumbai', 
        country: 'India', 
        description: 'A bustling city known for Bollywood.', 
        rating: 5, 
        date: new Date(), 
        destination: 'Marine Drive' 
      },
      { 
        name: 'Chennai', 
        country: 'India', 
        description: 'Known for its temples and cultural history.', 
        rating: 5, 
        date: new Date(), 
        destination: 'Marina Beach' 
      },
      { 
        name: 'Bangalore', 
        country: 'India', 
        description: 'The tech capital of India.', 
        rating: 4, 
        date: new Date(), 
        destination: 'Lal Bagh' 
      }
    ];
    

    // Insert sample data into MongoDB collection
    const result = await Travel.insertMany(sampleDestinations);
    console.log('Sample data inserted successfully!', result);
  } catch (error) {
    console.error('Error inserting sample data:', error);
  }
}

module.exports = insertSampleData; // Export the function
