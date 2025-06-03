import { useState, useEffect, useRef } from "react";
import "../assets/Css/ChennaiInvestments.css";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
export default function ChennaiInvestments() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const investmentCategories = [
    "Real Estate",
    "Startups",
    "Retire in Chennai",
    "Formalities & Regulations",
    "Events",
    "Franchise",
    "Renewable Energy",
    "Government Initiatives",
    "News",
    "Exhibitions",
  ];
  const buildingData = [
    {
      title: "OMR (Old Mahabalipuram Road)",
      category: "Real Estate",
      description:
        "The term 'IT corridor' refers to OMR. Someone may rent your land in order to establish a business there, which will bring in money for you",
      image: "/images/Invest-Images/SubPages/emerging/omr.jpg",
      link: "/investrealestatechennai#InvestId",
    },
    {
      title: "Maraimalai Nagar",
      category: "Real Estate",
      description:
        "The demand for homes in this region has increased since the municipality was expanding.",
      image: "/images/Invest-Images/SubPages/emerging/maraimalai-nagar.jpg",
      link: "/investrealestatechennai#InvestId",
    },
    {
      title: "Adyar",
      category: "Real Estate",
      description:
        "You made the right choice if you chose to purchase a home here, as the properties are asking high rents from renters who want a high-end lifestyle.",
      image: "/images/Invest-Images/SubPages/establishment/Adyar.jpg",
      link: "/investrealestatechennai#InvestId",
    },

    {
      title: "SaaS",
      category: "Startups",
      description:
        "Software development is a one-time expenditure. However, it can provide you with lifetime income.",
      image: "/images/Invest-Images/SubPages/Emerging-tech/saas.jpg",
      link: "/investstartupschennai#InvestId",
    },
    {
      title: "Direct-to-Consumer (D2C) and e-commerce",
      category: "Startups",
      description:
        "Find and fund e-commerce sites that have already amassed a sizable and devoted clientele.",
      image: "/images/Invest-Images/SubPages/Growth-Stage/direct.jpg",
      link: "/investstartupschennai#InvestId",
    },
    {
      title: "    Logistics and Supply Chain Tech",
      category: "Startups",
      description:
        "You can also make investments in logistics and supply chain technology in Chennai, a major metropolis where a lot of people import and export goods.",
      image: "/images/Invest-Images/SubPages/Growth-Stage/logistics.jpg",
      link: "/investstartupschennai#InvestId",
    },

    {
      title: "Anna Nagar",
      category: "Retire in Chennai",
      description:
        "Anna Nagar is the greatest choice if you're looking for a neighborhood with lots of parks and strong social infrastructure.",
      image: "/images/Invest-Images/SubPages/diverse-areas/anna-nagar.jpg",
      link: "/investretirementchennai#InvestId",
    },
    {
      title: "Nungambakkam",
      category: "Retire in Chennai",
      description:
        "It is at a convenient location with easy access to medical facilities and hospitals.",
      image: "/images/Invest-Images/SubPages/healthcare/nungambakkam.jpg",
      link: "/investretirementchennai#InvestId",
    },
    {
      title: "Mandaveli",
      category: "Retire in Chennai",
      description:
        "Enjoy your retirement by spending time in peace and quiet in Mandaveli, and indulge in social activities by adopting a traditional neighborhood.",
      image: "/images/Invest-Images/SubPages/invest/madaveli.jpg",
      link: "/investretirementchennai#InvestId",
    },

    {
      title: "Guidance Tamilnadu-Nungambakkam",
      category: "Formalities & Regulations",
      description:
        "This agency provides export promotion and industrial guidance for Tamil Nadu, including assistance with registration and company startup.",
      image: "/images/Invest-Images/SubPages/invest/guidance.jpg",
      link: "/investformalitiesregulationschennai#InvestId",
    },
    {
      title: "ROC, Chennai-Nungambakkam",
      category: "Formalities & Regulations",
      description:
        "This is the company registration registrar that offers forms and rules where you may make a substantial income while also helping others.",
      image: "/images/Invest-Images/SubPages/invest/roc.jpg",
      link: "/investformalitiesregulationschennai#InvestId",
    },
    {
      title: "Commercial Taxes Department",
      category: "Formalities & Regulations",
      description:
        "This is in charge of state-level taxes such as the goods and services tax (GST) and offers information on registration and filing.",
      image: "/images/Invest-Images/SubPages/understanding/commerical-tax.jpg",
      link: "/investformalitiesregulationschennai#InvestId",
    },

    {
      title: "Margazhi Music and Dance Festival (Mylapore)",
      category: "Events",
      description:
        "You can spend money on traditional decorations, attendee costumes, food, and other events.",
      image: "/images/Invest-Images/SubPages/Vibrant/margazhi.jpg",
      link: "/investeventschennai#InvestId",
    },
    {
      title: "Agricultural expos (at several locations)",
      category: "Events",
      description:
        "Chennai is hosting a number of agricultural events to assist farmers, and investing here is the best course of action.",
      image: "/images/Invest-Images/SubPages/Trade/agricultural.jpg",
      link: "/investeventschennai#InvestId",
    },
    {
      title: "Music concerts and live performances",
      category: "Events",
      description:
        "Singers often perform live in Chennai. Additionally, this event looks for an investor to launch the show in style.",
      image: "/images/Invest-Images/SubPages/Growing/music.jpg",
      link: "/investeventschennai#InvestId",
    },

    {
      title: "Quick-service restaurants",
      category: "Franchise",
      description:
        "Since investing in the food industry is scorching, you could discover a franchise and begin operating it effectively.",
      image:
        "/images/Invest-Images/SubPages/Food-and-Beverage/quick-service.jpg",
      link: "/investfranchisechennai#InvestId",
    },
    {
      title: "Residential education and tutoring services",
      category: "Franchise",
      description:
        "A lot of tutoring centers franchise their brand to charge tuition to all schoolchildren in order to give them a quality education and to build their reputation.",
      image:
        "/images/Invest-Images/SubPages/Retail-and-service/residential.jpg",
      link: "/investfranchisechennai#InvestId",
    },
    {
      title: "Sustainable and ECO-Friendly Companies",
      category: "Franchise",
      description:
        "Leverage franchising to capitalize on growing environmental consciousness.",
      image: "/images/Invest-Images/SubPages/niche/sustainable.jpg",
      link: "/investfranchisechennai#InvestId",
    },
    {
      title: "Rooftop Solar Installations",
      category: "Renewable Energy",
      description:
        "Take advantage of these government programs and save power costs for property owners by installing them where they are required.",
      image: "/images/Invest-Images/SubPages/solar/rooftop.jpg",
      link: "/investrenewableenergychennai#InvestId",
    },
    {
      title: "Research and development",
      category: "Renewable Energy",
      description:
        "To support industry improvements, if you are currently operating a wind energy installation, you can invest in research and development in academic and industrial areas.",
      image: "/images/Invest-Images/SubPages/wind/research-and-development.jpg",
      link: "/investrenewableenergychennai#InvestId",
    },
    {
      title: "Solar-Powered Water Pumps",
      category: "Renewable Energy",
      description:
        "To promote sustainable irrigation and lessen dependency on conventional power sources, you can target and install solar electricity in Chennai's agricultural areas.",
      image: "/images/Invest-Images/SubPages/solar/water-pumps.jpg",
      link: "/investrenewableenergychennai#InvestId",
    },
    {
      title: "Metro rail expansion",
      category: "Government Initiatives",
      description:
        "Chennai would gain from better public transit and higher property values along metro lines, which will also bring in money for you as an investor.",
      image: "/images/Invest-Images/SubPages/Infrastructure/metro.jpg",
      link: "/investgovernmentinitiativeschennai#InvestId",
    },
    {
      title: "Tamil Nadu Defence Industrial Corridor",
      category: "Government Initiatives",
      description:
        "You could get your return on investment by investing in research, even in defense management.",
      image: "/images/Invest-Images/SubPages/Industrial/tamilnadu-defence.jpg",
      link: "/investgovernmentinitiativeschennai#InvestId",
    },
    {
      title: "Affordable housing projects",
      category: "Government Initiatives",
      description:
        "To meet the rising demand for reasonably priced living spaces, they will be built in Chennai's suburbs.",
      image: "/images/Invest-Images/SubPages/Social/affordable.jpg",
      link: "/investgovernmentinitiativeschennai#InvestId",
    },
    {
      title: "Regional language newspapers",
      category: "News",
      description:
        "Take advantage of the large local following that Tamil news sources enjoy in different locales.",
      image: "/images/Invest-Images/SubPages/Established/regional-language.jpg",
      link: "/investnewschennai#InvestId",
    },
    {
      title: "Tamil News Channels",
      category: "News",
      description:
        "You can invest in Tamil news outlets that serve sizable audiences because there are a lot of Tamil speakers in this area.",
      image: "/images/Invest-Images/SubPages/Expanding/tamil-news.jpg",
      link: "/investnewschennai#InvestId",
    },
    {
      title: "Websites and online news portals",
      category: "News",
      description:
        "You can also help by funding independent journalism that is available around the city.",
      image:
        "/images/Invest-Images/SubPages/Burgeoning/business-news-channels.jpg",
      link: "/investnewschennai#InvestId",
    },
    {
      title: "Trade center events (Nandambakkam)",
      category: "Exhibitions",
      description:
        "Make investments in significant shows that address the consumer goods, technology, and manufacturing sectors.",
      image:
        "/images/Invest-Images/SubPages/Established-Trade/trade-center.jpg",
      link: "/investexhibitionschennai#InvestId",
    },
    {
      title: "Textiles and apparel (different locations)",
      category: "Exhibitions",
      description:
        "Invest to increase Tamil Nadu's textile brand's business in Chennai City.",
      image: "/images/Invest-Images/SubPages/invest/textiles.jpg",
      link: "/investexhibitionschennai#InvestId",
    },
    {
      title: "Furniture and home decor (in different locations)",
      category: "Exhibitions",
      description:
        "People who work in real estate or construct their own homes would find this expo helpful.",
      image: "/images/Invest-Images/SubPages/Consumer/furniture.jpg",
      link: "/investexhibitionschennai#InvestId",
    },
  ];

  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("Real Estate");
  const filteredBuildings = buildingData.filter(
    (item) => item.category === selectedCategory
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("selectedInvestCategory", category);
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

  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedInvestCategory");
    if (savedCategory) {
      setSelectedCategory(savedCategory);
    }
  }, []);

  return (
    <>
      <div className="chennaiInvestmentBg">
        <div className="container max-w-7xl mx-auto px-4 ChennaiInvestContainerdiv">
          <div className="ChennaiInvestMents">
            <h4>Chennai Investments</h4>
            <h6>
              Diverse investment options, from the city's booming real estate
              market to the expansion of its infrastructure and IT sector to
              manufacturing prospects and a burgeoning startup scene.
            </h6>
          </div>

          <div className="chennaiInvestmentsButtons">
            {investmentCategories.map((category, index) => (
              <button
                // key={index}
                // className={category === selectedCategory ? "active" : ""}
                // onClick={() => setSelectedCategory(category)}
                key={index}
                className={`tabButton ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div>
            <div className="buildingSectionFlex">
              {filteredBuildings.map((item, index) => (
                <div
                  className="bulidingSection"
                  key={index}
                  onClick={() => {
                    navigate(item.link);
                    window.scrollTo({ top: 0 });
                  }}
                >
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

        <div
          className={`ChennaiInvestBackground ${
            scrollDir === "right"
              ? "ChennaiInvestScrollright"
              : "ChennaiInvestScrolLeft"
          }`}
          ref={bgTextRef}
        >
          <p>Events &nbsp; Events &nbsp; Events &nbsp; Events </p>
          <p>Calendar &nbsp; Calendar &nbsp; Calendar &nbsp; Calendar</p>
        </div>
      </div>
    </>
  );
}
