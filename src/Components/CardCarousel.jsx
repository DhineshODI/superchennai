import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "../assets/Css/Carousel.css";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100"
  >
    ➡️
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100"
  >
    ⬅️
  </div>
);

// Cards array
const cards = [
  {
    title: "Card 1",
    description: "This is the first card.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Card 2",
    description: "This is the second card.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Card 3",
    description: "This is the third card.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Card 4",
    description: "This is the fourth card.",
    image: "https://via.placeholder.com/300x200",
  },
];

// Slick settings
const settings = {
 autoplay:true,
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const CardCarousel = () => {
  const showSlider = cards.length > 3;

  return (
    <div className="relative w-full px-4 py-10">
      {showSlider ? (
        <Slider {...settings}>
          {cards.map((card, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-4">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-4">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}




<div className="exploreSectionContainer">
            <div
              className="exploreSectionFlex"
            >
              <img src="./images/icons/interior-restaurant.png" alt="" />
              <div>
                <h3>Restaurants</h3>
                <h5>in chennai</h5>
              </div>
              <svg className="arrowIcons" xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none">
                    <circle cx="35.8295" cy="35.8598" r="34.5777" transform="rotate(-180 35.8295 35.8598)" stroke={isHovered ? '#a44294' : '#a44294'} fill={isHovered ? '#a44294' : '#fff'}  strokeWidth="3" />
                    <path d="M50.0437 36.921C50.6295 36.3352 50.6295 35.3855 50.0437 34.7997L40.4977 25.2538C39.912 24.668 38.9622 24.668 38.3764 25.2538C37.7906 25.8395 37.7906 26.7893 38.3764 27.3751L46.8617 35.8604L38.3764 44.3456C37.7906 44.9314 37.7906 45.8812 38.3764 46.467C38.9622 47.0527 39.912 47.0527 40.4977 46.467L50.0437 36.921ZM18.29 37.3604L48.983 37.3604L48.983 34.3604L18.29 34.3604L18.29 37.3604Z" fill={isHovered ? '#fff' : '#a44294'}/>
                </svg>
              {/* <img  src="./images/icons/rightArrowsvg.svg" alt="" /> */}
            </div>
            <div className="exploreSectionFlex">
              <img
                src="./images/icons/crowd-people-concert-with-their-hands-air.png"
                alt=""
              />
              <div>
                <h3>Nightlife</h3>
                <h5>in chennai</h5>
              </div>

              <img
                className="arrowIcons"
                src="./images/icons/rightArrowsvg.svg"
                alt=""
              />
            </div>
            <div className="exploreSectionFlex">
              <img
                src="./images/icons/low-section-man-holding-soccer-ball-beach.png"
                alt=""
              />
              <div>
                <h3>Sports</h3>
                <h5>in chennai</h5>
              </div>
              <img
                className="arrowIcons"
                src="./images/icons/rightArrowsvg.svg"
                alt=""
              />
            </div>
            <div className="exploreSectionFlex">
              <img
                src="./images/icons/guitarist-playing-electrical-guitar-rock-concert.png"
                alt=""
              />
              <div>
                <h3>Events</h3>
                <h5>in chennai</h5>
              </div>
              <img
                className="arrowIcons"
                src="./images/icons/rightArrowsvg.svg"
                alt=""
              />
            </div>
            <div className="exploreSectionFlex">
              <img src="./images/icons/health-care.png" alt="" />
              <div>
                <h3>Health Care</h3>
                <h5>in chennai</h5>
              </div>
              <img
                className="arrowIcons"
                src="./images/icons/rightArrowsvg.svg"
                alt=""
              />
            </div>
            <div className="exploreSectionFlex">
              <img
                src="./images/icons/front-view-cyber-monday-composition.png"
                alt=""
              />
              <div>
                <h3>Shopping</h3>
                <h5>in chennai</h5>
              </div>
              <img
                className="arrowIcons"
                src="./images/icons/rightArrowsvg.svg"
                alt=""
              />
            </div>
            <div className="exploreSectionFlex">
              <img src="./images/icons/boy-with-vr-glasses-cinema.png" alt="" />
              <div>
                <h3>Entertainment</h3>
                <h5>in chennai</h5>
              </div>
              <img
                className="arrowIcons"
                src="./images/icons/rightArrowsvg.svg"
                alt=""
              />
            </div>
            <div className="exploreSectionFlex">
              <img
                src="./images/icons/strength-people-hands-success-meeting.png"
                alt=""
              />
              <div>
                <h3>Network</h3>
                <h5>in chennai</h5>
              </div>
              <img
                className="arrowIcons"
                src="./images/icons/rightArrowsvg.svg"
                alt=""
              />
            </div>
          </div>
    </div>

    
  );
};

export default CardCarousel;
