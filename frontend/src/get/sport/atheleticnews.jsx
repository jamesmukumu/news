import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../index.css";
import {BiSearch} from "react-icons/bi"
import {BiSolidUserCircle} from "react-icons/bi"


function Getathleticnews() {
  const [newsInfo, setNewsinfo] = useState([]);
  const [errormsg, setErrormsg] = useState('');

  useEffect(() => {
    async function Getnews() {
      try {
        const response = await axios.get('http://localhost:5000/get/allathleticnews');
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
     
  <div className="colors">
   
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
<b>Football</b>
<b>Relationship</b>
<b>Health</b>
<b>Local</b>
<b>Global</b>

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
            <strong className="strong">Related Football news</strong>
            
        </div>

        <div>
            <h1>{item.footballnews.Imagetitle}</h1>
        </div>
          <div>
            <img src={item.footballnews.Image} alt="" />
          </div>
          <div className="newsitem">
            <strong>{item.footballnews.pageHeader}</strong>
          </div>
          <div>
            <strong>Date Article was published:<span>{item.footballnews.datePosted}</span></strong>
          </div>
          <div className="newsitem">
            <strong>{item.footballnews.news[0]}</strong>
          </div>
          <div className="newsitem">
            <strong>{item.footballnews.news[1]}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Getathleticnews;











