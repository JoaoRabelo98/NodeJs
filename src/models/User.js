const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
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

UserSchema.plugin(mongoosePaginate);