// src/Slideshow.js
import React, { useEffect, useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";



const images = [
  'https://via.placeholder.com/800x400?text=Image+1',
  'https://via.placeholder.com/800x400?text=Image+2',
  'https://via.placeholder.com/800x400?text=Image+3',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
    <div className='flex justify-evenly mt-10'>
    <div className="relative w-2/5 rounded-lg h-64 overflow-hidden">
      <div className="relative w-full h-full flex transition-transform duration-1000"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 text-white rounded-full p-2 hover:bg-gray-500"
        onClick={prevSlide}
      >
        <FaChevronLeft />

      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 text-white rounded-full p-2 hover:bg-gray-500"
        onClick={nextSlide}
      >
        <FaChevronRight />

      </button>
    </div>

<div className='w-44  rounded-lg  h-64 hover:scale-105'>
  <img className='h-64 w-44 bg-cover object-cover rounded-lg' src="https://www.grid.cl/blog/wp-content/uploads/2019/01/b2b.jpg" alt="" />
</div>
<div className='w-44  rounded-lg bg-pink-500 h-64 hover:scale-105'>
<img className='h-64 w-44 bg-cover object-cover rounded-lg' src="https://www.howandwhat.net/wp-content/uploads/2017/08/Service-768x768.jpg" alt="" />
</div>
<div className='w-44  rounded-lg bg-black h-64 hover:scale-105'>
<img className='h-64 w-44 bg-cover object-cover rounded-lg' src="https://i.pinimg.com/originals/60/6b/00/606b00bdb7bbcbdacae9924ab52fa2a9.jpg" alt="" />
</div>
<div className='w-44  rounded-lg bg-blue-300 h-64 hover:scale-105'>
<img className='h-64 w-44 bg-cover object-cover rounded-lg' src="https://us.123rf.com/450wm/raindrop1982/raindrop19822304/raindrop1982230400108/202674786-young-doctor-with-stethoscope-on-his-neck-3d-illustration.jpg?ver=6" alt="" />
</div>










    </div>
    </div>
  );
};

export default Slideshow;
