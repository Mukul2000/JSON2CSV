const express = require('express');
const route = express.Router();
const multer = require('multer');
const authByToken = require('../middlewares/auth');
const FilesControllers = require('../controllers/file');
const upload = multer({ dest: './uploads/' });
const path = require('path');

// Upload file to convert to CSV
route.post('/', authByToken, upload.single('uploaded_json'), FilesControllers.add_convert);

// Get a particular file
route.get('/:name', (req, res) => {
    const filename = req.params.name;
    res.download(path.join(__dirname, '../uploads', filename))
});

module.exports = route;