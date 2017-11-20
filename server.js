const PORT = 3000 || PROCESS.ENV.PORT;
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const express = require('express');
const app = express();

//serve static files
app.use(express.static('dist'));
app.use(bodyParser.json());

//database connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'YES',
  password: '',
  database: 'composers'
})

//Server setup with express -- see lines 6 & 7
app.listen(3000, () => {
  console.log('listening on port ' + PORT);
})
