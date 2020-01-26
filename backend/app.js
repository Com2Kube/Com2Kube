const express = require('express');
const cors = require('cors');


const app = express();

// Enable cors
app.use(cors());

// Import Routes
const statusRoute = require('./routes/status');
const composeRoute = require('./routes/compose');
const sampleRoute = require('./routes/sample')

// Routes
app.use('/api/status', statusRoute);
app.use('/api/compose', composeRoute);
app.use('/api/sample', sampleRoute);

// Start server
app.listen(5000);