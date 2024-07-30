const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true, // Normalize email to lowercase
        trim: true       // Remove leading/trailing whitespace
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt
});

// Create and export the user model
const User = mongoose.model('User', userSchema);

module.exports = User;
