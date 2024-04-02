import React from "react";
import './LogininfoCard.css'
const LogininfoCard = () => {
    return (
        <>
      <section className="card_sub-header-component-parent">
        <div className="card_sub-header-component">
          <div className="card-welcome-to-the-community-parent">
            <p className="card_welcome-to-the-container">
            <span>Welcome to the Community</span>
            </p>
            
          </div>
        </div>
        <div className="card_profile-message-area">
          <div className="card_profile-message-area-child" />
          <div className="hey-now-container">
            <span className="hey-now-container1">
              <p className="hey">Hey !</p>
              <p className="now-can-access">{`Now Can access the this application as per your position norms `}</p>
            </span>
          </div>
          <div className="log-out-button">
            <div className="name-role-container">
              <span className="name-role-container1">
                
              </span>
            </div>
            <div className="log-out-button-inner">
              <button className="card_rectangle-parent">
                <div className="frame-child" />
                <div className="log-out">Log Out</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}
export default LogininfoCard;