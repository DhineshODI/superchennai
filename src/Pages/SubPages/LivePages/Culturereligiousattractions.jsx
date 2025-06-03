import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function Culturereligiousattractions() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefitSections = [
    {
      sectionTitle: "Investigating Historical Origins",
      sectionDesc: "Uncovering Shrines and Enduring Customs",
      image: "/images/Live-Images/SubPages/Investigating-Historical-Origins.jpg",
      benefits: [
        {
          id: 1,
          title: "Majestic Architectural Wonders",
          para: "Stroll through stunning temples exhibiting elaborate Dravidian architecture, embellished with carvings and vivid hues that reflect profound traditions. ",
          imgs: "/images/Live-Images/SubPages/Icons/Majestic-Architectural-Wonders.svg",
        },
        {
          id: 2,
          title: "Engaging with Living Rituals",
          para: " Witness ancient traditions and rituals that remain a vital element of everyday life, providing deep understanding of the city's spiritual core. ",
          imgs: "/images/Live-Images/SubPages/Icons/Engaging-with-Living-Rituals.svg",
        },
      ],
    },
    {
      sectionTitle: "Beyond Temples",
      sectionDesc: "Revealing Varied Sacred Locations ",
      image: "/images/Live-Images/SubPages/Beyond-Temples.jpg",
      benefits: [
        {
          id: 1,
          title: "Tranquil Places of Worship",
          para: "Explore churches, mosques, and various religious locations that enrich Chennai's varied spiritual environment, each showcasing its distinct history and architectural charm. ",
          imgs: "/images/Live-Images/SubPages/Icons/Tranquil-Places-of-Worship.svg",
        },
        {
          id: 2,
          title: "Discovering Serene Havens",
          para: "Seek out places designed for contemplation and calm, providing a break from the urban hustle and a chance for personal introspection. ",
          imgs: "/images/Live-Images/SubPages/Icons/Discovering-Serene-Havens.svg",
        },
      ],
    },
    {
      sectionTitle: "Engaging in Cultural Demonstrations",
      sectionDesc: "Experiencing Art and Tradition ",
      image: "/images/Live-Images/SubPages/Engaging-in-Cultural-Demonstrations.jpg",
      benefits: [
        {
          id: 1,
          title: "Dynamic Art Expressions",
          para: "Experience classical music and dance presentations that are closely connected to religious stories and cultural heritage.",
          imgs: "/images/Live-Images/SubPages/Icons/Dynamic-Art-Expressions.svg",
        },
        {
          id: 2,
          title: "Investigating Historical Accounts",
          para: " Visit museums and heritage sites that highlight the development of Chennai's culture and the tales associated with its religious sites.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Investigating-Historical-Accounts.svg",
        },
      ],
    },
  ];

 const images = [
    {
      src: "/images/Live-Images/Cost-of-living.jpg",
      title: "Cost-of-living",
      link: "/costofliving",
    },
    {
      src: "/images/Live-Images/Residency.jpg",
      title: "Residency",
      link: "/residencypropertyrentbuyinchennai",
    },
   {
      src: "/images/Live-Images/Employment.jpg",
      title: "Employment",
      link: "/employmentinchennai",
    },
    {
      src: "/images/Live-Images/Transportation.jpg",
      title: "Transportation",
      link: "/transportation",
    },
    {
      src: "/images/Live-Images/Healthcare-banner.jpg",
      title: "Healthcare",
      link: "/healthcare",
    },
    {
      src: "/images/Live-Images/Culture-Religious-Attractions.jpg",
      title: "Culture Religious",
      link: "/culturereligiousattractions",
    },
    {
      src: "/images/Live-Images/Recreation.jpg",
      title: "Recreation",
      link: "/recreation",
    },
    {
      src: "/images/Live-Images/Neighbourhood.jpg",
      title: "Neighbourhood",
      link: "/neighbourhood",
    },
    {
      src: "/images/Live-Images/Quality-of-Life.jpg",
      title: "Quality of Life",
      link: "/qualityoflife",
    },
    {
      src: "/images/Live-Images/Future-Growth-&-Development.jpg",
      title: "Future Growth & Development",
      link: "/futuregrowthdeveloping",
    },
      {
      src: "/images/Live-Images/Educational-Institutions.jpg",
      title: "Eduational Insitiutions",
      link: "/educationinstitutions",
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
          breakpoint: 1024,
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
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="./images/Live-Images/SubPages/Culture-Religious-Attractions-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Culture Religious Attractions</h3>
              <div className="breadCrum">
                <Link to="/live"> Live </Link> -  <a href="">Culture Religious Attractions </a>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------- Intro Section ----------------*/}
        <div className="visitIntroParaSection detailIntro">
          <div className="container max-w-7xl mx-auto px-4">
            <div
                className={`CostOflivingBackground ${
              scrollDir === "right"
                ? "scroll-rightCostofLiving"
                : "scroll-leftCostofLiving"
            }`}
            ref={bgTextRef}
            >
              <p>Live &nbsp; in Chennai &nbsp; Live &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>A Tapestry of Culture and Spirit </h3>
              <p>
                For individuals keen to discover the cultural and spiritual core
                of Chennai, this guide provides an insight into the city's
                abundant heritage. Get ready to experience a lively mix of
                customs and holy places that narrate stories from centuries ago
                while still influencing the city's character.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}
        {benefitSections.map((section, index) => (
          <section
            className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#7d377d] colorbgsec"} 
    ${
      index % 3 === 0
        ? "pattern-a"
        : index % 3 === 1
        ? "pattern-b"
        : "pattern-c"
    }`}
            key={index}
          >
            <div className="clcscrlCol clcscrlLft relative">
              <div className="clcscrlinLBox sticky top-0">
                <img src={section.image} alt={section.sectionTitle} />
                <div
                  className={`clcscrLtitle relative ${
                    index % 2 === 0 ? "bg-[#7d377c]" : "bg-[#672866]"
                  }`}
                >
                  <h2 className="flex flex-col text-white">
                    <small>{section.sectionTitle}</small>
                  </h2>
                  <p>{section.sectionDesc}</p>
                </div>
              </div>
            </div>
            <div className="clcscrlCol clcscrlRight padbtm">
              <div className="clcscrlinRBox MainSectionHovered">
                {section.benefits.map((item) => (
                  <div key={item.id} className="clcboxItemss flex">
                    <div className="clcboxIImg">
                      <img src={item.imgs} alt={item.title} />
                    </div>
                    <div className="clcboxICont">
                      <h3>{item.title}</h3>
                      <p>{item.para}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}


         {/*--------------- Explore More Chennai----------------- */}

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
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
