const express = require('express');

const app = express();

//Import Routes
const statusRoute = require('./routes/status');
const uploadRoute = require('./routes/Upload');

//Routes
app.use('/api/status', statusRoute);
app.use('/api/upload', uploadRoute);
//Start server
app.listen(5000);