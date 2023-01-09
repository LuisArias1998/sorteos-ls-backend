require('./config/connection');

var express = require("express");
var bodyParser = require('body-parser')
var cors = require("cors");

const port = (process.env.port || 3200);

var app = express();

app.set('port', port)

app.use(bodyParser.json())
app.use(cors());
app.use(require('./route'))

app.listen(app.get('port'), (error) => { if (error) { console.log('Error starting server'); } else { console.log('Server on port: ' + port); } })
console.log('helos');