import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function Placestovisit() {
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
      sectionTitle: "Heritage Echoes",
      sectionDesc:
        "Experience the rich history of the city by traveling back in time. ",
      image: "/images/Visit-Images/SubPages/heritage-echoes.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Historic Fort",
              para: [
                " Discover the ancient citadel, a silent witness to bygone eras, which now frequently houses a museum demonstrating its noteworthy history.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Historic-Fort.svg",
              link: "/visit-placetovisit-historic-fort",
            },
          ],
        },
        {
          points: [
            {
              title: "Ancient Temples",
              para: [
                "Take in the elaborate Dravidian architecture and colorful rituals of important religious sites. ",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Ancient-Temples.svg",
              link: "/visit-placetovisit-ancient-temples",
            },
          ],
        },
        {
          points: [
            {
              title: "State Museum:",
              para: [
                "Discover the region's varied heritage through art, archaeology, and natural history. ",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Ancient-Temples.svg",
              link: "/visit-placetovisit-state-museum",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "A Canvas of Culture",
      sectionDesc:
        "Visit Chennai's creative heart, where innovation flourishes in many forms.",
      image: "/images/Visit-Images/SubPages/canvas-of-culture.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Cultural Foundations",
              para: [
                " Take in the mesmerizing performances of traditional art, which preserve India's rich cultural heritage.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Cultural-Foundations.svg",
              link: "/visit-placetovisit-cultural-foundations",
            },
          ],
        },
        {
          points: [
            {
              title: "Artists' Villages",
              para: [
                "Explore distinctive neighborhoods where gifted artists reside and display their most recent creations.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Artists-Villages.svg",
              link: "/visit-placetovisit-artists-villages",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Modern Vibrancy",
      sectionDesc:
        " Experience the vibrant energy of Chennai, a city that is always changing.",
      image: "/images/Visit-Images/SubPages/modern-vibrancy.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Urban Beaches",
              para: [
                "Take in the vibrant ambiance, stroll along the lengthy beach, and see the busy local life.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Urban-Beaches.svg",
              link: "/visit-placetovisit-urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Modern Malls",
              para: [
                "Enjoy a variety of culinary options, entertainment, and retail therapy at the city's modern centers.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Modern-Malls.svg",
              link: "/visit-placetovisit-modern-malls",
            },
          ],
        },
        {
          points: [
            {
              title: "Botanical Gardens/Poongas",
              para: [
                "In exquisitely designed urban oasis, discover peace amid a variety of plants and luxuriant foliage.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Botanical-Gardens-Poongas.svg",
              link: "/visit-placetovisit-botanical-gardens",
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
      title: "places to visit",
      link: "/places-to-visit",
    },
    {
      src: "images/Visit-Images/SubPages/things-to-do-slide.jpg",
      title: "things to do ",
      link: "/things-to-do",
    },
    {
      src: "images/Visit-Images/SubPages/itinerary-slide.jpg",
      title: "itinerary",
      link: "/itinerary",
    },
    {
      src: "images/Visit-Images/SubPages/hidden-gems-slide.jpg",
      title: "Hidden Gems",
      link: "/hidden-gems",
    },
    {
      src: "images/Visit-Images/SubPages/shopping-slide.jpg",
      title: "Shopping",
      link: "/shopping",
    },
    {
      src: "images/Visit-Images/SubPages/travel-tips-slide.jpg",
      title: "Travel Tips",
      link: "/travel-tips",
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
            src="images/Visit-Images/SubPages/places-to-visit-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Places to Visit </h3>
              <div className="breadCrum">
                <Link to="/visit"> Visit </Link> -{" "}
                <Link to="">Places to Visit </Link>
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
              <h3> Places to Visit</h3>
              <p>
                Discover a city where contemporary landmarks stand tall, lively
                art foundations flow through its veins, and old religious sites
                whisper stories of dynasties past. Chennai welcomes you to
                discover its many facets of charm, providing a fascinating
                variety of experiences for each visitor.
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
                              <Link
                                to={item.link || "#"}
                                className="text-blue-600 hover:underline text-sm font-medium"
                              >
                                Explore More
                              </Link>
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
                    <Link to={img.link} style={{ textDecoration: "none" }}>
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
                    </Link>
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
