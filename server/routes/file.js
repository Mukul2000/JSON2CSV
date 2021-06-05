const express = require('express');
const route = express.Router();
const multer = require('multer');
const authByToken = require('../middlewares/auth');

const upload = multer({dest: './uploads/'});

route.post('/', authByToken, upload.single('uploaded_json'), (req,res) => {
    console.log(req.headers, req.body);
    console.log(req.file);
    res.end();
});

module.exports = route;