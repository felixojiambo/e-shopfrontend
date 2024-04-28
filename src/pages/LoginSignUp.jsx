import React from 'react'
import './css/LoginSignUp.css'
const LoginSignUp = () => {

  const [state,setState]=useState("Login")
  return (
    <div className="loginsignup">

      <div className="loginsignup-container"> <h1>{state} </h1>
      
      <div className="loginsignup-fields">
        <input type="tetx" placeholder="Your name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
      </div>
      <button>Continue</button>

      <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p>By continue, I agree to follow the terms and privacy policy</p>
      </div>
       </div>
    </div>
  )
}

export default LoginSignUp