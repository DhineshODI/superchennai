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

export default function CoworkingSpaces() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const AccomodSections = [
    {
      title: "OMR (Old Mahabalipuram Road) / IT Corridor",
      description:
        "Co-working spaces, where IT workers may work in startups, are found among the various IT tech enterprises.",
      image: "./images/BacameAvolunterImage0.png",
      linkText: "Explore More",
      linkUrl: "/digital",
    },
    {
      title: "Guindy",
      description:
        "Select a co-working space that is convenient for transportation so that you may draw in a diverse clientele of firms and professionals.",
      image: "./images/BacameAvolunterImage1.png",
      linkText: "Explore More",
      linkUrl: "/education",
    },
    {
      title: "Nungambakkam",
      description:
        "The co-working facility has a prominent address attributed to its prime position, which also draws in business. Choose this location if you're looking for one with good connections.",
      image: "./images/BacameAvolunterImage2.png",
      linkText: "Explore More",
      linkUrl: "/health",
    },
    {
      title: "Teynampet",
      description:
        "Additionally, Teynampet offers professionals a decent business area for accessibility and facilities, making it a central location.",
      image: "./images/BacameAvolunterImage3.png",
      linkText: "Explore More",
      linkUrl: "/environment",
    },
    {
      title: " Anna Nagar",
      description:
        " It is a well-known neighborhood with a well designed layout that provides coworking space for both professionals and corporations.",
      image: "./images/BacameAvolunterImage4.png",
      linkText: "Explore More",
      linkUrl: "/women",
    },
    {
      title: "Adyar",
      description:
        "Choose this if you're searching for a co-working space in a linked setting that is both residential and business. ",
      image: "./images/BacameAvolunterImage1.png",
      linkText: "Explore More",
      linkUrl: "/youth",
    },
    {
      title: "Thousand Lights",
      description:
        "It offers co-working space located in a commercially significant area and has connections to corporate areas and transit hubs. ",
      image: "./images/BacameAvolunterImage0.png",
      linkText: "Explore More",
      linkUrl: "/relief",
    },
    {
      title: "Perungudi",
      description:
        "Modern and stylish co-working spaces are available, together with the necessary infrastructure for startups and IT enterprises.",
      image: "./images/BacameAvolunterImage0.png",
      linkText: "Explore More",
      linkUrl: "/relief",
    },
    {
      title: "Other Areas",
      description:
        "In addition to these hubs, co-working spaces are located in places like Alwarpet, Velachery, and Ambattur, which serve particular local populations and company requirements. ",
      image: "./images/BacameAvolunterImage0.png",
      linkText: "Explore More",
      linkUrl: "/relief",
    },
    {
      title: "Key Considerations When Choosing a Co-working Space",
      description:
        "Take into account the space's industry, surroundings, facilities, rent, and location. Find out whether that's where your target audience is.",
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
              <h3>Co-working Spaces </h3>
              <div className="breadCrum">
                <a href="">Work</a> - <a href="">Co-working Spaces </a>{" "}
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
            <p>Co-working Spaces  &nbsp; in Chennai &nbsp; Co-working Spaces  &nbsp; in Chennai</p>
          </div>

                <div className="workIntro">
                    <h3>Co-working Spaces</h3>
                    <p>
                      Chennai is becoming a major center for the professional sector. Chennai offers you a wide 
                       range of possibilities for co-working spaces, depending on your interests and budget. Find the 
                       ideal coworking space in Chennai if you are a freelancer, entrepreneur, or company owner.
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