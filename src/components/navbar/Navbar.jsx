import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <>

      <div className="nav-container">
        <div className="nav">
          <div className="title">
            <Link to="/"><p>Coding <br /> Crafters</p></Link>
          </div>

          <div>
            <input type="checkbox" id="hamburger-toggle" className="hamburger-checkbox" />
            <label htmlFor="hamburger-toggle" className="hamburger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </label>

          <div className="div-item">
            <div className="items item1">
              <Link className="itemss" to="/">Home</Link>
            </div>
            <div className="items item2">
              <Link className="itemss" to="/events">Events</Link>
            </div>
          

            <div className="items profile_item">
            <Link to="/authen">  <img className="profile-pic" src="./profile-pic.png" alt="" /></Link>
            </div>
          </div>
        </div>


      </div>
      </div>


    </>
  );
};
export default Navbar;
Navbar.proptype = {
  Title: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  Title: "Coding Crafters",
  post: "Post",
};
