import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function InvestFranchiseChennai() { 
  const investmentCategories = [
    "Food and beverage brands",
    "Retail and service sectors",
    "Niche franchise models",
  ];
  // Step 2: Category description mapping
const categoryInfo = {
  "Food and beverage brands": {
    title: "Food and Beverage Brands",
    description: "You can choose a reputable franchise of food and beverages businesses in Chennai's culinary sector, and you can make money with a track record of success.",
  },
  "Retail and service sectors": {
    title: "Retail and Service Sectors",
    description: "Numerous businesses provide franchise possibilities in the retail and service sectors in response to Chennai's expanding customer requirements.",
  },
  "Niche franchise models": {
    title: "Niche Franchise Models",
    description: "Select your franchise concept niche, research the brand, and begin investing there to expand on certain ideas.",
  },
};
  const buildingData = [
    {
      title: "Quick-service restaurants",
      category: "Food and beverage brands",
      description:
        "Since investing in the food industry is scorching, you could discover a franchise and begin operating it effectively.",
      image: "/images/Invest-Images/SubPages/Food-and-Beverage/quick-service.jpg",
    },
    {
      title: "Coffee shops and cafes",
      category: "Food and beverage brands",
      description:
        "By offering a range of coffees, you could lure coffee lovers and market your franchise to them.",
      image: "/images/Invest-Images/SubPages/Food-and-Beverage/coffee-shops.jpg",
    },
    {
      title: "Ice cream and dessert shops",
      category: "Food and beverage brands",
      description:
        "Chennai City's clientele for ice cream and sweets is varied.",
      image: "/images/Invest-Images/SubPages/Food-and-Beverage/ice-cream.jpg",
    },
    {
      title: "Food outlets",
      category: "Food and beverage brands",
      description:
        "For a higher return on investment, open your business in areas where a lot of people congregate, including malls and high streets.",
      image: "/images/Invest-Images/SubPages/Food-and-Beverage/food-outlets.jpg",
    },


    {
      title: "Fashion & apparel retail (malls and shopping areas)",
      category: "Retail and service sectors",
      description:
        "In Chennai, many people get dependent on stylish clothing to keep themselves presentable. This will be the ideal investment choice.",
      image: "/images/Invest-Images/SubPages/Retail-and-service/fashion.jpg",
    },

    {
      title: "Residential education and tutoring services",
      category: "Retail and service sectors",
      description:
        "A lot of tutoring centers franchise their brand to charge tuition to all schoolchildren in order to give them a quality education and to build their reputation.",
      image: "/images/Invest-Images/SubPages/Retail-and-service/residential.jpg",
    },
    {
      title: "Health and wellness centers",
      category: "Retail and service sectors",
      description:
        "If you want to work with a franchise and offer fitness and well-being to people in Chennai, pick health and wellness centers in residential and commercial locations.",
      image: "/images/Invest-Images/SubPages/Retail-and-service/health.jpg",
    },
    {
      title: "Beauty and personal care services",
      category: "Retail and service sectors",
      description:
        "Meet the need for grooming and self-care in these locations.",
      image: "/images/Invest-Images/SubPages/Retail-and-service/beauty.jpg",
    },


    {
      title: "Residential Pet Care Services",
      category: "Niche franchise models",
      description:
        "There are a lot of pet owners in the Chennai area. You can run a profitable franchise if you open one in a residential location.",
      image: "/images/Invest-Images/SubPages/niche/residential-pet.jpg",
    },
    {
      title: "Older Care Services",
      category: "Niche franchise models",
      description:
        "You could be able to launch a franchise in residential regions by catering to the increasing demands of older persons.",
      image: "/images/Invest-Images/SubPages/niche/older-care.jpg",
    },
    {
      title: "Sustainable and ECO-Friendly Companies",
      category: "Niche franchise models",
      description:
        "Leverage franchising to capitalize on growing environmental consciousness.",
      image: "/images/Invest-Images/SubPages/niche/sustainable.jpg",
    },
    {
      title: "Repair and Maintenance Services",
      category: "Niche franchise models",
      description:
        "Offer necessary solutions for home and organization maintenance.",
      image: "/images/Invest-Images/SubPages/niche/repair.jpg",
    },

  ];

  const [selectedCategory, setSelectedCategory] = useState("Food and beverage brands");
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
    { src: "/images/Invest-Images/SubPages/real-estate-slide.jpg", title: "Real Estate", link: "/investrealestatechennai" },
    { src: "/images/Invest-Images/SubPages/franchise-slide.jpg", title: "Franchise", link: "/investfranchisechennai" },
    { src: "/images/Invest-Images/SubPages/startups-slide.jpg", title: "Startups", link: "/investstartupschennai" },
    { src: "/images/Invest-Images/SubPages/renewable-energy-slide.jpg", title: "Renewable Energy", link: "/investrenewableenergychennai" },
    { src: "/images/Invest-Images/SubPages/retirement-slide.jpg", title: "Retirement", link: "/investretirementchennai" },
     { src: "/images/Invest-Images/SubPages/government-initiatives-slide.jpg", title: "Government Initiatives", link: "/investgovernmentinitiativeschennai" },
      { src: "/images/Invest-Images/SubPages/formalities-regulations-slide.jpg", title: "Formalities and Regulations", link: "/investformalitiesregulationschennai" },
       { src: "/images/Invest-Images/SubPages/news-slide.jpg", title: "News", link: "/investnewschennai" },
        { src: "/images/Invest-Images/SubPages/events-slide.jpg", title: "Invest in Events", link: "/investeventschennai" },
        { src: "/images/Invest-Images/SubPages/exhibitions-slide.jpg", title: "Exhibitions", link: "/investexhibitionschennai" },
         
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
                  <img src="/images/Invest-Images/SubPages/franchise-banner.jpg" alt="" />
                </div>
                <div className="accodoamationBannerContainer">
                  <div className="accodoamationBannerText">
                    <h3>Franchise</h3>
                    <div className="breadCrum">
                  <Link to="/invest"> Invest </Link> - <a href="">Franchise</a>{" "}
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
                    <p>Invest &nbsp; Franchise &nbsp; in Chennai &nbsp; Invest &nbsp; Franchise &nbsp; in Chennai </p>
                </div>
                <div className="workIntro">
                    <h3>Invest in Franchise in chennai</h3>
                    <p>
                    To increase their brand recognition, several brands open franchise across Chennai. In Chennai, several businesses are seeking investors to build franchises and offer training to operate them.
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
                    <h2 className="text-4xl space-x-0.5 font-bold mb-[10px] text-[#a44294]">{categoryContent.title}</h2>
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
                      <img className="buildingImage" src={item.image} alt="" />
                    </>
                  ) : (
                    <>
                      <img className="buildingImage1" src={item.image} alt="" />
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
                const buildings = buildingData.filter(item => item.category === category);
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
                    <div key={index} ref={(el) => (accordionRefs.current[index] = el)} className="accordion-item border border-gray-300 rounded-lg overflow-hidden">
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
                            <h2 className="text-2xl font-bold text-[#a44294] mb-2">{content.title}</h2>
                            <p>{content.description}</p>
                            </div>
                        )}

                        <div className="buildingSectionFlex flex gap-6">
                            {buildings.map((item, idx) => (
                            <div className="bulidingSection flex flex-col items-center" key={idx}>
                                {(idx % 2 === 0 || window.innerWidth < 768) ? (
                                <>
                                    <div className="builidngContent">
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <h5 className="text-gray-600">{item.description}</h5>
                                    </div>
                                    <img className="buildingImage w-full md:w-1/2 " src={item.image} alt={item.title} />
                                </>
                                ) : (
                                <>
                                    <img className="buildingImage1 w-full md:w-1/2 " src={item.image} alt={item.title} />
                                    <div className="builidngContent1">
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <h5 className="text-gray-600">{item.description}</h5>
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
    )
}