const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//sample schema, will change after frontend done 
const userSchema = new mongoose.Schema (
    {
        name:{
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [/.+\@.+\..+/, "Please enter a valid email address"],
        },
        password: {
            type: String,
            required: true,
            minlength: 6,       
        },
        role: {
            type: Number,
            default: 0,
        },


    }
)