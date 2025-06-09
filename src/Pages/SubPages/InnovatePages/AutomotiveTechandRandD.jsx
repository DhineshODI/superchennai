import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function AutomotiveTechandRandD() {
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
    sectionTitle: "Pioneering Electric Vehicle Technologies",
    sectionDesc:
      "Chennai has made significant investments in the field of automotive research and development, with a primary focus on engine design, battery development, and charging infrastructure solutions.",
    image: "/images/Innovate-Images/SubPages/pioneering.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Advanced Battery Development",
            para: [
      " Studies on existing e-vehicle batteries will improve their energy viscosity, charging capabilities, and lifespan."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Advanced-Battery-Development.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Efficient Powertrain Design",
            para: [
      "Professionals utilize electric motors and power electronics to improve EV performance and range."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Efficient-Powertrain-Design.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Charging Infrastructure Solutions",
            para: [
      "The automobile industry's research and development activities include creating intelligent and easily available charging outcomes."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Charging-Infrastructure-Solutions.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
    ],
  },
   {
    sectionTitle: "Enhancing Vehicle Safety and Intelligence",
    sectionDesc:
      "Chennai prioritizes passenger safety via sophisticated systems development, intelligence technology integration, and automotive research and development.",
    image: "/images/Innovate-Images/SubPages/enhancing-automative.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Advanced Motorist Assistance Systems (ADAS)",
            para: [
      "This study focuses on features like as automated exigency retardation, lane maintaining assistance, and velocity control."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Advanced-Motorist-Assistance-Systems.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Passive Safety Inventions",
            para: [
      "Chennai's research and development focuses on improving crashworthiness through sophisticated structural design and accessories."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Passive-Safety-Inventions.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Connected Car Technologies",
            para: [
      "V2X connection is being developed for improved safety and business flow."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Connected-Car-Technologies.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
    ],
  },
  {
    sectionTitle: "Fostering Sustainable and Smart Mobility",
    sectionDesc:
      "Chennai's automotive and research and development sectors have also prepared passengers for smart mobility outcomes by enabling them to investigate essential energy and emerging technologies for transportation in the future.",
    image: "/images/Innovate-Images/SubPages/fostering.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Research on Alternative Fuels",
            para: [
      "Studies on hydrogen, biofuels, and other energy sources are presently underway to replace gasoline, diesel, and other fuels."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Research-on-Alternative-Fuels.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: " Smart Mobility outcomes",
            para: [
      "Research and development include investigating technologies for autonomous driving, intelligent transportation systems, and participatory mobility."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Smart-Mobility-outcomes.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Material Innovation and Lightweighting",
            para: [
      "Efforts are made to create automobiles that are lightweight. so that in addition to the benefits of efficiency and low energy consumption, the driver can operate the vehicle with ease."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Material-Innovation-and-Lightweighting.svg",
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
        { src: "/images/Innovate-Images/SubPages/Augmented Reality-Virtual Reality-thum.jpg", title: "Augmented Reality ", link: "/augmentedreality" },
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
          <img src="/images/Innovate-Images/SubPages/Automotive-Tech-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Automotive Tech and R&D </h3>
              <div className="breadCrum">
                 <Link to="/innovate"> Innovate </Link> - <a href="">Automotive Tech and R&D </a>
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
              Innovate  &nbsp; in Chennai &nbsp; Innovate  &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>Automotive Tech and R&D in Chennai </h3>
              <p>
         India's automotive hubs provide the ecosystem for car technology research and development. This includes smart mobility solutions, safety features, and electric vehicle innovations, all of which are backed by robust industry and academic cooperation as well as specialized testing facilities. 

 </p>
            </div>
          </div>
        </div>

          

 {imageSections.map((section, index) => (
    <section
  className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index % 3 === 0 ? "pattern-a" : index % 3 === 1 ? "pattern-b" : "pattern-c"}`}
  key={index}> 
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
                   <a  href={item.link || "#"}  className="text-blue-600 hover:underline text-sm font-medium"  >
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
