const File = require('../schemas/File');
const {convert_to_CSV, validateJSON} = require('../utils/file_utils');

// When a file is uploaded to be converted to CSV
// 2 things have to happen
// 1. Record in database
// 2. Convert to CSV and send back
async function add_convert(file_data, user_data) {
    const original_filename = file_data['originalname'];
    const filename = file_data['filename']; // Name inside the server

    const owner_id = user_data['userId'];
    const name = user_data['userName'];
    const picture = user_data['userPicture'];
    try {

        // Save to DB 
        // Read from source, convert to JSON and write to destination

        if(!validateJSON(filename)) throw 'Invalid JSON';

        Promise.all([File.collection.insertOne({
            owner_id: owner_id,
            owner_name: name,
            picture_link: picture,
            original_filename: original_filename,
            filename: filename,
        }, { upsert: true }),
        convert_to_CSV(filename)]); 
    }
    catch (e) {
        throw e;
    }

}

module.exports = { add_convert };