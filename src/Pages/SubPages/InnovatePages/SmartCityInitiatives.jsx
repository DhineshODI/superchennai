import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export default function SmartCityInitiatives() {
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
    sectionTitle: "Focus on Integrated Infrastructure",
    sectionDesc:
      "For the benefit of the general population, Chennai improves its infrastructure in areas like energy management, water supply, public transit, power, and water management systems.",
    image: "/images/Innovate-Images/SubPages/focus.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Intelligent Transportation Systems",
            para: [
      "Chennai has taken a number of steps to increase comfort and mobility, including traffic control, public transportation optimization, improved public transportation, and much more."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Intelligent-Transportation-Systems.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Smart Energy Grids",
            para: [
      "In many parts of Chennai, renewable energy sources are integrated to minimize energy losses and improve distribution efficiency."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Smart-Energy-Grids.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Water and Waste Management",
            para: [
      " To minimize water consumption, leak detection, real-time monitoring of water usage, and even much more have been implemented in the metropolitan city. "
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Water-and-Waste-Management.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
    ],
  },
   {
    sectionTitle: "Enhancing Public Services",
    sectionDesc:
      "In order to provide more effective public practices in areas like digital governance, healthcare, and education, smart city projects are implemented.",
    image: "/images/Innovate-Images/SubPages/enhancing.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "E-Government and Digital Services",
            para: [
      " To improve citizen convenience and cut down on wait times, e-government and digital services have been introduced for accessing government services including filing for personal and company papers. "
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/E-Government-and-Digital-Services.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Smart Healthcare Solutions",
            para: [
      " These solutions facilitate easier access to medical features, remote monitoring, and improved patient recovery."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Smart-Healthcare-Solutions.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Technology in Education",
            para: [
      "To help students better grasp real-time projects, some schools and colleges in Chennai have incorporated digital learning using projectors and smart classrooms. "
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Technology-in-Education.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
    ],
  },
  {
    sectionTitle: "Promoting Sustainability and Resilience",
    sectionDesc:
      "Through clever responses to earthquake and tsunami attacks, climate change, and many other natural calamities, the Chennai government always places a high priority on environmental sustainability and resilience.",
    image: "/images/Innovate-Images/SubPages/promoting.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Smart Environmental Monitoring",
            para: [
      "To facilitate environmental decision-making, data sensors are used to assess Chennai's air and water quality."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Smart-Environmental-Monitoring.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Disaster Management and Preparedness",
            para: [
      "Chennai employs technology to effectively respond to emergencies and identify natural catastrophes early."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Disaster-Management-and-Preparedness.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Sustainable Urban Development",
            para: [
      " Chennai integrates smart building technology to support sustainable practices and green areas."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Sustainable-Urban-Development.svg",
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
          <img src="/images/Innovate-Images/SubPages/Smart-City-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Smart City Initiatives</h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> - <a href=""> Smart City Initiatives </a>
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
              <h3>Smart City Initiatives in Chennai</h3>
              <p>
           Chennai is implementing smart living through infrastructure improvements, effective public services, sustainable solutions, increased public involvement, women's safety, and other measures to enhance urban life through innovation and technology. It seeks to make the city a more secure and resilient place to live.

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
