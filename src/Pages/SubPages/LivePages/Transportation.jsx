import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function Transportation() {
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
      sectionTitle: "On Rail",
      sectionDesc:
        "Chennai offers a variety of local and district-specific transportation options. The railway is the most well-known mode of transportation. Check out the many rail transportation options here.",
      image: "/images/Live-Images/SubPages/On-Rail-Metro.jpg",
      benefits: [
        {
          id: 1,
          title: "Chennai Metro",
          para: "Quick, climate-controlled, and timely, the Chennai Metro represents the city's most up-to-date transportation system. With expanding routes and enhanced connections to important districts and centers, it’s popular among both professionals and students. ",
          imgs: "/images/Live-Images/SubPages/Icons/chennai-metro.svg",
        },
        {
          id: 2,
          title: "Suburban Rail Services",
          para: " Perfect for long-distance travelers, the suburban train links Chennai to its outskirts and neighboring towns. Featuring numerous routes traversing the city, it’s an established and cost-effective means of transportation.",
          imgs: "/images/Live-Images/SubPages/Icons/Suburban-Rail-Services.svg",
        },
      ],
    },
    {
      sectionTitle: "On Road",
      sectionDesc:
        "Chennai offers comprehensive vehicle and bus services to all parts of the city and beyond for a variety of travel needs. Roadways continue to be a significant and developing form of transportation.",
      image: "/images/Live-Images/SubPages/On-Road.jpg",
      benefits: [
        {
          id: 1,
          title: "MTC Bus System ",
          para: "Operated by the Metropolitan Transport Corporation, buses in Chennai serve as the foundation for daily travel—reaching both the main city and suburban regions with remarkable frequency and cost-effectiveness. ",
          imgs: "/images/Live-Images/SubPages/Icons/MTC-Bus-System.svg",
        },
        {
          id: 2,
          title: "Mini Buses",
          para: "These compact MTC buses are intended for tight inner streets and residential areas. They offer superb last-mile connectivity and guarantee that even less familiar areas can be reached by public transport. ",
          imgs: "/images/Live-Images/SubPages/Icons/mini-bus.svg",
        },
        {
          id: 3,
          title: "Auto-Rickshaws",
          para: " Chennai's auto-rickshaws and shared autos are fast and adaptable. Although they don’t always utilize the meter, they are commonly accessible and ideal for short to medium travels, particularly in areas with limited public transportation. ",
          imgs: "/images/Live-Images/SubPages/Icons/Auto-Rickshaws.svg",
        },
      ],
    },
    {
      sectionTitle: "Private Enterprises & Intelligent Transportation ",
      sectionDesc:
        "The city is adopting shared transportation through bike rentals, electric vehicle rides, and smart card systems. From electric scooters to bike lanes, Chennai is progressing toward an eco-friendly, technology-driven way to travel. ",
      image: "/images/Live-Images/SubPages/Private-Enterprises &-Intelligent-Transportation.jpg",
      benefits: [
        {
          id: 1,
          title: "Cabs via Apps (Ola, Uber & others)",
          para: "Chennai is efficiently served by app-based taxi aggregators, providing options ranging from economical trips to luxury services. They are dependable for airport transfers, business travel, or even trips between cities.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Cabs-via-Apps.svg",
        },
      ],
    },
    {
      sectionTitle: "Driving License and Registration ",
      sectionDesc:
        " Obtaining a new driving license or renewing an existing one in Chennai involves following certain processes and providing necessary documentation at the Regional Transport Offices (RTOs). Make sure you fulfill the eligibility requirements and possess the required documentation. ",
      label: "Smart City",
      image: "/images/Live-Images/SubPages/Private-Enterprises &-Intelligent-Transportation-1.jpg",
      benefits: [
        {
          id: 1,
          title: "Do's ",
          para: " Access the official Parivahan Sewa website, collect necessary documents (identification, address verification, proof of age), and book appointments.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Dos.svg",
        },
        {
          id: 2,
          title: "Don’ts",
          para: " Depend on unofficial sources, postpone renewal, and hand in incomplete forms. ",
          imgs: "/images/Live-Images/SubPages/Icons/Donts.svg",
        },
      ],
    },
  ];

 const images = [
    {
      src: "/images/Live-Images/Cost-of-living.jpg",
      title: "Cost-of-Living",
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
      src: "/images/Live-Images/chennaiLifeEssential4.png",
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
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="./images/Live-Images/SubPages/Transportation-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Transportation </h3>
              <div className="breadCrum">
                <Link to="/live"> Live </Link> - <a href="">Transportation</a>
              </div>
            </div>
          </div>
          {/* <MegaMenu />
          <Search /> */}
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
              <h3>Transportation - Conveyance</h3>
              <p>
                {" "}
                Chennai's transportation network is among the most varied and
                effective in the nation. Thanks to an expanding metro rail
                system, a reliable suburban train network, comprehensive bus
                services, and app-based transportation options, navigating the
                city is easy and economical.{" "}
              </p>
              <p>
                {" "}
                From everyday travels to weekend excursions, the amalgamation of
                various transport methods guarantees seamless connections
                between residential zones, business centers, and developing
                communities. Through continuous infrastructure enhancements and
                intelligent mobility projects, Chennai is enhancing a commuting
                experience that is quicker, more environmentally friendly, and
                better linked.{" "}
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
                <div className="clcscrLtitle bg-[#682865] relative">
                  <h2 className="flex flex-col text-white">
                    <small>{section.sectionTitle}</small>
                  </h2>
                  <p>{section.sectionDesc}</p>
                </div>
              </div>
            </div>
            <div className="clcscrlCol clcscrlRight padbtm">
              <div className="clcscrlinRBox">
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
