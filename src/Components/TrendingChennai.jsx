import React, { useEffect, useState, useRef } from "react";
import "../assets/Css/TrendingChennai.css";
import { Link } from "react-router-dom";

export default function TrendingChennai() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [scrollDir, setScrollDir] = useState("left");

  const carouselItems = [
    {
      name: "Anirudh",
      subtitle: "Rockstar",
      para: "April 15  - in ymca chennai",
      image: "./images/HomePage-Images/FirstSliderImage.png",
    },
    {
      name: "Anirudh",
      subtitle: "Rockstar",
      para: "May 15  - in ymca chennai",
      image: "./images/HomePage-Images/trendingChennai2.jpg",
    },
    {
      name: "Anirudh",
      subtitle: "Rockstar",
      para: "June 15  - in ymca chennai",
      image: "./images/HomePage-Images/trendingChennai3.jpg",
    },
    {
      name: "Anirudh",
      subtitle: "Rockstar",
      para: "july 15  - in ymca chennai",
      image: "./images/HomePage-Images/trendingChennai4.jpg",
    },
    {
      name: "Anirudh",
      subtitle: "Rockstar",
      para: "july 15  - in ymca chennai",
      image: "./images/HomePage-Images/FirstSliderImage.png",
    },
    {
      name: "Anirudh",
      subtitle: "Rockstar",
      para: "july 15  - in ymca chennai",
      image: "./images/HomePage-Images/trendingChennai2.jpg",
    },
  ];

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  // Old-Code

  const [visibleItems, setVisibleItems] = useState(4);

  // Adjust visibleItems based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setVisibleItems(4);
      } else if (width >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(2);
      }
    };

    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDisplayItems = () => {
    const totalItems = carouselItems.length;
    const displayItems = [];

    for (let i = 0; i < visibleItems; i++) {
      const index = (activeIndex + i) % totalItems;
      displayItems.push(carouselItems[index]);
    }

    return displayItems;
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselItems.length);
  };

  // Auto-slide
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);
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
      <div className="tredingMainContainer">
        <div className="tredingChennaiRow">
          <div
            className={`TrendingTextBackground ${
              scrollDir === "right"
                ? "Trendingscroll-right"
                : "Trendingscroll-left"
            }`}
            ref={bgTextRef}
          >
            <p>Trending &nbsp; Chennai &nbsp; Trending &nbsp; Chennai</p>
          </div>
        </div>

        <section className="TrendCheniSec">
          <div className="max-w-7xl mx-auto flex mainContainerFlexTrending">
            <div className="trendccol trendcLeft">
              <h2>Trending Chennai</h2>
              <p className="trendingChennaiText">
                Keeps you updated on the latest happenings in the city. From
                exciting events and emerging hotspots to popular cultural trends
                and must-visit places, this section brings you all the buzz
                around Chennai. Stay in the loop with what’s new and trending in
                this vibrant metropolis.
              </p>
              <p className="trendingChennaiLink">
                <Link to="/eventsmain">Discover Experiences</Link>
              </p>
            </div>
            <div className="trendccol trendcRight">
              <div className="relative w-full">
                <div className="hstuwwBoxss flex items-top justify-end h-[50vh] w-full overflow-hidden">
                  {getDisplayItems().map((item, index) => {
                    const isActive = index === 0; // Only first one is active
                    const itemIndex =
                      (activeIndex + index) % carouselItems.length;

                    return (
                      <div
                        key={`${itemIndex}-${item.name}`}
                        className={`hstuwwItems relative transition-all duration-1500 ease-[cubic-bezier(0.77, 0, 0.175, 1)] transform-gpu
  ${
    isActive
      ? " z-10 scale-100 opacity-100 active h-[100%] origin-right"
      : " z-0 scale-100 opacity-70 origin-top h-[85%] no-active"
  }
   overflow-hidden bg-card/20 
`}
                        onClick={() => setActiveIndex(itemIndex)}
                        tabIndex={0}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className={`
                      absolute inset-0 w-full h-full object-cover TrendingSectionImages
                      ${
                        isActive
                          ? "saturate-100 contrast-100 brightness-100"
                          : "saturate-20 contrast-75 brightness-110"
                      }
                    `}
                        />
                        <div
                          className={`slidecontent absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 
                        ${isActive ? "opacity-100" : "opacity-0"}
                        `}
                        >
                          <h5 className="text-white text-small font-semibold tracking-wide trendingTextStyle">
                            {item.subtitle}
                          </h5>
                          <h3 className="text-white text-2xl font-semibold tracking-wide trendingTextParagraph">
                            {item.name}
                          </h3>
                          <p className="text-white text-small font-semibold tracking-wide tredingParaa">
                            {item.para}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pnbtnlist flex justify-center mt-6 gap-4">
                  <button
                    onClick={handlePrev}
                    className="slickprev slickarrow trendingChennaiPrev"
                  ></button>
                  <button
                    onClick={handleNext}
                    className="slicknext slickarrow trendingChennaiNext"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
