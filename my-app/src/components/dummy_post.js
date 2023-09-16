// import { useState } from "react";
// import "./post.css";

// export default function Posts() {
//   let a = 1;
//   let b = true;
//   const [index, setIndex] = useState(a);
//   if (index == 9) {
//     setIndex(index - 8);
//   }
//   const [divs = true, setdiv] = useState(b);
//   const btnpressnext = () => {
//     console.log(divs);
//     setdiv(divs);
//     console.log(index);
//     setIndex(index + 1);
//   };
//   if (index == 0) {
//     setIndex(index + 8);
//   }
//   const btnpressprev = () => {
//     console.log(index);
//     setIndex(index - 1);
//   };

//   const slides = [
//     <img src="" alt="/" />,
//     <img
//       className={`Pslide-img ${divs ? "Pslide-imgs" : ""}`}
//       src="./slide-img1.jpg"
//       alt="/"
//     />,
//     <a href="">
//       {" "}
//       <img
//         className={`slide-img ${divs ? "slide-imgs" : ""}`}
//         src="./slide-img2.jpg"
//         alt="/"
//       />{" "}
//     </a>,
//     <img
//       className={`Pslide-img ${divs ? "Pslide-imgs" : ""}`}
//       src="./profile-pic.png"
//       alt="/"
//     />,
//     <a href="">
//       {" "}
//       <img
//         className={`slide-img ${divs ? "slide-imgs" : ""}`}
//         src="./slide-img3.jpg"
//         alt="/"
//       />{" "}
//     </a>,
//     <img
//       className={`Pslide-img ${divs ? "Pslide-imgs" : ""}`}
//       src="./slide-img4.jpg"
//       alt="/"
//     />,
//     <a href="">
//       {" "}
//       <img
//         className={`slide-img ${divs ? "slide-imgs" : ""}`}
//         src="./slide-img5.jpg"
//         alt="/"
//       />{" "}
//     </a>,
//     <img
//       className={`Pslide-img ${divs ? "Pslide-imgs" : ""}`}
//       src="./slide-img6.jpg"
//       alt="/"
//     />,
//     <a href="">
//       <img
//         className={`slide-img ${divs ? "slide-imgs" : ""}`}
//         src="./slide-img7.jpg"
//         alt="/"
//       />
//     </a>,
//     <img
//       className={`Pslide-img ${divs ? "Pslide-imgs" : ""}`}
//       src="./slide-img8.jpg"
//       alt="/"
//     />,
//   ];
//   return (
//     <>
//       <div className="Pbody">
//         <div className="Pline1">
//           <div className="Pline"></div>
//         </div>
//         <div className="Pslider">
//           <div className="Pproduct-carousel">
//             <button className="Ppre-btn" onClick={btnpressprev}>
//               <p>&lt;</p>
//             </button>
//             <button className="Pnext-btn" onClick={btnpressnext}>
//               <p>&gt;</p>
//             </button>
//             <div className="Pproduct-container">{slides[index]}</div>
//           </div>
//           <div className="Pslide_info">
//             <h3 id="Pslide_info_title">Title</h3>
//             <p id="Pslide_info_para">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Inventore, ipsum. Nesciunt expedita debitis quam, cum aliquam
//               officia fugit, ea eius praesentium commodi architecto quo quos!
//               Quidem suscipit voluptatem corrupti repellendus.
//             </p>
//             <div className="Pcomment">
//               <textarea id="Pinput" placeholder="Comment" type="text" />
//               <div className="PsendContainer">
//                 <img id="Psend" src="./Vector.png" alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="Pline1_down">
//           <div className="Pline_down"></div>
//         </div>
//         <div className="Pline1">
//           <div className="Pline"></div>
//         </div>
//         <div className="Pslider">
//           <div className="Pproduct-carousel">
//             <button className="Ppre-btn" onClick={btnpressprev}>
//               <p>&lt;</p>
//             </button>
//             <button className="Pnext-btn" onClick={btnpressnext}>
//               <p>&gt;</p>
//             </button>
//             <div className="Pproduct-container">{slides[index]}</div>
//           </div>
//           <div className="Pslide_info">
//             <h3 id="Pslide_info_title">Title</h3>
//             <p id="Pslide_info_para">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Inventore, ipsum. Nesciunt expedita debitis quam, cum aliquam
//               officia fugit, ea eius praesentium commodi architecto quo quos!
//               Quidem suscipit voluptatem corrupti repellendus.
//             </p>
//             <div className="Pcomment">
//               <textarea id="Pinput" placeholder="Comment" type="text" />
//               <div className="PsendContainer">
//                 <img id="Psend" src="./Vector.png" alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="Pline1_down">
//           <div className="Pline_down"></div>
//         </div>
//       </div>
//     </>
//   );
// }
