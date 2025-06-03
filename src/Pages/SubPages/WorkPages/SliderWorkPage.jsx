import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function SliderWorkPage() {






  const images = [
    {
      src: "/images/Work-Images/SubPages/employment-slide.jpg",
      title: "Employment",
      link: "/employmentbusinesspermits",
    },
    {
      src: "/images/Work-Images/SubPages/unicorns-slide.jpg",
      title: "Unicorns",
      link: "/unicorn",
    },
    {
      src: "/images/Work-Images/SubPages/co-workingspaces-slide.jpg",
      title: "Co-workingspaces",
      link: "/coworkingspaces",
    },
    {
      src: "/images/Work-Images/SubPages/PG-slide.jpg",
      title: "PG",
      link: "/pg",
    },
    {
      src: "/images/Work-Images/SubPages/Salaries-Benefits-slide.jpg",
      title: "Salaries & Benefits",
      link: "/salariesbenefits",
    },
    {
      src: "/images/Work-Images/SubPages/career-growth-slide.jpg",
      title: "Career Growth",
      link: "/careergrowth",
    },
    {
      src: "/images/Work-Images/SubPages/Networking-slide.jpg",
      title: "Networking",
      link: "/networking",
    },
    {
      src: "/images/Work-Images/SubPages/Worklife balance-slide.jpg",
      title: "Worklife balance",
      link: "/worklifebalance",
    },
  ];

  // Custom Arrow Components
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrollDir("left");
      } else {
        setScrollDir("right");
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="exploreSldierBg">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="exploreMoreSectionContent">
            <h4>CHENNAI LIFE ESSENTIALS</h4>
            <p>
              Regardless of whether you have chosen Chennai to stay or move from
              one area to another area, Super Chennai will be the best guide to
              explore the essentials. So that you could easily live a lively and
              energetic life in Chennai.
            </p>
          </div>
          <div className="exploreSldierSection">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index} className="ExplorePageSliderImage">
                  <a href={img.link} style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={img.src}
                        alt={`Slide ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                      {/* Gradient Background */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          left: 0,
                          right: 0,
                          height: "160px",
                          background:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                        }}
                      ></div>

                      {/* Title Text */}
                      <div className="titleTextExploreChennai">{img.title}</div>
                    </div>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
