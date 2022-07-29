const express=require('express')
const route=express.Router()
const db=require('../models')

route.post('/createproduct',(req,res,next)=>{
 db.Product.create({
    name:req.body.name,
    price:req.body.price,
    UserId:req.body.UserId

 }).then((response)=>res.status(200).send(response))
 .catch((err)=>res.status(400).send(err))
})
route.get('/products',(req,res,next)=>{
    db.Product.findAll({include:[db.User]})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})
route.get('/product/:id',(req,res,next)=>{
    db.Product.findOne({where:{id:req.params.id},include:[db.User]})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})
route.patch('/product/:id',(req,res,next)=>{
    db.Product.update({
        name:req.body.name,
        price:req.body.price,
        UserId:req.body.UserId    
     },{where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

route.delete('/product/:id',(req,res,next)=>{
    db.Product.destroy({where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

module.exports=route