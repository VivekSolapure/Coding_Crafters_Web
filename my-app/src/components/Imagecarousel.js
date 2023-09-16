// import React, { createRef, useEffect, useState } from 'react'
// import Mycard from './Mycard.js'
// import './Imagecarousel.css'
// const Imagecarousel = () => {
    
//     let a = 1;
//     let b=true;
//     const [index, setIndex] = useState(a)
//     if (index == 9) {
//         setIndex(index - 8)
//     }
//     const [divs = true, setdiv] = useState(b)
//     const btnpressnext = () => {
//         console.log(divs)
//         setdiv(divs)
//         console.log(index)
//         setIndex(index + 1)

//     }
//     if (index == 0) {
//         setIndex(index + 8)
//     }
//     const btnpressprev = () => {
//         console.log(index)
//         setIndex(index - 1);
//     }
    
//     const slides=[
//         ( <img src="" alt="/" /> ),
//         ( <img className={`slide-img ${divs? 'slide-imgs' :''}`} src="./slide-img1.jpg" alt="/" /> ),
//         (<a href=""> <img className={`slide-img ${divs? 'slide-imgs' :''}`} src="./slide-img2.jpg"  alt="/" /> </a>),
//         ( <img className={`slide-img ${divs? 'slide-imgs' :''}`} src="./profile-pic.png" alt="/" /> ),
//         (<a href=""> <img className={`slide-img ${divs? 'slide-imgs' :''}`} src="./slide-img3.jpg"  alt="/" /> </a>),
//         ( <img className={`slide-img ${divs? 'slide-imgs' :''}`} src="./slide-img4.jpg" alt="/" />),
//         (<a href=""> <img className={`slide-img ${divs? 'slide-imgs' :''}`} src="./slide-img5.jpg"  alt="/" /> </a>),
//         ( <img className={`slide-img ${divs? 'slide-imgs' :''}`} src="./slide-img6.jpg" alt="/" />),
//         (<a href=""><img className={`slide-img ${divs? 'slide-imgs' :''}`} src="./slide-img7.jpg"  alt="/" /></a> ),
//         ( <img className={`slide-img ${divs? 'slide-imgs' :''}`} src="./slide-img8.jpg" alt="/" />),

//     ]
//     return (
//         <>
//         <div className="product-carousel">
//             <button className="pre-btn" onClick={btnpressprev}  ><p>&lt;</p></button>
//             <button className="next-btn" onClick={btnpressnext} ><p>&gt;</p></button>


//             <div className="product-container">{slides[index]}</div>
//         </div>
//         <div className={`divs ${ divs ? 'ani_mycard' : 'divss'}`}>hii</div>
//         </>
//     )
// }

// export default Imagecarousel