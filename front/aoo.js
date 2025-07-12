const express=require('express');
const app=express();
app.arguments((req,res)=>{
    res.json({message:'Votre requette à été bien recu !'});
});

module.exports = app
