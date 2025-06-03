import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function InvestExhibitionsChennai() {
  const investmentCategories = [
    "Established Trade Shows",
    "Invest in Specialized Industry Exhibitions",
    "Consumer and Lifestyle Exhibitions",
  ];
  // Step 2: Category description mapping
  const categoryInfo = {
    "Established Trade Shows": {
      title: "Established Trade Shows",
      description:
        "You might invest in well-known trade shows if you want to draw in prospective clients and industry professionals.",
    },
    "Invest in Specialized Industry Exhibitions": {
      title: "Invest in Specialized Industry Exhibitions",
      description:
        "Find your own expertise and begin investing in it by providing opportunities for focused networking and company growth.",
    },
    "Consumer and Lifestyle Exhibitions": {
      title: "Consumer and Lifestyle Exhibitions",
      description:
        "Invest in trade shows where entrepreneurs and buyers can meet face-to-face and primarily offer their goods.",
    },
  };
  const buildingData = [
    {
      title: "Trade center events (Nandambakkam)",
      category: "Established Trade Shows",
      description:
        "Make investments in significant shows that address the consumer goods, technology, and manufacturing sectors.",
      image:
        "/images/Invest-Images/SubPages/Established-Trade/trade-center.jpg",
    },
    {
      title: "Agricultural and food expos (at different venues)",
      category: "Established Trade Shows",
      description:
        "Provide financial assistance to several farmers so they may market their food items to a larger audience.",
      image:
        "/images/Invest-Images/SubPages/Established-Trade/agricultural.jpg",
    },
    {
      title: "Auto component exhibits (Nandambakkam)",
      category: "Established Trade Shows",
      description:
        "The development of the automobile sector depends on your sponsorship of exhibitions.",
      image:
        "/images/Invest-Images/SubPages/Established-Trade/auto-component.jpg",
    },
    {
      title: "Building and construction (at different locations)",
      category: "Established Trade Shows",
      description:
        "Make connections between real estate owners and infrastructure development.",
      image: "/images/Invest-Images/SubPages/Established-Trade/building.jpg",
    },

    {
      title: "Textiles and apparel (different locations)",
      category: "Invest in Specialized Industry Exhibitions",
      description:
        "Invest to increase Tamil Nadu's textile brand's business in Chennai City.",
      image: "/images/Invest-Images/SubPages/invest/textiles.jpg",
    },
    {
      title: "Engineering and manufacturing (different industrial fields)",
      category: "Invest in Specialized Industry Exhibitions",
      description:
        "By holding these expos, you can help these industries cover the various industrial regions.",
      image: "/images/Invest-Images/SubPages/invest/engineering.jpg",
    },
    {
      title: "Medical equipment and healthcare (in different locations)",
      category: "Invest in Specialized Industry Exhibitions",
      description:
        "Link the medical technology developments with the healthcare sector.",
      image: "/images/Invest-Images/SubPages/invest/medical.jpg",
    },
    {
      title: "Education and Training Fairs",
      category: "Invest in Specialized Industry Exhibitions",
      description:
        "Attract the vast number of students who are in need of educational services to the megaexpo of training fairs.",
      image: "/images/Invest-Images/SubPages/invest/education.jpg",
    },

    {
      title: "Furniture and home decor (in different locations)",
      category: "Consumer and Lifestyle Exhibitions",
      description:
        "People who work in real estate or construct their own homes would find this expo helpful.",
      image: "/images/Invest-Images/SubPages/Consumer/furniture.jpg",
    },
    {
      title: "Fashion and lifestyle (at different hotels and locations)",
      category: "Consumer and Lifestyle Exhibitions",
      description:
        "Invest in this market to reach the retail- and fashion-conscious customer base.",
      image: "/images/Invest-Images/SubPages/Consumer/fashion.jpg",
    },
    {
      title: "Food and beverage expos (different locations)",
      category: "Consumer and Lifestyle Exhibitions",
      description:
        "Teach people to produce or sell your food products and beverages to capitalize on the city's thriving culinary culture.",
      image: "/images/Invest-Images/SubPages/Consumer/food.jpg",
    },
    {
      title: "Arts and crafts (at different locations) ",
      category: "Consumer and Lifestyle Exhibitions",
      description:
        "Help out local artists and make connections with art lovers.",
      image: "/images/Invest-Images/SubPages/Consumer/arts.jpg",
    },
    {
      title: "Travel and tourism expos (at different locations)",
      category: "Consumer and Lifestyle Exhibitions",
      description:
        "To happen networking with the expanding travel and hospitality industry, investing in this sector is mandatory.",
      image: "/images/Invest-Images/SubPages/Consumer/travel.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    "Established Trade Shows"
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
          <img
            src="./images/Invest-Images/SubPages/exhibitions-banner.jpg"
            alt=""
          />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Exhibitions</h3>
            <div className="breadCrum">
              <Link to="/invest"> Invest </Link> - <a href="">Exhibitions</a>{" "}
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
              Invest &nbsp; Exhibitions &nbsp; in Chennai &nbsp; Invest &nbsp;
              Exhibitions &nbsp; in Chennai{" "}
            </p>
          </div>
          <div className="workIntro">
            <h3>Invest in Exhibitions in chennai</h3>
            <p>
              Since Chennai is a big metropolis, real estate values have
              skyrocketed. If you believe you want to consistently create a
              supplementary source of income, investing in Chennai real estate
              is your best bet.
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
                                  className="buildingImage w-full md:w-1/2"
                                  src={item.image}
                                  alt={item.title}
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  className="buildingImage1 w-full md:w-1/2"
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
