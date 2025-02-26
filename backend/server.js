const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
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

app.listen(port, () => {

    console.log(`Server is running on port http://localhost:${port}`);
})
