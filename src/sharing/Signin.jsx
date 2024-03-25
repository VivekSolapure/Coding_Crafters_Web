import React from 'react';
import './Signin.css';
import { Link } from "react-router-dom";

import { FaRegUser, FaLock } from "react-icons/fa";
const SignIn = () => {
  return (
    <>
    <div className='signin_main'>
      <div className="signin_container">
        <div className='signin_image'>
          <h3 className='signin_msg'>Join our community  </h3>
          <h6 className='signin_tagline'> Unlock Your Coding   Potential </h6>
          <img className='signin_logo' src='logo.png' alt='logo'></img>
          <img className='signin_im1' src="circle1.png" alt="circle1"></img>
          <img className='signin_im2' src="circle2.png" alt="circle2"></img>

        </div>
        <div className='signin_wrapper'>
          <form action=''>
            <h1 className="signin_title">
              Sign in </h1>

            <div className="signin_input-box">
              <FaRegUser className="signin_icon1" />
              <input type="text" placeholder='Username' required />
            </div>

            <div className="signin_input-box2">
              <FaLock className="signin_icon2" />
              <input type="text" placeholder='Password' required />

            </div>
            <div className="signin_role-checkboxes">
              <label className='signin_cl'>
                <input type="checkbox" name="role" value="admin" />
                Admin
              </label>
              <label className='signin_cl'>
                <input type="checkbox" name="role" value="Member" />
                Member </label>
              <label className='signin_cl'>
                <input type="checkbox" name="role" value="Other" />
                Other
              </label>
            </div>
            <button className='signin_button' type="submit">Log in</button>
            <div className="signin_register-link">
              not yet registered ?
              <a href='#'> SignUp</a>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default SignIn;
