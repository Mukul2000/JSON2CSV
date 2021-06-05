const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    owner_id: String, // Google_id, unique identifier
    owner_name: String,
    picture_link: String, // Makes rendering easier on frontend?
    original_filename: String, // Name supplied by user
    filename: String, // Internal naming
});

const File = mongoose.model("File", fileSchema);
module.exports = File;