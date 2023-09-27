import React from "react";
import axios from "axios"
import { useState } from "react";



function Posthealthnews(){
const [imageurl,setImageurl] = useState('')
const [imagetitle,setImagetitle] = useState('')
const [pageheader,setPageheader] = useState('')
const  [News,setNews] = useState('')
const [relationshipnewsid,setRnewsid] = useState('')
const [successmessage,setSuccessmessage] = useState('')
const [errormessage,setErrormessage] = useState('')


async function Postnews(e){
e.preventDefault()
try {
const response = await axios.post('http://localhost:5000/post/healthnews',{
Image:imageurl,
Imagetitle:imagetitle,
pageHeader:pageheader,
news:News.split('\n'),
relationshipnews:relationshipnewsid

})
if(response.data.message==='posted'){
setSuccessmessage('News posted')
}
else{
    setErrormessage('News Not Posted try again later')
}

    
} catch (error) {
    setErrormessage('Internal server error')
}


}

return(
<div>
    <strong>POST HEALTH NEWS</strong>
<form onSubmit={Postnews}>
<div>
<textarea  onChange={(e)=>setImageurl(e.target.value)} placeholder="Enter Image URL" required></textarea>
</div>



<div>
<textarea  onChange={(e)=>setImagetitle(e.target.value)} placeholder="Enter Image Title" required></textarea>
</div>



<div>
<textarea  onChange={(e)=>setPageheader(e.target.value)} placeholder="Enter PageHeader" required></textarea>
</div>


<div>
<textarea  onChange={(e)=>setNews(e.target.value)} placeholder="Enter News" required></textarea>
</div>


<div>
<textarea  onChange={(e)=>setRnewsid(e.target.value)} placeholder="Enter RelationshipnewsID" ></textarea>
</div>






<button>Post news</button>
<p>{successmessage}</p>
<p>{errormessage}</p>
</form>

</div>






)





}

export default Posthealthnews