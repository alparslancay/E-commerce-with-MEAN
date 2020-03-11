var app = require('express')();

var modelFinder = require('../converters/model-finder');

app.get('/api/:category', function(req, res) {
	
	const category = req.params.category;

	var model = modelFinder.findModuleWithCategory(category);
	if ( model != null){
	model.find({},(error,data)=>{
	if (error){
		throw error;
	}
	res.end(JSON.stringify(data));
});
	}

	else{
		res.end("Wrong GET Request!");
	}
});

app.get('/api/:category/:id', function(req, res) {
	const category = req.params.category;
	const id = req.params.id;
	var model = modelFinder.findModuleWithCategory(category);
	if(model !=null){
	model.findById(id,(error,data)=>{
		if (error){
			throw error;
		}
	
		console.log(data);
		res.end(JSON.stringify(data));
	});
	}

	else{
		res.end("Wrong GET Request!");
	}
	});

app.get('/api/:category/get/count', function(req, res) {
	const category = req.params.category;

	var model = modelFinder.findModuleWithCategory(category);
	if(model != null){
	model.count({},(error,data)=>{
		if (error){
			throw error;
		}
	
		console.log(data);
		res.end(JSON.stringify(data));
	});
	}
	else{
		res.end("Wrong GET Request!");
	}
	});

module.exports = app;
