import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function Healthcare() {
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

  const benefitSections = [
    {
      sectionTitle: "A Robust Network of Healthcare Facilities",
      sectionDesc: "Catering to Varied Health Requirements ",
      image:
        "/images/Live-Images/SubPages/A-Robust-Network-of-Healthcare-Facilities.jpg",
      benefits: [
        {
          id: 1,
          title: "Extensive Healthcare Facilities",
          para: "Chennai hosts a variety of government hospitals, including Rajiv Gandhi Government General Hospital and Stanley Medical College, alongside leading private establishments like Apollo Hospitals, MIOT International, and Fortis Malar Hospital. These facilities are designed to accommodate various medical specialties, ranging from standard check-ups and general medicine to complex surgical operations, including dental services and ENT offered at institutions such as KKR ENT Hospital and Institute. ",
          imgs: "/images/Live-Images/SubPages/Icons/Extensive-Healthcare-Facilities.svg",
        },
        {
          id: 2,
          title: "Valuing Traditional Healing",
          para: "In addition to allopathic medicine, the city acknowledges and facilitates access to traditional Indian practices like Siddha, Ayurveda, and Unani, through specialized facilities such as the Government Siddha Medical College Hospital, Dhanwanthralaya Ayurveda Specialty Hospital, and the Regional Research Institute of Unani Medicine, presenting alternative and comprehensive methods for health and wellness. ",
          imgs: "/images/Live-Images/SubPages/Icons/Valuing-Traditional-Healing.svg",
        },
      ],
    },
    {
      sectionTitle: "Available Primary and Specialized Care",
      sectionDesc:
        "Making certain that healthcare is accessible to every demographic group. ",
      image:
        "/images/Live-Images/SubPages/Available-Primary-and-Specialized-Care.jpg",
      benefits: [
        {
          id: 1,
          title: "Community-Centric Care Networks",
          para: "A robust network of government-operated primary health centers and urban public health facilities spans Chennai, ensuring that vital healthcare services are easily accessible in local communities. ",
          imgs: "/images/Live-Images/SubPages/Icons/community-centric-care-networks.svg",
        },
        {
          id: 2,
          title: "Specialized Medical Areas",
          para: "In addition to general healthcare, the city offers specialized centers and professionals concentrating on particular medical fields, such as advanced dental and ENT services found in numerous hospitals and clinics, guaranteeing that expert care is within reach.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Specialized-Medical-Areas.svg",
        },
      ],
    },
    {
      sectionTitle: "A Comprehensive Strategy for Wellness",
      sectionDesc: "Combining Various Medical Philosophies  ",
      image:
        "/images/Live-Images/SubPages/A-Comprehensive-Strategy-for-Wellness.jpg",
      benefits: [
        {
          id: 1,
          title: "Options in Healthcare Systems",
          para: "Residents of Chennai can select from modern medical therapies or traditional healing methods, facilitating a tailored approach to their health experience, with many Siddha, Ayurveda, and Unani clinics accessible. ",
          imgs: "/images/Live-Images/SubPages/Icons/Options-in-Healthcare-Systems.svg",
        },
        {
          id: 1,
          title: "An Expanding Awareness",
          para: " There is a rising recognition of the advantages of combining various medical systems, promoting a more inclusive and holistic method to health care and wellness throughout the city.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Expanding-Awareness.svg",
        },
      ],
    },
  ];

  const images = [
    {
      src: "/images/Live-Images/Cost-of-living.jpg",
      title: "Cost-of-living",
      link: "/costofliving",
    },
    {
      src: "/images/Live-Images/Residency.jpg",
      title: "Residency",
      link: "/residencypropertyrentbuyinchennai",
    },
    {
      src: "/images/Live-Images/Employment.jpg",
      title: "Employment",
      link: "/employmentinchennai",
    },
    {
      src: "/images/Live-Images/Transportation.jpg",
      title: "Transportation",
      link: "/transportation",
    },
    {
      src: "/images/Live-Images/Healthcare-banner.jpg",
      title: "Healthcare",
      link: "/healthcare",
    },
    {
      src: "/images/Live-Images/Culture-Religious-Attractions.jpg",
      title: "Culture Religious",
      link: "/culturereligiousattractions",
    },
    {
      src: "/images/Live-Images/Recreation.jpg",
      title: "Recreation",
      link: "/recreation",
    },
    {
      src: "/images/Live-Images/Neighbourhood.jpg",
      title: "Neighbourhood",
      link: "/neighbourhood",
    },
    {
      src: "/images/Live-Images/Quality-of-Life.jpg",
      title: "Quality of Life",
      link: "/qualityoflife",
    },
    {
      src: "/images/Live-Images/Future-Growth-&-Development.jpg",
      title: "Future Growth & Development",
      link: "/futuregrowthdeveloping",
    },
    {
      src: "/images/Live-Images/Educational-Institutions.jpg",
      title: "Eduational Insitiutions",
      link: "/educationinstitutions",
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
    autoplay: true,
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
            src="/images/Live-Images/SubPages/Healthcare-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Healthcare </h3>
              <div className="breadCrum">
                <Link to="/live"> Live </Link> - <a href="">Healthcare</a>
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
              <p>Live &nbsp; in Chennai &nbsp; Live &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>A Blend of Healthcare Traditions and Modern Expertise </h3>
              <p>
                Chennai serves as a vital healthcare hub, providing a wide
                variety of medical services that combine contemporary techniques
                with a deep-rooted tradition of healing practices. The city
                addresses a broad range of health requirements, guaranteeing
                that both residents and individuals in need of medical
                assistance discover appropriate choices.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}
        {benefitSections.map((section, index) => (
          <section
            className={`clcSecscrl flex transition-colors duration-300 ${
              index % 2 === 0 ? "bg-white" : "bg-[#7d377d]"
            }`}
            key={index}
          >
            <div className="clcscrlCol clcscrlLft relative">
              <div className="clcscrlinLBox sticky top-0">
                <img src={section.image} alt={section.sectionTitle} />
                <div
                  className={`clcscrLtitle relative ${
                    index % 2 === 0 ? "bg-[#7d377c]" : "bg-[#672866]"
                  }`}
                >
                  <h2 className="flex flex-col text-white">
                    <small>{section.sectionTitle}</small>
                  </h2>
                  <p>{section.sectionDesc}</p>
                </div>
              </div>
            </div>
            <div className="clcscrlCol clcscrlRight padbtm">
              <div className="clcscrlinRBox MainSectionHovered">
                {section.benefits.map((item) => (
                  <div key={item.id} className="clcboxItemss flex">
                    <div className="clcboxIImg">
                      <img src={item.imgs} alt={item.title} />
                    </div>
                    <div className="clcboxICont">
                      <h3>{item.title}</h3>
                      <p>{item.para}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/*--------------- Explore More Chennai----------------- */}

        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>CHENNAI LIFE ESSENTIALS</h4>
              <p>
                Regardless of whether you have chosen Chennai to stay or move
                from one area to another area, Super Chennai will be the best
                guide to explore the essentials. So that you could easily live a
                lively and energetic life in Chennai.
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
