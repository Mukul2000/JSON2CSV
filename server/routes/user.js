const express = require('express');
const UserControllers = require('../controllers/user');
const route = express.Router();

// GET any records for homepage
route.get('/random', UserControllers.random_records);

// Some checks when a user first logs in
route.post('/login', UserControllers.check_login);

// search user by id
route.get('/search/:id', UserControllers.search);

// GET all files belonging to this user_id, used when you open up someone's profile. Also TODO : implement pagination.
route.get('/:user_id/', UserControllers.get_userfiles);

module.exports = route;