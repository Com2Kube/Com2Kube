const express = require('express');
var cors = require('cors');

const app = express();

//Enable cors
app.use(cors());

//Import Routes
const statusRoute = require('./routes/status');
const uploadRoute = require('./routes/Upload');

//Routes
app.use('/api/status', statusRoute);
app.use('/api/upload', uploadRoute);
//Start server
app.listen(5000);