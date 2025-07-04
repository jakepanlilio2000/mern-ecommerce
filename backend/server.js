const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose"); //for checking db status
const connectDB = require("./config/db");


const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const port = process.env.PORT || 8000;

//mongo connect
connectDB();

app.get ('/', (req, res) => {
    res.send("Welcome to MERN Ecommerce Backend");
});
// API endpoint to check database connection status
// This endpoint will return the current status of the MongoDB connection
app.get("/api/db-status", (req, res) => { 
  const state = mongoose.connection.readyState;
  let status = "Unknown";
  switch (state) {
    case 0:
      status = "Disconnected";
      break;
    case 1:
      status = "Connected";
      break;
    case 2:
      status = "Connecting";
      break;
    case 3:
      status = "Disconnecting";
      break;
  }
  res.send(`Database status: ${status}`);
});

app.listen(port, () => {

    console.log(`Server is running on port http://localhost:${port}`);
})
