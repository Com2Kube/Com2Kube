const express = require('express');
const fs = require('fs');

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
        // Check if returned command is successfull
        if (err) {
          // Clean stderr
          const stderrCleaned = stderr
            .replace('[31mERRO[0m ', 'Error : ')
            .replace('[31mFATA[0m ', 'Fatal : ')
            .replace('[36mINFO[0m ', 'Info : ')
            .replace('[33mWARN[0m ', 'Warning : ');

          // Send the error
          res.send(stderrCleaned);
        } else {
          // Send the result
          res.send(data);
        }
        // Delete received file after the user received it
        // prettier-ignore
        fs.unlink(path, (error) => {
          if (error) throw error;
        });
      });
    } else {
      res.send('File size is invalid');
    }
  } else {
    res.send('File format is invalid');
  }
});

module.exports = router;
