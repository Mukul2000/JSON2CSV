const express = require('express');
const UserControllers = require('../controllers/user');
const route = express.Router();

// GET all files belonging to this user_id
route.get('/:user_id/:page', async (req,res) => {
    const files = await UserControllers.get_userfiles(req.params.user_id, req.params.page);
    res.send(files);
});

module.exports = route;