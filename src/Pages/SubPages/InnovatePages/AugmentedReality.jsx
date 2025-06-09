import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function AugmentedReality() {
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
    sectionTitle: "Enhancing Customer Experience and Retail",
    sectionDesc:
      "Businesses in Chennai have adopted augmented reality to improve the shopping experience. This enables customers to access and see things from the comfort of their own homes.",
    image: "/images/Innovate-Images/SubPages/enhancing-augmented.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Virtual Product Try-Ons",
            para: [
      "Customers utilize this augmented reality technology to virtually try on clothes and accessories in order to improve their shopping experience in Chennai."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Virtual-Product-Try-Ons.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "In-Home Product Visualization",
            para: [
      "Chennai residents can deploy Augmented Reality to browse furniture and other products before making a purchase, which helps them make better decisions."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/In-Home-Product-Visualization.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Interactive Product Information",
            para: [
      "Customers could obtain extensive product information even through digital overlays."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Interactive-Product-Information.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
    ],
  },
   {
    sectionTitle: "Transforming Industrial Applications and Training",
    sectionDesc:
      "Chennai Industries utilizes technology to increase machine efficiency, provide practical training, and provide real-time assistance for complicated maintenance, logistics, and other related operations.",
    image: "/images/Innovate-Images/SubPages/transforming.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Guided Assembly and Maintenance",
            para: [
      "AR provides step-by-step instructions to workers in Chennai on how to build and maintain equipment parts."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Guided-Assembly-and-Maintenance.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Remote Expert Assistance",
            para: [
      "Through live video and digital interactions, specialists in a given field let digitally instruct someone else to perform complicated tasks."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Remote-Expert-Assistance.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Interactive Training Simulations",
            para: [
      "AR delivers Chennai's workers a realistic and secure environment in which to hone their skills. "
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Interactive-Training-Simulations.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
    ],
  },
  {
    sectionTitle: "Innovative Applications in Education and Tourism",
    sectionDesc:
      "AR also benefits the tourism industry by improving visitor experiences at historical and cultural sites and the education sector by assisting instructors and students.",
    image: "/images/Innovate-Images/SubPages/innovative-augmented.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: " Interactive Learning Tools",
            para: [
      "Experts in Chennai have created augmented reality programs that provide students a visual experience in order to make hard subjects easier to learn."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Interactive-Learning-Tools.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: " Augmented Museum and Heritage Visits",
            para: [
      "AR enhances the visitor experience by superimposing historical details and virtual reconstructions on actual sites in Chennai."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Augmented-Museum-and-Heritage-Visits.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Gamified Educational Content",
            para: [
      "AR has produced interactive games to help students learn more in entertaining and captivating ways."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Gamified-Educational-Content.svg",
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
          <img src="/images/Innovate-Images/SubPages/Augmented-Reality-Virtual-Reality-thum-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Augmented Reality (AR)  </h3>
              <div className="breadCrum">
                 <Link to="/innovate"> Innovate </Link> - <a href="">Augmented Reality (AR)  </a>
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
              <h3>Augmented Reality (AR)  in Chennai </h3>
              <p>
        In Chennai, augmented reality is being used extensively in a variety of industries, including manufacturing, education, and details. By increasing operational effectiveness and consumer interactions inside the city, it provides users with a real-time experience with digital content.

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
