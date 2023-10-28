const mongoose = require('mongoose');


const SignupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    age: {
        type: Number,
        required: true,
        maxLength: 2,
        trim: true
    },
   
    profession: {
        type: String,
        required: true,
        trim: true
    },    
}, {timestamps: true})

module.exports = mongoose.model('Signup', SignupSchema)
