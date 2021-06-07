const express = require('express');
const UserControllers = require('../controllers/user');
const route = express.Router();

// search user by id
route.get('/search/:id', UserControllers.search);

// GET all files belonging to this user_id, used when you open up someone's profile.
route.get('/:user_id/:page', UserControllers.get_userfiles);

// GET any records for homepage
route.get('/random', UserControllers.random_records);

// Some checks when a user first logs in
route.post('/login', UserControllers.check_login);

module.exports = route;