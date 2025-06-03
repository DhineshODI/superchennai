import { useState } from "react";
import Slider from "react-slick";
import "../assets/Css/Explore.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Explore() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true, // Ensures dots and arrows can trigger slide change
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1.1 },
      },
      {
        breakpoint: 440,
        settings: { slidesToShow: 1.3 },
      },
      {
        breakpoint: 390,
        settings: { slidesToShow: 1.2 },
      },
      {
        breakpoint: 380,
        settings: { slidesToShow: 1.1 },
      },
    ],
  };

  const exploreCards = [
    {
      title: "Restaurants",
      place: "in chennai",
      image: "./images/HomePage-Images/interior-restaurant.png",
      link: "/food",
    },
    {
      title: "Nightlife",
      place: "in chennai",
      image:
        "./images/HomePage-Images/crowd-people-concert-with-their-hands-air.png",
      link: "/recreation",
    },
    {
      title: "Sports",
      place: "in chennai",
      image:
        "./images/HomePage-Images/low-section-man-holding-soccer-ball-beach.png",
      link: "/thingstodo",
    },
    {
      title: "Events",
      place: "in chennai",
      image:
        "./images/HomePage-Images/guitarist-playing-electrical-guitar-rock-concert.png",
      link: "/eventsmain",
    },
    {
      title: "Health Care",
      place: "in chennai",
      image: "./images/HomePage-Images/health-care.png",
      link: "/healthcare",
    },
    {
      title: "Shopping",
      place: "in chennai",
      image: "./images/HomePage-Images/front-view-cyber-monday-composition.png",
      link: "/shopping",
    },
    {
      title: "Entertainment",
      place: "in chennai",
      image: "./images/HomePage-Images/boy-with-vr-glasses-cinema.png",
      link: "/visit",
    },
    {
      title: "Networks",
      place: "in chennai",
      image:
        "./images/HomePage-Images/strength-people-hands-success-meeting.png",
      link: "/networking",
    },
  ];

  // Split cards into two rows
  const firstRow = exploreCards.slice(0, 4); // First 5 cards
  const secondRow = exploreCards.slice(4, 8); // Remaining cards

  return (
    <div className="relative w-full px-4 py-10 ExploreChennaiContainer">
      <div className="container exploreChennaiContiner max-w-7xl mx-auto px-4 space-y-10">
        {/* First Row Slider */}
        <div className="space-y-4">
          <Slider {...settings}>
            {firstRow.map((card, index) => (
              <Link to={card.link}>
                <div className="exploreSectionFlex p-4" key={index}>
                  <img src={card.image} alt={card.title} />
                  <div>
                    <h3>{card.title}</h3>
                    <h5>{card.place}</h5>
                  </div>
                  <div className="arrowIcons"></div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>

        {/* Second Row Slider */}
        <div className="space-y-4">
          <Slider {...settings}>
            {secondRow.map((card, index) => (
              <Link to={card.link}>
                <div className="exploreSectionFlex p-4" key={index}>
                  <img src={card.image} alt={card.title} />
                  <div>
                    <h3>{card.title}</h3>
                    <h5>{card.place}</h5>
                  </div>

                  <div className="arrowIcons"></div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
