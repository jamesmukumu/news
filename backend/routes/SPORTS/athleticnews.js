const express = require('express')
const  Athleticnews = require('../../schemas/sports/athleticschema')
const router = express.Router()


//post
router.post('/post/athleticnews',async(req,res)=>{
try {
const athleticnews = new Athleticnews({
Image:req.body.Image,
Imagetitle:req.body.Imagetitle,
pageHeader:req.body.pageHeader,
news:req.body.news,  
footballnews:req.body.footballnews
})
await athleticnews.save()
res.json({message:'posted'})
  
} catch (error) {
   res.json({error:'Error'}) 
}


})  



  

//get all news
router.get('/get/allathleticnews',async(req,res)=>{
try {

    const allathleticnews = await Athleticnews.find().populate('footballnews')
    res.status(200).json({message:'News fetched',data:allathleticnews})
    
} catch (error) {
    res.json({error:'error '})
} 



   


})


module.exports = router