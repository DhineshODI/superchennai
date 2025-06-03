import { useState, useEffect, useRef } from "react";
// import "./Css/work-detail.css";
// import MegaMenu from "../Header";
// import MenuBar from "../MenuBar";
// import Search from "../Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import InstagramReelsMarquee from "../SocialChennai";
// import Becameavolunteer from "../BecameAVolunteer";

export default function Food() {
  const [scrollDir, setScrollDir] = useState("left");


  const investItems = [
    {
      title: "Classic Italian Flavors",
      description:
        "Experience and indulge in creamy Carbonara and rich Lasagna, alongside iconic Margherita Pizza in Chennai. Find out these classical Italian flavours at.",
      image: "./images/costofliving/AccomodationIcon.svg",
      link: "#",
    },
    {
      title: "Regional Italian Delights",

      description:
        " Experience an amazing tastes of regional delights such as fragrant Pesto Genovese and saffron-infused Risotto alla Milanese in chennai at.",
      image: "./images/costofliving/AccomodationIcon.svg",
      link: "#",
    },
  ];

  const mainContent = [
    {
      type: "combined",
      image: "./images/costofliving/AccomodationIcon.svg",
      sectionTitle: "Learners",
      sectionDesc:
        "Students can find housing near their colleges without relying on PGs or hostels.",
      sectionImage: "/images/clcscrlImg.jpg",
    },
    {
      type: "combined",
      image: "./images/costofliving/AccomodationIcon.svg",
      sectionTitle: "Working Professionals",
      sectionDesc:
        "Ideal accommodations for employees working in Chennai’s IT hubs or industrial areas.",
      sectionImage: "/images/clcscrlImg.jpg",
    },
    {
      type: "combined",
      image: "./images/costofliving/AccomodationIcon.svg",
      sectionTitle: "Working Professionals",
      sectionDesc:
        "Ideal accommodations for employees working in Chennai’s IT hubs or industrial areas.",
      sectionImage: "/images/working_professionals.jpg",
    },
    {
      type: "combined",
      image: "./images/costofliving/AccomodationIcon.svg",
      sectionTitle: "Working Professionals",
      sectionDesc:
        "Ideal accommodations for employees working in Chennai’s IT hubs or industrial areas.",
      sectionImage: "/images/working_professionals.jpg",
    },
  ];

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

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
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="./images/workdetail/cowrking-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Food </h3>
              <div className="breadCrum">
                <a href="">Visit</a> - <a href="">Food</a>
              </div>
            </div>
          </div>
        </div>

        {/*----------------- Intro Section ----------------*/}
        <div className="visitIntroParaSection detailIntro">
          <div className="container max-w-7xl mx-auto px-4">
            <div
              className={`workdetailTextBackground ${
                scrollDir === "right"
                  ? "scroll-rightAccomodation"
                  : "scroll-leftAccomodation"
              }`}
              ref={bgTextRef}
            >
              <p>Visit &nbsp; in Chennai &nbsp; Visit &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Food</h3>
              <p>
                {" "}
                Food means a lot to us. It is an emotion. Chennai was providing
                space to food trucks, small- to medium-sized hotels, and even
                high-end restaurants. Food highlights the city's diverse and
                lively culinary scene, from Chettinad to international flavors.
              </p>
            </div>
          </div>
        </div>

        {mainContent.map((item, index) => (
          <div className="detailIconSec" key={index}>
            <div className="detailIconSections">
              <section
                key={`imgcontent-${index}`}
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 ${
                  index % 2 === 0 ? "#fff" : "#f7f7f7"
                }`}
              >
                <div className="imgLeft">
                  <img src={item.sectionImage} alt={item.sectionTitle} />
                </div>
                <div className="imgText flex items-center">
                  <div className="imgcolTitle bg-[#682865] relative">
                    <h2 className="flex flex-col text-white">
                      <small>{item.sectionTitle}</small>
                    </h2>
                    <p>{item.sectionDesc}</p>
                  </div>
                </div>
              </section>

              <div className="container max-w-7xl mx-auto px-4">
                <div className="InvestFlexContainer">
                  {investItems.map(() => (
                    <div className="InvestMainDivFirstSection">
                      <div className="InvestMainDivFlexSection">
                        <img src={item.image} alt={item.title} />
                        <div className="InvestMainDivSection">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                          <div className="exploreMorebuttonInvestChennai">
                            <a href={item.link}>Explore More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <InstagramReelsMarquee />
        <Becameavolunteer /> */}
      </div>
    </>
  );
}
