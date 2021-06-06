const express = require('express');
const route = express.Router();
const multer = require('multer');
const authByToken = require('../middlewares/auth');
const FilesControllers = require('../controllers/file');
const upload = multer({ dest: './uploads/' });
const path = require('path');

// Upload file to convert to CSV
route.post('/', authByToken, upload.single('uploaded_json'), async (req, res) => {

    try {

        const user_data = {
            userId: req.userId,
            userName: req.userName,
            userPicture: req.userPicture
        }

        // req.file.filename holds the name of the file saved in the server
        await FilesControllers.add_convert(req.file, user_data);
        const final_name = req.file.filename + '.csv';
        res.send(final_name);
    }
    catch (e) {
        // res.status(400).json({ error: e });
        console.log(e);
    }


    // res.sendFile(path.join(__dirname, '../downloads', req.file.filename + '.csv'));
    // Above shows ENOENT directory does not exist, weird behaviour
    // Workaround, make the frontend request for this file ?
});

// Get a particular file
route.get('/:name', (req, res) => {
    const filename = req.params.name;
    res.download(path.join(__dirname, '../downloads', filename))
});

module.exports = route;