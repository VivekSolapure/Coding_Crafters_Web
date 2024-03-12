import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export const RecentEvents = props => {
    const RecentItems = [
        { id: '1', image: ['./profile-pic.png', './profile-pic.png', './profile-pic.png'], dscrptn: 'Hii Iam Vivek Solapure' }
    ]
    const css={
        width:500,
        
    }
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (<>
        <div className="home_entImgs home_grid3" >{RecentItems && RecentItems.map(events => (
            <div key={events.id} >
                <div >
                    <Slider className='home_entSlider' style={{width:"35rem"}} {...settings}>
                        {events.image.map((image, key) => (
                            <img key={key} style={{...css}} src={image} alt="" />
                        ))
                        }
                    </Slider>             
                </div>
               
            </div>
            
        ))}
        
        </div>
        <div className="home_entInfo home_grid4">{RecentItems && RecentItems.map(events=>(
            <div  key={events.id}>
                 <div >
                    <div className="quote"><blockquote></blockquote></div>
                    <div className="text">{events.dscrptn}</div>
                </div>

            </div>
        ))}</div>


    </>


    )
}
