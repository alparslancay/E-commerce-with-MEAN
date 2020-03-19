'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var userModel = function() {
	var userSchema = Schema({
		_id : {type : Schema.Types.ObjectId, auto : true},
        e_mail: { type : String , required : true},
        password : {type : String, required : true},
        user_token : {type : Schema.Types.ObjectId, auto : true},
        role : {type: String, required : true},
        name : {type: String , required : true}
        
	});

	return mongoose.model('User', userSchema, 'users');
}


module.exports = new userModel();
