const File = require('../schemas/File');

// find all files which have owner as user_id
async function get_userfiles(user_id) {
    const data = await File.find({owner_id: user_id});
    return data;
}

module.exports = {get_userfiles};