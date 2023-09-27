const express = require('express')
const  Footballnews = require('../../schemas/sports/footballschema')
const router = express.Router()


//post
router.post('/post/footballnews',async(req,res)=>{
try {
const footballnews = new Footballnews({
Image:req.body.Image,
Imagetitle:req.body.Imagetitle,
pageHeader:req.body.pageHeader,
news:req.body.news,  
Athleticnews:req.body.Athleticnews
})
await footballnews.save()
return res.json({message:'posted'})
  
} catch (error) {
   res.json({error:'Error'}) 
}


})      
 
 
 
      
   
//get all news  
router.get('/get/allfootballnews',async(req,res)=>{
try {
  
    const allfootballnews = await Footballnews.find().populate('Athleticnews')
    res.status(200).json({message:'News fetched',data:allfootballnews})
    
} catch (error) {
    res.json({error:'error '})
}






})


module.exports = router