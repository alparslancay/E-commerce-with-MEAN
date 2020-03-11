'use strict';

var mongoose = require('mongoose');

var gameModel = function() {
	var gameSchema = mongoose.Schema({
		//_id : Number,
		category: String,
		description: String,
		name: String,
		price: Number,
		publisher: String,
	});

	return mongoose.model('game', gameSchema);
}


module.exports = new gameModel();
