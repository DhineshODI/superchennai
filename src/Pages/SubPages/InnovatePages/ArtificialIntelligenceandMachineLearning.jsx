import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function ArtificialIntelligenceandMachineLearning() {
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
      sectionTitle: "Growing Research & Development in AI",
      sectionDesc:
        "Academic institutes in Chennai that specialize in artificial intelligence and machine learning are actively engaged in research in a number of areas for both theoretical and practical reasons.",
      image: "/images/Innovate-Images/SubPages/growing-research.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Strong Academic Foundation",
              para: [
                " To build strong, bright individuals in research and development, universities in Chennai provide a range of internships, webinars, and programs in this area.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Strong-Academic-Foundation.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Dedicated Research Institutions",
              para: [
                "Through partnerships and efforts, there are a few Chennai-based institutions that are primarily focused on research rather than training.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Dedicated-Research-Institutions.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Industry-Academia Collaboration",
              para: [
                " To help students gain a deeper understanding and expertise in this sector, several academies are working with businesses to provide them with real-world working experts. ",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Industry-Academia-Collaboration.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Growing Industry Adoption of AI and ML",
      sectionDesc:
        " Recently developed, artificial intelligence is also a popular technology. AI technology is used in many industries, including digital marketing, healthcare, finance, and information technology, to enhance decision-making and maintain company trends.",
      image: "/images/Innovate-Images/SubPages/growing-industry.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Integration of the IT Sector",
              para: [
                " In order to provide their customers the best possible service, a number of Chennai-based IT organizations integrate AI and ML into their service offerings. ",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Integration-of-the-IT-Sector.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Healthcare Advancements",
              para: [
                " Drug research, patient-specific therapy, and diagnostics are all being facilitated by this technology. ",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Healthcare-Advancements.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: " Innovation in Financial Services",
              para: [
                " AI and ML are also connected with financial services to improve customer service, analyze risk, and detect fraud.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Innovation-in-Financial-Services.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Expanding AI and ML Startup Ecosystem",
      sectionDesc:
        "Numerous artificial intelligence and machine learning firms are emerging to provide cutting-edge solutions in this field of technology in an effort to maintain Chennai on the cutting edge.",
      image: "/images/Innovate-Images/SubPages/axpanding-ai.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Rise of AI-Native Companies",
              para: [
                "A growing number of companies in Chennai are focusing on machine learning and artificial intelligence technology.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Rise-of-AI-Native-companies.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Investment in AI Innovation",
              para: [
                "Given its significance for the future, a lot of investors express interest in funding AI and ML technologies.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Investment-in-AI-Innovation.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Emphasis on Real-World Applications",
              para: [
                " Chennai-based AI and ML firms are creating workable answers to a range of problems in diverse sectors.",
              ],
              imgs: "/images/Innovate-Images/SubPages/Icons/Emphasis-on-Real-World-Applications.svg",
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
      title: "Augmented Reality ",
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
            src="/images/Innovate-Images/SubPages/Artificial-Intelligence-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Artificial Intelligence and Machine Learning</h3>
              <div className="breadCrum">
                <Link to="/innovate"> Innovate </Link> -{" "}
                <a href="">Artificial Intelligence and Machine Learning </a>
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
              <h3>Artificial Intelligence and Machine Learning in Chennai</h3>
              <p>
                Chennai is becoming a well-known destination for AI and ML. It
                has a robust talent pool that develops via analysis and research
                inside the ecosystem. There are more chances in this innovative
                industry in Chennai.
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
