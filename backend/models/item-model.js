'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var itemModel = function() {
	var itemSchema = Schema({
		_id: Schema.Types.ObjectId,
		item_type : { type: Schema.Types.ObjectId, ref: 'ItemType'},
		description: { type : String, required: true },
		name: { type : String, required: true, trim: true },
		price: { type : Number, required: true, trim: true },
		publisher: {type : Schema.Types.ObjectId, required : true, ref : 'Publisher'},
	});

	return mongoose.model('Item', itemSchema, 'items');
}


module.exports = new itemModel();
