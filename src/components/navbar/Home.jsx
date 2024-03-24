import React from 'react'
import "./home.css"
import { Link } from "react-router-dom";
import AddMember from '../AddMember';
import Mainboard from '../../admin/pages/Mainboard';
import { RecentEvents } from '../../admin/components/RecentEvents';


export default function Test2() {
    return (
        <>
            <div class="triangle-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="274" height="696" viewBox="0 0 4 696" fill="none">
                    <path d="M-249.598 508.253L-25.1932 0.00042571L273.609 695.155L-249.598 508.253Z" fill="url(#paint0_linear_1144_166)" />
                    <defs>
                        <linearGradient id="paint0_linear_1144_166" x1="63.4424" y1="488.068" x2="60.9563" y2="6.8411" gradientUnits="userSpaceOnUse">
                            <stop offset="0.0653348" />
                            <stop offset="0.589217" stop-color="#1E012F" />
                            <stop offset="1" stop-color="#5D0093" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div class="triangle-up">

            </div>

            <div className="home_body">
                <div className="home_grid1">
                    <div className="home_h1 ">
                        <h1>Coding <span>Crafters</span></h1>
                    </div>
                    <div className="home_para">
                        <p>At Code Club, we shape future tech
                            professionals in CSE engineering while honing essential soft skill
                            s and communication prowess. Join us on a transformative journey,
                            where innovation meets holistic growth at the Coding Crafters Club
                            , established in 2023.
                        </p>
                    </div>
                    <div className="home_JoinUs">
                        <h1>Join Our <span>Community</span> </h1>
                        <p>Unlock your coding potentials</p>
                        <button className="home_JoinUS_btn">Join US</button>
                    </div>
                </div>
                <div className="home_logo home_grid2"><img src="./logo.png" alt="" /></div>

                <RecentEvents/>


            </div>
            <Mainboard />

            <Link to='/addMember'> <div className="AddMemBtn"><p>+</p></div></Link>

        
            
        </>

    )
}
