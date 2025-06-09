import { useState, useEffect } from "react";
import "../assets/Css/ExampleHeader.css";
import MenuBar from "./MenuBar";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Search from "./Search";

const menuItems = [
  {
    label: "Live",
    labellink: "/live",
    content: [
      {
        title: "Cost of Living",
        desc: "Smart Spend",
        link: "/costofliving",
      },
      {
        title: "Residency",
        desc: "Live Easy",
        link: "/residencypropertyrentbuyinchennai",
      },
      {
        title: "Employment",
        desc: "Work Zone",
        link: "/employmentinchennai",
      },
      {
        title: "Transportation",
        desc: "Easy Commute",
        link: "/transportation",
      },
      {
        title: "Healthcare",
        desc: "Well Vibes",
        link: "/healthcare",
      },
      {
        title: "City Pulse",
        desc: "Heritage Hit",
        link: "/culturereligiousattractions",
      },
      {
        title: "Recreation",
        desc: "Play Mode",
        link: "/recreation",
      },
      {
        title: "Neighbourhood",
        desc: "Local Love",
        link: "/neighbourhood",
      },
      {
        title: "Quality of Life",
        desc: "Chennai Vibe",
        link: "/qualityoflife",
      },
      {
        title: "Future Forward",
        desc: "Next Wave",
        link: "/futuregrowthdeveloping",
      },
      {
        title: "Learning Link",
        desc: "Brain Hub",
        link: "/educationinstitutions",
      },
    ],
  },
  {
    label: "Visit",
    labellink: "/visit",
    content: [
      {
        title: "Accomodation",
        desc: "Cozy Stays",
        link: "/accomodation",
      },
      {
        title: "Food",
        desc: "Flavour Trail",
        link: "/food",
      },
      {
        title: "Things to do",
        desc: "Experience More",
        link: "/thingstodo",
      },
      {
        title: "Places to Visit",
        desc: "Must-See",
        link: "/placestovisit",
      },
      {
        title: "Itinerary",
        desc: "Culture Route",
        link: "/itinerary",
      },
      {
        title: "Hidden Gems",
        desc: "Local Secrets",
        link: "/hiddengems",
      },
      {
        title: "Shopping",
        desc: "Style Central",
        link: "/shopping",
      },
      {
        title: "Travel Tips",
        desc: "Smart Moves",
        link: "/traveltips",
      },
      {
        title: "Wellness",
        desc: "Urban Reboot",
        link: "/wellness",
      },
      {
        title: "Events",
        desc: "Now Happening",
        link: "/events",
      },
      {
        title: "Conferences",
        desc: "Biz Buzz",
        link: "/conferences",
      },
    ],
  },
  {
    label: "Work",
    labellink: "/work",
    content: [
      {
        title: "Business Permits",
        desc: "Legal Setup",
        link: "/employmentbusinesspermits",
      },
      {
        title: "Unicorns",
        desc: " Big Growth",
        link: "/unicorn",
      },
      {
        title: "Co-Workingspaces",
        desc: "Flexible Work",
        link: "/coworkingspaces",
      },
      {
        title: "PG",
        desc: "Stay Easy",
        link: "/pg",
      },
      {
        title: "Pay Perk",
        desc: "Compensation Insights",
        link: "/salariesbenefits",
      },
      {
        title: "Career Growth",
        desc: "Skill Progress",
        link: "/careergrowth",
      },
      {
        title: "Networking",
        desc: "Build Circles",
        link: "/networking",
      },
      {
        title: "Worklife Balance",
        desc: "Life Sync",
        link: "/worklifebalance",
      },
    ],
  },
  {
    label: "Invest",
    labellink: "/invest",
    content: [
      {
        title: "Real Estate",
        desc: "Chennai Property Potential",
        link: "/investrealestatechennai",
      },
      {
        title: "Franchise",
        desc: "Explore Business Opportunities",
        link: "/investfranchisechennai",
      },
      {
        title: "Startups",
        desc: "Invest Chennai Innovation",
        link: "/investstartupschennai",
      },
      {
        title: "Renewable Energy",
        desc: "Sustainable Chennai Growth",
        link: "/investrenewableenergychennai",
      },
      {
        title: "Retire in Chennai",
        desc: "Serene Investment Choice",
        link: "/investretirementchennai",
      },
      {
        title: "Government Initiatives",
        desc: "Chennai Policy Support",
        link: "/investgovernmentinitiativeschennai",
      },
      {
        title: "Formalities & Regulations",
        desc: "Navigate Chennai Investments",
        link: "/investformalitiesregulationschennai",
      },
      {
        title: "News",
        desc: "Investment opportunities rise.",
        link: "/investnewschennai",
      },
      {
        title: "Events",
        desc: "Connect, learn, grow.",
        link: "/investeventschennai",
      },
      {
        title: "Exhibitions",
        desc: "Showcase, explore, invest.",
        link: "/investexhibitionschennai",
      },
    ],
  },
  {
    label: "Innovate",
    labellink: "/innovate",
    content: [
      {
        title: "IT and Software Development",
        desc: "Digital solutions innovate",
        link: "/itandsoftwaredevelopment",
      },
      {
        title: "Artificial Intelligence",
        desc: "Intelligent automation advances",
        link: "/artificialintelligenceandmachinelearning",
      },
      {
        title: "Electric Vehicles",
        desc: "Sustainable mobility evolves",
        link: "/ElectricVehicles",
      },
      {
        title: "Smart City Initiatives",
        desc: "Connected living transforms",
        link: "/smartcityinitiatives",
      },
      {
        title: "Healthcare Tech",
        desc: "Digital health empowers",
        link: "/healthcaretechinnovation",
      },
      {
        title: "Robotics and Automation",
        desc: "Intelligent manufacturing optimizes",
        link: "/roboticsandautomation",
      },
      {
        title: "Blockchain and Fintech",
        desc: "Secure finance revolutionizes",
        link: "/blockchainandfintech",
      },
      {
        title: "Automotive Tech and R&D",
        desc: "Future mobility drives",
        link: "/automotivetechandrandd",
      },
      {
        title: "Education Tech",
        desc: "Learning innovation expands",
        link: "/educationtech",
      },
      {
        title: "3D Printing",
        desc: "Advanced prototyping creates",
        link: "/threedprintingandadditivemanufacturing",
      },
      {
        title: "Augmented Reality",
        desc: "Immersive experiences emerge",
        link: "/augmentedreality",
      },
      {
        title: "Agriculture Tech",
        desc: "Precision farming modernizes",
        link: "/agriculturetech",
      },
    ],
  },
  {
    label: "Volunteer",
    labellink: "/volunteer",

    content: [
      {
        title: "Digital",
        desc: "Connect Chennai Volunteers",
        link: "/volunteer",
      },
      {
        title: "Events",
        desc: "Volunteers Power Gatherings",
        link: "/volunteer",
      },
      {
        title: "Content Creators",
        desc: "Sharing Volunteer Stories",
        link: "/volunteer",
      },
      {
        title: "Design &  Art",
        desc: "Visualizing Volunteer Impact",
        link: "/volunteer",
      },
      {
        title: "Influencers",
        desc: "Amplifying Volunteer Voices",
        link: "/volunteer",
      },
      {
        title: "Mentors",
        desc: "Guiding Future Volunteers",
        link: "/volunteer",
      },
      // {
      //   title: "Pride of Chennai",
      //   desc: "Volunteers Shape City",
      //   link: "/volunteer",
      // },
    ],
  },
];

