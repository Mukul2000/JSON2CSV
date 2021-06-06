const mongoose = require('mongoose');

const FileSchema = mongoose.Schema({
    original_filename: String, // Name supplied by user
    internal_filename: String, // Internal naming
});

const UserSchema = mongoose.Schema({
    id: String, // Google_id, unique identifier
    email: String,
    name: String,
    files: [FileSchema]
});

const User = mongoose.model('user', UserSchema);
module.exports = User;