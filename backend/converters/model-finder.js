var gameModel = require('../models/game-model');

models = [ {categoryName : "games" , model : gameModel }];

function findModuleWithCategory(categoryName) {

    model = null;

    models.forEach(element => {
        if(element.categoryName == categoryName){
            model = element.model;
        }
    });

    return model;
}

module.exports = {
    findModuleWithCategory : function(categoryName) { return findModuleWithCategory(categoryName)}
};
