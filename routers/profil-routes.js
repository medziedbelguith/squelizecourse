const express=require('express')
const route=express.Router()
const db=require('../models')

route.post('/createprofil',(req,res,next)=>{
 db.Profil.create({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    country:req.body.country,
    UserId:req.body.UserId

 }).then((response)=>res.status(200).send(response))
 .catch((err)=>res.status(400).send(err))
})
route.get('/profils',(req,res,next)=>{
    db.Profil.findAll({include:[db.User]})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})
route.get('/profil/:id',(req,res,next)=>{
    db.Profil.findOne({where:{id:req.params.id},include:[db.User]})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})
route.patch('/profil/:id',(req,res,next)=>{
    db.Profil.update({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        country:req.body.country,
        UserId:req.body.UserId    
     },{where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

route.delete('/profil/:id',(req,res,next)=>{
    db.Profil.destroy({where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

module.exports=route