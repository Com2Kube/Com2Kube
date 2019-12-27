const express = require('express');
const fs = require('fs');

const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const { exec } = require('child_process');


function convert(path, callback) {
  exec(`kompose convert -f ${path} --stdout`, (err, stdout, stderr) => {
    if (err) {
      console.log("An error has occurred. Abort everything!");
      return callback(err);
    }
    callback(err,stdout);
  });
}

router.post('/', upload.single('compose_file'), (req, res) => {
  const { path } = req.file;
  convert(path, function(err, data) {
    if (err){
      console.log(err);
    }
    console.log(data);
    res.json({data: data})
  });
});

// router.use((err, req, res, next) => {
//   // eslint-disable-next-line no-console
//   console.log('This is the invalid field ->', err.field);
//   next(err);
// });

module.exports = router;
