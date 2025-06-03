import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function ITandSoftwareDevelopment() {
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
      sectionTitle: "Thriving Software Services Sector",
      sectionDesc:
        " Chennai is home to a wide variety of IT firms whose experts service customers worldwide across several sectors.",
      image: "/images//Innovate-Images/SubPages/thriving-software.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Global Outsourcing Destination",
              para: [
                "Chennai-based businesses utilize their highly qualified staff and professionals for software development and support services to outsource many projects from all around the world. ",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Global-Outsourcing-Destination.svg",
              // // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Diverse Service Offerings",
              para: [
                "The software business is divided into several domains. From consultation to application development, Chennai software businesses offer all of those services.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Diverse-Service-Offerings.svg",
              // // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Skilled Talent Pool",
              para: [
                "Chennai is a popular destination for international businesses due to its highly qualified workforce. Chennai positions itself as a top destination for IT services.  ",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Skilled-Talent-Pool.svg",
              // // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Growing Software Product Development",
      sectionDesc:
        "Beyond services, Chennai also offers product and application development with startups and IT organizations to provide a solution to the domestic and worldwide market.",
      image: "/images/Innovate-Images/SubPages/growing-software.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Startup Ecosystem Growth",
              para: [
                " Chennai's startup community is encouraging the development of original and inventive software to address a range of societal and commercial issues. ",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Startup-Ecosystem-Growth.svg",
              // // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Focus on Innovation",
              para: [
                "When it comes to their own software, which doesn't exist, or creating a superior one that meets industrial demands, Chennai businesses are always focused on innovation and creativity.  ",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Focus-on-Innovation.svg",
              // // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Catering to Global Markets",
              para: [
                " Chennai-developed software is promoted and utilized by both Indian and foreign markets, making it a worldwide application. ",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Catering-to-Global-Markets.svg",
              // // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Emergence of Niche Technologies",
      sectionDesc:
        "Niche technologies, including cloud computing, cybersecurity, AI and machine learning, and digital marketing, are growing quickly in Chennai. For qualified experts, this opens up specific options.",
      image: "/images/Innovate-Images/SubPages/emergence.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "AI and Machine Learning Advancements",
              para: [
                "With businesses creating innovative solutions, Chennai is emerging as a major hub for AI and ML research and development.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/AI-and-Machine-Learning-Advancements.svg",
              // // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Cloud Computing Adoption",
              para: [
                "The growing use of cloud technology by Chennai businesses has increased the need for knowledge of cloud platforms and services.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Cloud-Computing-Adoption.svg",
              // // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Cybersecurity Focus",
              para: [
                " Chennai's IT industry is putting more of an emphasis on cybersecurity due to the rise in digital threats, which is opening doors for experts in this vital field. ",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Cybersecurity-Focus.svg",
              // // link: "/urban-beaches",
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
            src="/images/Innovate-Images/SubPages/IT-Software-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>IT and Software Development</h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> -{" "}
                <a href="">IT and Software Development </a>
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
              <h3>IT and Software Development in Chennai</h3>
              <p>
                Chennai's numerous software and IT ecosystems draw young people
                from all over the world, particularly from India. It promotes
                the development of products, developing technologies, and a
                robust startup culture. Chennai is hence a major factor in
                India's development.
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
