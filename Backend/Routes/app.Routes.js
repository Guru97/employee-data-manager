var express=require('express');
var Country=require('../model/country.schema');
var approutes=express.Router();

approutes.post('/create',(req,res,next)=>
{
    var newcountry=new Country({
        name:req.body.name,
        capital:req.body.capital
    });
    newcountry.save((err,country)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:country});
    });
});

approutes.get('/read',(req,res,next)=>{
        Country.find({},(err,country)=>{
            if(err)
                res.status(500).json({errmsg:err});
            res.status(200).json({msg:country});
        });
});

approutes.put('/update',(req,res,next)=>{
    Country.findById(req.body._id,(err,country)=>{
        if(err)
            res.status(500).json({errmsg:err});
        country.name=req.body.name;
        country.capital=req.body.capital;
        country.save((err,update)=>{
            if(err)
                res.status(500).json({errmsg:err});
            res.status(200).json({msg:update});
        });
    });
});

approutes.delete('/delete/:id',(req,res,next)=>{
    Country.findByIdAndRemove(req.params.id,(err,country)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:country});
    });
});

module.exports = approutes; 