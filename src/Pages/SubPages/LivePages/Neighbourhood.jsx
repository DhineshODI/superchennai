import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";



export default function Neighbourhood() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('iconImgdev');

     return () => {
      document.body.classList.remove('iconImgdev');
    };
  }, []);  

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
      sectionTitle: "Major Urban Areas Nearby",
      sectionDesc: " Discovering significant cities close to Chennai. ",
      image: "/images/Live-Images/SubPages/Major-Urban-Areas-Nearby.jpg",
      benefits: [
        {
          id: 1,
          title: "Kanchipuram",
          para: "Referred to as the ''City of a Thousand Temples'' and renowned for its silk sarees, Kanchipuram provides a vibrant cultural and historical journey.",
          imgs: "/images/Live-Images/SubPages/Kanchipuram.jpg",
        },  
        {
          id: 2,
          title: "Vellore",
          para: "  This ''Fort City'' features historical landmarks, such as the Vellore Fort, and is notable for its educational and healthcare facilities.  ",
           imgs: "/images/Live-Images/SubPages/Vellore.jpg",
        },
        {
          id: 3,
          title: "Tirupati",
          para: " A significant religious site in Andhra Pradesh, Tirupati is famous for the Sri Venkateswara Temple and draws pilgrims from all over the nation. ",
           imgs: "/images/Live-Images/SubPages/Tirupati.jpg",
        },
        {
          id: 4,
          title: "Pondicherry",
          para: " This once-French colony preserves a distinctive cultural allure with its colonial buildings, tranquil beaches, and spiritual essence. ",
          imgs: "/images/Live-Images/SubPages/Pondicherry.jpg",
        },
      ],
    },
    {
      sectionTitle: "Other Notable Regional Towns",
      sectionDesc: "Exploring key locations around Chennai.",
      image: "/images/Live-Images/SubPages/Other-Notable-Regional-Towns.jpg",
      benefits: [
        {
          id: 1,
          title: "Mahabalipuram",
          para: " Recognized as a UNESCO World Heritage site, Mahabalipuram is renowned for its historic rock-hewn temples and carvings situated on the Coromandel Coast.",
          imgs: "/images/Live-Images/SubPages/mahabalipuram.jpg",
        },
        {
          id: 2,
          title: "Chengalpattu",
          para: "  An emerging town located south of Chennai, it functions as a rising industrial and educational center in the larger metropolitan area. ",
          imgs: "/images/Live-Images/SubPages/Chengalpattu.jpg",
        },
        {
          id: 3,
          title: "Sriperumbudur",
          para: "  Recognized for its historical importance and as a key hub for industry and manufacturing, drawing investment and growth.  ",
           imgs: "/images/Live-Images/SubPages/Sriperumbudur.jpg",
        },
      ],
    },
    {
      sectionTitle: "Linking the Region",
      sectionDesc:
        "Comprehending the connections between these metropolitan zones and Chennai.",
      image: "/images/Live-Images/SubPages/Linking-the-Region.jpg",
      benefits: [
        {
          id: 1,
          title: "Transportation Hubs",
          para: " Chennai acts as a key transportation center, featuring solid road and rail connections to cities like Bangalore and Hyderabad farther away, in addition to nearby urban areas. ",
           imgs: "/images/Live-Images/SubPages/Transportation-Hubs.jpg",
        },
        {
          id: 2,
          title: "Connected Economies",
          para: " The economic functions of Chennai and its surrounding cities are frequently linked, with trade, commerce, and the flow of individuals enhancing a regional economic system. ",
           imgs: "/images/Live-Images/SubPages/Connected-Economies.jpg",
        },
      ],
    },
  ];

const images = [
    {
      src: "/images/Live-Images/Cost-of-living.jpg",
      title: "Cost-of-Living",
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
      src: "/images/Live-Images/chennaiLifeEssential4.png",
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
          <img src="/images/Live-Images/SubPages/Neighbourhood-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Neighbourhood</h3>
              <div className="breadCrum">
             <Link to="/live"> Live </Link> - <a href="">Neighbourhood</a>
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
              <h3>Neighbourhood </h3>
              <p>
                Chennai, an important urban center, has multiple notable cities
                situated nearby, each presenting distinct features and adding to
                the overall regional landscape. These cities are frequently
                linked to Chennai via different transportation systems and have
                economic and cultural connections.
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
              Regardless of whether you have chosen Chennai to stay or move from
              one area to another area, Super Chennai will be the best guide to
              explore the essentials. So that you could easily live a lively and
              energetic life in Chennai.
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
