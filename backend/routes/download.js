const express = require('express');
var fs = require("fs");

const router = express.Router();

router.post('/', (req, res) => {
    // get body data
    var data = req.body
    // genereate random fileName
    var fileName = Math.floor(Math.random() * 999999999999999);

    var path = "/tmp/" + fileName + ".txt";
    // Write data to a file
    fs.writeFile(path, data, () => {
        // Send file to the user
        res.download(path, () => {
            // Delete file
            fs.unlink(path, (error) => {
                if (error) throw error;
            });
        })
    })
});

module.exports = router;