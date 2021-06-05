const express = require('express');
const route = express.Router();
const multer = require('multer');
const authByToken = require('../middlewares/auth');

const upload = multer({dest: './uploads/'});

route.post('/', authByToken, upload.single('uploaded_json'), (req,res) => {
    console.log(req.userId, req.file);
    res.end();
});

module.exports = route;