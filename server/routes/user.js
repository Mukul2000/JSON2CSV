const express = require('express');
const UserControllers = require('../controllers/user');
const route = express.Router();

// GET all files belonging to this user_id, used when you open up someone's profile.
route.get('/:user_id/:page', async (req, res) => {
    const files = await UserControllers.get_userfiles(req.params.user_id, req.params.page);
    res.send(files);
});

// GET random records for homepage
route.get('/random', async (req,res) => {
    try {
        const data = await UserControllers.random_records();
        console.log(data);
        res.send(data);
    }
    catch(e) {
        res.status(500).json({ error: e });
    }
});

route.get('/search/:email', async (req,res) => {
    // search for a user with email
    try {
        const user = UserControllers.search(req.params.email);
        res.send(user);
    }
    catch(e) {
        res.status(500).json({ error: e });
    }
});

// Some checks when a user first logs in
route.post('/login', async (req, res) => {
    try {
        await UserControllers.check_login(req.body);
        res.send();
    }
    catch (e) {
        res.status(400).json({ error: e });
    }

});

module.exports = route;