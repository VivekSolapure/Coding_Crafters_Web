import React from 'react';
import FrameComponent from'./Framecomponent';
import './Signin.css';
import { Link } from "react-router-dom";


const SignIn = () => {
  return (
    <>
    <div className="signin-35">
      <div className="frame-parent">
        <div className="join-our-community-parent">
          <h1 className="join-our-community-container">
            <span>{`Join Our `}</span>
            <span className="community">Community</span>
          </h1>
          <div className="logo-1-parent">
            <img className="logo-1-icon" alt="" src="/logo.png" />
            <img
              className="icon-settings"
              loading="lazy"
              alt=""
              src="circle1.png"
            />
            <img
              className="icon-settings1"
              alt=""
              src="/circle2.png"
            />
          </div>
        </div>
        <div className="unlock-your-coding-potentials-wrapper">
          <h1 className="unlock-your-coding-container">
            <span className="unlock">Unlock</span>
            <span>{` your `}</span>
            <span className="coding">coding</span>
            <span>{` `}</span>
            <span className="potentials">potentials</span>
          </h1>
        </div>
      </div>
      <div className="desktop-35-inner">
        <FrameComponent />
      </div>
    </div>
    </>
  );
};

export default SignIn;
