import React, { useState,useEffect } from 'react';
import './img-slider.css'
const ImageSlider = () => {
  const img = `./slide-img1.jpg`
  const images = [
    'slide-img1.jpg',
    'slide-img2.jpg',
    'slide-img3.jpg',
    'slide-img4.jpg',
    'slide-img5.jpg',
    'slide-img6.jpg'
  ];

  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setcurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId); // Cleanup function to clear the interval
    console.log(images.length);
  }, [images.length]);

  const nextslide = () => {
    setcurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  console.log(currentIndex);

  const prevslide = () => {
    setcurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1

    );
  }
  console.log(currentIndex);

  return (
    <>
      
      <button onClick={prevslide} className='prev-button'>Prev</button>

      <div className='image-slider'>

        <img
          className='slider'
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`} />

      </div>
      <button className='slide-right' onClick={nextslide}>Next</button>
      {/* <img
          className={`image ${currentIndex === 0 ? 'slide-left' : 'slide-right'}`}
          src={images[currentIndex]}/> */}
    </>
  );
};

export default ImageSlider;
//{`image ${currentIndex === 0 ? 'slide-left' : 'slide-right'}`}