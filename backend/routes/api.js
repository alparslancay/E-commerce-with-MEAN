var app = require('express')();

var modelFinder = require('../converters/model-finder');

app.get('/api/:collection', function(req, res) {
	
	const collection = req.params.collection;

	var model = modelFinder.findCollectionWithName(collection);
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

app.get('/api/:collection/:id', function(req, res) {
	const collection = req.params.collection;

	const id = req.params.id;
	var model = modelFinder.findCollectionWithName(collection);
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

app.get('/api/:collection/get/count', function(req, res) {
	const collection = req.params.collection;
	console.log("OK");
	var model = modelFinder.findCollectionWithName(collection);
	if(model != null){
	model.countDocuments({},(error,data)=>{
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

app.put('/api/:collection/update/:id', function(req,res){
	console.log("UPDATING");
	console.log(req.body);
	const collection = req.params.collection;
	var model = modelFinder.findCollectionWithName(collection);

	if(model!=null){
		var id = req.params.id;

		model.findByIdAndUpdate({_id : id},req.body,{useFindAndModify: false},(error,data)=>{
			if(error)
				throw(error);
		
			console.log(data);
			res.end(JSON.stringify(data));
			});
	}
	else{
		res.end("Wrong PUT Request!");
	}
});



module.exports = app;
