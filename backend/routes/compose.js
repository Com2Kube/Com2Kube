const express = require('express');
var fs = require('fs');


const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const { exec } = require('child_process');

function kompose_convert(path, callback) {
  exec(`kompose convert -f ${path} -j --stdout`, (err, stdout, stderr) => {
    return callback(err, stdout);
  });
}

router.post('/', upload.single('compose_file'), (req, res) => {
  const { path } = req.file;
  kompose_convert(path, (err, data) => {
    if (err) {
      res.status(404);
    }
    res.send(data);
  });
});

// router.use((err, req, res, next) => {
//   // eslint-disable-next-line no-console
//   console.log('This is the invalid field ->', err.field);
//   next(err);
// });

module.exports = router;
