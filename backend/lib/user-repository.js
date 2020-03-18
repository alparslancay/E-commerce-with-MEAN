var userModel = require("../models/user-model");
var app = require('express')();

app.get('/api/users/find/tokenID/:tokenID', function(req,res){
    const tokenID = req.params.tokenID;
    query = {user_token : tokenID };

    userModel.findOne(query, (error,data)=>{

        if(error)
            console.log(error);

        res.end(JSON.stringify(data));
    })
});

app.get('/api/users/find/e-mail/:eMail/password/:password', function(req,res){

    const eMail = req.params.eMail;
    const password = req.params.password;
    query = {e_mail : eMail , password : password};

    userModel.findOne(query, (error,data)=>{

        if(error)
            throw error;
        console.log(data);
        res.end(JSON.stringify(data));
    })
});


module.exports = app;