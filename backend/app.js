const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

// Enable Express
const app = express();
// Enable Body Parser for Text
app.use(bodyParser.text());
// app.use(bodyParser.urlencoded({ extended: false }))

// Enable cors
app.use(cors());

// Enable compression
app.use(compression());

// Enable Helmet for security
app.use(helmet());

// Import Routes
const statusRoute = require('./routes/status');
const composeRoute = require('./routes/compose');
const sampleRoute = require('./routes/sample');
const downloadRoute = require('./routes/download');

// Routes
app.use('/api/status', statusRoute);
app.use('/api/compose', composeRoute);
app.use('/api/sample', sampleRoute);
app.use('/api/download', downloadRoute);

// Start server
app.listen(5000);
