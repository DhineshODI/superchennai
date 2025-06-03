import { useState, useRef, useEffect } from "react";
import "../Css/work-detail.css";
import MegaMenu from "../Header";
import MenuBar from "../MenuBar";
import Search from "../Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../SocialChennai";
import Becameavolunteer from "../BecameAVolunteer";

export default function PG() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const AccomodSections = [
    {
      title: "For Men",
      description:
        "Many PGs offer suitable accommodations for males, ranging from modest to well-equipped, close to sites of employment and education.",
      image: "./images/BacameAvolunterImage0.png",
      linkText: "Explore More",
      linkUrl: "/digital",
    },
    {
      title: "For women",
      description:
        "In terms of women, PGs in Chennai often provide a clean and safe living space, frequently with solely female residents.",
      image: "./images/BacameAvolunterImage1.png",
      linkText: "Explore More",
      linkUrl: "/education",
    },
    {
      title: "Amenities",
      description:
        "Some provide every convenience, like air conditioning, fully furnished rooms, television, an entertainment space, laundry facilities, etc. Some could just have access to facilities. Make an informed decision based on your requirements. ",
      image: "./images/BacameAvolunterImage2.png",
      linkText: "Explore More",
      linkUrl: "/health",
    },
    {
      title: "Room Type/Occupancy",
      description:
        "Based on your privacy needs, choose your room type and number of sharing people. Chennai offers a single, double and even multi occupancy rooms.",
      image: "./images/BacameAvolunterImage3.png",
      linkText: "Explore More",
      linkUrl: "/environment",
    },
    {
      title: "Food",
      description:
        "Select the type of room and number of people sharing it based on your privacy needs. Chennai has accommodations for one, two, or even more people. ",
      image: "./images/BacameAvolunterImage4.png",
      linkText: "Explore More",
      linkUrl: "/women",
    },
    {
      title: "Cost/Rent ",
      description:
        "Location, amenities, and room occupancy all affect price and rental rates. Verify that the rent is within your means and learn about any extra fees associated with utilizing the facilities. ",
      image: "./images/BacameAvolunterImage1.png",
      linkText: "Explore More",
      linkUrl: "/youth",
    },
    {
      title: "Rules and Regulations",
      description:
        " According to the PG owner, each PG has unique rules. Learn the ins and outs policies and timetables to guarantee a comfy and unquestionable stay.  ",
      image: "./images/BacameAvolunterImage0.png",
      linkText: "Explore More",
      linkUrl: "/relief",
    },
    {
      title: "Safety and Security",
      description:
        "A PG with CCTV surveillance, a physically fit security guard, and a helpful warden should always come first. Make sure you are there to protect yourself even if it is present. ",
      image: "./images/BacameAvolunterImage0.png",
      linkText: "Explore More",
      linkUrl: "/relief",
    },
    {
      title: "Reviews/Ratings",
      description:
        "To learn about the past experiences of the locals and to visit the location, look for internet reviews and ratings of local businesses for that PG.",
      image: "./images/BacameAvolunterImage0.png",
      linkText: "Explore More",
      linkUrl: "/relief",
    },
    {
      title: "Contact Information",
      description:
        "Verify the person in charge's involvement. Additionally, confirm that they have given you the correct location and phone number to get in touch with them!",
      image: "./images/BacameAvolunterImage0.png",
      linkText: "Explore More",
      linkUrl: "/relief",
    },
  ];

  const images = [
    { src: "./images/sldier1.png", title: "Place to Visit", link: "/page1" },
    { src: "./images/sldier1.png", title: "Food", link: "/page2" },
    { src: "./images/sldier1.png", title: "Shopping", link: "/page3" },
    { src: "./images/sldier1.png", title: "Hidden Gems", link: "/page4" },
    { src: "./images/sldier1.png", title: "Place to Visit", link: "/page5" },
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
      <div>
        {/*----------------Accodimation-Banner----------- */}

        <div className="accaodomationBannerSection">
          <div>
            <img src="./images/workdetail/cowrking-banner.jpg" alt="" />
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>PG </h3>
              <div className="breadCrum">
                <a href="">Work</a> - <a href="">PG  </a>{" "}
              </div>
            </div>
          </div>
          <MegaMenu />
          <Search />
        </div>

        {/*----------------Accodimation-Banner----------- */}

         <div className="visitIntroParaSection">
                <div className=" container max-w-7xl mx-auto px-4">
                <div
            className={`workdetailTextBackground ${
              scrollDir === "right"
                ? "scroll-rightAccomodation"
                : "scroll-leftAccomodation"
            }`}
            ref={bgTextRef}
          >
            <p>PG &nbsp; in Chennai &nbsp; PG &nbsp; in Chennai</p>
          </div>

                <div className="workIntro">
                    <h3>PG </h3>
                    <p>
                    Chennai offers a wide variety of paying guest (PG) lodging options for both students and
                     working adults. For students and working professionals from many states and districts, Chennai 
                     offers a number of postgraduate programs. Along with a basic supper, PG's provides an affordable 
                     lodging alternative. Some PGs could be restricted. Consider location, safety, and reviews to keep 
                     within the appropriate PG. 

  </p>
                    
                  </div>
              
        </div>
                  
             </div>

        {/*--------------- Hotels-Chennai----------------- */}

        <div className="AccodomationPageBecameVolunteerBg">
     

          <div className="container max-w-7xl mx-auto px-4">
            {AccomodSections.map((section, index) => (
              <div className="AccodoSectionFLex" key={index}>
                {index % 2 === 0 ? (
                  <>
                    <img src={section.image} alt={section.title} />
                    <div className="AccodContentsSection">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="AccomoddationPage">
                        <a href={section.linkUrl}>{section.linkText}</a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="AccodContentsSection1">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="AccomoddationPage1">
                        <a href={section.linkUrl}>{section.linkText}</a>
                      </div>
                    </div>
                    <img src={section.image} alt={section.title} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/*--------------- Hotels-Chennai----------------- */}

        {/*--------------- Explore More Chennai----------------- */}

        

    

        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>

        <Becameavolunteer />
      </div>
    </>
  );
}