const express = require('express');
const fs = require('fs');

const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('compose_file'), (req, res) => {
  const filename = req.file.originalname;
  const { path } = req.file;
  fs.readFile(path, 'utf8', (err, contents) => {
    res.json({ status: 'ok', filename, content: contents });
  });
});

// router.use((err, req, res, next) => {
//   // eslint-disable-next-line no-console
//   console.log('This is the invalid field ->', err.field);
//   next(err);
// });

module.exports = router;
