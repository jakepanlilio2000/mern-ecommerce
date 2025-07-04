const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'mernDB' // set the database name here
    });

  } catch (error) {
    console.error(`🔴 Error connecting to MongoDB: ${error.message}`);
    process.exit(1); 
  }
};

// Listen for connection events
const db = mongoose.connection;

db.on('connected', () => {
  console.log('🟢 MongoDB is connected to the database.');
});

db.on('error', (err) => {
  console.error(`🔴 MongoDB connection error: ${err.message}`);
});

db.on('disconnected', () => {
  console.log('🟡 MongoDB disconnected.');
});

module.exports = connectDB;