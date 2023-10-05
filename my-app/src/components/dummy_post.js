import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { Link } from "react-router-dom";


function Posts(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [postData, setpostData] = useState({});
    const postref = database.ref('posts');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await postref.once("value");
                const data = snapshot.val();
                if (data) {
                    setpostData(data);
                }
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

    });

    const [comment, setcomment] = useState();

    const ChageTxtarea = (e) => {
        setcomment(e.target.value)
        
    }
// console.log(comment);
const postComment=()=>{
    const commentref = database.ref("posts").once('value')
    console.log(comment);
    Object.values(commentref).map((val, id) => {
        Object.values(val[id]).child('comment').set({
            comments: comment
        })
        return 0
    //    ( <div key={id}>
    //         <p>{comment}</p>
    //     </div>)
    })
}
const PostReq=()=>{
 (<Link to="/inbox">link</Link>)
}
    return (
        <>
            <div className="Pbody">
                <div className="Postbtn"><Link to="/inbox"><p>+</p></Link></div>{
                
                    Object.values(postData).reverse().map((post, id) => (
                        <div key={id}>{
                            Object.values(post.IImages).length > 1 && (
                                <>
                                    <div className="Pline1">
                                        <div className="Pline"></div>
                                    </div>
                                    <div className="Pslider">
                                        <div className="Pproduct-carousel">
                                            <div className="Pproduct-container">
                                                <Slider style={{ width: 500 }} {...settings}>
                                                    {Object.values(post.IImages).map((image, imageId) =>
                                                    (
                                                        <div key={imageId}>
                                                            <img style={{ width: 500 }} src={image} alt={`ImageNO ${imageId}`} />
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                        </div>
                                        <div className="Pslide_info">
                                            <h3 id="Pslide_info_title">{post.Title}</h3>
                                            <p id="Pslide_info_para">{post.Para}</p>
                                            <div className="Pcomment">
                                                <textarea id="Pinput" placeholder="Comment" onChange={ChageTxtarea} type="text" />
                                                <p style={{backgroundColor:"red",width:100}} key={id}>{comment}</p>                                            
                                                <div className="PsendContainer">
                                                    <img id="Psend" onClick={postComment} src="./Vector.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }

                        </div>

                    ))
                    
                }
                <div className="Pline1_down">
                    <div className="Pline_down"></div>
                </div>
            </div >
        </>
    );
}

export default Posts

