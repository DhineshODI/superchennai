import { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/Css/Funchennai.css";
import { useNavigate, Link } from "react-router-dom";

export default function Funchennai() {
  const navigate = useNavigate();
  const [initialSlide, setInitialSlide] = useState(null); // null until loaded

  const settings = {
    initialSlide: initialSlide ?? 0,
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipe: false, // ✅ disables swipe gestures
    touchMove: false, // ✅ disables touch dragging
    draggable: false, // ✅ disables mouse dragging
    slidesToScroll: 1,
    focusOnSelect: true,
    nextArrow: <div className="slick-next">→</div>,
    prevArrow: <div className="slick-prev">←</div>,
    pauseOnHover: true, // ✅ this pauses slider on hover
    focusOnSelect: false, // ← ⚠️ this is the issue

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Optional: hide arrows on small screens
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          arrows: true, // Optional: hide arrows on small screens
        },
      },
    ],
  };
  const exploreCards = [
    {
      title: "Adventure places",
      place: "in chennai",
      image: "./images/HomePage-Images/Funchennai/adventure.jpg",
      link: "/visit-thingstodo-adventureplace",
    },
    {
      title: "Beachside Fun",
      place: "in chennai",
      image: "./images/HomePage-Images/Funchennai/beachside.jpg",
      link: "/visit-thingstodo-beachsidefun",
    },
    {
      title: "Bowling Alleys",
      place: "in chennai",
      image: "./images/HomePage-Images/Funchennai/bowling.jpg",
      link: "/visit-thingstodo-bowlingalleys",
    },
    {
      title: "Bungee Jumping",
      place: "in chennai",
      image: "./images/HomePage-Images/Funchennai/bungee.jpg",
      link: "/visit-thingstodo-bungeejumping",
    },
    {
      title: "Entertainment",
      place: "in chennai",
      image: "./images/HomePage-Images/Funchennai/family-entertainment.jpg",
      link: "/visit-thingstodo-familyentertainmentcenters",
    },
    {
      title: "Gaming Arcades",
      place: "in chennai",
      image: "./images/HomePage-Images/Funchennai/gaming.jpg",
      link: "/visit-thingstodo-gamingarcade",
    },
    {
      title: "Go-Karting",
      place: "in chennai",
      image: "./images/HomePage-Images/Funchennai/go-karting.jpg",
      link: "/visit-thingstodo-gokart",
    },
    {
      title: "Horror Houses",
      place: "in chennai",
      image: "./images/HomePage-Images/Funchennai/horror.jpg",
      link: "/visit-thingstodo-horrorhouse",
    },
    {
      title: "Multiplexes",
      place: "in chennai",
      image: "./images/HomePage-Images/Funchennai/multiplexs.jpg",
      link: "/visit-thingstodo-multiplexes",
    },
    {
      title: "Nature Walk",
      place: "in chennai",
      image: "./images/HomePage-Images/Funchennai/nature-walk.jpg",
      link: "/visit-thingstodo-naturewalk",
    },
    {
      title: "Trampoline Parks",
      place: "in chennai",
      image: "./images/HomePage-Images/Funchennai/trampoline.jpg",
      link: "/visit-thingstodo-trampolineparks",
    },
    {
      title: "Turf Sports",
      place: "in chennai",
      image: "./images/HomePage-Images/Funchennai/turf.jpg",
      link: "/visit-thingstodo-turfsports",
    },
    {
      title: "Ziplines",
      place: "in chennai",
      image: "./images/HomePage-Images/Funchennai/ziplines.jpg",
      link: "/visit-thingstodo-ziplines",
    },
  ];
  const images = [
    { src: "./images/sldier1.png", title: "Place to Visit", link: "/page1" },
    { src: "./images/sldier1.png", title: "Food", link: "/page2" },
    { src: "./images/sldier1.png", title: "Shopping", link: "/page3" },
    { src: "./images/sldier1.png", title: "Hidden Gems", link: "/page4" },
    { src: "./images/sldier1.png", title: "Place to Visit", link: "/page5" },
  ];

  useEffect(() => {
    const savedSlide = localStorage.getItem("clickedSlide");
    if (savedSlide !== null) {
      setInitialSlide(parseInt(savedSlide, 10));
    } else {
      setInitialSlide(0); // default if nothing saved
    }
  }, []);

  const handleCardClick = (index) => {
    localStorage.setItem("clickedSlide", index);
  };

  if (initialSlide === null) return null; // wait until ready
  return (
    <>
      <div className="funchennaiBg">
        <div className="funchennaimainSection">
          <div className="funchennaiContainer max-w-6xl mx-auto px-4 space-y-10 funchennaiMainConatiner">
            <div className="funchennaiText">
              <h3>Fun Chennai</h3>
              <h4>
                Explore the fun side of Chennai! Learn about the thrilling
                activities, mouthwatering food trails, entertainment venues, and
                ongoing events that make the city a lively playground. Come on,
                have some fun!
              </h4>
            </div>
          </div>
          <div className="relative px-4 py-10 max-w-6xl mx-auto FunchennaiSliderSection">
            <Slider {...settings}>
              {/* {exploreCards.map((card, index) => (
                <div key={index}>
                  <div
                    className="cardImageSection cursor-pointer"
                     onClick={() => navigate(card.link)}
                  >
                    <img src={card.image} alt="" draggable={false} />
                    <p className="titleFunChennai">{card.title}</p>
                  </div>
                </div>
              ))} */}
              {/* {exploreCards.map((card, index) => (
                <div key={index}>
                  <Link
                    to={card.link}
                    className="cardImageSection block cursor-pointer"
                  >
                    <img src={card.image} alt={card.title} draggable={false} />
                    <p className="titleFunChennai">{card.title}</p>
                  </Link>
                </div>
              ))} */}
              {exploreCards.map((card, index) => (
                <div key={index}>
                  <Link
                    to={card.link}
                    className="cardImageSection block cursor-pointer"
                    onClick={() => handleCardClick(index)}
                  >
                    <img src={card.image} alt={card.title} draggable={false} />
                    <p className="titleFunChennai">{card.title}</p>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>

          <div className="parachuteSection">
            <img src="./images/HomePage-Images/parachute.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
