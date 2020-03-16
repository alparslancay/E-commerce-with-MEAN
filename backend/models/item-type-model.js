'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var itemTypeModel = function() {
	var itemTypeSchema = Schema({
		_id : Schema.Types.ObjectId,
		name: { type : String , required: true},
        parent_type :  {type: Schema.Types.ObjectId, ref: 'ItemType'}
        
	});

	return mongoose.model('ItemType', itemTypeSchema, 'item_types');
}


module.exports = new itemTypeModel();
