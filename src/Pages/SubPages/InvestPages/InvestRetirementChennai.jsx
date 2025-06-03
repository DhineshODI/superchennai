import { useState, useEffect, useRef } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function InvestRetirementChennai() { 
  const investmentCategories = [
    "Diverse areas",
    "Healthcare and wellness hubs",
    "Invest in community and engagement centers",
  ];
  // Step 2: Category description mapping
const categoryInfo = {
  "Diverse areas": {
    title: "Diverse areas",
    description: "Invest your retirement in a variety of Chennai City neighborhoods in a calm and contented manner.",
  },
  "Healthcare and wellness hubs": {
    title: "Healthcare and wellness hubs",
    description: "Having access to reputable hospitals and wellness facilities is essential for retirees who want to put their health and well-being first.",
  },
  "Invest in community and engagement centers": {
    title: "Invest in community and engagement centers",
    description: "You could have fallen behind financially for over 40 years, from your 20s to your 60s. However, you will want social interaction throughout this phase of retirement. Experience it by picking places like",
  },
};
  const buildingData = [
    {
      title: "Adyar",
      category: "Diverse areas",
      description:
        "Adyar is a good option if you want a calm environment, green areas, and a laid-back way of life.",
      image: "/images/Invest-Images/SubPages/diverse-areas/Adyar.jpg",
    },
    {
      title: "Anna Nagar",
      category: "Diverse areas",
      description:
        "Anna Nagar is the greatest choice if you're looking for a neighborhood with lots of parks and strong social infrastructure.",
      image: "/images/Invest-Images/SubPages/diverse-areas/anna-nagar.jpg",
    },
    {
      title: "Besant Nagar",
      category: "Diverse areas",
      description:
        "Reside in coastal communities with beaches, a laid-back atmosphere, and a lovely blend of residential and recreational activities.",
      image: "/images/Invest-Images/SubPages/diverse-areas/besant-nagar.jpg",
    },
    {
      title: "Mylapore",
      category: "Diverse areas",
      description:
        "Do you have any religious beliefs? Then this Mylapore neighborhood, which has temples and a high standard of life, will be ideal for your traditional rituals.",
      image: "/images/Invest-Images/SubPages/diverse-areas/mylapore.jpg",
    },
    {
      title: "Nanganallur",
      category: "Diverse areas",
      description:
        "With all the facilities you need and first-rate connections, here is where your tranquil retirement begins.",
      image: "/images/Invest-Images/SubPages/diverse-areas/nanganallur.jpg",
    },
    {
      title: "Adyar",
      category: "Healthcare and wellness hubs",
      description:
        "You can make investments in Adyar, which has several respectable hospitals, and receive comprehensive medical treatment that will improve your health.",
      image: "/images/Invest-Images/SubPages/healthcare/Adyar.jpg",
    },
    {
      title: "Mylapore",
      category: "Healthcare and wellness hubs",
      description:
        "A variety of hospitals are easily accessible here for mental tranquility.",
      image: "/images/Invest-Images/SubPages/healthcare/mylapore.jpg",
    },
    {
      title: "Nungambakkam",
      category: "Healthcare and wellness hubs",
      description:
        "It is at a convenient location with easy access to medical facilities and hospitals.",
      image: "/images/Invest-Images/SubPages/healthcare/nungambakkam.jpg",
    },
    {
      title: "Alwarpet",
      category: "Healthcare and wellness hubs",
      description:
        "The top-notch medical facilities are found here. With wellness alternatives, retirement can be enjoyable.",
      image: "/images/Invest-Images/SubPages/healthcare/alwarpet.jpg",
    },
    {
      title: "Mylapore",
      category: "Invest in community and engagement centers",
      description:
        "Mylapore often hosts religious events, cultural events, and senior citizen clubs.",
      image: "/images/Invest-Images/SubPages/invest/mylapore.jpg",
    },
    {
      title: "T. Nagar",
      category: "Invest in community and engagement centers",
      description:
        "T. Nagar offers chances to engage with a variety of temples, parks, and community centers.",
      image: "/images/Invest-Images/SubPages/invest/tnagar.jpg",
    },
    {
      title: "Mandaveli",
      category: "Invest in community and engagement centers",
      description:
        "Enjoy your retirement by spending time in peace and quiet in Mandaveli, and indulge in social activities by adopting a traditional neighborhood.",
      image: "/images/Invest-Images/SubPages/invest/madaveli.jpg",
    },
    {
      title: "Santhome",
      category: "Invest in community and engagement centers",
      description:
        "Discover a feeling of inclusion in this historically noteworthy neighborhood with a strong religious presence and a tight-knit community.",
      image: "/images/Invest-Images/SubPages/invest/santhome.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Diverse areas");
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
                  <img src="/images/Invest-Images/SubPages/retirement-banner.jpg" alt="" />
                </div>
                <div className="accodoamationBannerContainer">
                  <div className="accodoamationBannerText">
                    <h3>Retirement</h3>
                    <div className="breadCrum">
                      <Link to="/invest"> Invest </Link> - <a href="">Retirement</a>{" "}
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
                    <p>Invest &nbsp; in Retirement &nbsp; in Chennai &nbsp; Invest &nbsp; in Retirement &nbsp; in Chennai </p>
                </div>
                <div className="workIntro">
                    <h3>Invest in Retirement in chennai</h3>
                    <p>
                    Every older individual plans to spend their retirement in a contented and tranquil setting. For older folks, Chennai will be the ideal destination for relaxation and exploration. Super Chennai gives you a comprehensive selection of retirement investment and spending options.
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