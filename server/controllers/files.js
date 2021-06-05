const File = require('../schemas/File');

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

    await File.collection.insertOne({
        owner_id : owner_id,
        owner_name : name,
        picture_link: picture,
        original_filename: original_filename,
        filename: filename,
    }, {upsert: true});
    
    

    // TODO : further code to convert into CSV


}

module.exports = {add_convert};