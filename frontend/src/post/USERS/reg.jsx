import React from "react";
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsAsterisk } from "react-icons/bs";
import { useAuth } from "../../authorization";
 
function Postuser(){
let navigate = useNavigate()
const [checkboxischecked,setCheckbox] = useState(false)
const [Firstname,setFirtstname] = useState('')
const [Secondname,setSecondname] = useState('')
const [Password,setPassword] = useState('')
const [Email,setEmail] = useState('')
const [successmsg,setSuccessmsg] = useState('')
const [Phonenumber,setPhonenumber] = useState('')
const [Username,setUsername] = useState('')
const {setIsAuthenticated} = useAuth()
async function PostUSER(e){
e.preventDefault()
try {
    const response = await axios.post('http://localhost:5000/register',{
firstname:Firstname,
secondname:Secondname,
email:Email,
phonenumber:Phonenumber,
password:Password,
username:Username
})


if(response.data.CustomerMessage ==="Success. Request accepted for processing"){
setSuccessmsg('STK Made')
navigate('/')
setIsAuthenticated(true)
}
else{
    setSuccessmsg('Nt done')
}
} catch (error) {
   setSuccessmsg('Internal Server Error') 
}


}

return(
    <div>
        <header>
            <strong>REGISTER FOR NATION AFRICA</strong>
        </header>
     <form onSubmit={PostUSER}>
    <div>
    <input type="text" required onChange={(e)=>setFirtstname(e.target.value)}  placeholder="Enter firstname"/>
    </div>
    
    <div>
    <input type="text" required onChange={(e)=>setSecondname(e.target.value)}  placeholder="Enter Secondname"/>
    </div>
    

    <div>
    <input type="email" required onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Email"/>
    </div>
    

    <div>
    <input type="password" required onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter Password"/>
    </div>
    <div>
    <input type="number" required onChange={(e)=>setPhonenumber(e.target.value)} placeholder="Enter Phone number" />
    </div>
    <div>

    <div>
    <input type="text" required onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Username" />
    </div>

<input type="checkbox" onChange={(e)=>setCheckbox(e.target.checked)}/>
  <label style={{ fontFamily :"'Qwigley',cursive"}}>I {Firstname} {Secondname} have read and accepted the terms and conditions of NATION AFRICA</label>
    </div>
    

   <button disabled={!checkboxischecked}>Register</button>
  <p className="error">{successmsg}</p>

     </form>
 <strong className="caution"><BsAsterisk/>Upon Registration a payment of SH10 will be required and an stk push will be sent to the phonenumber({Phonenumber})</strong>



<div>
<Link to='/'><strong className="t">Log in</strong></Link>
</div>
    </div>
)


}

export default Postuser