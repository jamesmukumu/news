import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../index.css";
import {BiSearch} from "react-icons/bi"
import {BiSolidUserCircle} from "react-icons/bi"
import { useAuth } from "../../authorization";
import { useNavigate } from "react-router-dom";
function Getlocalnews() {
  let navigate = useNavigate()
  const [newsInfo, setNewsinfo] = useState([]);
  const [errormsg, setErrormsg] = useState('');
  const {isAuthenticated} = useAuth()
  useEffect(() => {
    async function Getnews() {
      try {
        const response = await axios.get('https://news-qstz.onrender.com/get/allnews');
        if (response.data.message === 'News fetched') {
          setNewsinfo(response.data.data);
        } else {
          setNewsinfo([])
        }
      } catch (error) {
        setErrormsg('Internal Server Error');
      }  
    }
    Getnews();
  },[]);




  useEffect(()=>{
    if (!isAuthenticated) {
      navigate('/'); 
       
    }
  
  
  },[])






  return (
    <div className="container">
        
  <div className="colors-local">
    <div>
     <b className="nation" style={{fontFamily:"'Turret Road',cursive"}}>NATION</b>
    </div>

<div className="cont">
  
<div>
      <i>
      <BiSearch/>  
      Search
      </i>
    </div>




    <div>
      <i>
      <BiSolidUserCircle/>
      Log in
      </i>
    </div>

    <div>
    <i>
      <BiSolidUserCircle/>
      Sign up
      </i>
    </div>
</div>



 <div className="link">
<Link to='/athleticnews'><b>Athletics</b></Link>
<Link to='/footballnews'><b>Football</b></Link>
<Link to='/relationshipnews'><b>Relationship</b></Link>
<Link to='/healthnews'><b>Health</b></Link>

<Link to='/globalnews'><b>Global</b></Link>

 </div>

    </div>






      {newsInfo.map((item)=>(
        <div>
           <div>
           <h1 className="newsitem">{item.Imagetitle}</h1>
           </div>
            <div>
            <figcaption>Date of Publish: <span>{item.datePosted}</span></figcaption>
            </div>
        <div>
        <img src={item.Image} alt="" />
        </div>
         <div>
         <figcaption>{item.pageHeader}</figcaption>
         </div>
        <div className="newsitem">
        <strong>{item.news[0]}</strong>
        </div>
         <div className="newsitem">
         <strong>{item.news[1]}</strong>
         </div>
         <div className="newsitem">
         <strong>{item.news[2]}</strong>
         </div>
         <div className="newsitem">
         <strong>{item.news[3]}</strong>
         </div>
         <div className="newsitem">
         <strong>{item.news[4]}</strong>
         </div>
         <div className="newsitem">
         <strong>{item.news[5]}</strong>
         </div>
         <div className="newsitem">
         <strong>{item.news[6]}</strong>
         </div>
        <div>
            <strong className="strong">Related Global news</strong>
            
        </div>

        <div>
            <h1>{item.globalnews.Imagetitle}</h1>
        </div>
          <div>
            <img src={item.globalnews.Image} alt="" />
          </div>
          <div className="newsitem">
            <figcaption>{item.globalnews.pageHeader}</figcaption>
          </div>
          <div>
            <figcaption>Date Article was published:<span>{item.globalnews.datePosted}</span></figcaption>
          </div>
          <div className="newsitem">
            <strong>{item.globalnews.news[0]}</strong>
          </div>
          <div className="newsitem">
            <strong>{item.globalnews.news[1]}</strong>
          </div>
          <div className="newsitem">
            <strong>{item.globalnews.news[2]}</strong>
          </div>
          <div className="newsitem">
            <strong>{item.globalnews.news[3]}</strong>
          </div>
          <div className="newsitem">
            <strong>{item.globalnews.news[4]}</strong>
          </div>
          <div className="newsitem">
            <strong>{item.globalnews.news[5]}</strong>
          </div>
          <div className="newsitem">
            <strong>{item.globalnews.news[6]}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Getlocalnews
