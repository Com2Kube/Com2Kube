const express = require('express');

const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const { exec } = require('child_process');

function convert(path, callback) {
  exec(`kompose convert -f ${path} --stdout`, (err, stdout, stderr) => {
    if (err) {
      return callback(err);
    }
    return callback(err, stdout);
  });
}

router.post('/', upload.single('compose_file'), (req, res) => {
  const { path } = req.file;
  convert(path, (err, data) => {
    if (err) {
      res.status(404);
    }
    res.json({ data });
  });
});

// router.use((err, req, res, next) => {
//   // eslint-disable-next-line no-console
//   console.log('This is the invalid field ->', err.field);
//   next(err);
// });

module.exports = router;
