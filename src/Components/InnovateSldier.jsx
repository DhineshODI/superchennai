import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/Css/InnovateSlider.css";
import { Link } from "react-router-dom";

const slides = [
  {
    src: "/images/Innovate-Images/IT-Software-thum-big.jpg",
    title: "IT & Software Developmvent ",
    content:
      "Using state-of-the-art products and services to drive global digital transformation.",
    link: "/itandsoftwaredevelopment",
  },
  {
    src: "/images/Innovate-Images/Artificial-Intelligence-thum-big.jpg",
    title: "Artificial Intelligence & Machine Learning ",
    content: "Join us in exploring exciting opportunities and breakthroughs.",
    link: "/artificialintelligenceandmachinelearning",
  },
  {
    src: "/images/Innovate-Images/Electric-Vehicles-thum-big.jpg",
    title: "Electric Vehicles (EVs) & Clean Technology ",
    content: "Discover how we’re revolutionizing industries across the globe.",
    link: "/electricvehicles",
  },
  {
    src: "/images/Innovate-Images/Smart-City-thum-big.jpg",
    title: "Smart City Initiatives ",
    content:
      "Learn more about the latest trends and innovations in technology.",
    link: "/smartcityinitiatives",
  },
  {
    src: "/images/Innovate-Images/Healthcare-Tech-thum-big.jpg",
    title: "Healthcare Tech Innovations ",
    content: "Join us in exploring exciting opportunities and breakthroughs.",
    link: "/healthcaretechinnovation",
  },
  {
    src: "/images/Innovate-Images/Robotics-Automation-thum-big.jpg",
    title: "Robotics and Automation ",
    content: "Discover how we’re revolutionizing industries across the globe.",
    link: "/roboticsandautomation",
  },

  {
    src: "/images/Innovate-Images/Blockchain-Fintech-thum-big.jpg",
    title: "Blockchain and Fintech",
    content: "Discover how we’re revolutionizing industries across the globe.",
    link: "/blockchainandfintech",
  },
  {
    src: "/images/Innovate-Images/Automotive-Tech-thum-big.jpg",
    title: "Automotive Tech and R&D ",
    content:
      "Learn more about the latest trends and innovations in technology.",
    link: "/automotivetechandrandd",
  },
  {
    src: "/images/Innovate-Images/Education-Tech-thum-big.jpg",
    title: "Education Tech",
    content: "Join us in exploring exciting opportunities and breakthroughs.",
    link: "/educationtech",
  },
  {
    src: "/images/Innovate-Images/3D-Printing-Additive-Manufacturing-thum-big.jpg",
    title: "3D Printing and Additive Manufacturing",
    content: "Discover how we’re revolutionizing industries across the globe.",
    link: "/threedprintingandadditivemanufacturing",
  },
  {
    src: "/images/Innovate-Images/Augmented-Reality-Virtual-Reality-thum-thum-big.jpg",
    title: "Augmented Reality (AR)",
    content:
      "Learn more about the latest trends and innovations in technology.",
    link: "/augmentedreality",
  },
  {
    src: "/images/Innovate-Images/Agriculture-Tech-thum-big.jpg",
    title: "Agriculture Tech",
    content: "Join us in exploring exciting opportunities and breakthroughs.",
    link: "/agriculturetech",
  },

  // Add more slides as needed
];

const InnovateSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    appendDots: (dots) => (
      <ul className="InnovateSlidercustom-dots">
        {dots.map((dot, i) => (
          <li key={i}>
            <button>{`Slide ${i + 1}`}</button>
          </li>
        ))}
      </ul>
    ),
    customPaging: (i) => <button>{`Slide ${i + 1}`}</button>,
    beforeChange: (oldIndex, newIndex) => {
      setActiveIndex(newIndex); // Update active button when the slide changes
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false, // disable variableWidth on smaller screens if needed
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  const handleButtonClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveIndex(index);
  };

  return (
    <>
      <div className="InnovateSliderSectionBg">
        <section className="InnovateSliderslick-section">
          <div className="InnovateSliderslick-container">
            <div className="InnovateSliderslick-wrap">
              <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                  <div className="InnovateSliderslick-item" key={index}>
                    <Link to={slide.link}>
                      <div className="image-wrapper">
                        <img src={slide.src} alt={`Slide ${index + 1}`} />
                        <div className="text-overlay innovateSlideTxt">
                          <h2>{slide.title}</h2>
                          <p>{slide.content}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="InnovateSlidernav-buttons">
              <button
                className="leftButtonInnovateSliders"
                onClick={() => sliderRef.current.slickPrev()}
              ></button>
              <button
                className="rightButtonInnovateSliders"
                onClick={() => sliderRef.current.slickNext()}
              ></button>
            </div>
          </div>
        </section>

        {/* Dynamic buttons below the slider */}
        <div className="InnovateSlider-buttons-container">
          <div className="container max-w-9xl mx-auto px-4 space-y-10 InnovateSliderFLex">
            {slides.map((slide, index) => (
              <button
                key={index}
                className={`InnovateSlider-button ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                <div className="InnovateSliderButtonTitle">{slide.title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InnovateSlider;
