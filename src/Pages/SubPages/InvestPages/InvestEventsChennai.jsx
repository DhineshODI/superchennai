import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function InvestEventsChennai() {
  const investmentCategories = [
    "Vibrant cultural celebrations",
    "Trade and industry exhibitions",
    "Growing entertainment and lifestyle events",
  ];
  // Step 2: Category description mapping
  const categoryInfo = {
    "Vibrant cultural celebrations": {
      title: "Vibrant Cultural Celebrations",
      description:
        "Examine your options for taking part in Chennai's extensive festival and cultural events schedule, which is sure to draw both residents and visitors.",
    },
    "Trade and industry exhibitions": {
      title: "Trade and Industry Exhibitions",
      description:
        "In and around Chennai, a number of business networking events and trade and industry exhibitions are seeking investors.",
    },
    "Growing entertainment and lifestyle events": {
      title: "Growing Entertainment and Lifestyle Events",
      description:
        "Attending entertainment events gives Chennai residents the chance to strike a balance between their personal and professional lives. This is also a superior alternative to invest in.",
    },
  };
  const buildingData = [
    {
      title: "Margazhi Music and Dance Festival (Mylapore)",
      category: "Vibrant cultural celebrations",
      description:
        "You can spend money on traditional decorations, attendee costumes, food, and other events.",
      image: "/images/Invest-Images/SubPages/Vibrant/margazhi.jpg",
    },
    {
      title: "Pongal celebrations (city-wide)",
      category: "Vibrant cultural celebrations",
      description:
        "Indulge in these communal gatherings to provide city dwellers with cultural experiences.",
      image: "/images/Invest-Images/SubPages/Vibrant/pongal.jpg",
    },
    {
      title: "Chennai Book Fair (Nandambakkam)",
      category: "Vibrant cultural celebrations",
      description:
        "Invest in these book fairs to draw publishers and book enthusiasts and get the rewards.",
      image: "/images/Invest-Images/SubPages/Vibrant/chennai-book.jpg",
    },
    {
      title: "Invest in the Natyanjali Dance Festival (Chidambaram)",
      category: "Vibrant cultural celebrations",
      description:
        "Promote traditional classical dance in a noteworthy temple environment.",
      image: "/images/Invest-Images/SubPages/Vibrant/film-festivals.jpg",
    },
    {
      title: "Invest in film festivals (various locations)",
      category: "Vibrant cultural celebrations",
      description:
        "Invest in film festivals that take place at several places to attract large and popular audiences.",
      image: "/images/Invest-Images/SubPages/Vibrant/film-festivals.jpg",
    },

    {
      title: "International Die & Mould Exhibition (Nandambakkam)",
      category: "Trade and industry exhibitions",
      description:
        "This 3-day event will happen frequently, once every 2 years, which attracts participants globally and showcases cutting-edge technologies.",
      image: "/images/Invest-Images/SubPages/Trade/trade-center.jpg",
    },
    {
      title: "The Madras Trade Centre (Nandambakkam)",
      category: "Trade and industry exhibitions",
      description:
        " It is a gateway for companies looking to conduct business internationally and is now looking for active investors.",
      image: "/images/Invest-Images/SubPages/Trade/madras-trade-center.jpg",
    },
    {
      title: "Agricultural expos (at several locations)",
      category: "Trade and industry exhibitions",
      description:
        "Chennai is hosting a number of agricultural events to assist farmers, and investing here is the best course of action.",
      image: "/images/Invest-Images/SubPages/Trade/agricultural.jpg",
    },
    {
      title: "Auto expos (Nandambakkam)",
      category: "Trade and industry exhibitions",
      description:
        "These events are held in Chennai to boost the substantial worth of the city's automotive sector, and you are welcome to invest there if you so choose.",
      image: "/images/Invest-Images/SubPages/Trade/auto.jpg",
    },
    {
      title: "Textile and clothing fairs (at different venues)",
      category: "Trade and industry exhibitions",
      description:
        "Draw in dress and clothing enthusiasts by investing in this industry and reaping the rewards.",
      image: "/images/Invest-Images/SubPages/Trade/textile.jpg",
    },
    {
      title: "Music concerts and live performances",
      category: "Growing entertainment and lifestyle events",
      description:
        "Singers often perform live in Chennai. Additionally, this event looks for an investor to launch the show in style.",
      image: "/images/Invest-Images/SubPages/Growing/music.jpg",
    },
    {
      title: "Food Festivals and Culinary Events",
      category: "Growing entertainment and lifestyle events",
      description:
        "A lot of people prefer food expos. Over there, you could see that a lot of people were congested. If you like, you can invest here.",
      image: "/images/Invest-Images/SubPages/Growing/food.jpg",
    },
    {
      title: "Athletic Events and Marathons",
      category: "Growing entertainment and lifestyle events",
      description:
        "Young people who are interested in sports frequently decide to take part in marathons and other such activities. Invest here to earn from your returns.",
      image: "/images/Invest-Images/SubPages/Growing/athletic.jpg",
    },
    {
      title: "Pop Culture Events and Comic Conventions",
      category: "Growing entertainment and lifestyle events",
      description:
        "This is a developing and passionate sector where a lot of young people are drawn to other cultures, and you can invest in these kinds of events.",
      image: "/images/Invest-Images/SubPages/Growing/pop.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    "Vibrant cultural celebrations"
  );
  const filteredBuildings = buildingData.filter(
    (item) => item.category === selectedCategory
  );
  const categoryContent = categoryInfo[selectedCategory];

  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const accordionRefs = useRef([]);

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

  const images = [
    {
      src: "/images/Invest-Images/SubPages/real-estate-slide.jpg",
      title: "Real Estate",
      link: "/investrealestatechennai",
    },
    {
      src: "/images/Invest-Images/SubPages/franchise-slide.jpg",
      title: "Franchise",
      link: "/investfranchisechennai",
    },
    {
      src: "/images/Invest-Images/SubPages/startups-slide.jpg",
      title: "Startups",
      link: "/investstartupschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/renewable-energy-slide.jpg",
      title: "Renewable Energy",
      link: "/investrenewableenergychennai",
    },
    {
      src: "/images/Invest-Images/SubPages/retirement-slide.jpg",
      title: "Retirement",
      link: "/investretirementchennai",
    },
    {
      src: "/images/Invest-Images/SubPages/government-initiatives-slide.jpg",
      title: "Government Initiatives",
      link: "/investgovernmentinitiativeschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/formalities-regulations-slide.jpg",
      title: "Formalities and Regulations",
      link: "/investformalitiesregulationschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/news-slide.jpg",
      title: "News",
      link: "/investnewschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/events-slide.jpg",
      title: "Invest in Events",
      link: "/investeventschennai",
    },
    {
      src: "/images/Invest-Images/SubPages/exhibitions-slide.jpg",
      title: "Exhibitions",
      link: "/investexhibitionschennai",
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

  return (
    <>
      {/*----------------Accodimation-Banner----------- */}

      <div className="accaodomationBannerSection">
        <div>
          <img src="/images/Invest-Images/SubPages/events-banner.jpg" alt="" />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Events</h3>
            <div className="breadCrum">
              <Link to="/invest"> Invest </Link> - <a href="">Events</a>{" "}
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      {/*----------------Accodimation-Banner----------- */}

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
              Invest &nbsp; Events &nbsp; in Chennai &nbsp; Invest &nbsp; Events
              &nbsp; in Chennai{" "}
            </p>
          </div>
          <div className="workIntro">
            <h3>Invest in Events in chennai</h3>
            <p>
              There are a lot of events in Chennai that are looking for
              investors to make them look fantastic and draw large crowds. Super
              Chennai suggests a list of events in which you can invest.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="container max-w-7xl mx-auto px-4 ChennaiInvestContainerdiv">
          <div className="Tabs-wrapper ">
            <div className="chennaiInvestmentsButtons justify-center">
              {investmentCategories.map((category, index) => (
                <button
                  key={index}
                  className={category === selectedCategory ? "active" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="tabscontainer">
              {categoryContent && (
                <div className="category-info mt-[8vh] flex flex-col items-center w-[80%] text-center mx-auto">
                  <h2 className="text-4xl space-x-0.5 font-bold mb-[10px] text-[#a44294]">
                    {categoryContent.title}
                  </h2>
                  <p>{categoryContent.description}</p>
                </div>
              )}
              <div className="buildingSectionFlex">
                {filteredBuildings.map((item, index) => (
                  <div className="bulidingSection" key={index}>
                    {index % 2 === 0 ? (
                      <>
                        <div className="builidngContent">
                          <h3>{item.title}</h3>
                          <h5>{item.description}</h5>
                        </div>
                        <img
                          className="buildingImage"
                          src={item.image}
                          alt=""
                        />
                      </>
                    ) : (
                      <>
                        <img
                          className="buildingImage1"
                          src={item.image}
                          alt=""
                        />
                        <div className="builidngContent1">
                          <h3>{item.title}</h3>
                          <h5>{item.description}</h5>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="accordion-wrapper space-y-4 mt-10">
            {investmentCategories.map((category, index) => {
              const isOpen = selectedCategory === category;
              const buildings = buildingData.filter(
                (item) => item.category === category
              );
              const content = categoryInfo[category];

              const handleAccordionClick = () => {
                if (!isOpen) {
                  setSelectedCategory(category);

                  // Scroll into view after state update
                  setTimeout(() => {
                    accordionRefs.current[index]?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 100);
                } else {
                  setSelectedCategory(""); // collapse on second click
                }
              };

              return (
                <div
                  key={index}
                  ref={(el) => (accordionRefs.current[index] = el)}
                  className="accordion-item border border-gray-300 rounded-lg overflow-hidden"
                >
                  <button
                    className={`w-full text-left px-4 py-3 font-semibold bg-[#f7f7f7] hover:bg-[#eaeaea] transition duration-200 ${
                      isOpen ? "text-[#a44294]" : "text-gray-800"
                    }`}
                    onClick={handleAccordionClick}
                  >
                    {category}
                  </button>

                  {isOpen && (
                    <div className="accordion-content px-4 py-4">
                      {content && (
                        <div className="mb-6 text-center">
                          <h2 className="text-2xl font-bold text-[#a44294] mb-2">
                            {content.title}
                          </h2>
                          <p>{content.description}</p>
                        </div>
                      )}

                      <div className="buildingSectionFlex flex gap-6">
                        {buildings.map((item, idx) => (
                          <div
                            className="bulidingSection flex flex-col items-center"
                            key={idx}
                          >
                            {idx % 2 === 0 || window.innerWidth < 768 ? (
                              <>
                                <div className="builidngContent">
                                  <h3 className="text-xl font-semibold">
                                    {item.title}
                                  </h3>
                                  <h5 className="text-gray-600">
                                    {item.description}
                                  </h5>
                                </div>
                                <img
                                  className="buildingImage w-full md:w-1/2 "
                                  src={item.image}
                                  alt={item.title}
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  className="buildingImage1 w-full md:w-1/2 "
                                  src={item.image}
                                  alt={item.title}
                                />
                                <div className="builidngContent1">
                                  <h3 className="text-xl font-semibold">
                                    {item.title}
                                  </h3>
                                  <h5 className="text-gray-600">
                                    {item.description}
                                  </h5>
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/*--------------- Explore More Chennai----------------- */}

        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>PROPERTY PROSPECTS IN CHENNAI</h4>
              <p>
                Chennai's real estate market offers consistent demand and
                income. By its developed infrastructure, this city market offers
                substantial profits from both business and residential areas.
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
