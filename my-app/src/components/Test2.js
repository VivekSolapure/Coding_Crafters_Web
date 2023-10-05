import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Test2.css';

export default function Test2() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [postDatas, setpostDatas] = useState([]);
  useEffect(() => {
    const fetchd = async () => {
      try {
        const postref = await database.ref('posts').once("value");
        const data = postref.val();
        if (data) {
          setpostDatas(data);
        }
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchd();
  }, []);
  return (
    <>
      <div>
        {Object.values(postDatas).reverse().map((post, postId) => (
          <div key={postId}>

            {Object.values(post.IImages).length > 1 && (
              <div>
                <h2>{post.Title}</h2>
                <p>{post.Para}</p>
                <Slider style={{ width: 500 }} {...sliderSettings}>
                  {Object.values(post.IImages).map((image, imageId) => {
                    return (

                      <div key={imageId}>
                        <img style={{ width: 500 }} src={image} alt={`ImageNo ${imageId}`} />
                      </div>
                    )
                  })}
                </Slider>
              </div>

            )}
          </div>
        ))}
      </div>
    </>
  );
}














// import React, { useState, useEffect } from "react";
// import { database } from "../firebase";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick-theme.css'
// import 'slick-carousel/slick/slick.css'
// import './Test2.css'

// export default function Test2() {


//   /*******************************************For Slider**********************************************/
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   const [postDatas, setpostDatas] = useState([]);
//   const [postImages, setpostImages] = useState([]);

//   useEffect(() => {
//     const postref = database.ref('posts');

//     postref.on('value', (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         setpostDatas(data);
//       }
//     });
//     //   const fetchData = async () => {
//     //     try {
//     //       const snapshot = await postref.once("value");
//     //       const data = snapshot.val();

//     //       if (data) {
//     //         setpostData(data);
//     //       } else {
//     //         setpostData("No Data");
//     //       }
//     //     } catch (error) {
//     //       console.error("Error fetching data:", error);
//     //     }
//     //   };

//     //   fetchData();
//   }, []);
//   console.log(postDatas);
//   /*******************************************For Slider**********************************************/

//   return (
//     <>
//       <div>
//         {
//           Object.entries(postDatas).reverse().map(([postId, post]) => (
//             <div key={postId}>
//               {post.Images && (
//               <Slider style={{ width: 500 }} {...settings}>
//                 {Object.values(post.Images).map((image, imageId) => (
//                   <div key={imageId}>
//                     <img style={{ width: 500 }} src={image} alt={`Image ${imageId}`} />
//                     <p>{post.Para}</p> {/* Uncomment this line if you want to display the "Para" text */}
//                   </div>
//                 ))}
//               </Slider>
//             )}


// {/**************************Slider with repeated prints of images**********************************/}
//               {/* < Slider style={{ width: 500 }} {...settings}>
//               {
//                 Object.values(post.Images).map((Img, Imgid) => {
//                   // setpostImages((prev)=>[...prev,Img])

//                   return (
//                     <div key={Imgid}>
//                       <img style={{ width: 500 }} src={Img} alt={`Img ${Imgid}`} />
//                       {/* <p>{Img.Para}</p> */}
//                     {/* </div>
//                   )
//                 })
//               }
//             </Slider> */}
// {/**************************Slider with repeated prints of images**********************************/}

//             </div>
//           ))}

//       {/* {< Slider style={{ width: 500 }} {...settings}>
//           {
//             <img src={[...postImages]} alt="" />
//           }
//         </Slider>} */}

//     </div >

//     </>

//   )

// }





































// import React, { useState, useEffect } from 'react';
// import { database } from '../firebase'; // Assuming you have your Firebase configuration in a separate 'firebase.js' file
// // import ImageSlider from "./Image_slider";
// import './Image_slider.css'
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick-theme.css'
// import 'slick-carousel/slick/slick.css'


// function MyComponent() {
//   const [postData, setPostData] = useState({});
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   useEffect(() => {
//     const postsRef = database.ref('posts');

//     // Attach a listener to read the data
//     postsRef.on('value', (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         setPostData(data);
//       }
//     });

//     // Clean up the listener when the component unmounts

//   }, []);

//   if (Object.keys(postData).length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>

//       <div>
//         {Object.keys(postData).map((postId) => (
//           <Slider key={postId} {...settings}>

//             <div >
//               <h1>Title: {postData[postId].Title}</h1>
//               <p>Para: {postData[postId].Para}</p>
//               <ul>
//                 {Object.entries(postData[postId].Images).map(([imageKey, imageUrl]) => (
//                   <li key={imageKey}>
//                     <img src={imageUrl} style={{ width: 200 }} alt={`Images ${imageKey}`} />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </Slider>

//         ))}
//       </div>
//       {/* <div >
//         {Object.keys(postData).map((post) => (
//           <div className='ImagSlideDiv' key={post}>
//             <h2>{postData[post].Title}</h2>
//             <p>{postData[post].Para}</p>
//             return <ImageSlider className='asd' images={postData[post].Images} />
//           </div>
//         ))}
//       </div> */}
//     </>
//   );
// }

// export default MyComponent;

