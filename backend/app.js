const express = require('express');

const app = express();

//Import Routes
const statusRoute = require('./routes/status');

//Routes
app.use('/api/status', statusRoute)
//Start server
app.listen(5000);