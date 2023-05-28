import React, { useState } from "react";
import "./Carousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://ictc.ioe.edu.np/img/01.jpg",
    "https://www.wms.com.np/sites/default/files/photo5.jpg",
    'https://easytipstutorial.com/wp-content/uploads/2022/01/ioe-entrance-syllabus-207778.png'
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-btn carousel-btn-prev" onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      <img className="carousel-image" src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button className="carousel-btn carousel-btn-next" onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
  );
};
