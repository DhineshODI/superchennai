import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function BlockchainandFintech() {
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
    sectionTitle: "Rising Adoption of Blockchain in Fintech",
    sectionDesc:
      "Data security for clients is crucial. Fintech businesses in Chennai assist other industries in securely protecting client data, transparency, and completed transactions.",
    image: "/images/Innovate-Images/SubPages/rising.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Secure and Transparent Transactions",
            para: [
      "In order to guarantee security, customers must have auditable transactions. And Chennai makes use of this Blockchain Fintech capability."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Secure-and-Transparent-Transactions.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Investigating Decentralized Finance (DeFi)",
            para: [
      "Fintech companies in Chennai are investigating blockchain technology for lending, borrowing, and other financial services."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Investigating-Decentralized-Finance-(DeFi).svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Improving Digital Identity Solutions",
            para: [
      "A digital identity for safe and portable account login will be available inside the financial ecosystem. Blockchain is regarded as the greatest option in Chennai."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Improving-Digital-Identity-Solutions.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
    ],
  },
   {
    sectionTitle: "Growth of Fintech Startups Utilizing Blockchain",
    sectionDesc:
      "Blockchain technology has been utilized by a wide range of businesses, not only financial institutions, to ensure the security of their transactions. Fintech firms are in high demand in Chennai due to this necessity.",
    image: "/images/Innovate-Images/SubPages/growth-blockchain.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Innovative Payment Solutions",
            para: [
      "Fintech businesses provide payment solution software for quicker and less expensive payment processing in addition to offering secure payment services."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Innovative-Payment-Solutions.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: "Blockchain-Powered Lending Platforms",
            para: [
      "Startups publicly investigate blockchain development in order to lend effectively from peer to peer."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Blockchain-Powered-Lending-Platforms.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: " Asset Tokenization Initiatives",
            para: [
      "To increase liquidity and accessibility, fintech businesses in Chennai are looking at using blockchain technology to tokenize a variety of assets."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Asset-Tokenization-Initiatives.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
    ],
  },
  {
    sectionTitle: "Collaborations and Ecosystem Development",
    sectionDesc:
      "Support is required for all new domains. Additionally, a large number of businesses, including startups, financial institutions, and technology suppliers, are supporting this Blockchain development.",
    image: "/images/Innovate-Images/SubPages/collaborations.jpg",
    tenantInfoSections: [
      {
         points: [
          {
            title: "Innovation Partnerships",
            para: [
      " Blockchain cannot be created without the involvement of established financial players. They both work together to improve one other's performance."
     ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Innovation-Partnerships.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
      {
         points: [
          {
            title: " Incubation and Acceleration Programs",
            para: [
      "Initiatives to advance blockchain development in Chennai are being sought out."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Incubation-and-Acceleration-Programs.svg",
              // link: "/urban-beaches",
          },
           
        ],
      },
        {
         points: [
          {
            title: "Government Support and Regulatory Awareness",
            para: [
      "Given that this domain offers the greatest option for processing payments or transactions, the government also supports it. They think that this might lower the number of fraudulent transactions and crome rates."
         
    ],
             imgs: "/images/Innovate-Images/SubPages/Icons/Government-Support-and-Regulatory-Awareness.svg",
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
          <img src="/images/Innovate-Images/SubPages/Blockchain-Fintech-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Blockchain and Fintech </h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> - <a href="">Blockchain and Fintech </a>
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
              <h3>Blockchain and Fintech in Chennai </h3>
              <p>
           Chennai also contributes to the expansion of blockchain and fintech domain names. This encourages innovation in decentralized money, digital identification, and safe transactions. With the rise of startups in this field, Chennai is emerging as a significant hub for the development of fintech.

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
