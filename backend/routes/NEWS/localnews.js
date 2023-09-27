const express = require('express')
const  Localnews = require('../../schemas/news/localschema')
const router = express.Router()


//post
router.post('/post/localnews',async(req,res)=>{
try {
const localnews = new Localnews({
Image:req.body.Image,
Imagetitle:req.body.Imagetitle,
pageHeader:req.body.pageHeader,
news:req.body.news,
globalnews:req.body.globalnews
})
await localnews.save()
res.json({message:'posted'})
  
} catch (error) {
   res.json({error:'Error'}) 
}

 
})

 
//filtering using regex




  



//get all news
router.get('/get/allnews',async(req,res)=>{
try {

    const alllocalnews = await Localnews.find().populate('globalnews')
    res.status(200).json({message:'News fetched',data:alllocalnews}) 
    
} catch (error) {
    res.json({error:'error '})
}

 




})


module.exports = router