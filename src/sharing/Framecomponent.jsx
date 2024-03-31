import "./FrameComponent.css";
import { FaRegUser, FaLock } from "react-icons/fa";
import React, { useState } from 'react'
const FrameComponent = () => {
  const [email, seteemail] = useState('')
  const [password, setpassword] = useState('')
  const [Admin, setadmin] = useState('')
  const [Member, setmember] = useState('')
  const [File, setfile] = useState([])
  const loginHandler = () => {
    console.log(password, email)
    console.log(Admin,Member)
    
  }

  return (
    <div className="frame-group">
      <div className="sign-in-wrapper">
        <h1 className="sign-in">Sign in</h1>
      </div>
      <div className="frame-container">
        <div className="frame-div">
          <div className="rectangle-parent">
            <div className="frame-child" />
            <div className="icon-person-wrapper">
            <FaRegUser className="icon-person" />
            </div>
            <input className="username" placeholder="UserName" type="text" required onChange={(e) => {
              seteemail(e.target.value)
            }} />

          </div>
          <div className="rectangle-group">
            <div className="frame-item" />
            <FaLock className="icon-mail-outline" />
            <input className="frame-inner" placeholder="Password" type="text" required
              onChange={(e) => { setpassword(e.target.value) }} />
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-parent1">
            <div className="frame-parent2">
              <input className="rectangle-container-admin" value={'Admin'}  type="checkbox" onClick={(e) => { setadmin(e.target.value) }}  />
              <div className="member" >Admin</div>
            </div>

            <div className="frame-parent3">
              <input className="rectangle-container-member" value={'Member'} type="checkbox" onClick={(e) => { setmember(e.target.value) }} />
              <div className="member">Member</div>
            </div>

          </div>
        </div>
        <div className="frame-parent4">
          <input className="rectangle-container-file" type="file"
            onClick={(e) => { setfile(e.target.file) }} />

        </div>
        <div className="login-btn">
        <button className="btn" onClick={loginHandler}>Log in </button>
        </div>
      </div>
    </div>

  );
};
export default FrameComponent;