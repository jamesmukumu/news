import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Postlocalnews from "./post/NEWS/localnews";
import Postglobalnews from "./post/NEWS/globalnews";
import Posthealthnews from "./post/LIFESTYLE/healthnews";
import PostFootballnews from "./post/SPORTS/footballnews";
import PostRnews from "./post/LIFESTYLE/Rnews";
import Postathleticnews from "./post/SPORTS/athleticnews";
import Getathleticnews from "./get/sport/atheleticnews";
import Getfootballnews from "./get/sport/footballnews";
import Getlocalnews from "./get/news/localnews";
import Getglobalnews from "./get/news/globalnews";
import Gethealthnews from "./get/lifestyle/health";
import Getrelationshipnews from "./get/lifestyle/Relationship";
import Postuser from "./post/USERS/reg";
import Notfound from "./404";
import Postlogin from "./post/USERS/log";
import { AuthProvider } from "./authorization";

function App(){
  return(
    <div>
      <AuthProvider>
      <BrowserRouter>
       <Routes>
      
       <Route path="*" element={<Notfound/>}/>
       <Route path="/" element={<Postlogin/>}/>
       <Route path="/register" element={<Postuser/>}/>
       <Route path="/local" element={<Getlocalnews/>}/>
       <Route path="/footballnews" element={<Getfootballnews/>}/>
       <Route path="/athleticnews" element={<Getathleticnews/>}/>
       <Route path="/globalnews" element={<Getglobalnews/>}/>
       <Route path="/healthnews" element={<Gethealthnews/>}/>
       <Route path="/relationshipnews" element={<Getrelationshipnews/>}/>
       
{/* 

       post */}

      <Route path="/postathletic" element={<Postathleticnews/>}/>
      <Route path="/postfootball" element={<PostFootballnews/>}/>
      <Route path="/postglobal" element={<Postglobalnews/>}/>
      <Route path="/postlocal" element={<Postlocalnews/>}/>
      <Route path="/posthealth" element={<Posthealthnews/>}/>
      <Route path="/postrelationship" element={<PostRnews/>}/>

       </Routes>







      </BrowserRouter>






























      </AuthProvider>

      
    </div>
  )
}

export default App