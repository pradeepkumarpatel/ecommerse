const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
const routes = require('./routes/routes.js');
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.listen(4000, () => {
    console.log('listening on port 4000')
});

app.use('/', routes)
