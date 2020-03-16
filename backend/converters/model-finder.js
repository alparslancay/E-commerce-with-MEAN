var itemModel = require('../models/item-model');
var itemTypeModel = require('../models/item-type-model');
var publisherModel = require('../models/publisher-model');

models = [ 
    {collectionName : "items" , model : itemModel }, 
    {collectionName : "item-types", model : itemTypeModel},
    {collectionName : "publishers", model : publisherModel}

];

function findCollectionWithName(collectionName) {

    model = null;

    models.forEach(element => {
        if(element.collectionName == collectionName){
            model = element.model;
        }
    });

    return model;
}

module.exports = {
    findCollectionWithName : function(collectionName) { return findCollectionWithName(collectionName)}
};
