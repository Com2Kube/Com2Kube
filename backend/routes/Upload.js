const express = require('express');

const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('compose_file'), (req, res) => {
  const filename = req.file.originalname;
  // let data = fs.createReadStream(req.files.test.path,'utf8');
  res.json({ status: 'ok', filename });
});

router.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('This is the invalid field ->', err.field);
  next(err);
});

module.exports = router;
