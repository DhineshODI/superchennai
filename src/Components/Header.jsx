import React, { useState, useEffect } from "react";
// import "../assets/Css/Header.css";
import MenuBar from "./MenuBar";
// import { AnimatePresence, motion } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";

const MegaMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickedMenu, setClickedMenu] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [menuBar, setMenuBar] = useState(false);

  const menuItems = [
    {
      title: "Live",
      submenu: [
        {
          title: "Web Development",
          link: "https://getcssscan.com/css-box-shadow-examples",
          content: "Build modern websites and web apps.",
        },
        {
          title: "App Development",
          link: "#",
          content: "iOS, Android and cross-platform apps.",
        },
        {
          title: "SEO Services",
          link: "#",
          content: "Improve your visibility on search engines.",
        },
        {
          title: "Web Development",
          link: "#",
          content: "Build modern websites and web apps.",
        },
        {
          title: "App Development",
          link: "#",
          content: "iOS, Android and cross-platform apps.",
        },
        {
          title: "SEO Services",
          link: "#",
          content: "Improve your visibility on search engines.",
        },
        {
          title: "Web Development",
          link: "#",
          content: "Build modern websites and web apps.",
        },
        {
          title: "App Development",
          link: "#",
          content: "iOS, Android and cross-platform apps.",
        },
        {
          title: "SEO Services",
          link: "#",
          content: "Improve your visibility on search engines.",
        },
        {
          title: "SEO Services",
          link: "#",
          content: "Improve your visibility on search engines.",
        },
        {
          title: "Web Development",
          link: "#",
          content: "Build modern websites and web apps.",
        },
        {
          title: "App Development",
          link: "#",
          content: "iOS, Android and cross-platform apps.",
        },
      ],
    },
    {
      title: "Visit",
      submenu: [
        {
          title: "Web Development",
          link: "https://getcssscan.com/css-box-shadow-examples",
          content: "Build modern websites and web apps.",
        },
        {
          title: "App Development",
          link: "#",
          content: "iOS, Android and cross-platform apps.",
        },
        {
          title: "SEO Services",
          link: "#",
          content: "Improve your visibility on search engines.",
        },
        {
          title: "Web Development",
          link: "#",
          content: "Build modern websites and web apps.",
        },
        {
          title: "App Development",
          link: "#",
          content: "iOS, Android and cross-platform apps.",
        },
        {
          title: "SEO Services",
          link: "#",
          content: "Improve your visibility on search engines.",
        },
        {
          title: "Web Development",
          link: "#",
          content: "Build modern websites and web apps.",
        },
        {
          title: "App Development",
          link: "#",
          content: "iOS, Android and cross-platform apps.",
        },
        {
          title: "SEO Services",
          link: "#",
          content: "Improve your visibility on search engines.",
        },
        {
          title: "SEO Services",
          link: "#",
          content: "Improve your visibility on search engines.",
        },
        {
          title: "Web Development",
          link: "#",
          content: "Build modern websites and web apps.",
        },
        {
          title: "App Development",
          link: "#",
          content: "iOS, Android and cross-platform apps.",
        },
      ],
    },
    {
      title: "Work",
      submenu: [
        {
          title: "Web Development",
          link: "https://getcssscan.com/css-box-shadow-examples",
          content: "Build modern websites and web apps.",
        },
        {
          title: "App Development",
          link: "#",
          content: "iOS, Android and cross-platform apps.",
        },
        {
          title: "SEO Services",
          link: "#",
          content: "Improve your visibility on search engines.",
        },
        {
          title: "Web Development",
          link: "#",
          content: "Build modern websites and web apps.",
        },
        {
          title: "App Development",
          link: "#",
          content: "iOS, Android and cross-platform apps.",
        },
        {
          title: "SEO Services",
          link: "#",
          content: "Improve your visibility on search engines.",
        },
        {
          title: "Web Development",
          link: "#",
          content: "Build modern websites and web apps.",
        },
        {
          title: "App Development",
          link: "#",
          content: "iOS, Android and cross-platform apps.",
        },
        {
          title: "SEO Services",
          link: "#",
          content: "Improve your visibility on search engines.",
        },
        {
          title: "SEO Services",
          link: "#",
          content: "Improve your visibility on search engines.",
        },
        {
          title: "Web Development",
          link: "#",
          content: "Build modern websites and web apps.",
        },
        {
          title: "App Development",
          link: "#",
          content: "iOS, Android and cross-platform apps.",
        },
      ],
    },
    {
      title: "Invest",
      submenu: [
        {
          title: "Stocks",
          link: "#",
          content: "Invest in the stock market smartly.",
        },
        {
          title: "Crypto",
          link: "#",
          content: "Explore digital assets and crypto.",
        },
        {
          title: "Real Estate",
          link: "#",
          content: "Opportunities in the property market.",
        },
      ],
    },
    {
      title: "Innovate",
      submenu: [
        {
          title: "AI",
          link: "#",
          content: "Harness artificial intelligence solutions.",
        },
        {
          title: "Tech",
          link: "#",
          content: "Discover the latest in technology.",
        },
        {
          title: "Research",
          link: "#",
          content: "Learn about ongoing innovation projects.",
        },
      ],
    },
    {
      title: "Volunteer",
      submenu: [
        {
          title: "Join",
          link: "#",
          content: "Become part of our volunteer team.",
        },
        {
          title: "Support",
          link: "#",
          content: "Help us grow and make an impact.",
        },
        {
          title: "Events",
          link: "#",
          content: "Attend or host community events.",
        },
      ],
    },
  ];

  const dropIn = {
    hidden: {
      opacity: 0,
      y: -100,
      scale: 0.9,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // "easeOutBack" style
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.95,
      filter: "blur(4px)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100 && clickedMenu === null) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, clickedMenu]);

  const handleMenuClick = (index) => {
    setClickedMenu(clickedMenu === index ? null : index);
  };

  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div>
      <header className={`header ${showHeader ? "show" : "hide"}`}>
        <div className="header-container">
          {/* Logo */}
          <div className="logo LogoDynamicSection">
            {/* <img src="/images/super-chennai-logo-final-header.png" alt="Logo" /> */}
          </div>

          {/* Hamburger */}
          <div
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <span>&#x2715;</span> : <span>&#9776;</span>}
          </div>

          {/* Desktop Nav */}
          <nav className="navbarContents nav">
            {menuItems.map((item, index) => (
              <div className="nav-item-wrapper" key={index}>
                <div
                  className={`nav-item ${
                    clickedMenu === index ? "rotated" : ""
                  }`}
                >
                  <button onClick={() => handleMenuClick(index)}>
                    {item.title}
                    <span>&nbsp; &#9660;</span>
                  </button>
                </div>
              </div>
            ))}
          </nav>

          <div className="profile" onClick={() => setMenuBar(true)}>
            ||| MENU
          </div>
        </div>

        {/* {clickedMenu !== null && ( */}
        <div
          className="mega-menu-full"
          onMouseLeave={() => setClickedMenu(null)}
        >
          <div className="mega-menu-inner">
            <div className="megamenuinnerFirstSection">
              {menuItems[clickedMenu]?.submenu.map((subItem, idx) => (
                <div key={idx} className="submenu-block">
                  <a className="SubtitleHeadingsStyle" href={subItem.link}>
                    {subItem.title}
                  </a>
                  <p className="submenu-description">{subItem.content}</p>
                </div>
              ))}
            </div>
            <div className="megamenuinnerSecondSection">
              <img src="./images/FirstSliderImage.png" alt="" />
            </div>
          </div>
        </div>
        {/* )} */}
      </header>

      {/* {menuBar && <MenuBar  setMenuBar={setMenuBar}/> } */}
      <AnimatePresence>
        {menuBar && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "absolute", // Or fixed, depending on your layout
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 100000000,
            }}
          >
            <MenuBar setMenuBar={setMenuBar} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;
