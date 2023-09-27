const express = require('express')
const  Healthnews = require('../../schemas/lifestyle/healthschema')
const router = express.Router()


//post
router.post('/post/healthnews',async(req,res)=>{
try {
const healthnews = new Healthnews({
Image:req.body.Image,
Imagetitle:req.body.Imagetitle,
pageHeader:req.body.pageHeader,
news:req.body.news,  
relationshipnews:req.body.relationshipnews
})
await healthnews.save()
res.json({message:'posted'})
  
} catch (error) {
   res.json({error:'Error'}) 
}


})  





//get all news
router.get('/get/allhealthnews',async(req,res)=>{
try {

    const allhealthnews = await Healthnews.find().populate('relationshipnews')
    res.status(200).json({message:'News fetched',data:allhealthnews})
    
} catch (error) {
    res.json({error:'error '})
}






})


module.exports = router