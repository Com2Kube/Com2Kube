const express = require('express');

const app = express();

//Routes
app.get('/', (req,res) => {
    res.send('Backend here');
})

//Start server
app.listen(5000)