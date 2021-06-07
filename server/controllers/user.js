const User = require('../schemas/Schema');

// find all files which have owner as user_id
async function get_userfiles(req, res) {
    try {
        const user_id = req.params.user_id;
        const page_num = req.params.page;
        const resPerPage = 10;
        const page = Math.max(page_num, 1);
        const data = (await User.find({ id: user_id }))[0].files;
        res.send(data);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
}

// Check whether the logged in user exists in the database, if not add this user.
async function check_login(req, res) {
    const profile = req.body;
    console.log(profile);

    const user = await User.findOne({ id: profile.googleId, email: profile.email });
    console.log(user);
    if (user === null) {
        // New user, not in database. Add user
        try {
            console.log("this runs");
            const newuser = new User({
                id: profile.googleId,
                email: profile.email,
                name: profile.name,
                files: []
            });
            await newuser.save();
            
        }
        catch (e) {
            res.status(400).json({ error: e, message: 'Cannot authenticate' });
        }
    }
    res.send('Done');
}

async function random_records(req,res) {
    try {
        const data = await User.find().limit(10);
        res.send(data);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }

}


async function search(req, res) {
    try {
        const user = await User.find({ id: req.params.id });
        res.send(user);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
}

module.exports = { get_userfiles, search, check_login, random_records };