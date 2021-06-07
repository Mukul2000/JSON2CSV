const User = require('../schemas/Schema');
const { convert_to_CSV, validateJSON } = require('../utils/file_utils');

// When a file is uploaded to be converted to CSV
// 2 things have to happen
// 1. Record in database
// 2. Convert to CSV and send back
async function add_convert(req,res) {
    const original_filename = req.file.originalname
    const filename = req.file.filename; // Name inside the server

    const owner_id = req.userId;
    const name = req.userName;
    const picture = req.userPicture;
    try {

        // Validate, right now it just returns true
        if (!validateJSON(filename)) throw 'Invalid JSON';

        //Save to DB
        const user = await User.findOne({ id: owner_id });
        user.files.push({ original_filename: original_filename, internal_filename: filename });
        Promise.all([user.save(), convert_to_CSV(filename)]);
        const final_name = req.file.filename + '.csv';
        res.send(final_name);
    }
    catch (e) {
        res.status(400).json({ error: e });
        console.log(e);
    }

}

module.exports = { add_convert };