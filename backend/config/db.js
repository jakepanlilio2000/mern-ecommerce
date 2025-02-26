const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB is connected");
    } catch {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;