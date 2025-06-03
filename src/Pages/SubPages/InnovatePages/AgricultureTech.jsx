import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";

import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function AgricultureTech() {
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

  const imageSections = [
    {
      sectionTitle: "Precision Farming Initiatives in Chennai",
      sectionDesc:
        "To increase the yield of their crops and vegetables, farmers in Chennai are implementing precision farming methods including data analytics and crop irrigation optimization.",
      image: "/images/Innovate-Images/SubPages/Precision.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "IoT-Based Monitoring Systems",
              para: [
                "IoT aids in the detection of temperature, nutrient levels, air humidity, and soil moisture content. The finest farming techniques are guided by these.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/IoT-Based-Monitoring-Systems.svg",
              // // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Automated Irrigation Solutions",
              para: [
                "These systems automatically irrigate plants at the appropriate time and level, resulting in less water waste, accurate water distribution, and enough hydration for crops throughout Chennai.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Automated-Irrigation-Solutions.svg",
              // // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Data-Driven Crop Management",
              para: [
                "To determine the health of the crops and the best ways to manage pests, data-driven approaches are used to analyze crop health.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Data-Driven-Crop-Management.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Drone Technology for Agricultural Needs",
      sectionDesc:
        "In agriculture, drones are used for crop and plant monitoring and spraying. Drone technology is being used in agriculture to conduct field surveys for thorough crop health evaluations.",
      image: "/images/Innovate-Images/SubPages/drone.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Aerial Crop Monitoring and Analysis",
              para: [
                "These drones provide a detailed visual image that makes it simple to identify any illness in Chennai farmlands beforehand.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Aerial-Crop-Monitoring-and-Analysis.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Accurate Spraying Applications",
              para: [
                "These drones are employed to spray insecticides and fertilizer into farmlands in Chennai. This lessens the effect of pesticides on plants and farms.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Accurate-Spraying-Applications.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Effective Field Mapping and Planning",
              para: [
                " In order to manage the farm more effectively from planting to harvesting, drones also offer a thorough mapping of the farm's structure.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Effective-Field-Mapping-and-Planning.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Digital Marketplaces and Farmer Connectivity",
      sectionDesc:
        "The growth of online markets provides farmers the chance to communicate directly with consumers, enabling them to sell their gathered goods at a higher price.",
      image: "/images/Innovate-Images/SubPages/digital.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: " Online Platforms for Direct Sales",
              para: [
                "By eliminating the middleman and bringing Chennai farmers and customers together directly, they will increase profitability.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Online-platforms-for-direct-sales.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: " Increased Price Transparency",
              para: [
                "Farmers leverage digital markets to make their own selling decisions based on real-time price information.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Innovate-agriculture-tech.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Simplified Logistics and Supply Chain",
              para: [
                " Produce from Chennai's farms is being transported and distributed more efficiently thanks to technology-driven platforms.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Simplified-Logistics-and-Supply-Chain.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
  ];
  const images = [
    {
      src: "/images/Innovate-Images/SubPages/IT-Software-thum.jpg",
      title: "IT and Software Development",
      link: "/itandsoftwaredevelopment",
    },
    {
      src: "/images/Innovate-Images/SubPages/Artificial-Intelligence-thum.jpg",
      title: "Artificial Intelligence and Machine Learning",
      link: "/artificialintelligenceandmachinelearning",
    },
    {
      src: "/images/Innovate-Images/SubPages/Electric-Vehicles-thum.jpg",
      title: "Electric Vehicles (EV)",
      link: "/ElectricVehicles",
    },
    {
      src: "/images/Innovate-Images/SubPages/Smart-City-thum.jpg",
      title: "Smart City Initiatives ",
      link: "/smartcityinitiatives",
    },
    {
      src: "/images/Innovate-Images/SubPages/Healthcare-Tech-thum.jpg",
      title: "Healthcare Tech Innovation",
      link: "/healthcaretechinnovation",
    },
    {
      src: "/images/Innovate-Images/SubPages/Robotics-Automation-thum.jpg",
      title: "Robotics and Automation",
      link: "/roboticsandautomation",
    },
    {
      src: "/images/Innovate-Images/SubPages/Blockchain-Fintech-thum.jpg",
      title: "Blockchain and Fintech",
      link: "/blockchainandfintech",
    },
    {
      src: "/images/Innovate-Images/SubPages/Automotive-Tech-thum.jpg",
      title: "Automotive Tech and R&D",
      link: "/automotivetechandrandd",
    },
    {
      src: "/images/Innovate-Images/SubPages/Education-Tech-thum.jpg",
      title: "Educational Institutions ",
      link: "/educationinstitutions",
    },
    {
      src: "/images/Innovate-Images/SubPages/3D-Printing-Additive-Manufacturing-thum.jpg",
      title: "3D Printing and Additive Manufacturing ",
      link: "/threedprintingandadditivemanufacturing",
    },
    {
      src: "/images/Innovate-Images/SubPages/Augmented Reality-Virtual Reality-thum.jpg",
      title: "Augmentedreality ",
      link: "/augmentedreality",
    },
    {
      src: "/images/Innovate-Images/SubPages/Agriculture-Tech-thum.jpg",
      title: "Agriculture Tech ",
      link: "/agriculturetech",
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
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Innovate-Images/SubPages/Agriculture-Tech-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Agriculture Tech</h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> -{" "}
                <a href="">Agriculture Tech </a>
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
                Innovate &nbsp; in Chennai &nbsp; Innovate &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>Agriculture Tech in Chennai </h3>
              <p>
                Chennai's agriculture is booming owing to the development of new
                technologies including precision farming, terrace farming, high
                yield, drone support for plant monitoring and spraying, and the
                growth of online markets that allow farmers and consumers to
                interact directly. so that farmers can earn a lot of money.
              </p>
            </div>
          </div>
        </div>

        {imageSections.map((section, index) => (
          <section
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${
      index % 3 === 0
        ? "pattern-a"
        : index % 3 === 1
        ? "pattern-b"
        : "pattern-c"
    }`}
            key={index}
          >
            <div className="imgLeft">
              <img src={section.image} alt={section.sectionTitle} />
            </div>
            <div className="imgText flex items-center">
              <div className="imgcolTitle bg-[#682865] relative">
                <h2 className="flex flex-col text-white">
                  <small>{section.sectionTitle}</small>
                </h2>
                <p>{section.sectionDesc}</p>
              </div>
            </div>

            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              {section.tenantInfoSections.map((tenant, i) => (
                <div key={i}>
                  <h4 className="text-lg font-semibold mb-4">{tenant.title}</h4>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4">
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3>{item.title}</h3>
                        <p>{item.para}</p>
                        <div className="exploreMorebuttonVisitChennai">
                          <a
                            href={item.link || "#"}
                            className="text-blue-600 hover:underline text-sm font-medium"
                          >
                            Explore More
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}
        {/*--------------- Explore More Chennai----------------- */}

        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>Chennai’s tech pulse</h4>
              <p>
                Chennai's software development industry is drawing individuals
                from all over the world for work and business. With a
                knowledgeable staff, it positions itself as a major center for a
                range of IT solutions.
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
