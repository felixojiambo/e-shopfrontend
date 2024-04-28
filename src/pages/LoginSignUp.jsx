import React from "react";
import "./css/LoginSignUp.css";
import { useState } from "react";
const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const login =async()=>{
console.log("login function executed")
  }
  const signup =async()=>{
    console.log("Signup running")
  }
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        {" "}
        <h1>{state} </h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input type="tetx" placeholder="Your name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state === "Sign Up" ? 
          <p className="loginsignup-login">
            Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span>
          </p>
         : 
          <p className="loginsignup-login">
            Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span>
          </p>
        }
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continue, I agree to follow the terms and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
