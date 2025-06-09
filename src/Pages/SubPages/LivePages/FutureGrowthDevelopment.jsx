import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import MegaMenu from "../../../Components/Header";
import MenuBar from "../../../Components/MenuBar";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function FutureGrowthDevelopment() {
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
      sectionTitle: "Chennai's Third Master Plan (2027–2046)",
      sectionDesc:
        "This long-term strategy targets sustainable and inclusive progress, emphasizing land utilization, infrastructure, economic advancement, and environmental conservation for the Chennai Metropolitan Region. ",
      label: "Third Master Plan",
      image:
        "/images/Live-Images/SubPages/Chennai's-third-master-plan(2027-2046).jpg",
      benefits: [
        {
          id: 1,
          title: "Compact Urban Design",
          para: " The strategy encourages more compact, mixed-use projects to minimize sprawl, enhance walkability, and maximize infrastructure use throughout the metropolitan region. ",
          imgs: "/images/Live-Images/SubPages/Icons/Compact-Urban-Design.svg",
        },
        {
          id: 2,
          title: "Sustainable City Growth",
          para: " Incorporating green infrastructure, renewable energy, and resource efficiency is key to promoting environmentally sustainable and resilient urban development in Chennai. ",
          imgs: "/images/Live-Images/SubPages/Icons/Sustainable-City-Growth.svg",
        },
        {
          id: 3,
          title: "Infrastructure Improvement ",
          para: "Major investments in metro growth, roadway systems, and utility infrastructure are designed to boost connectivity, alleviate congestion, and improve living standards. ",
          imgs: "/images/Live-Images/SubPages/Icons/Infrastructure-Improvement.svg",
        },
        {
          id: 4,
          title: "Participation of Stakeholders",
          para: " The participation of citizens, specialists, and diverse organizations is vital in developing the Third Master Plan and guaranteeing its effective execution. ",
          imgs: "/images/Live-Images/SubPages/Icons/Participation-of-Stakeholders.svg",
        },
      ],
    },
    {
      sectionTitle: " Expansion of Chennai Metro",
      sectionDesc:
        " Comprehensive metro development initiatives seek to improve Chennai's connectivity, with Phase II currently in progress and additional expansions intended to reach wider regions. ",
      label: "Chennai Metro",
      image: "/images/Live-Images/SubPages/Expansion-of-chennai-metro.jpg",
      benefits: [
        {
          id: 1,
          title: "Stage II",
          para: "Presently in development, Phase II introduces additional lines and stations, greatly enhancing the metro system throughout different areas of the city. ",
          imgs: "/images/Live-Images/SubPages/Icons/Stage-II.svg",
        },
        {
          id: 2,
          title: "Prospective Growth ",
          para: "Additional expansions are intended to link more locations, such as the airport and significant suburban areas, enhancing overall urban transportation. ",
          imgs: "/images/Live-Images/SubPages/Icons/Prospective-Growth.svg",
        },
      ],
    },
    {
      sectionTitle: "Parandur Greenfield Airstrip",
      sectionDesc:
        " A new greenfield airport is planned near Parandur to accommodate the increasing air traffic of the Chennai Metropolitan Area as an additional hub. ",
      label: "Greenfield Airstrip",
      image: "/images/Live-Images/SubPages/Greenfield-Airstrip.jpg",
      benefits: [
        {
          id: 1,
          title: "Placement",
          para: "The planned airport will be situated close to Parandur in the Kanchipuram district, around 70 kilometers away from the current airport. ",
          imgs: "/images/Live-Images/SubPages/Icons/Placement.svg",
        },
        {
          id: 2,
          title: "Ability",
          para: " The newly designed airport is intended to have a considerable capacity for passenger handling to meet the upcoming air travel requirements in the area. ",
          imgs: "/images/Live-Images/SubPages/Icons/Ability.svg",
        },
        {
          id: 3,
          title: "Connection",
          para: " Enhanced access to the airport is expected via road and metro rail expansions to facilitate smooth travel for travelers. ",
          imgs: "/images/Live-Images/SubPages/Icons/Connection.svg",
        },
      ],
    },
    {
      sectionTitle: "Chennai Smart City Projects",
      sectionDesc:
        " Several smart city initiatives are being implemented in Chennai, emphasizing technology-based solutions to enhance urban living and promote sustainability.  ",
      label: "Smart City",
      image: "/images/Live-Images/SubPages/Chennai-Smart-City-Projects.jpg",
      benefits: [
        {
          id: 1,
          title: "Intelligent Transportation ",
          para: "Efforts comprise smart traffic control, enhanced public transportation systems, and encouragement of non-motorized transport alternatives. ",
          imgs: "/images/Live-Images/SubPages/Icons/Intelligent-Transportation.svg",
        },
        {
          id: 2,
          title: "Intelligent Water Administration ",
          para: " Initiatives emphasize effective water allocation, sewage management, and conservation via technological advancements and infrastructure improvements. ",
          imgs: "/images/Live-Images/SubPages/Icons/Intelligent-Water-Administration.svg",
        },
        {
          id: 3,
          title: "Intelligent Setting ",
          para: " Initiatives seek to expand green areas, enhance waste disposal methods, and encourage sustainable energy consumption throughout the city. ",
          imgs: "/images/Live-Images/SubPages/Icons/Intelligent-Setting.svg",
        },
      ],
    },
    {
      sectionTitle: "Chennai IT Investment Area (ITIR)",
      sectionDesc:
        "A proposed mega-region designed to draw investments in IT, electronics production, and associated industries, promoting economic development and job opportunities.  ",
      label: "IT Investment",
      image:
        "/images/Live-Images/SubPages/Chennai-IT-Investment-Area (ITIR).jpg",
      benefits: [
        {
          id: 1,
          title: "Region ",
          para: " The suggested ITIR encompasses a vast region to the southwest of Chennai, strategically positioned between the IT corridor and national roads.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Region.svg",
        },
        {
          id: 2,
          title: "Framework ",
          para: "The strategy encompasses major funding for road, rail, and air connections, along with utilities and social infrastructure in the area.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Framework.svg",
        },
        {
          id: 3,
          title: "Connection",
          para: " Improved connectivity is a primary emphasis, connecting the ITIR with Chennai, major roadways, and possibly a new airport to support commerce and travel.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Connection-1.svg",
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
          <img
            src="./images/Live-Images/SubPages/Future-Growth-&-Development-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Future Growth & Development </h3>
              <div className="breadCrum">
                <Link to="/live"> Live </Link> -{" "}
                <a href="">Future Growth & Development</a>
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
              <p>
                Future Growth & Development &nbsp; in Chennai &nbsp; Future
                Growth & Development &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>Future Growth & Development</h3>
              <p>
                Chennai's future imagines a dense, eco-friendly urban design
                with improved infrastructure. Main focal points encompass
                enlarging green areas, enhancing waste management, strengthening
                public transportation, and rehabilitating water bodies, all
                propelled by active participation from stakeholders for
                equitable advancement.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}
        {benefitSections.map((section, index) => (
          <section
            key={index}
            className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#7d377d] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
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
              <div className="clcscrlinRBox MainSectionHovered">
                {section.benefits.map((item) => (
                  <div key={item.id} className="clcboxItemss flex">
                    <div className="clcboxIImg">
                      <img src={item.imgs} alt={item.title} />
                    </div>
                    <div className="clcboxICont">
                      <h3>{item.title}</h3>
                      <p>{item.para}</p>
                      <p className="linkpara">
                        <a href="#">
                          <img
                            src="/images/Live-Images/SubPages/LinkArrowRightIcon.svg"
                            alt=""
                          />
                        </a>
                      </p>
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
                Regardless of whether you have chosen Chennai to stay or move
                from one area to another area, Super Chennai will be the best
                guide to explore the essentials. So that you could easily live a
                lively and energetic life in Chennai.
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