const sectionImageMap = {
  Live: "./images/HomePage-Images/live-MegaMenu.jpg",
  Visit: "./images/HomePage-Images/Visit-MegaMenu.jpg",
  Work: "./images/HomePage-Images/work-MegaMenu.jpg",
  Invest: "./images/HomePage-Images/Invest-MegaMenu.jpg",
  Innovate: "./images/HomePage-Images/Innovate-MegaMenu.jpg",
  Volunteer: "./images/HomePage-Images/Volunteers-MegaMenu.jpg",
};

const FullWidthHeaderMegaMenu = ({ setMenuBar, setMenuBar1 }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(
    "./images/FirstSliderImage.png"
  );

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [imageLoaded, setImageLoaded] = useState(false);

  const [mobileAccordionOpenIndex, setMobileAccordionOpenIndex] =
    useState(null);

  // Unique handler name to avoid conflicts
  const handleMobileMenuAccordionToggle = (index) => {
    setMobileAccordionOpenIndex(
      mobileAccordionOpenIndex === index ? null : index
    );
  };
  const handleScrollToSearchForm = () => {
    const element = document.getElementById("SearchForm");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const [menuBar, setMenuBar] = useState(false);
  const slideInFromLeft = {
    hidden: {
      opacity: 0,
      x: -200, // start far left
      scale: 0.95,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0, // final position
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      x: -100, // exit back to the left
      scale: 0.95,
      filter: "blur(4px)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const toggleMobileAccordion = (index) => {
    setMobileAccordionOpenIndex(
      mobileAccordionOpenIndex === index ? null : index
    );
  };

  useEffect(() => {
    const hasNewMegaMenu = document.querySelector(".Newmegamenu") !== null;
    setIsActive(hasNewMegaMenu);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (activeMenu) {
      const timer = setTimeout(() => setMenuVisible(true), 10); // Trigger .show class
      return () => clearTimeout(timer);
    } else {
      setMenuVisible(false); // Remove .show class immediately
    }
  }, [activeMenu]);

  // Reset imageLoaded whenever hoveredImage changes
  useEffect(() => {
    setImageLoaded(false);
  }, [hoveredImage]);

  return (
    <>
      <div className="mainMegamenuContainers">
        <header
          className={`mainMegamenuContainer ${scrolled ? "scrolled" : ""}`}
        >
          <nav
            // className="Megamenunav"
            className={`Megamenunav ${isHome ? "HomePageStyle" : ""}`}
            onMouseLeave={() => {
              setMenuVisible(false);
              setTimeout(() => setActiveMenu(null), 300);
            }}
          >
            <div
              className={`Megamenutop-bar ${
                activeMenu ? "activeStateMegamenu" : ""
              }`}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/");
                  setMenuVisible(false);
                  window.scrollTo({ top: 0 });
                }}
                className="Megamenulogo"
              ></div>

              <div className="Megamenumenuicon md:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? "✖" : "☰"}
                </button>
              </div>

              <ul className="Megamenumenudesktop">
                {menuItems.map((item, i) => (
                  <li
                    key={i}
                    className={`Megamenumenuitem ${
                      activeMenu?.label === item.label
                        ? "activeMegamenuSection"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveMenu(item);
                      setMenuVisible(false);
                      navigate(item.labellink);
                      window.scrollTo({ top: 0 });
                    }}
                    onMouseEnter={() => {
                      setActiveMenu(item);
                      setMenuVisible(true);
                      setHoveredImage(
                        sectionImageMap[item.label] ||
                          "./images/FirstSliderImage.png"
                      );
                    }}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>

              <div
                style={{ cursor: "pointer" }}
                className="Megamenulogo1 hidden md:block"
                onClick={() => setMenuBar(true)}
              >
                MENU
              </div>
            </div>

            {activeMenu && (
              <div
                className={`Newmegamenu hidden md:block ${
                  menuVisible ? "show" : ""
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMenu.label}
                    className="megamenuMainContainer"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="Newmegamenuinner">
                      {activeMenu.content.map((block, index) => (
                        <div
                          key={index}
                          className="mega-link-wrapper"
                          onClick={() => {
                            navigate(block.link);
                            setMenuVisible(false);
                            window.scrollTo({ top: 0 });
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <h4 className="mega-block-title">
                            {block.title.length > 15 &&
                            block.title.includes(" ")
                              ? (() => {
                                  const words = block.title.split(" ");
                                  const mid = Math.floor(words.length / 2);
                                  const before = words.slice(0, mid).join(" ");
                                  const after = words.slice(mid).join(" ");
                                  return (
                                    <>
                                      {before}
                                      <br />
                                      {after}
                                    </>
                                  );
                                })()
                              : block.title}
                          </h4>

                          <p className="mega-block-desc">{block.desc}</p>
                        </div>
                      ))}
                    </div>
                    <img
                      className="megamenuMainImage"
                      src={hoveredImage}
                      alt=""
                    />
                  </motion.div>
                </AnimatePresence>
              
              </div>
            )}

     

            {mobileMenuOpen && (
              <div className="mobile-menu md:hidden">
                {menuItems.map((item, i) => (
                  <div key={i} className="mobile-section">
                    {/* Clickable main topic with icon */}
                    <div
                      onClick={() => handleMobileMenuAccordionToggle(i)}
                      className="mobile-title cursor-pointer flex justify-between items-center"
                    >
                      <span>{item.label}</span>
                      <span className="text-xl">
                        {mobileAccordionOpenIndex === i ? "−" : "+"}
                      </span>
                    </div>

                    {/* Accordion content */}
                    {mobileAccordionOpenIndex === i && (
                      <div className="mobile-content">
                        {item.content.map((block, j) => (
                          <Link
                            to={block.link}
                            key={j}
                            className="mobile-link-wrapper"
                          >
                            <p className="mobile-subtitle">{block.title}</p>
                            <p className="mobile-subdesc">{block.desc}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="Mobileheader">
              <div className="mobilesvgSize">
                <img
                  src="./images/HomePage-Images/Icons/mobile-Header-Events.svg"
                  alt=""
                />
              </div>
              <div className="mobilesvgSize">
                <img
                  src="./images/HomePage-Images/Icons/mobile-Header-Email.svg"
                  alt=""
                />
              </div>

              <div className="mobilesvgSize">
                <Link to="/">
                  <img src="./images/HomePage-Images/Superchennai.png" alt="" />
                </Link>
              </div>

              <div className="mobilesvgSize" onClick={handleScrollToSearchForm}>
                <img
                  onClick={() => setMenuBar1(true)}
                  src="./images/HomePage-Images/Icons/mobile-Header-Search.svg"
                  alt=""
                />
              </div>
              <div className="mobilesvgSize">
                <img
                  onClick={() => setMenuBar(true)}
                  src="./images/HomePage-Images/Icons/mobile-Header-Hamburger.svg"
                  alt=""
                />
              </div>
            </div>

            {/* <div className="SearchMobileBg">
              <div className="SearchMobileSection">
                <Search />
              </div>
            </div> */}
          </nav>
        </header>
      </div>
    </>
  );
};

export default FullWidthHeaderMegaMenu;
