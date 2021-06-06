const File = require('../schemas/File');

// find all files which have owner as user_id
async function get_userfiles(user_id, page_num) {
    const resPerPage = 15;
    const page = Math.max(page_num, 1);
    const data = await File.find({owner_id: user_id}).skip((resPerPage*page) - resPerPage).limit(resPerPage);
    return data;
}

module.exports = {get_userfiles};