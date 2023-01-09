require('./config/connection');

var express = require("express");
var bodyParser = require('body-parser')
var cors = require("cors");

const port = (process.env.port || 3200);

var app = express();

app.set('port', port)

app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(require('./route'))

app.listen(app.get('port'), (error) => { if (error) { console.log('Error starting server'); } else { console.log('Server on port: ' + port); } })
console.log('helos');