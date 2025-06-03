import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function ElectricVehicles() {
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
      sectionTitle: "Growing Electric Vehicle Ecosystem",
      sectionDesc:
        "Chennai is gaining popularity due to its clean technology and electric vehicles, which are more beneficial for industries like auto manufacturing and associated ones. Manufacturers, suppliers of components, and even startups are drawn to it.",
      image: "/images/Innovate-Images/SubPages/growing-electric.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "EV Manufacturing Hub",
              para: [
                "Chennai is home to a few manufacturing facilities that produce both two-wheeler and three-wheeler automobiles. Additionally, this helps the business grow in and around Chennai.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/EV-Manufacturing-Hub.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Development of Charging Infrastructure",
              para: [
                "Efforts are made to include private and public EV charging stations around the city.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Development-of-Charging-Infrastructure.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Battery Technology Research",
              para: [
                "In order to introduce cutting-edge features, several companies and academies were committed to doing research in battery technology.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Battery-Technology-Research.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Clean Technology Integration in Transportation ",
      sectionDesc:
        "Chennai has started integrating clean technologies into the transportation industry to reduce air pollution by lowering fuel usage or using better alternatives in automobiles.",
      image: "/images/Innovate-Images/SubPages/clean-technology.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Emphasis on Sustainable Fuels",
              para: [
                "Research is being conducted to investigate the use of biofuels and other alternatives for other public and private transportation in roads, railroads, and airport projects.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Emphasis-on-Sustainable-Fuels.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Development of Smart Mobility Solutions",
              para: [
                "Chennai has started developing smart mobility solutions to save fuel use and preserve traffic flow.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Development-of-Smart-Mobility-Solutions.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Public and shared electric mobility",
              para: [
                " Encouraging the utilization of electric buses, electric rickshaws, and shared electric vehicles is one way Chennai City promotes public and shared electric mobility.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Public-and-shared-electric-mobility.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Research and Development in Clean Transportation",
      sectionDesc:
        "Academic and research institutions contribute significantly to clean mobility via focused research and development through partnerships with several automobile sectors.",
      image: "/images/Innovate-Images/SubPages/research.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Dedicated EV Research Centers",
              para: [
                " In Chennai, academic institutions and research groups are setting up facilities devoted to the development of electric vehicle technology.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Dedicated-EV-Research-Centers.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Partnership with Automotive Sector",
              para: [
                "Research institutes and academic institutions have partnered to improve the operation of cleaner automobiles.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Partnership-with-Automotive-Sector.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: " Materials and Manufacturing",
              para: [
                "Research initiatives also look at environmentally friendly materials and production techniques for the automobile sector.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Materials-and-Manufacturing.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
  ];

const images = [
    { src: "/images/Innovate-Images/SubPages/IT-Software-thum.jpg", title: "IT and Software Development", link: "/itandsoftwaredevelopment" },
    { src: "/images/Innovate-Images/SubPages/Artificial-Intelligence-thum.jpg", title: "Artificial Intelligence and Machine Learning", link: "/artificialintelligenceandmachinelearning" },
    { src: "/images/Innovate-Images/SubPages/Electric-Vehicles-thum.jpg", title: "Electric Vehicles (EV)", link: "/ElectricVehicles" },
    { src: "/images/Innovate-Images/SubPages/Smart-City-thum.jpg", title: "Smart City Initiatives ", link: "/smartcityinitiatives" },
    { src: "/images/Innovate-Images/SubPages/Healthcare-Tech-thum.jpg", title: "Healthcare Tech Innovation", link: "/healthcaretechinnovation" },
     { src: "/images/Innovate-Images/SubPages/Robotics-Automation-thum.jpg", title: "Robotics and Automation", link: "/roboticsandautomation" },
      { src: "/images/Innovate-Images/SubPages/Blockchain-Fintech-thum.jpg", title: "Blockchain and Fintech", link: "/blockchainandfintech" },
       { src: "/images/Innovate-Images/SubPages/Automotive-Tech-thum.jpg", title: "Automotive Tech and R&D", link: "/automotivetechandrandd" },
        { src: "/images/Innovate-Images/SubPages/Education-Tech-thum.jpg", title: "Educational Institutions ", link: "/educationinstitutions" },
        { src: "/images/Innovate-Images/SubPages/3D-Printing-Additive-Manufacturing-thum.jpg", title: "3D Printing and Additive Manufacturing ", link: "/threedprintingandadditivemanufacturing" },
        { src: "/images/Innovate-Images/SubPages/Augmented Reality-Virtual Reality-thum.jpg", title: "Augmentedreality ", link: "/augmentedreality" },
        { src: "/images/Innovate-Images/SubPages/Agriculture-Tech-thum.jpg", title: "Agriculture Tech ", link: "/agriculturetech" },

        
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
          <img src="/images/Innovate-Images/SubPages/Electric-Vehicles-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Electric Vehicles (EV)</h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> - <a href="">Electric Vehicles (EV)</a>
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
              <h3>Electric Vehicles (EV) and Clean Technology in Chennai</h3>
              <p>
                Through incentives and an increasing emphasis on sustainability,
                the government intends to combine battery technology research,
                EV manufacture, and the development of charging infrastructure
                within the transportation industry.
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
