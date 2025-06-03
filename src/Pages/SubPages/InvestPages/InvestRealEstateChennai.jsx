import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function InvestRealEstateChennai() {
  const investmentCategories = [
    "Emerging Residential Hubs",
    "Established Prime Residential Locations",
    "Potential Commercial Investment Zones",
  ];
  // Step 2: Category description mapping
  const categoryInfo = {
    "Emerging Residential Hubs": {
      title: "Emerging Residential Hubs",
      description:
        "The finest investment you can make now for your future is a residential house. You can purchase homes in the following areas.",
    },
    "Established Prime Residential Locations": {
      title: "Established Prime Residential Locations",
      description:
        "Invest in these desirable residential regions by purchasing a home there. These neighborhoods are renowned for their first-rate amenities, high property values, and significant appreciation.",
    },
    "Potential Commercial Investment Zones": {
      title: "Potential Commercial Investment Zones",
      description:
        "In addition to residential real estate, you may invest in Chennai's commercial real estate market, which can bring in a steady income for you from entrepreneurs.",
    },
  };
  const buildingData = [
    {
      title: "OMR (Old Mahabalipuram Road)",
      category: "Emerging Residential Hubs",
      description:
        "Many employees will search for rental homes because OMR is an IT corridor. so that you may rent out your home.",
      image: "/images/Invest-Images/SubPages/emerging/omr.jpg",
    },
    {
      title: "Perumbakkam",
      category: "Emerging Residential Hubs",
      description:
        "There is also good connection in this location, and you may offer your home for a reasonable price.",
      image: "/images/Invest-Images/SubPages/emerging/perumbakkam.jpg",
    },
    {
      title: "Pallikaranai",
      category: "Emerging Residential Hubs",
      description:
        "There is an increasing demand for rental housing here because of its proximity to the airport and IT parks.",
      image: "/images/Invest-Images/SubPages/emerging/pallikaranai.jpg",
    },
    {
      title: "Oragadam",
      category: "oragadam",
      description:
        "This is an industrial and manufacturing region. in order for the employees to search for rental homes.",
      image: "/images/Invest-Images/SubPages/emerging/oragadam.jpg",
    },
    {
      title: "Maraimalai Nagar",
      category: "Emerging Residential Hubs",
      description:
        "The demand for homes in this region has increased since the municipality was expanding.",
      image: "/images/Invest-Images/SubPages/emerging/maraimalai-nagar.jpg",
    },
    {
      title: "Adyar",
      category: "Established Prime Residential Locations",
      description:
        "You made the right choice if you chose to purchase a home here, as the properties are asking high rents from renters who want a high-end lifestyle.",
      image: "/images/Invest-Images/SubPages/establishment/Adyar.jpg",
    },
    {
      title: "Nungambakkam",
      category: "Established Prime Residential Locations",
      description:
        "Nungambakkam homes draw well-paid renters seeking convenience and status.",
      image: "/images/Invest-Images/SubPages/establishment/nungambakkam.jpg",
    },
    {
      title: "Boat Club Area (RA Puram)",
      category: "Established Prime Residential Locations",
      description:
        "Strong rental revenue from renters is guaranteed in this region. Families and individuals search for homes in this region the most.",
      image: "/images/Invest-Images/SubPages/establishment/boat-club.jpg",
    },
    {
      title: "Kotturpuram",
      category: "Established Prime Residential Locations",
      description:
        "For people and families looking for convenient and pleasant living, Anna Nagar offers appealing options. The wisest course of action will be to invest your hard-earned money.",
      image: "/images/Invest-Images/SubPages/establishment/kotturpuram.jpg",
    },
    {
      title: "Anna Nagar",
      category: "Established Prime Residential Locations",
      description:
        "Anna Nagar provides attractive opportunities for individuals and families who seek a comfortable and convenient lifestyle. ",
      image: "/images/Invest-Images/SubPages/establishment/anna-nagar.jpg",
    },
    {
      title: "OMR (Old Mahabalipuram Road)",
      category: "Potential Commercial Investment Zones",
      description:
        "The term ''IT corridor'' refers to OMR. Someone may rent your land in order to establish a business there, which will bring in money for you",
      image: "/images/Invest-Images/SubPages/potential/omr.jpg",
    },
    {
      title: "Guindy ",
      category: "Potential Commercial Investment Zones",
      description:
        "This sector is thought to be the next major trend in business. so that established businesses and startups might work in your space.",
      image: "/images/Invest-Images/SubPages/potential/guindy.jpg",
    },
    {
      title: "Mount Road (Anna Salai)",
      category: "Potential Commercial Investment Zones",
      description:
        "Given that it was a prestigious site and a typical business artery, your property in this neighborhood will undoubtedly be worth a lot.",
      image: "/images/Invest-Images/SubPages/potential/Mount-Road.jpg",
    },
    {
      title: "Nungambakkam",
      category: "Potential Commercial Investment Zones",
      description:
        "Your property in this prime location will draw businesses seeking a broad ecology and solid connections, which will generate revenue for you.",
      image: "/images/Invest-Images/SubPages/potential/nungambakkam.jpg",
    },
    {
      title: "Ambattur Industrial Estate",
      category: "Potential Commercial Investment Zones",
      description:
        "Since this was an industrial neighborhood, you might have been contacted by the public or private sectors to rent your space for warehousing facilities or other business support supplies.",
      image: "/images/Invest-Images/SubPages/potential/ambattur.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    "Emerging Residential Hubs"
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
            src="/images/Invest-Images/SubPages/real-estate-banner.jpg"
            alt=""
          />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Real Estate</h3>
            <div className="breadCrum">
              <Link to="/invest"> Invest </Link> - <a href="">Real Estate</a>{" "}
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
              Invest &nbsp; Reale State &nbsp; in Chennai &nbsp; Invest &nbsp;
              Reale State &nbsp; in Chennai{" "}
            </p>
          </div>
          <div className="workIntro">
            <h3>Invest in Real Estate in Chennai</h3>
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
