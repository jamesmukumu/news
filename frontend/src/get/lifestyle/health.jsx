import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../index.css";
import {BiSearch} from "react-icons/bi"
import {BiSolidUserCircle} from "react-icons/bi"
import { Link } from "react-router-dom";

function Gethealthnews() {
  const [newsInfo, setNewsinfo] = useState([]);
  const [errormsg, setErrormsg] = useState('');

  useEffect(() => {
    async function Getnews() {
      try {
        const response = await axios.get('http://localhost:5000/get/allhealthnews');
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

  return (
    <div className="container">
        
  <div className="colors-global">
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
 <Link to='/relationshipnews'><b>Rekationship</b></Link>
 <Link to='/globalnews'><b>Global</b></Link>
 <Link to='/'><b>Local</b></Link>
 <Link to='/footballnews'><b>Football</b></Link>


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


        <div>
            <strong className="strong">Related Relationship news</strong>
            
        </div>

        <div>
            <h1>{item.relationshipnews.Imagetitle}</h1>
        </div>
          <div>
            <img src={item.relationshipnews.Image} alt="" />
          </div>
          <div className="newsitem">
            <strong>{item.relationshipnews.pageHeader}</strong>
          </div>
          <div>
            <strong>Date Article was published:<span>{item.relationshipnews.datePosted}</span></strong>
          </div>
          <div className="newsitem">
            <strong>{item.relationshipnews.news[0]}</strong>
          </div>
          <div className="newsitem">
            <strong>{item.relationshipnews.news[1]}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gethealthnews 
