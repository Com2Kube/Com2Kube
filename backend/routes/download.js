const express = require('express');
const fs = require('fs');

const router = express.Router();

router.post('/', (req, res) => {
  if (req.headers['content-type'] === 'text/plain') {
    // get body data
    const data = req.body;
    // genereate random fileName
    const fileName = Math.floor(Math.random() * 999999999999999);

    const path = `/tmp/${fileName}.yml`;
    // Write data to a file
    fs.writeFile(path, data, () => {
      // Send file to the user
      res.download(path, () => {
        // Delete file
        // prettier-ignore
        fs.unlink(path, (error) => {
          if (error) throw error;
        });
      });
    });
  } else {
    // prettier-ignore
    res.status(404).end(`Request type is invalid, you used : ${req.headers['content-type']}`);
  }
});

module.exports = router;
