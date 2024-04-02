import React from "react";
import './Logininfo.css'
import LogininfoCard from './LogininfoCard';

const Logininfo=()=>{
return(<>
 <div className="Main-logged">
      <div className="header-container-log">
        <img
          className="logo-1-icon"
          alt="logo"
          src="/logo.png"
        />
      </div>
      <div className="coding-crafters-content">
        <div className="coding-crafters-txt">
          <b>Coding</b>
          <span className="crafters-txt"> Crafter’s</span>
        </div>
      </div>
      <LogininfoCard />
    </div>
</>
)
}
export default Logininfo;