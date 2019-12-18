const express = require('express');
const router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('compose_file'), function (req, res, next) {
  const filename = req.file.originalname;
  res.json({ status: "ok", filename: filename, });
  });

router.use(function (err, req, res, next) {
  console.log('This is the invalid field ->', err.field);
  next(err);
  });
  
module.exports = router;