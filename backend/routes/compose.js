const express = require('express');

const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const { exec } = require('child_process');
// var fs = require('fs');

function komposeConvert(path, callback) {
  // prettier-ignore
  exec(`kompose convert -f ${path} --stdout`, (err, stdout, stderr) => callback(err, stdout, stderr));
}

router.post('/', upload.single('compose_file'), (req, res) => {
  // Get file path
  const { path } = req.file;
  // Get file extention
  const ext = req.file.originalname.toLocaleLowerCase().split('.');

  // Check if file extention is valid
  if (ext[ext.length - 1] === 'yml' || ext[ext.length - 1] === 'yaml') {
    // Check if file is empty
    if (req.file.size !== 0 && req.file.size <= 1048576) {
      // Call function to initate file conversion
      komposeConvert(path, (err, data, stderr) => {
        // Check if returned command is successful
        if (err) {
          // Clean stderr
          stderr = stderr.replace("[31mERRO[0m ", "")
          stderr = stderr.replace("[31mFATA[0m ", "")
          stderr = stderr.replace("[36mINFO[0m ", "")
          stderr = stderr.replace("[33mWARN[0m ", "")

          // Send the error
          res.send(stderr);
        } else {
          // Send the result
          res.send(data);
        }
      });
    } else {
      res.status(404).json({ status: 'file size is invalid' });
    }
  } else {
    res.status(404).json({ status: 'file format invalid' });
  }
});

module.exports = router;
