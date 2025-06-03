import { useState, useRef, useEffect } from "react";
import "../Css/work-detail.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function Events() {
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
    sectionTitle: "Honoring Imagination",
    sectionDesc:
      "Dive into the artistic essence of the city.",
    image: "/images/clcscrlImg.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Experience Enchanting Performances",
            para: [
       " Immerse yourself in the wonder of live events, ranging from classic dances and musical concerts to stage plays."

    ],
             imgs: "/images/costofliving/GroceriesIcon.svg",
               // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Discover Artistic Exhibitions",
            para: [
       "Uncover showcases and displays that feature the varied skills of local and traveling artists."
    ],
             imgs: "/images/costofliving/GroceriesIcon.svg",
               // link: "/urban-beaches",
          },
           
        ],
      },
     
    ],
  },
   {
    sectionTitle: "Nurturing Community Ties",
    sectionDesc:
      " Connect with the city's lively social network.",
    image: "/images/clcscrlImg.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Engage in Vibrant Assemblies",
            para: [
       "Participate in festivals and local events that unite individuals in joy and fellowship."

    ],
             imgs: "/images/costofliving/GroceriesIcon.svg",
               // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Explore Distinct Local Events",
            para: [
       "Find smaller, community-focused gatherings that provide a genuine glimpse into Chennai's social scene."
    ],
             imgs: "/images/costofliving/GroceriesIcon.svg",
               // link: "/urban-beaches",
          },
           
        ],
      },
     
    ],
  },
   {
    sectionTitle: "Highlighting Culture and Wisdom",
    sectionDesc:
      " Explore the city's vibrant customs and scholarly activities.",
    image: "/images/clcscrlImg.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Engage in Cultural Festivities",
            para: [
       " Dive into occasions that showcase the area's distinct traditions, practices, and artistic expressions."

    ],
             imgs: "/images/costofliving/GroceriesIcon.svg",
               // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Participate in Knowledge Discussions",
            para: [
       "Go to seminars, workshops, and lectures that encourage learning and exchanging thoughts."
    ],
             imgs: "/images/costofliving/GroceriesIcon.svg",
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
          <img src="/images/Innovate-Images/SubPages/workdetail/cowrking-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Events </h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> - <a href="">Events</a>
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
              className={`workdetailTextBackground ${
                scrollDir === "right"
                  ? "scroll-rightAccomodation"
                  : "scroll-leftAccomodation"
              }`}
              ref={bgTextRef}
            >
              <p>
              Visit  &nbsp; in Chennai &nbsp; Visit  &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>Events</h3>
              <p>
              A colorful kaleidoscope of experiences awaits you when you set out on an adventure in Chennai. A few guiding ideas might improve your trip through this vibrant South Indian city and guarantee a smooth and rewarding tour.

 </p>
            </div>
          </div>
        </div>

         

        {/*----------------- Multiple Benefit Sections ----------------*/}
       <div className="foodlistsec">
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

 <div className="space-y-4 p-4 mt-[50px]  foodListIcon w-full flex flex-wrap">
 
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
</div>

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
