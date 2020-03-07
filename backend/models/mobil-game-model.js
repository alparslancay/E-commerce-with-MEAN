'use strict';

var mongoose = require('mongoose');

var mobilGameModel = function() {
	var mobilGameSchema = mongoose.Schema({
		//_id : Number,
		category: String,
		description: String,
		name: String,
		price: Number,
		publisher: String,
	});

	return mongoose.model('Mobil-Game', mobilGameSchema);
}


module.exports = new mobilGameModel();
