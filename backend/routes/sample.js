const express = require('express');
// const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.download('./public/docker-compose.yml')
});

module.exports = router;