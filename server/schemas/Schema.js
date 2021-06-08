const mongoose = require('mongoose');

const FileSchema = mongoose.Schema({
    original_filename: { // Name supplied by user
        type: String,
        required: true,
    }, 
    internal_filename: { // Internal naming
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: new Date(),
    },
});

const UserSchema = mongoose.Schema({
    id: {
        type: String, // Google_id, unique identifier
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    files: [FileSchema]
});

const User = mongoose.model('user', UserSchema);
module.exports = User;