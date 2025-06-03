import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function ThreeDPrintingandAdditiveManufacturing() {
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
      sectionTitle: "Expanding 3D Printing Service Bureaus",
      sectionDesc:
        "This 3D printing business offers a variety of technologies, including metal printing, SLA, FDM, and others, to meet the demands of low-volume manufacturing and prototyping across sectors.",
      image: "/images/Innovate-Images/SubPages/expanding.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Rapid Prototyping Solutions",
              para: [
                " Companies in Chennai employ this technology to create designs and prototypes at a reasonable cost.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Rapid-Prototyping-Solutions.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Customized Part Manufacturing",
              para: [
                "In Chennai, 3D printing makes it possible to produce components that are specifically designed for a range of uses, including medical and automotive devices.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Customized-Part-Manufacturing.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Diverse Material Options",
              para: [
                "To meet particular needs, this Chennai bureau offers a range of materials, including composites, metals, and plastics.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Diverse-Material-Options.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Innovative Applications Across Industries",
      sectionDesc:
        "This technology is being applied creatively in a variety of fields, including medical modeling, tools, etc., to produce personalized items.",
      image: "/images/Innovate-Images/SubPages/innovative.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Tooling and Fixture Production",
              para: [
                " It makes it possible to produce molds, fixtures, and specialized jigs for Chennai's manufacturing industry.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Tooling-and-Fixture-Production.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Medical Modeling and Implants",
              para: [
                "Anatomical models and even personalized medical implants are being made in Chennai using 3D printing.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Medical-Modeling-and-Implants.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Consumer Goods and Design",
              para: [
                "3D printing is being used by Chennai-based designers and companies to create customized goods, artwork, and architectural models.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Consumer-goods-and-design.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Research and Startup Ecosystem Growth",
      sectionDesc:
        "Academic institutions and an increasing number of businesses in Chennai are actively working to further materials research, 3D printing technology, and novel additive manufacturing applications.",
      image: "/images/Innovate-Images/SubPages/research-3d.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Academic Research Initiatives",
              para: [
                "In order to progress this sector, major universities are researching and analyzing sophisticated 3D printing. Chennai's universities are researching material science and cutting-edge 3D printing methods.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Academic-Research-Initiatives.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Rise of 3D Printing Firms",
              para: [
                "There is a visible rise in the 3D printing service providing company in chennai that offers specialized and personalized solutions to the customers.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Rise-of-3D-Printing-Firms.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: " Industry and Government Support",
              para: [
                "Due to the high demand in this field, government provides support for workforce to learn aboutthis additive manufacturing in Chennai.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Industry-and-Government-Support.svg",
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
          <img src="/images/Innovate-Images/SubPages/3D-Printing-Additive-Manufacturing-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>3D Printing and Additive Manufacturing</h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> -  <a href="">3D Printing and Additive Manufacturing </a>
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
              <h3>3D Printing and Additive Manufacturing</h3>
              <p>
                Chennai City has benefited greatly from 3D printing for
                startups, service providers, and the creation of bespoke
                components for the automotive, medical, and other industries to
                promote efficiency and creativity.
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
