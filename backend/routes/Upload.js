const express = require('express');
const fs = require('fs');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { exec } = require('child_process');

// router.post('/', upload.single('compose_file'), (req, res) => {
//   const filename = req.file.originalname;
//   path = req.file.path;
//   console.log("path : " + path);
//   fs.readFile(path, 'utf8', function(err, contents) {
//     console.log(contents);
//     res.json({ status: 'ok', filename: filename, content: contents });
//   });
// });

router.post('/', upload.single('compose_file'), (req, res) => {
  var path = req.file.path;
  convert(path)
});

function readfile(path){
  fs.readFile(path, 'utf8', function(err, contents) {
    // console.log(contents);
  });
}

function convert(path) {
  exec(
    'kompose convert -f ' + path + ' --stdout',
    (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        return;
      }

      // the *entire* stdout and stderr (buffered)
      data = `stdout: ${stdout}`
      errors = `stderr: ${stderr}`
    }
  );
}
// router.use((err, req, res, next) => {
//   // eslint-disable-next-line no-console
//   console.log('This is the invalid field ->', err.field);
//   next(err);
// });

module.exports = router;
