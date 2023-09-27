const express = require('express')
const  Relationshipnews = require('../../schemas/lifestyle/relationshipschema')
const router = express.Router()


//post
router.post('/post/relationshipnews',async(req,res)=>{
try {
const relationshipnews = new Relationshipnews({
Image:req.body.Image,
Imagetitle:req.body.Imagetitle,
pageHeader:req.body.pageHeader,
news:req.body.news,
healthnews:req.body.healthnews
})
await relationshipnews.save()
res.json({message:'posted'})
  
} catch (error) {
   res.json({error:'Error'}) 
}


})  





//get all news
router.get('/get/allrelationshipnews',async(req,res)=>{
try {

    const allrelationshipnews = await Relationshipnews.find().populate('healthnews')
    res.status(200).json({message:'News fetched',data:allrelationshipnews})
    
} catch (error) {
    res.json({error:'error '})
}






})


module.exports = router