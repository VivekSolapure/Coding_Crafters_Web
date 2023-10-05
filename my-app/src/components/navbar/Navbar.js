import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link} from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(true);
  const togbtn = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="nav-container">

        <div className="nav">
          <div className="title">
            <Link to="/"><p>{props.Title}</p></Link> 
          </div>
          <div className="toggle-btn" onClick={togbtn}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          {toggle && (
            <>
              <div className={`navUL ${togbtn?'animate': ''}`} id="nav1">
                <ul className="ul-item">
                  <li className="items" >
                    <Link to="./post"> {props.post}</Link>
                  </li>
                  <li className="items">
                    <Link className="items" to="/inbox">{props.inbox}</Link>
                  </li>     
                  <li className="items">
                    <Link className="items" to="/test1">Test1</Link>
                  </li>    
                  <li className="items">
                    <Link className="items" to="/test2aa">Test2</Link>
                  </li>         
                </ul>
              </div>
            </>
          )}
          {toggle && (
            <div className="img">
              <img className="profile-pic" src="./profile-pic.png" alt="" />
            </div>
          )}
        </div>
      </div>

    </>
  );
};
export default Navbar;
Navbar.proptype = {
  Title: PropTypes.string.isRequired,
  community: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  inbox: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  Title: "Coding Crafters",
  community: "Community",
  post: "Post",
  inbox: "Inbox",
};
