var app = require('express')();

var MobilGame = require('../models/mobil-game-model');

app.get('/api/mobilGames', function(req, res) {

MobilGame.find({},(error,data)=>{
	if (error){
		throw error;
	}

	console.log(data);
	res.end(JSON.stringify(data));
});
});

app.get('/api/mobilGames/:id', function(req, res) {
	const id = req.params.id;
	MobilGame.findById(id,(error,data)=>{
		if (error){
			throw error;
		}
	
		console.log(data);
		res.end(JSON.stringify(data));
	});
	});

app.get('/api/mobilGames/get/count', function(req, res) {
	MobilGame.count({},(error,data)=>{
		if (error){
			throw error;
		}
	
		console.log(data);
		res.end(JSON.stringify(data));
	});
	});

module.exports = app;
