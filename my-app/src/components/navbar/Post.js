import React, { useState, useEffect } from "react";
import "./post.css";
import { database } from "../../firebase";

export default function Posts(props) {

    const [postdata, setpostdata] = useState([])   
    useEffect(() => {
      database.ref('posts').on('value', data => {
        const ifdata = data.val();
        if (ifdata) {
          const getData = Object.values(data.val()).reverse();
          setpostdata(getData)
        }
        else {
          setpostdata([" "])
        }
      })
      
    }, [])

    const [index, setIndex] = useState(0);
    const slides = [
      './slide-img1.jpg',
      './slide-img2.jpg',
      './slide-img3.jpg',
      './slide-img4.jpg',
      './slide-img5.jpg',
      './slide-img6.jpg',
      './slide-img7.jpg',
      './slide-img8.jpg'
    ];
    useEffect(()=>{
      const interval=setInterval(()=>{
        setIndex((previndex)=>(previndex+1)%slides.length)
      },3000);
      return () => clearInterval(interval); // Cleanup function to clear the interval

    },[slides.length])

    const btnpressnext = () => {
      setIndex((previndex)=>(previndex+1)%slides.length)
    }
    const btnpressprev = () => {
      setIndex((previndex)=>previndex===0 ? slides.length-1 : previndex-1)
    };

    return (
      <>


        <div className="Pbody">
          <div className="Postbtn"><p>+</p></div>

          {
            Object.values(postdata).map((data, i) => (
              <div key={i}>
                <div className="Pline1">
                  <div className="Pline"></div>
                </div>
                <div className="Pslider">
                  <div className="Pproduct-carousel">
                    <button className="Ppre-btn" onClick={btnpressprev}>
                      <p>&lt;</p>
                    </button>
                    <button className="Pnext-btn" onClick={btnpressnext}>
                      <p>&gt;</p>
                    </button>
                    <div className="Pproduct-container">
                      <div className="image-slider">
                        <img className="Pslide-imgs" src={slides[index]} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="Pslide_info">
                    <h3 id="Pslide_info_title">
                      {
                        data.Title
                      }
                    </h3>
                    <p id="Pslide_info_para">
                      {data.Para}
                    </p>
                    <div className="Pcomment">
                      <textarea id="Pinput" placeholder="Comment" type="text" />
                      <div className="PsendContainer">
                        <img id="Psend" src="./Vector.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ))
          }
          <div className="Pline1_down">
            <div className="Pline_down"></div>
          </div>
        </div>
      </>
    );
  }

