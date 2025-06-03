import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/Accomodation.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { Link } from "react-router-dom";

export default function Accomodation() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const AccomodSections = [
    {
      title: "LUXURY HOTELS",
      description:
        "Enjoy upscale facilities, spas, fitness centers, entertainment systems, top-notch cuisine, and luxurious lodging at Chennai's luxury hotels to guarantee a heartwarming and unforgettable stay in the energetic metropolis.",
      image: "./images/Visit-Images/AccommodationImage1.jpg",
      linkText: "Explore More",
      linkUrl: "/luxuryhotels",
    },
    {
      title: "MID-RANGE HOTELS",
      description:
        "Enjoy your stay at well-located hotels, which are typically found close to important areas, as a practical starting point. It offers basic conveniences, welcoming service, and elegantly designed rooms.",
      image: "./images/Visit-Images/AccommodationImage2.jpg",
      linkText: "Explore More",
      linkUrl: "/midrangehotels",
    },
    {
      title: "BUDGET STAYS",
      description:
        "Basic lodgings are always included in a reasonable budget, allowing you to concentrate on both the cost and the orderly service. You can dependably count on the necessities without going over budget.",
      image: "./images/Visit-Images/AccommodationImage3.jpg",
      linkText: "Explore More",
      linkUrl: "/budgetStays",
    },
    {
      title: "SERVICED APARTMENTS",
      description:
        "Serviced apartments in Chennai offer a homelike experience with kitchens, comfortable living areas, and hotel-like amenities, whether you're looking for independence, a family vacation, or extended stays.",
      image: "./images/Visit-Images/AccommodationImage4.jpg",
      linkText: "Explore More",
      linkUrl: "/servicedapartments",
    },
    {
      title: "RESORTS AND VILLAS",
      description:
        "Experience a relaxing break from the hustle and bustle of the city and find a calm environment with upscale amenities like spas and pools. It is ideal for resting and revitalizing.",
      image: "./images/Visit-Images/AccommodationImage5.jpg",
      linkText: "Explore More",
      linkUrl: "/resortsandvillas",
    },
  ];

  // const images = [
  //   { src: "./images/sldier1.png", title: "Place to Visit", link: "/page1" },
  //   { src: "./images/sldier1.png", title: "Food", link: "/page2" },
  //   { src: "./images/sldier1.png", title: "Shopping", link: "/page3" },
  //   { src: "./images/sldier1.png", title: "Hidden Gems", link: "/page4" },
  //   { src: "./images/sldier1.png", title: "Place to Visit", link: "/page5" },
  // ];

  const images = [
    {
      src: "images/Visit-Images/SubPages/accomodation-slide.jpg",
      title: "Accomodation",
      link: "/accomodation",
    },
    {
      src: "images/Visit-Images/SubPages/food-slide.jpg",
      title: "Food",
      link: "/food",
    },
    {
      src: "images/Visit-Images/SubPages/places-to-visit-slide.jpg",
      title: "Places to visit",
      link: "/places-to-visit",
    },
    {
      src: "images/Visit-Images/SubPages/things-to-do-slide.jpg",
      title: "Things to do ",
      link: "/things-to-do",
    },
    {
      src: "images/Visit-Images/SubPages/itinerary-slide.jpg",
      title: "Itinerary",
      link: "/itinerary",
    },
    {
      src: "images/Visit-Images/SubPages/hidden-gems-slide.jpg",
      title: "Hidden Gems",
      link: "/hidden-gems",
    },
    {
      src: "images/Visit-Images/SubPages/shopping-slide.jpg",
      title: "Shopping",
      link: "/shopping",
    },
    {
      src: "images/Visit-Images/SubPages/travel-tips-slide.jpg",
      title: "Travel Tips",
      link: "/travel-tips",
    },
    {
      src: "images/Visit-Images/SubPages/wellness-slide.jpg",
      title: "Wellness ",
      link: "/wellness",
    },
    {
      src: "images/Visit-Images/SubPages/events-slide.jpg",
      title: "Events ",
      link: "/events",
    },
    {
      src: "images/Visit-Images/SubPages/conferences-slide.jpg",
      title: "Conferences ",
      link: "/conferences",
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
    autoplay: false,
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
            <img src="./images/AccodomationBannerr.jpg" alt="" />
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>ACCOMMODATION</h3>
              <div className="breadCrum">
                <Link to="/visit">VISIT</Link> -{" "}
                <Link href="">ACCOMMODATION</Link>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------Accodimation-Banner----------- */}

        {/*--------------- Hotels-Chennai----------------- */}

        <div className="AccodomationPageBecameVolunteerBg">
          <div
            className={`AccodomationTextBackground ${
              scrollDir === "right"
                ? "scroll-rightAccomodation"
                : "scroll-leftAccomodation"
            }`}
            ref={bgTextRef}
          >
            <p>Visit &nbsp; Chennai &nbsp; Visit &nbsp; Chennai</p>
          </div>

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
                        <Link to={section.linkUrl}>{section.linkText}</Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="AccodContentsSection1">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="AccomoddationPage1">
                        <Link to={section.linkUrl}>{section.linkText}</Link>
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

        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>Explore more of Chennai</h4>
              <p>
                Chennai is a city full of sites where you may go exploring every
                single day. Explore the city's various hidden treasures based on
                your current mood.
              </p>
            </div>
            <div className="exploreSldierSection">
              <Slider {...settings}>
                {images.map((img, index) => (
                  <div key={index} className="ExplorePageSliderImage">
                    <Link to={img.link} style={{ textDecoration: "none" }}>
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
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "160px",
                            background:
                              "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                          }}
                        ></div>

                        {/* Title Text */}
                        <div className="titleTextExploreChennai">
                          {img.title}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/*--------------- Explore More Chennai----------------- */}

        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>

        <Becameavolunteer />
      </div>
    </>
  );
}
