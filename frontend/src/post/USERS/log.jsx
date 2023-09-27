import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsAsterisk } from "react-icons/bs";
import {useAuth} from "../../authorization"

function Postlogin() {
  let navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const {setIsAuthenticated} = useAuth()

  async function PostLOGIN(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username: Username,
        password: Password,
      });

      if (response.data.error === "Username Not Found") {
        setMsg("Username Not Found");
      }
      if (response.data.error === "Invalid Password") {
        setMsg("Invalid Password or Username...Try again");
      }
      if (response.data.message === "matches") {  
        setIsAuthenticated(true)
        navigate("/login");
      }
    } catch (error) {
      setMsg("Internal Server Error");
    }
  }

  return (
    <div>
       <h2>NATION AFRICA</h2>
      <strong>LOG IN</strong>
      <form onSubmit={PostLOGIN}>
        <div>
          <div className="input-with-asterisk">
            <BsAsterisk className="asterisk" />
            <input
              type="text"
              required
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="input-with-asterisk">
            <BsAsterisk className="asterisk" />
            <input
              type="password"
              required
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <p className="error">{msg}</p>
        <button>Log in</button>
       
      </form>
      <Link to="/register" className="link">
          <strong>Register</strong>
        </Link>
      <div>
      <strong className="mes">
        <BsAsterisk />
        Fill Out marked fields
      </strong>
      </div>
    </div>
  );
}

export default Postlogin;
