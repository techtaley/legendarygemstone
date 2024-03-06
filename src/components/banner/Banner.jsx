import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import './banner.css'

import { FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
      id: 1,
      //image: "pexels-godisable-jacob-928000.jpg",
      image:  "https://lg-api.techtaleyportfolio.com/uploads/jade_bronze_pearl_optimized_92e97e2f4b.jpg",
      alt: "jade bronze pearl jewelry set photo",
      attr: "", 
      attrlink: ""
  },
  {
      id: 2,
      //image: "pexels-iiii-iiii-69212.jpg",
      "image": "https://lg-api.techtaleyportfolio.com/uploads/carnelian_mother_of_pearl_set_optimized_56a4c49d6c.jpg",
      alt: "mother of pearl jewelry set photo",
      attr: "",
      attrlink: ""
  },
  {
      id: 3,
      //image: "pexels-lumn-322207.jpg",
      "image": "https://lg-api.techtaleyportfolio.com/uploads/tigerye_set_optimized_348ed320f0.jpg",
      alt: "tiger eye jewelry set",
      attr: "",
      attrlink: ""
  },
]

export default function Banner(){
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const prevSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {    
    let sliderId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(sliderId);
  }, [loading, currentSlide]);

  return (
    <section>
      {loading===false && (  //loading needs to be same as state
        
          <div className="banner-container" tabIndex="0"> 
              <img
                //src={`./../assets/${slides[currentSlide].image}`}
                src={slides[currentSlide].image}
                alt={slides.alt}
                className="banner-img"
              />
            <div
                role="presentation"
                tabIndex="0"
                className="caption ontop"
              >
                <Link to={`${slides[currentSlide].attrlink}`}>Pexels {slides[currentSlide].attr}</Link>
            </div>

            <div className="prevnav">
              <button type="button" className="leftbtn" onClick={prevSlide}>
                <FaChevronLeft />
              </button>

              <button type="button"  className="rightbtn" onClick={nextSlide}>
                <FaChevronRight />
              </button>
            </div>
          </div>       
      )}
    </section>
  );
};