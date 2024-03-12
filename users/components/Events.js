import React from 'react'
import './Events.css'

const Events = () => {
    return (<>
        <div className="event_glow_up" />
        <div className="event_pg_holder0">
            <div className="event_pg_holder">
                <div className="event_headings">
                    <div className="event_heading">Upcoming Events</div>
                    <div className="eventhd_dscrptn">
                        Take inspiration from these incredible events and feel free to join
                    </div>
                </div>
                <div className="event_container1">
                    <div className="event_container">
                        <div className="event_image"> <img className="event_image" src="./cloud_img.png" alt="" /></div>

                        <div className="event_dscrptn">
                            <div className="event_dscrptn_heading">Cloud & Backend Essentials</div>
                            <div className="event_dscrptn_para">Join us for an insightful session delving into the pivotal domains of backend services and cloud technology. From the fundamental underpinnings to the latest advancements in AWS, Azure, and beyond, this session offers a comprehensive overviewRegister here...</div>
                        </div>
                        

                    </div>
                    <div >
                            <svg className="event_glow_in_EvnCard" xmlns="http://www.w3.org/2000/svg" width="765" height="731" viewBox="0 0 765 731" fill="none">
                                <g filter="url(#filter0_f_1096_183)">
                                    <path d="M556.976 300.967C621.256 411.04 410.04 371.925 320.987 424.277C231.934 476.629 298.767 600.623 234.487 490.55C170.208 380.478 190.291 248.806 279.344 196.454C345.524 259.16 492.697 190.894 556.976 300.967Z" fill="url(#paint0_linear_1096_183)" fill-opacity="0.54" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_1096_183" x="0.855469" y="0.455078" width="764.098" height="730.26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="98" result="effect1_foregroundBlur_1096_183" />
                                    </filter>
                                    <linearGradient id="paint0_linear_1096_183" x1="488.009" y1="79.5837" x2="721.941" y2="477.512" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F6F6F6" />
                                        <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                </div>
                
            </div>
        </div>

    </>
    )
}

export default Events