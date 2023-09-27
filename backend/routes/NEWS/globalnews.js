const express = require('express')
const  globalnews = require('../../schemas/news/globalschema')
const router = express.Router()


//post
router.post('/post/globalnews',async(req,res)=>{
try {
const Globalnews = new globalnews({
Image:req.body.Image,
Imagetitle:req.body.Imagetitle,
pageHeader:req.body.pageHeader,
news:req.body.news,
localnews:req.body.localnews
})
await Globalnews.save()
res.json({message:'posted'})
  
} catch (error) {
   res.json({error:'Error'}) 
}


})





//get all news
router.get('/get/allglobalnews',async(req,res)=>{
try {

    const alllglobalnews = await globalnews.find().populate('localnews')
    res.status(200).json({message:"News fetched",data:alllglobalnews})
    
} catch (error) {
    res.json({error:'error '})
}






})


module.exports = router