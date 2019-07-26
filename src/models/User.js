const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    secretQuestion: {
        type: String,
        required: false
    }
});

mongoose.model("User", UserSchema);