var app = require('express')();

var MobilGame = require('../models/mobil-game-model');

app.get('/mobilGames', function(req, res) {

MobilGame.find({},(error,data)=>{
	if (error){
		throw error;
	}

	console.log(data);
	res.end(JSON.stringify(data));
});
});

module.exports = app;
