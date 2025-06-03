import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function HealthcareTechInnovation() {
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
    sectionTitle: "Advancements in Digital Health Platforms",
    sectionDesc:
      " In Chennai, there are a growing number of digital health platforms that offer electronic health records, telemedicine, online consultations, and remote patient monitoring for more accessibility and convenience.",
    image: "/images/Innovate-Images/SubPages/advancements.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Telemedicine and Remote Consultations",
            para: [
      "With this feature, patients can be watched from a distance by medical professionals who treat them virtually while taking their comfort into account."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Telemedicine-and-Remote-Consultations.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Electronic Health Records (EHRs)",
            para: [
      "All patient records are updated digitally using Electronic Health Records (EHRs), which streamlines data accessibility, administration, and procedures."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Electronic-Health- Records.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Mobile Health Applications",
            para: [
      " A growing number of health-focused mobile applications established in Chennai provide users with the tools to monitor and manage their health. "
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Mobile-Health-Applications.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
    ],
  },
   {
    sectionTitle: "Integration of AI and Data Analytics",
    sectionDesc:
      " Employing data analytics and artificial intelligence in the healthcare industry Healthcare companies and providers in Chennai are increasingly using big data analytics and artificial intelligence to deliver personalized treatment plans, faster diagnoses, and predictive healthcare insights.",
    image: "/images/Innovate-Images/SubPages/integration.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "AI-Powered Diagnostics",
            para: [
      "To improve patient outcomes, diagnosis reports, including scan copies, documents, and printouts, are now analyzed with AI's assistance."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/AI-Powered-Diagnostics.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Personalized Treatment Approaches",
            para: [
      "Physicians utilize AI to tailor therapies to each patient's needs in order to enhance their health."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Personalized-Treatment-Approaches.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Predictive Healthcare Analytics",
            para: [
      "With the advent of technology in the medical field, predictions about the future, previous events, and potential cures could potentially be made from a human body."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Predictive-Healthcare-Analytics.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
    ],
  },
  {
    sectionTitle: "Growth in MedTech and Biomedical Engineering",
    sectionDesc:
      "The development of biomedical engineering and medical technology has spurred innovation in Chennai's healthcare sector. Cutting-edge solutions are being generated locally as a result of advanced medical and diagnostic equipment.",
    image: "/images/Innovate-Images/SubPages/growth.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Domestic Medical Device Manufacturing",
            para: [
      "Chennai has long been a hub for the production of advanced medical equipment that patients can afford."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Domestic-Medical-Device-Manufacturing.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Developments in Diagnostic Equipment",
            para: [
      "Everything is being updated at the moment. Similarly, Chennai has upgraded its diagnostic equipment so that it can accurately and swiftly analyze human issues."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Developments-in-Diagnostic-Equipment.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Developments in Biomedical Engineering",
            para: [
      "As biomedical engineering has grown, new methods for diagnosis and therapy have been discovered."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Developments-in-Biomedical-Engineering.svg",
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
          <img src="/images/Innovate-Images/SubPages/Healthcare-Tech-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Healthcare Tech Innovation </h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> - <a href="">Healthcare Tech Innovation </a>
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
              <h3>Healthcare Tech Innovation in Chennai </h3>
              <p>
            The healthcare sector in Chennai is ensuring that technology keeps developing at a rapid pace. It drives advancements in cancer treatment, diagnostics, patient post-care, and early access to medical characteristics. Digital data records, telemedicine, and advancements in medical technology are all used to improve healthcare outcomes.

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
