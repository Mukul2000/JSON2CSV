const express = require('express');
const UserControllers = require('../controllers/user');
const route = express.Router();

// GET all files belonging to this user_id
route.get('/:user_id', async (req,res) => {
    const files = await UserControllers.get_userfiles(req.params.user_id);
    res.send(files);
});

module.exports = route;