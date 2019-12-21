const express = require('express');
const fs = require('fs');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('compose_file'), (req, res) => {
  const filename = req.file.originalname;
  const path = req.file.path;
  console.log("path : " + path);
  fs.readFile(path, 'utf8', function(err, contents) {
    console.log(contents);
    res.json({ status: 'ok', filename: filename, content: contents });
  });
});




console.log('after calling readFile');
// router.use((err, req, res, next) => {
//   // eslint-disable-next-line no-console
//   console.log('This is the invalid field ->', err.field);
//   next(err);
// });

module.exports = router;
