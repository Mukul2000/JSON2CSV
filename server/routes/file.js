const express = require('express');
const route = express.Router();
const multer = require('multer');
const authByToken = require('../middlewares/auth');
const filesControllers = require('../controllers/files');
const upload = multer({dest: './uploads/'});

// Upload file to convert to CSV
route.post('/', authByToken, upload.single('uploaded_json'), (req,res) => {
    const user_data = {
        userId: req.userId,
        userName: req.userName,
        userPicture: req.userPicture
    }
    filesControllers.add_convert(req.file, user_data);
    res.end();
});

module.exports = route;