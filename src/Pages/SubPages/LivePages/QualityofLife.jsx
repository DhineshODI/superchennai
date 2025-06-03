import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function QualityofLife() {
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
      sectionTitle: "At a Glance",
      sectionDesc:
        " Significant South Indian center combining culture and trade. Recognized for its healthcare, educational sectors, and automotive industry, providing a distinctive urban experience enriched with deep-rooted traditions. ",
      image: "/images/Live-Images/SubPages/At-a-Glance.jpg",
      benefits: [
        {
          id: 1,
          title: "Typical Rent",
          para: "A 1 BHK usually ranges from ₹6,000 to ₹18,000 per month, influenced by the area and facilities available. Being close to the city center or technology hubs typically results in increased expenses. ",
          imgs: "/images/Live-Images/SubPages/Icons/Typical-Rent.svg",
        },
        {
          id: 2,
          title: "Monthly Transit Subscription",
          para: " Unlimited travel on non-AC MTC buses is priced at ₹1000 per month. An all-inclusive choice for both AC and non-AC buses costs ₹2000. ",
          imgs: "/images/Live-Images/SubPages/Icons/Monthly-Transit-Subscription.svg",
        },
        {
          id: 3,
          title: "Government Medical Accessibility",
          para: " A robust network of public hospitals and primary healthcare centers guarantees that a large segment of the population can access affordable medical services. ",
          imgs: "/images/Live-Images/SubPages/Icons/Government-Medical-Accessibility.svg",
        },
        {
          id: 4,
          title: "Employment rate",
          para: " The projected unemployment rate in urban Tamil Nadu for those aged 15 and older has fluctuated from 2021-22 to 2023-24.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Employment-rate.svg",
        },
        {
          id: 5,
          title: "Green Canopy",
          para: "Currently, reports suggest a reduced ranking relative to other significant Indian cities in terms of the total percentage of green spaces. ",
          imgs: "/images/Live-Images/SubPages/Icons/Green-Canopy.svg",
        },
        {
          id: 6,
          title: "Index of Air Quality",
          para: " Specific information regarding this metric in the given search results was not accessible. Data from pollution monitoring locations in real-time would provide the latest information. ",
          imgs: "/images/Live-Images/SubPages/Icons/Index-of-Air-Quality.svg",
        },
      ],
    },
    {
      sectionTitle: "Financial Well-Being",
      sectionDesc:
        "A mix of earnings, savings, and controllable debt enhances a feeling of security and the capacity to fulfill financial requirements and objectives in Chennai. ",
      image: "/images/Live-Images/SubPages/Financial-Well-Being.jpg",
      benefits: [
        {
          id: 1,
          title: "Cost-effective Living",
          para: " Although a large city, Chennai provides quite affordable living choices, especially in terms of housing and everyday costs, when compared to other Indian metropolitan areas. ",
          imgs: "/images/Live-Images/SubPages/Icons/Cost-effective-Living.svg",
        },
        {
          id: 2,
          title: "Varied Employment Landscape",
          para: "Chennai's economic landscape includes IT, manufacturing, healthcare, and more, offering diverse job opportunities for various skills and professions. ",
          imgs: "/images/Live-Images/SubPages/Icons/Varied-Employment-Landscape.svg",
        },
        {
          id: 3,
          title: "Dependable Government Services",
          para: "  Chennai boasts a fairly reliable public transport system and available government healthcare, catering to a large segment of its population. ",
          imgs: "/images/Live-Images/SubPages/Icons/Dependable-Government-Services.svg",
        },
      ],
    },
    {
      sectionTitle: "Ecological Health ",
      sectionDesc:
        "Initiatives to increase green areas, improve waste disposal, harness solar power, and upgrade public transportation seek to foster a healthier environment in Chennai. ",
      image: "/images/Live-Images/SubPages/Ecological-Health.jpg",
      benefits: [
        {
          id: 1,
          title: "Over 1,000 acres of newly established green areas ",
          para: "A notable increase in green spaces throughout the city is set to improve air quality, boost biodiversity, and offer additional recreational areas for inhabitants. ",
          imgs: "/images/Live-Images/SubPages/Icons/GroceriesIcon.svg",
        },
        {
          id: 2,
          title: "Complete door-to-door waste collection and sorting",
          para: " Thorough waste management programs guarantee full collection and accurate sorting, striving for tidier communities and diminished landfill pressure.  ",
          imgs: "/images/Live-Images/SubPages/Icons/door-to-door-waste-collection 3.svg",
        },
        {
          id: 3,
          title: "Solar energy-driven street illumination and civic structures",
          para: " Growing dependence on solar power for public infrastructure lowers carbon emissions and encourages sustainable energy practices across Chennai. ",
          imgs: "/images/Live-Images/SubPages/Icons/Solar-energy-driven-street-illumination-and-civic-structures.svg",
        },
        {
          id: 4,
          title: "Large-scale metro growth lowering vehicle emissions",
          para: " The growing metro system provides a more eco-friendly transit option, seeking to reduce road congestion and minimize air pollution from vehicles. ",
          imgs: "/images/Live-Images/SubPages/Icons/Large-scale-metro-growth-lowering-vehicle-emissions.svg",
        },
        {
          id: 5,
          title: "Revitalization of 15 significant lakes and rivers",
          para: " Revitalizing essential water bodies aims to boost water quality, strengthen ecosystems, and enhance the city's ability to withstand water-related challenges. ",
          imgs: "/images/Live-Images/SubPages/Icons/Revitalization-of-15-significant-lakes-and-rivers.svg",
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
            src="/images/Live-Images/SubPages/Quality-of-Life-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Quality of Life</h3>
              <div className="breadCrum">
                <Link to="/live"> Live </Link> - <a href="">Quality of Life</a>
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
              <h3>Quality of Life </h3>
              <p>
                The living experience is characterized by a mix of tradition and
                modernity. Prominent features include strong safety, excellent
                healthcare access, and a solid education system. Although
                recreational areas and green spaces could see enhancements,
                their cultural vibrancy and robust infrastructure provide a
                largely favorable experience.{" "}
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}
        {benefitSections.map((section, index) => (
          <section
            className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#7d377d] colorbgsec"} 
    ${
      index % 3 === 0
        ? "pattern-a"
        : index % 3 === 1
        ? "pattern-b"
        : "pattern-c"
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
