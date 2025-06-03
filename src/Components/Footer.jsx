import { useState, useEffect } from "react";
import "../assets/Css/Footer.css";
import { a, link } from "framer-motion/client";
import Funchennai from "./FunChennai";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const DigitalChennai = [
    { label: "Events", link: "/events" },
    { label: "Night Life", link: "/night-life" },
    { label: "Food", link: "/food" },
    { label: "Fun", link: "/fun" },
    { label: "Community", link: "/community" },
    { label: "Hidden Gems", link: "/hidden-gems" },
    { label: "Hotspots", link: "/hotspots" },
    { label: "Trails", link: "/trails" },
    { label: "Art & Crafts", link: "/art-crafts" },
    { label: "Job Boards", link: "/job-boards" },
    { label: "Gigs", link: "/gigs" },
    { label: "Mixers", link: "/mixers" },
    { label: "Conferences", link: "/conferences" },
    { label: "Biz Ops", link: "/biz-ops" },
    { label: "Sectors", link: "/sectors" },
    { label: "EXPAT", link: "/expat" },
    { label: "NRI", link: "/nri" },
    { label: "EXPO", link: "/expo" },
    { label: "STARTUPS", link: "/startups" },
    { label: "HACKATHONS", link: "/hackathons" },
    { label: "AI", link: "/ai" },
    { label: "PITCHES", link: "/pitches" },
  ];

  const SOCIALChennai = [
    { title: "SLIDESHOWS", link: "/slideshows" },
    { title: "INFOGRAPHIC", link: "/infographics" },
    { title: "STORIES", link: "/stories" },
    { title: "TESTIMONIALS", link: "/testimonials" },
    { title: "ANECDOTES", link: "/anecdotes" },
    { title: "PROMOTIONS", link: "/promotions" },
    { title: "ACHIEVERS", link: "/achievers" },
    { title: "UNUSUAL FOLKS", link: "/unusual-folks" },
    { title: "ARTISTS", link: "/artists" },
    { title: "MEMES", link: "/memes" },
    { title: "STANDUP TIEUPS", link: "/standup-tieups" },
    { title: "COLLABS", link: "/collabs" },
    { title: "CELEBS", link: "/celebs" },
    { title: "PROFILES", link: "/profiles" },
    { title: "FEATURES", link: "/features" },
    { title: "PLACES", link: "/places" },
    { title: "PRODUCTS", link: "/products" },
  ];

  const FUNCHENNAI = [
    { title: "MOVIE FESTIVALS", link: "/movie-festivals" },
    { title: "DJ 365", link: "/dj-365" },
    { title: "ROCK SHOWS", link: "/rock-shows" },
    { title: "BEACH PARTIES", link: "/beach-parties" },
    { title: "STREET CRICKET", link: "/street-cricket" },
  ];

  const STARTUPCHENNAI = [
    { title: "CO-WORKING HUB", link: "/co-working-hub" },
    { title: "UNSUAL PITCHES", link: "/unsual-pitches" },
    { title: "BULLETIN BOARD", link: "/bulletin-board" },
    { title: "INNOVATION CHALLENGE", link: "/innovation-challenge" },
    { title: "MENTORING MEETUPS", link: "/mentoring-meetups" },
  ];

  const FOODIECHENNAI = [
    { title: "STREET FOOD FEST", link: "/street-food-fest" },
    { title: "DIGITAL FOOD TRAIL", link: "/digital-food-trail" },
    { title: "FUSION FOOD POPUPS", link: "/fusion-food-popups" },
    { title: "FOOD INFLUENCERS", link: "/food-influencers" },
    { title: "NIGHT FOOD BAZAAR", link: "/night-food-bazaar" },
  ];

  const TECHCHENNAI = [
    { title: "AI HUB", link: "/ai-hub" },
    { title: "FREE WIFI AT PUBLIC PACES", link: "/free-wifi-at-public-paces" },
    { title: "POINTCAST", link: "/pointcast" },
    { title: "TECH FEST", link: "/tech-fest" },
    { title: "SPECIALIST CONCLAVES", link: "/specialist-conclaves" },
  ];

  const CREATIVECHENNAI = [
    { title: "Cost of living", link: "/costofliving" },
    { title: "Residency", link: "/residencypropertyrentbuyinchennai" },
    { title: "Employment / Business Permits", link: "/employmentinchennai" },
    { title: "Transportation", link: "/transportation" },
    { title: "Healthcare", link: "/healthcare" },
    {
      title: "Cultural / Religious attractions",
      link: "/culturereligiousattractions",
    },
    { title: "Recreation", link: "/recreation" },
    { title: "Neighbourhood", link: "/neighbourhood" },
    { title: "Quality of Life", link: "/qualityoflife" },
    { title: "Future Growth & Development", link: "/futuregrowthdeveloping" },
  ];

  const BUSINESSCHENNAI = [
    {
      title: "Accomodation",
      link: "/accomodation",
    },
    { title: "Food", link: "/food" },
    { title: "Things to do", link: "/thingstodo" },
    { title: "Places to Visit", link: "/placestovisit" },
    { title: "Itinerary", link: "/itinerary" },
    { title: "Hidden Gems", link: "/hiddengems" },
    { title: "Shopping", link: "/shopping" },
    { title: "Travel Tips", link: "/traveltips" },
    { title: "Wellness", link: "/wellness" },
    { title: "Events", link: "/events" },
    { title: "Conferences", link: "/conferences" },
  ];

  const NETWORKCHENNAI = [
    { title: "Employment", link: "/employmentbusinesspermits" },
    { title: "Unicorns", link: "/unicorn" },
    { title: "Co-workingspaces", link: "/coworkingspaces" },
    { title: "PG", link: "/pg" },
    { title: "Salaries & Benefits", link: "/salariesbenefits" },
    { title: "Career Growth", link: "/careergrowth" },
    { title: "Networking", link: "/networking" },
    { title: "Worklife balance", link: "/worklifebalance" },
  ];

  const USEFULLINKS = [
    { title: "Realestate", link: "/investrealestatechennai" },
    { title: "Franchise", link: "/investfranchisechennai" },
    { title: "Startups", link: "/investstartupschennai" },
    { title: "Renewable Energy", link: "/investrenewableenergychennai" },
    { title: "Retire in chennai", link: "/investretirementchennai" },
    {
      title: "Government initiatives",
      link: "/investgovernmentinitiativeschennai",
    },
    {
      title: "Formalities & Regulations",
      link: "/investformalitiesregulationschennai",
    },
    { title: "NEWS", link: "/investnewschennai" },
    { title: "Events", link: "/investeventschennai" },
  ];

  const USEFULLINKS1 = [
    { title: "IT and Software Development", link: "/itandsoftwaredevelopment" },
    {
      title: "Artificial Intelligence",
      link: "/artificialintelligenceandmachinelearning",
    },
    { title: "Electric Vehicles", link: "/ElectricVehicles" },
    { title: "Smart City Initiatives", link: "/smartcityinitiatives" },
    { title: "Healthcare Tech", link: "/healthcaretechinnovation" },
    {
      title: "Robotics and Automation",
      link: "/roboticsandautomation",
    },
    {
      title: "Blockchain and Fintech",
      link: "/blockchainandfintech",
    },
    { title: "Automotive Tech and R&D", link: "/automotivetechandrandd" },
    { title: "Education Tech", link: "/educationinstitutions" },
    { title: "3D Printing", link: "/threedprintingandadditivemanufacturing" },
    { title: "Education Augmented Reality", link: "/augmentedreality" },
    { title: "Agriculture Tech", link: "/agriculturetech" },
  ];
  const USEFULLINKS2 = [
    { title: "Digital", link: "/volunteer" },
    { title: "Events", link: "/volunteer" },
    { title: "Content Creators", link: "/volunteer" },
    { title: "Design &  Art", link: "/volunteer" },
    { title: "Influencers", link: "/volunteer" },
    {
      title: "Mentors",
      link: "/volunteer",
    },
    {
      title: "Pride of Chennai",
      link: "/volunteer",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Desktop screen — close all sections
        setIsOpen(true);
        setIsOpen1(true);
        setIsOpen2(true);
        setIsOpen3(true);
        setIsOpen4(true);
        setIsOpen5(true);
        setIsOpen6(true);
        setIsOpen7(true);
        setIsOpen8(true);
        setIsOpen9(true);
      }
    };

    // Initial check
    handleResize();

    // Listen to window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="FooterBackground w-full bg-900 text-white py-8">
      {/* <div className="SectionConatinerSecond max-w-7xl mx-auto px-4">
        <div className="containerSection">
          <div className="SectionLeft firstsectionwidth">
            <h3 className="FooterHeading" onClick={() => setIsOpen(!isOpen)}>
              Digital Chennai
            </h3>

            {isOpen && (
              <div className="FooterSectionDiv">
                <div>
                  {DigitalChennai.slice(0, 13).map((item, index) => (
                    <a href={item.link} key={index}>
                      <h5>{item.label}</h5>
                    </a>
                  ))}
                </div>
                <div>
                  {DigitalChennai.slice(13, 26).map((item, index) => (
                    <a href={item.link} key={index}>
                      <h5>{item.label}</h5>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="SectionLeft firstsectionwidth">
            <h3 className="FooterHeading" onClick={() => setIsOpen1(!isOpen1)}>
              SOCIAL Chennai
            </h3>

            {isOpen1 && (
              <div className="FooterSectionDiv">
                <div>
                  {SOCIALChennai.slice(0, 13).map(
                    (SOCIALChennaiLinks, index) => (
                      <a href={SOCIALChennaiLinks.link}>
                        <h5>{SOCIALChennaiLinks.title} </h5>
                      </a>
                    )
                  )}
                </div>
                <div>
                  {SOCIALChennai.slice(13, 26).map(
                    (SOCIALChennaiLinks, index) => (
                      <a href={SOCIALChennaiLinks.link}>
                        <h5>{SOCIALChennaiLinks.title} </h5>
                      </a>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="footerthirdSection">
            <div className="SectionLeft">
              <h3
                className="FooterHeading"
                onClick={() => setIsOpen2(!isOpen2)}
              >
                FUN CHENNAI
              </h3>

              {isOpen2 && (
                <div className="FooterSectionDiv">
                  <div>
                    {FUNCHENNAI.slice(0, 5).map((funchennaiLinks, index) => (
                      <a href={funchennaiLinks.link}>
                        <h5>{funchennaiLinks.title}</h5>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="SectionLeft">
              <h3
                className="FooterHeading"
                onClick={() => setIsOpen3(!isOpen3)}
              >
                STARTUP CHENNAI
              </h3>

              {isOpen3 && (
                <div className="FooterSectionDiv">
                  <div>
                    {STARTUPCHENNAI.slice(0, 5).map((startupLinks, index) => (
                      <a href={startupLinks.link}>
                        <h5>{startupLinks.title}</h5>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="footerthirdSection">
            <div className="SectionLeft">
              <h3
                className="FooterHeading"
                onClick={() => setIsOpen4(!isOpen4)}
              >
                FOODIE CHENNAI
              </h3>

              {isOpen4 && (
                <div className="FooterSectionDiv">
                  <div>
                    {FOODIECHENNAI.slice(0, 5).map(
                      (foodieChennaiLinks, index) => (
                        <a href={foodieChennaiLinks.link}>
                          <h5>{foodieChennaiLinks.title}</h5>
                        </a>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="SectionLeft">
              <h3
                className="FooterHeading"
                onClick={() => setIsOpen5(!isOpen5)}
              >
                TECH CHENNAI
              </h3>
              {isOpen5 && (
                <div className="FooterSectionDiv">
                  <div>
                    {TECHCHENNAI.slice(0, 5).map((techchennailinks, index) => (
                      <a href={techchennailinks.link}>
                        <h5>{techchennailinks.title}</h5>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}
      <div className="SectionConatinerSecond max-w-7xl mx-auto px-4">
        <div className="containerSection">
          {/* <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen6(!isOpen6)}>
              Live
            </h3>
        
            <AnimatePresence>
              {isOpen6 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {CREATIVECHENNAI.map((creativeLinks, index) => (
                      <Link key={index} to={creativeLinks.link}>
                        <h5>{creativeLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}

          {/* <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen7(!isOpen7)}>
              Visit
              <span className="symbol">{isOpen7 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen7 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {BUSINESSCHENNAI.map((businessChennaiLinks, index) => (
                      <Link key={index} to={businessChennaiLinks.link}>
                        <h5>{businessChennaiLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}

          {/* <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen7(!isOpen7)}>
              Visit
            </h3>

           
            <AnimatePresence>
              {isOpen7 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {BUSINESSCHENNAI.map((businessChennaiLinks, index) => (
                      <Link key={index} to={businessChennaiLinks.link}>
                        <h5>{businessChennaiLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}

          <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen6(!isOpen6)}>
              Live
              <span className="symbol">{isOpen6 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen6 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {CREATIVECHENNAI.map((creativeLinks, index) => (
                      <Link key={index} to={creativeLinks.link}>
                        <h5>{creativeLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen7(!isOpen7)}>
              Visit
              <span className="symbol">{isOpen7 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen7 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {BUSINESSCHENNAI.map((businessChennaiLinks, index) => (
                      <Link key={index} to={businessChennaiLinks.link}>
                        <h5>{businessChennaiLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen8(!isOpen8)}>
              Work
              <span className="symbol">{isOpen8 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen8 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {NETWORKCHENNAI.map((networkLinks, index) => (
                      <Link key={index} to={networkLinks.link}>
                        <h5>{networkLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen9(!isOpen9)}>
              Invest
              <span className="symbol">{isOpen9 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen9 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {USEFULLINKS.map((usefulLinks, index) => (
                      <Link key={index} to={usefulLinks.link}>
                        <h5>{usefulLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="SectionConatinerSecond max-w-7xl mx-auto px-4">
        <div className="containerSection">
          <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen5(!isOpen5)}>
              Innovate
              <span className="symbol">{isOpen5 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen5 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {USEFULLINKS1.map((creativeLinks, index) => (
                      <Link key={index} to={creativeLinks.link}>
                        <h5>{creativeLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen3(!isOpen3)}>
              Volunteer
            </h3>

            <AnimatePresence>
              {isOpen3 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {USEFULLINKS2.map((businessChennaiLinks, index) => (
                      <Link key={index} to={businessChennaiLinks.link}>
                        <h5>{businessChennaiLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}
          <div className="SectionLeft1">
            <h3 className="FooterHeading" onClick={() => setIsOpen3(!isOpen3)}>
              Volunteer
              <span className="symbol">{isOpen3 ? "−" : "+"}</span>
            </h3>

            <AnimatePresence>
              {isOpen3 && (
                <motion.div
                  className="FooterSectionDiv"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    {USEFULLINKS2.map((businessChennaiLinks, index) => (
                      <Link key={index} to={businessChennaiLinks.link}>
                        <h5>{businessChennaiLinks.title}</h5>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="SectionConatinerSecond1 max-w-7xl mx-auto px-4">
        <div className="footermainsection">
          <div className="LogoandFollow">
            <div className="logoFooterimage">
              <img src="./images/super-chennai-logo-final.png" alt="" />
            </div>

            <div className="followUs">
              <h3>Follow US</h3>
              <div className="iconsFlex">
                {/* <img src="./images/Indeed.png" alt="" />
                <img src="./images/insta.png" alt="" />
                <img src="./images/fb.png" alt="" />
                <img src="./images/youtube.png" alt="" />
                <img src="./images/threads.png" alt="" /> */}
                <a
                  href="https://www.linkedin.com/company/super-chennai"
                  target="_blank"
                >
                  <img src="./images/Indeed.png" alt="" />
                </a>
                <a
                  href="https://www.instagram.com/super_chennai_/"
                  target="_blank"
                >
                  <img src="./images/insta.png" alt="" />
                </a>
                <a
                  href="https://www.facebook.com/share/1Hsb1ypGGE/"
                  target="_blank"
                >
                  <img src="./images/fb.png" alt="" />
                </a>
                <a
                  href="https://www.youtube.com/@Super_Chennai"
                  target="_blank"
                >
                  <img src="./images/youtube.png" alt="" />
                </a>
                <a href="https://x.com/Super_Chennai_	" target="_blank">
                  <img src="./images/threads.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="copyrights">
            <h5>
              @ 2025 <span>Super Chennai</span>
            </h5>
            <h5>All Rights Reserved.</h5>
            <div className="designBy">
              <h4>Design By</h4>
              <a href="https://www.opendesignsin.com/" target="_blank">
                <img src="./images/open-dd-logo.webp" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
