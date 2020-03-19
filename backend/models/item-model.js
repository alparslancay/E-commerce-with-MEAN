'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var itemModel = function() {
	var itemSchema = Schema({
		_id: {type : Schema.Types.ObjectId, auto : true},
		item_type : { type: Schema.Types.ObjectId, ref: 'ItemType'},
		description: { type : String, required: true },
		name: { type : String, required: true, trim: true },
		price: { type : Number, required: true, trim: true },
		publisher: {type : Schema.Types.ObjectId, required : true, ref : 'Publisher'},
		image : {type : String, default : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaE7M3DhLiOd-nT-6dY52HnzNUhiadlramkpN2S2DbhQuuiYv8"}
	});

	return mongoose.model('Item', itemSchema, 'items');
}


module.exports = new itemModel();
