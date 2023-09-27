const User = require('../../../schemas/users/users')
const express = require("express");
const router=express.Router()
const {createToken,stkPush}= require("../controllerSTK/stkcont")
const bcrypt = require('bcrypt')

async function postuser(req,res,next){
try {
    const saltrounds = 10
    const hashedPassword = await bcrypt.hash(req.body.password,saltrounds)
    const user = new User({
        firstname:req.body.firstname,
        secondname:req.body.secondname,
        email:req.body.email,  
        phonenumber:req.body.phonenumber.substring(1),
        password:hashedPassword,
        username:req.body.username
        })
        await user.save()
        next()   
} catch (error) { 
    res.json({error:"Error in posting"})
}
}  



 //login
 router.post('/login',async (req,res)=>{
try {
const inputpassword = req.body.password
const inputusername = req.body.username
const foundUser = await User.findOne({username:inputusername})
if(!foundUser){
 return res.json({error:"Username Not Found"})
}


const matchingPassword = await bcrypt.compare(inputpassword,foundUser.password[0])
if(!matchingPassword){
 return  res.json({error:'Invalid Password'})
}
else{
  return res.json({message:"matches"})
}



  
} catch (error) {
  res.json({error:'Internal Server Error'})
}





 })
























  


router.post("/register",createToken,postuser,stkPush) 

module.exports=router 