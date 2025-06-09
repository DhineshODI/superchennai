import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function Wellness() {
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
      sectionTitle: "Awakening the Physical Self",
      sectionDesc:
        "Set forth on adventures of physical strength and rejuvenation.",
      image: "/images/Visit-Images/SubPages/physical-self.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Explore ageless healing",
              para: [
                " Take part in traditional healing practices that promote bodily equilibrium and renewal.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Explore-ageless-healing.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Accept contemporary sanctuaries",
              para: [
                "Learn about modern retreats devoted to calming the body and relieving stress.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Accept-contemporary-sanctuaries.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Building Inner Silence",
      sectionDesc:
        " In the middle of the city's cadence, cultivate a calm mind.",
      image: "/images/Visit-Images/SubPages/inner-silence.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Locate your center",
              para: [
                " Examine techniques that promote mindfulness and develop a serene concentration while navigating the bustle of the city.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Locate-your-center.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Look for peaceful moments",
              para: [
                "Find calm areas of Chennai that provide comfort and chances for introspection.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Look-for-peaceful-moments.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Engaging with Your Fundamentals",
      sectionDesc:
        "Take an introspective journey to investigate spiritual health and self-awareness.",
      image: "/images/Visit-Images/SubPages/fundamentals.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Serene atmosphere",
              para: [
                "Experience the city's holy locations and cultural centers as you immerse yourself in cultural tranquility.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Serene-atmosphere.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Discover revitalizing retreats",
              para: [
                "Discover healing havens that provide holistic experiences for well-being on the outskirts of Chennai.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Discover-revitalizing-retreats.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
  ];

  const images = [
    {
      src: "images/Visit-Images/SubPages/accomodation-slide.jpg",
      title: "Accomodation",
      link: "/accomodation",
    },
    {
      src: "images/Visit-Images/SubPages/food-slide.jpg",
      title: "Food",
      link: "/food",
    },
    {
      src: "images/Visit-Images/SubPages/places-to-visit-slide.jpg",
      title: "Places to Visit",
      link: "/placestovisit",
    },
    {
      src: "images/Visit-Images/SubPages/things-to-do-slide.jpg",
      title: "Things to Do",
      link: "/thingstodo",
    },
    {
      src: "images/Visit-Images/SubPages/itinerary-slide.jpg",
      title: "itinerary",
      link: "/itinerary",
    },
    {
      src: "images/Visit-Images/SubPages/hidden-gems-slide.jpg",
      title: "Hidden Gems",
      link: "/hiddengems",
    },
    {
      src: "images/Visit-Images/SubPages/shopping-slide.jpg",
      title: "Shopping",
      link: "/shopping",
    },
    {
      src: "images/Visit-Images/SubPages/travel-tips-slide.jpg",
      title: "Travel Tips",
      link: "/traveltips",
    },
    {
      src: "images/Visit-Images/SubPages/wellness-slide.jpg",
      title: "Wellness ",
      link: "/wellness",
    },
    {
      src: "images/Visit-Images/SubPages/events-slide.jpg",
      title: "Events ",
      link: "/events",
    },
    {
      src: "images/Visit-Images/SubPages/conferences-slide.jpg",
      title: "Conferences ",
      link: "/conferences",
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
            src="./images/Visit-Images/SubPages/wellness-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3> Wellness</h3>
              <div className="breadCrum">
                <Link to="/visit"> Visit </Link> - <a href="">Travel Tips</a>
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
              <p>Visit &nbsp; in Chennai &nbsp; Visit &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Wellness</h3>
              <p>
                Your inner peace can be found in a haven amidst Chennai's
                vibrant pulse. Explore opportunities to re-energize yourself,
                achieving balance and energy in this dynamic city.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}
        <div className="foodlistsec">
          {imageSections.map((section, index) => {
            const tenantCount = section.tenantInfoSections?.length ?? 0;
            const parentClass =
              tenantCount % 2 === 0 ? "even-count" : "odd-count";

            return (
              <section
                key={index}
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
                  ${
                    index % 2 === 0
                      ? "bg-white whitebgsec"
                      : "bg-[#f7f7f7] colorbgsec"
                  } 
                  ${
                    index % 3 === 0
                      ? "pattern-a"
                      : index % 3 === 1
                      ? "pattern-b"
                      : "pattern-c"
                  }`}
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

                <div
                  className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
                >
                  {section.tenantInfoSections.map((tenant, i) => (
                    <div key={i}>
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
            );
          })}
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
