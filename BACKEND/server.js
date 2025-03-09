const express = require('express');
const dbConnect = require('./database/index');
const {PORT} = require('./config/index'); 
const router = require('./routes/index')
const app = express();

app.use(router);

dbConnect();

app.get('/', (req, res) => res.json({msg: 'Hello World! to say good as well'} ));

app.listen(PORT, console.log(`running on port: ${5000}`));