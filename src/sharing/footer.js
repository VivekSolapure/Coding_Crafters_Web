import React from 'react'
import './footer.css'

function Footer() {
    return(
<div className='footer-start'>
        <footer className="page-footer">
            <div className="top">
                <div className='main'>
                    <div className='List1'>
                        <div className='logo'>
                            <img src='./images/logo.png'></img>
                            <div class="titles">
                                <h1 id='first'>Coding Crafters</h1>
                                <h2 id='second'>Community|Enthusiam|Knowledge</h2>
                            </div>
                        </div>
                    </div>
                    <div class="links">
                        <div class="one">
                            <div>
                                <a >About us </a>
                            </div>
                            <div>
                                <a >Gallery</a>
                            </div>
                            <div>
                                <a>Event</a>
                            </div>
                        </div>
                    </div>
                    <div className='links'>
                        <div class="two">
                            <div>
                                Connect with us to share progress <br />and  productivity :
                            </div>
                            <div className='icon'>
                                <div className='mail'>
                                    <img className='gmail' src='./images/gmail.png'></img>
                                </div>
                                <div className='lkn'>
                                    <img className='linkedin' src='./images/linkedin.png'></img>
                                </div>
                                <div className='github'>
                                    <img className='git' src='./images/git.png'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='links' >
                        <div class="three">
                            <div>
                                Give us your important perspective . <br />Please take a moment to share your feedback

                            </div>
                            <div >
                                <button className='btn'>FEEDBACK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer-Bottom */}
            <div className='footer-bottom'>
                <div className='bottom'>
                    Copyright © 2023 Coding Crafters
                    <br /> FAQ | Archieve
                </div>
            </div>
        </footer >
    </div>
    )
    
}

export default Footer;