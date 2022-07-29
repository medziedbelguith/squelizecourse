const express=require('express')
const route=express.Router()
const db=require('../models')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const userController=require('../controllers/usercontroller')
route.post('/register',(req,res,next)=>{
 userController.register(req.body.username,req.body.email,req.body.password)
 .then((response)=>res.status(200).json(response))
 .catch((err)=>res.status(400).json(err))

}) 
route.post('/login',(req,res,next)=>{
    userController.login(req.body.email,req.body.password)
    .then(token=>res.status(200).json({token:token}))
    .catch(err=>res.status(400).json({err:err}))
})
route.get('/users',(req,res,next)=>{
    db.User.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})
route.get('/user/:id',(req,res,next)=>{
    db.User.findOne({where:{id:req.params.id},include:[db.Profil,db.Product]})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})
route.patch('/user/:id',(req,res,next)=>{
    db.User.update({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    
     },{where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

route.delete('/user/:id',(req,res,next)=>{
    db.User.destroy({where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

module.exports=route