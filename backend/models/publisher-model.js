'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var publisherModel = function() {
	var publisherSchema = Schema({
		_id : Schema.Types.ObjectId,
		name: { type : String , required: true}
        
	});

	return mongoose.model('Publisher', publisherSchema, 'publishers');
}


module.exports = new publisherModel();
