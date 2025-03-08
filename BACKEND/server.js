const express = require('express');
const dbConnect = require('./database/index');
const {PORT} = require('./config/index'); 

const app = express();



dbConnect();

app.get('/', (req, res) => res.json({msg: 'Hello World! to say good'} ));

app.listen(PORT, console.log(`running on port: ${5000}`));