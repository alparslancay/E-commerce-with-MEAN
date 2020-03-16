var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require ('./lib/db.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.all('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(require('./routes/api'));
app.use(require('./lib/item-repository'));
app.use(require('./lib/item-type-repository'));
var port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log("Listening to port " + port);
});
