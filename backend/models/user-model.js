'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var userModel = function() {
	var userSchema = Schema({
		_id : Schema.Types.ObjectId,
        e_mail: { type : String , required : true},
        password : {type : String, required : true},
        user_token : Schema.Types.ObjectId,
        role : {type: String, required : true},
        name : {type: String , required : true}
        
	});

	return mongoose.model('User', userSchema, 'users');
}


module.exports = new userModel();
