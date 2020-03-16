var itemModel = require('../models/item-model');
var itemTypeModel = require('../models/item-type-model');
var app = require('express')();

app.get('/api/items/find/:itemTypeID', function(req, res) {
	
    const itemTypeID = req.params.itemTypeID;
    var itemTypes = [];
    queryItemTypeModel = {$or : [{parent_type : itemTypeID}, {_id : itemTypeID}]};
	itemTypeModel.find(queryItemTypeModel,{name : 0, parent_type : 0},(error,data)=>{
        if (error){
            throw error;
        }
        data.forEach(element => {
            itemTypes.push(element['_id']);
        });

        queryItem = {item_type :{ $in : itemTypes}};
        itemModel.find(queryItem,(error,data)=>{

        if (error){
            throw error;
        }
        res.end(JSON.stringify(data));
    });
        
    });
});

app.get('/api/items/count/:itemTypeID', function(req, res) {
	
    const itemTypeID = req.params.itemTypeID;
    var itemTypes = [];
    queryItemTypeModel = {$or : [{parent_type : itemTypeID}, {_id : itemTypeID}]};
	itemTypeModel.find(queryItemTypeModel,{name : 0, parent_type : 0},(error,data)=>{
        if (error){
            throw error;
        }
        data.forEach(element => {
            itemTypes.push(element['_id']);
        });

        queryItem = {item_type :{ $in : itemTypes}};
        itemModel.countDocuments(queryItem,(error,data)=>{

        if (error){
            throw error;
        }
        console.log(data);
        res.end(JSON.stringify(data));
    });
        
    });
});


module.exports = app;