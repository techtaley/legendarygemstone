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
      image:  "https://images.pexels.com/photos/928000/pexels-photo-928000.jpeg?auto=compress&cs=tinysrgb&w=2400",
      alt: "Fashion for women",
      attr: "Photo by Godisable Jacob", 
      attrlink: "https://www.pexels.com/photo/woman-holding-bag-near-buildings-928000/"
  },
  {
      id: 2,
      //image: "pexels-iiii-iiii-69212.jpg",
      "image": "https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&w=2400",
      alt: "Fashion for men",
      attr: "Photo by iiii iiii",
      attrlink: "https://www.pexels.com/photo/man-wearing-black-and-red-checkered-long-sleeve-shirt-wearing-black-wayfarer-sunglasses-sitting-on-white-wooden-chair-69212/"
  },
  {
      id: 3,
      //image: "pexels-lumn-322207.jpg",
      "image": "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=2400",
      alt: "Accessories",
      attr: "Photo by Lum3n",
      attrlink: "https://www.pexels.com/photo/low-angle-view-of-shoes-322207/"
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