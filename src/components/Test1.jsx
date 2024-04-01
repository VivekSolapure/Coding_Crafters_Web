import React from 'react'
import "./Test1.css"

const Test1 = () => {
  return (
    <>
      <div className='Main-Container'>
        <main>
          <p className='trending-photos' id='heading'> Gallery </p>
          <div className='gallery_container'>

            <div className='gallery-custom_card' >
              <a href="https://photos.app.goo.gl/D314eAeWixMsHHUbA" className="links-g-photo" rel='norefernce' target='blank'> Crafter's club Family
                <img className='card-over-img' src="./hech.jpeg" alt="cover-photo" /></a>

            </div>
            <div className='gallery-custom_card' >
              <a href="https://photos.app.goo.gl/dXR25gY4ZL9mpcbF8" className="links-g-photo" rel='norefernce' target='blank'> Crafter's App launch
                <img className='card-over-img' src="./ard.jpeg" alt="cover-photo" /></a>

            </div>
            <div className='gallery-custom_card' >
              <a href="https://photos.app.goo.gl/hhg5cdLPbELP8dDM6" className="links-g-photo" rel='norefernce' target='blank'> Crafter's club service
                <img className='card-over-img' src="./cs.jpeg" alt="cover-photo" /></a>
            </div>
            <div className='gallery-custom_card' >
              <a href="https://photos.app.goo.gl/L1stAhZNVNu4joGi8" className="links-g-photo" rel='norefernce' target='blank'>Crafter's website launch
                <img className='card-over-img' src="./cam.jpg" alt="cover-photo" /></a>
            </div>
            
          </div>

        </main>
      </div>
    </>
  );
}

export default Test1;
