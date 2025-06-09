import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function Hiddengems() {
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
      sectionTitle: "Whispers of Serenity",
      sectionDesc: "Find tranquil havens amid the bustle of the city.",
      image: "images/Visit-Images/SubPages/whispers-of-serenity.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Pleasant greeneries",
              para: [
                "Discover hidden green areas that provide peaceful times for reflection and take in the beauty of nature.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Discover-hidden-green.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Calm Waterways",
              para: [
                "Discover peace in lesser-known backwaters or canals, which may provide unusual city views.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Calm-Waterways.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Quiet Corners of History",
              para: [
                "Discover lesser-known historical locations that seem ageless and serene.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Quiet-Corners-of-History.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Unexpected Creative Expressions",
      sectionDesc:
        "Experience the unadulterated and unrefined forms of creativity.",
      image: "images/Visit-Images/SubPages/unexpected-creative.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Offbeat Galleries",
              para: [
                " Find tiny, independent art galleries that display unusual pieces and up-and-coming artists.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Offbeat-Galleries.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Street Art Surprises",
              para: [
                "Look for colorful murals and installations that surprisingly change the look of cities.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Street-Art-Surprises.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Hidden craft havens",
              para: [
                "Find workshops or studios where traditional craftspeople discreetly hone their complex techniques to find hidden craft havens.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Hidden-craft-havens.svg",
              // link: "/urban-beaches",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Local Flavors and Discoveries",
      sectionDesc: " Indulge in the city's genuine flavors and sensations.",
      image: "images/Visit-Images/SubPages/local-flavors.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Neighborhood Restaurants",
              para: [
                "Explore your neighborhood to find casual eateries offering genuinely regional fare.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Neighborhood-Restaurants.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Local Markets",
              para: [
                " Explore lively, smaller markets that are teeming with distinctive local goods, vegetables, and daily life.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Local-Markets.svg",
              // link: "/urban-beaches",
            },
          ],
        },
        {
          points: [
            {
              title: "Community Meeting Places",
              para: [
                "Look for those quiet spots where people congregate and share a true piece of Chennai's social life.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Community-Meeting-Places.svg",
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
            src="images/Visit-Images/SubPages/hidden-gems-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Hidden Gems </h3>
              <div className="breadCrum">
                <Link to="/visit"> Visit </Link> - <a href="">Hidden Gems</a>
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
              <h3> Hidden Gems</h3>
              <p>
                There is a network of hidden gems beyond the busy streets and
                famous sites, just waiting for the inquisitive mind to find
                them. Away from the typical tourist routes, these hidden jewels
                provide a window into the true spirit of Chennai, showcasing
                quiet areas, surprising artistic talent, and regional charm.
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
