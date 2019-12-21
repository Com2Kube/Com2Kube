const express = require('express');
const fs = require('fs');

const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('compose_file'), (req, res) => {
  const filename = req.file.originalname;
  data = fs.readFileSync(req.file.path,'utf8');
  console.log("data : " + data);
  res.json({ status: 'ok', filename: filename, content: data });
});

// router.use((err, req, res, next) => {
//   // eslint-disable-next-line no-console
//   console.log('This is the invalid field ->', err.field);
//   next(err);
// });

module.exports = router;
