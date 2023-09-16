import { useState } from 'react';
import "./home.css"
export default function Dummyhome() {
    let a = 1;
    let b = true;
    const [index, setIndex] = useState(a)
    if (index === 9) {
        setIndex(index - 8)
    }
    const [divs = true, setdiv] = useState(b)
    const btnpressnext = () => {
        console.log(divs)
        setdiv(divs)
        console.log(index)
        setIndex(index + 1)

    }
    if (index === 0) {
        setIndex(index + 8)
    }
    const btnpressprev = () => {
        console.log(index)
        setIndex(index - 1);
    }

    const slides = [
        (<img src="" alt="/" />),
        (<img className={`slide-img ${divs ? 'slide-imgs' : ''}`} src="./slide-img1.jpg" alt="/" />),
        (<a href="/"> <img className={`slide-img ${divs ? 'slide-imgs' : ''}`} src="./slide-img2.jpg" alt="/" /> </a>),
        (<img className={`slide-img ${divs ? 'slide-imgs' : ''}`} src="./profile-pic.png" alt="/" />),
        (<a href="/"> <img className={`slide-img ${divs ? 'slide-imgs' : ''}`} src="./slide-img3.jpg" alt="/" /> </a>),
        (<img className={`slide-img ${divs ? 'slide-imgs' : ''}`} src="./slide-img4.jpg" alt="/" />),
        (<a href="/"> <img className={`slide-img ${divs ? 'slide-imgs' : ''}`} src="./slide-img5.jpg" alt="/" /> </a>),
        (<img className={`slide-img ${divs ? 'slide-imgs' : ''}`} src="./slide-img6.jpg" alt="/" />),
        (<a href="/"><img className={`slide-img ${divs ? 'slide-imgs' : ''}`} src="./slide-img7.jpg" alt="/" /></a>),
        (<img className={`slide-img ${divs ? 'slide-imgs' : ''}`} src="./slide-img8.jpg" alt="/" />),
    ]
    return (
        <>
            <div className="body-container">
                <img src="./logo.png" alt='/' className="logo" />

                <div className="head-container">
                    <h2 className='title' >Coding <br />Crafters</h2>
                    <h4 id="head-para">
                        Step into Code Club, the ultimate launchpad for future tech buddies
                        in the realm of CSE engineering. Beyond code, we cultivate
                        indispensa ble soft skills and communication prowess, s haping
                        well-rounded Professionals Skills.so get ready toEmbark on a
                        transformative journey whe re innovation meets holistic growth!
                        Coding C rafters Club Founded in 2023.
                    </h4>
                </div>
                <div className='line1'><div className='line'></div></div>
                <div className="slider">

                    <div className="product-carousel">
                        <button className="pre-btn" onClick={btnpressprev} ><p>&lt;</p></button>
                        <button className="next-btn" onClick={btnpressnext} ><p>&gt;</p></button>
                        <div className="product-container">{slides[index]}</div>
                    </div>
                    <div className="slide_info">
                        <h3 id='slide_info_title'>Title</h3>
                        <p id='slide_info_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsum. Nesciunt expedita debitis quam, cum aliquam officia fugit, ea eius praesentium commodi architecto quo quos! Quidem suscipit voluptatem corrupti repellendus. </p> </div>
                </div>
                <div className='line1_down'><div className='line_down'></div></div>
                <div className="member-container">
                    <h2 id='member_title'>Members</h2>
                    <div className="member-container2">

                        <div className='cardDiv'>
                            <div className="cardImg">
                                <img src="./profile-pic.png" id='member_photo' alt="" />

                            </div>
                            <div className="IncardDiv">
                                <div className="infoDiv">
                                    <p id='name'>  DEVELOPER <div className='underline1'><div className='underline' ></div></div><h3 id='name'>  Vivek solapure</h3></p>
                                    <h4>Persuing :B-tech</h4>
                                    <p>selected for</p>
                                    <h5>2023-2024</h5>
                                </div>
                            </div>
                        </div>
                        <div className='cardDiv'>
                            <div className="cardImg">
                                <img src="./profile-pic.png"id='member_photo' alt="" />

                            </div>
                            <div className="IncardDiv">
                                <div className="infoDiv">
                                    <p id='name'>  DEVELOPER <div className='underline1'><div className='underline' ></div></div><h3 id='name'>  Vivek solapure</h3></p>
                                    <h4>Persuing :B-tech</h4>
                                    <p>selected for</p>
                                    <h5>2023-2024</h5>
                                </div>
                            </div>
                        </div>
                        <div className='cardDiv'>
                            <div className="cardImg">
                                <img src="./profile-pic.png"id='member_photo' alt="" />

                            </div>
                            <div className="IncardDiv">
                                <div className="infoDiv">
                                    <p id='name'>  DEVELOPER <div className='underline1'><div className='underline' ></div></div><h3 id='name'>  Vivek solapure</h3></p>
                                    <h4>Persuing :B-tech</h4>
                                    <p>selected for</p>
                                    <h5>2023-2024</h5>
                                </div>
                            </div>
                        </div>
                        <div className='cardDiv'>
                            <div className="cardImg">
                                <img src="./profile-pic.png"id='member_photo' alt="" />

                            </div>
                            <div className="IncardDiv">
                                <div className="infoDiv">
                                    <p id='name'>  DEVELOPER <div className='underline1'><div className='underline' ></div></div><h3 id='name'>  Vivek solapure</h3></p>
                                    <h4>Persuing :B-tech</h4>
                                    <p>selected for</p>
                                    <h5>2023-2024</h5>
                                </div>
                            </div>
                        </div>
                        <div className='cardDiv'>
                            <div className="cardImg">
                                <img src="./profile-pic.png"id='member_photo' alt="" />

                            </div>
                            <div className="IncardDiv">
                                <div className="infoDiv">
                                    <p id='name'>  DEVELOPER <div className='underline1'><div className='underline' ></div></div><h3 id='name'>  Vivek solapure</h3></p>
                                    <h4>Persuing :B-tech</h4>
                                    <p>selected for</p>
                                    <h5>2023-2024</h5>
                                </div>
                            </div>
                        </div>
                        <div className='cardDiv'>
                            <div className="cardImg">
                                <img src="./profile-pic.png"id='member_photo' alt="" />

                            </div>
                            <div className="IncardDiv">
                                <div className="infoDiv">
                                    <p id='name'>  DEVELOPER <div className='underline1'><div className='underline' ></div></div><h3 id='name'>  Vivek solapure</h3></p>
                                    <h4>Persuing :B-tech</h4>
                                    <p>selected for</p>
                                    <h5>2023-2024</h5>
                                </div>
                            </div>
                        </div>
                        <div className='cardDiv'>
                            <div className="cardImg">
                                <img src="./profile-pic.png"id='member_photo' alt="" />

                            </div>
                            <div className="IncardDiv">
                                <div className="infoDiv">
                                    <p id='name'>  DEVELOPER <div className='underline1'><div className='underline' ></div></div><h3 id='name'>  Vivek solapure</h3></p>
                                    <h4>Persuing :B-tech</h4>
                                    <p>selected for</p>
                                    <h5>2023-2024</h5>
                                </div>
                            </div>
                        </div>
                        <div className='cardDiv'>
                            <div className="cardImg">
                                <img src="./profile-pic.png"id='member_photo' alt="" />

                            </div>
                            <div className="IncardDiv">
                                <div className="infoDiv">
                                    <p id='name'>  DEVELOPER <div className='underline1'><div className='underline' ></div></div><h3 id='name'>  Vivek solapure</h3></p>
                                    <h4>Persuing :B-tech</h4>
                                    <p>selected for</p>
                                    <h5>2023-2024</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
