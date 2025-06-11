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
        desc: "Live large without spending big",
        link: "/costofliving",
      },
      {
        title: "Residency",
        desc: "Stay your way - flexible and easy",
        link: "/residencypropertyrentbuyinchennai",
      },
      {
        title: "Employment",
        // desc: "Work where ambition meets opportunity.",
        desc: "Thriving hub for every professional",
        link: "/employmentinchennai",
      },
      {
        title: "Transportation",
        desc: "Move smart with global connectivity",
        link: "/transportation",
      },
      {
        title: "Healthcare",
        desc: "Top-tier care, right around the corner",
        link: "/healthcare",
      },
      {
        // title: "Cultural Attractions",
        title: "City Pulse",
        desc: "Heritage vibes with a modern twist",
        link: "/culturereligiousattractions",
      },
      {
        title: "Recreation",
        desc: "Play hard, chill harder",
        link: "/recreation",
      },
      {
        title: "Neighbourhood",
        desc: "Find your vibe, find your tribe",
        link: "/neighbourhood",
      },
      {
        title: "Quality of Life",
        desc: "Comfort, calm, and city cool",
        link: "/qualityoflife",
      },
      {
        title: "Future Forward",
        // title: "Future Growth & Development",

        desc: "A city that’s always leveling up",
        link: "/futuregrowthdeveloping",
      },
      {
        title: "Learning Link",
        // title: "Educational Institutions",
        desc: "Learn big in bold spaces",
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
        desc: "Cozy, stylish stays in Chennai",
        link: "/accomodation",
      },
      {
        title: "Food",
        desc: "Global flavours with local flair",
        link: "/food",
      },
      {
        title: "Things to do",
        desc: "Make memories across the city",
        link: "/thingstodo",
      },
      {
        title: "Places to Visit",
        desc: "Explore iconic spots and hidden marvels",
        link: "/placestovisit",
      },
      {
        title: "Itinerary",
        desc: "Curated trails for cultural discovery",
        link: "/itinerary",
      },
      {
        title: "Hidden Gems",
        desc: "Uncover Chennai’s best-kept secrets",
        link: "/hiddengems",
      },
      {
        title: "Shopping",
        desc: "Find everything from luxe to local",
        link: "/shopping",
      },
      {
        title: "Travel Tips",
        desc: "Smart hacks for smooth travel",
        link: "/traveltips",
      },
      {
        title: "Wellness",
        desc: "Refresh with urban wellness escapes",
        link: "/wellness",
      },
      {
        title: "Events",
        desc: "Catch what’s buzzing right now",
        link: "/events",
      },
      {
        title: "Conferences",
        desc: "Connect at top business forums",
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
        desc: "Hassle-free legal setup guide",
        link: "/employmentbusinesspermits",
      },
      {
        title: "Unicorns",
        desc: "Chennai’s booming startup scene",
        link: "/unicorn",
      },
      {
        title: "Co-Workingspaces",
        desc: "Work smart in flexible shared hubs",
        link: "/coworkingspaces",
      },
      {
        title: "PG",
        desc: "Stay affordably with ease",
        link: "/pg",
      },
      {
        title: "Pay Perk",
        desc: "Explore salaries, perks, and benefits",
        link: "/salariesbenefits",
      },
      {
        title: "Career Growth",
        desc: "Unlock new skills and opportunities",
        link: "/careergrowth",
      },
      {
        title: "Networking",
        desc: "Grow through real connections",
        link: "/networking",
      },
      {
        title: "Worklife Balance",
        desc: "Thrive with a balanced lifestyle",
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
        desc: "Invest smart in property",
        link: "/investrealestatechennai",
      },
      {
        title: "Franchise",
        desc: "Grow with proven models",
        link: "/investfranchisechennai",
      },
      {
        title: "Startups",
        desc: "Fuel innovation with smart capital",
        link: "/investstartupschennai",
      },
      {
        title: "Green Power",
        desc: "Support clean energy growth",
        link: "/investrenewableenergychennai",
      },
      {
        title: "Chill Nest",
        desc: "Retire easy in Chennai",
        link: "/investretirementchennai",
      },
      {
        title: "Policy Boost",
        desc: "Help from government rules",
        link: "/investgovernmentinitiativeschennai",
      },
      {
        title: "Legal Flow",
        desc: "Simplify legal investment steps",
        link: "/investformalitiesregulationschennai",
      },
      {
        title: "News",
        desc: "Stay ahead with investment insights",
        link: "/investnewschennai",
      },
      {
        title: "Events",
        desc: "Connect, learn, and grow opportunities",
        link: "/investeventschennai",
      },
      {
        title: "Exhibitions",
        desc: "Explore markets, pitch, and invest",
        link: "/investexhibitionschennai",
      },
    ],
  },
  {
    label: "Innovate",
    labellink: "/innovate",
    content: [
      {
        title: "IT & Software",
        desc: "Build digital-first futures",
        link: "/itandsoftwaredevelopment",
      },
      {
        title: "AI",
        desc: "Automate smarter with intelligence",
        link: "/artificialintelligenceandmachinelearning",
      },
      {
        title: "EV Mobility",
        desc: "Drive green with tech",
        link: "/ElectricVehicles",
      },
      {
        title: "Smart Cities",
        desc: "Connect life and tech",
        link: "/smartcityinitiatives",
      },
      {
        title: "Health Tech",
        desc: "Empower care digitally",
        link: "/healthcaretechinnovation",
      },
      {
        title: "Robotics",
        desc: "Optimize with smart machines",
        link: "/roboticsandautomation",
      },
      {
        title: "Blockchain",
        desc: "Safe and smart money tech",
        link: "/blockchainandfintech",
      },
      {
        title: "Auto Tech",
        desc: "Mobility meets innovation",
        link: "/automotivetechandrandd",
      },
      {
        title: "Edu Tech ",
        desc: "Expand smarter learning",
        link: "/educationtech",
      },
      {
        title: "3D Printing",
        desc: "Create with precision tech",
        link: "/threedprintingandadditivemanufacturing",
      },
      {
        title: "AR/VR",
        desc: "Experience new realities",
        link: "/augmentedreality",
      },
      {
        title: "Agri Tech",
        desc: "Modernize farms smartly",
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
        desc: "Connect and collaborate online",
        link: "/volunteer",
      },
      {
        title: "Events",
        desc: "Help run volunteer meets",
        link: "/volunteer",
      },
      {
        title: "Content Creators",
        desc: "Share inspiring volunteer stories",
        link: "/volunteer",
      },
      {
        title: "Design &  Art",
        desc: "Showcase causes through creativity",
        link: "/volunteer",
      },
      {
        title: "Influencers",
        desc: "Promote action through your voice",
        link: "/volunteer",
      },
      {
        title: "Mentors",
        desc: "Guide new volunteer minds",
        link: "/volunteer",
      },
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
