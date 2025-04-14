import {useState} from "react"
import React from 'react';
function Login(){
   
    const [username,setUsername]=useState("")
  return (
    <div>
      <h1>Welcome Back!</h1>
      <p>Where the blossoms greet your return</p>
      <div>
        <label>Email</label>
        <br></br>
        <input type="text" placeholder="Enter your Email" onChange={(e)=>{
          setUsername(e.target.value)
        }} value={username}/>
      </div>
      <br></br>
      <div>
        <label>Password</label>
        <br></br>
        <input type="password" placeholder="Password" />
      </div>
      <br></br>
      <div className="forgot">
        <label className="remember">
          <input className="check" type="checkbox" value="yes" />
          Remember me
        </label>
        <a href="https">Forgot Password?</a>
      </div>
      <button className="btn">Log in</button>
      <hr></hr>
      <footer>
        <span>
          Dont have an account? <a href="https">Sign Up</a>
        </span>
      </footer>
    </div>
  );

}
export default Login;