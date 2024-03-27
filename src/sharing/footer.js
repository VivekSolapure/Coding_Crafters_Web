import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer_footer-start'>
            <footer className="footer_page-footer">
                <div className="footer_top">
                    <div className='footer_main'>
                        <div className='footer_List1'>
                            <div className='footer_logo'>
                                <img src='logo.png'></img>
                                <div class="titles">
                                    <h1 id='first'>Coding Crafters</h1>
                                    <h2 id='second'>Community|Enthusiam|Knowledge</h2>
                                </div>
                            </div>
                        </div>
                        <div className="footer_links">
                            <div className="footer_one">
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
                        <div className='footer_links'>
                            <div class="two">
                                <div>
                                    Connect with us to share progress <br />and  productivity :
                                </div>
                                <div className='footer_icon'>
                                    <div className='footer_mail'>
                                        <img className='footer_gmail' src='gmail.png'></img>
                                    </div>
                                    <div className='footer_lkn'>
                                        <img className='footer_linkedin' src='linkedin.png'></img>
                                    </div>
                                    <div className='footer_github'>
                                        <img className='footer_git' src='git.png'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer_links' >
                            <div class="three">
                                <div>
                                    Give us your important perspective . <br />Please take a moment to share your feedback

                                </div>
                                <div >
                                    <button className='footer_btn'>FEEDBACK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer-Bottom */}
                <div className='footer_footer-bottom'>
                    <div className='footer_bottom'>
                        Copyright © 2023 Coding Crafters
                        <br /> FAQ | Archieve
                    </div>
                </div>
            </footer >
        </div>
    )

}

export default Footer;