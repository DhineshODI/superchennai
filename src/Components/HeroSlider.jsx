import { useState, useEffect } from "react";
import "../assets/Css/HeroSlider.css";
import Search from "./Search";

const slides = [
  {
    image: "./images/HomePage-Images/banner-0.jpg",
    image1: "./images/HomePage-Images/mobile-banner-1.jpg",
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: "./images/HomePage-Images/banner-1.jpg",
    image1: "./images/HomePage-Images/mobile-banner-2.jpg",
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: "./images/HomePage-Images/banner-2.jpg",
    image1: "./images/HomePage-Images/mobile-banner-3.jpg",
    title: "Second slide label",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "./images/HomePage-Images/banner-3.jpg",
    image1: "./images/HomePage-Images/mobile-banner-4.jpg",
    title: "Third slide label",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    image: "./images/HomePage-Images/banner-5.jpg",
    image1: "./images/HomePage-Images/mobile-banner-5.jpg",
    title: "Second slide label",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "./images/HomePage-Images/banner-4.jpg",
    image1: "./images/HomePage-Images/mobile-banner-1.jpg",
    title: "Second slide label",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="herobannerSection">
        <div className="relative w-full h-[105vh] overflow-hidden mobileBanneerHeroSlider ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover DesktopBanner"
              />
              <img
                src={slide.image1}
                alt={slide.title}
                className="w-full h-full object-cover MobileBanner"
              />
              <div className="absolute inset-0  flex flex-col justify-center items-center text-white text-center p-4"></div>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-19 left-1/2 -translate-x-1/2 flex gap-3 z-20 heroSliderDots">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-[32px] h-[7px] rounded-full transition-colors duration-300
                ${
                  current === i
                    ? "bg-[#995098]"
                    : "bg-[#b6bec5] hover:bg-[#995098]"
                }`}
                style={{ border: "none" }}
              ></button>
            ))}
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>
    </>
  );
}
