const express = require('express');
const dbConnect = require('./database/index');
const app = express();

const PORT = 5000;

dbConnect();

app.get('/', (req, res) => res.json({msg: 'Hello World! to say good'} ));

app.listen(PORT, console.log(`running on port: ${5000}`));