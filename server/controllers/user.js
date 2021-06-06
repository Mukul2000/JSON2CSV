const User = require('../schemas/Schema');

// find all files which have owner as user_id
async function get_userfiles(user_id, page_num) {
    const resPerPage = 15;
    const page = Math.max(page_num, 1);
    const data = await User.find({ id: user_id }).skip((resPerPage * page) - resPerPage).limit(resPerPage).files;
    return data;
}

// Check whether the logged in user exists in the database, if not add this user.
async function check_login(profile) {
    const user = await User.findOne({ id: profile.googleId, email: profile.email });
    if (user === null) {
        // New user, not in database. Add user
        try {
            const newuser = new User({
                id: profile.googleId,
                email: profile.email,
                name: profile.name,
                files: []
            });
            await newuser.save();
        }
        catch (e) {
            throw e;
        }
    }

}

async function random_records() {
    try {
        const data = await User.find().limit(10);
        return data;
    }
    catch (e) {
        throw e;
    }
    
}


async function search(email) {
    try {
        const data = await User.findOne({ email: email });
        return data;
    }
    catch (e) {
        throw e;
    }
}

module.exports = { get_userfiles, search, check_login, random_records};