var itemTypeModel = require('../models/item-type-model');
var app = require('express')();

app.get('/api/item-types/find/:name', function(req, res) {
	
    const reqName = req.params.name;
    
    query = {url_name : reqName};
    console.log(query);
	itemTypeModel.findOne(query,(error,data)=>{
	if (error){
		throw error;
    }
	res.end(JSON.stringify(data));
});
	

});

app.get('/api/item-types/get/parent-types', function(req,res){

    query = {parent_type : null}
    itemTypeModel.find(query,(error,data)=>{
        if(error){
            throw error;
        }
        console.log(data);
        res.end(JSON.stringify(data));
    })

});

module.exports = app;