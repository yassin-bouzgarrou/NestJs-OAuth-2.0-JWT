import React from 'react';
import googleimg from "../assets/google.png";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {
    const google = () => {
      window.open("http://localhost:5000/auth", "_self");
    };
  

  
    return (
      <div className="login">
        <h1 className="loginTitle">Choose a Login Method</h1>
        <div className="wrapper">
          <div className="left">
            <div className="loginButton google" onClick={google}>
              <img src={googleimg} alt="" className="icon" />
              Google
            </div>
        
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button className="submit">Login</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  