import React, { useState, useEffect, useRef } from "react";
import "../assets/Css/Utilities.css";

export default function Utilitiesinchennai() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const tabsData = [
    {
      id: "North",
      title: "North",
      content: (
        <>
          <img src="/images/HomePage-Images/North Chennai.png" alt="" />
        </>
      ),
    },

    {
      id: "Central",
      title: "Central",
      content: (
        <>
          <img src="/images/HomePage-Images/Central Chennai.png" alt="" />
        </>
      ),
    },
    {
      id: "South",
      title: "South",
      content: (
        <>
          <img src="/images/HomePage-Images/South Chennai.png" alt="" />
        </>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState("North");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
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

  return (
    <>
      <div className="utilitiesMainRow">
        <section className="py-[10vh] utilitiCTabSec">
          <div className="flex flex-col container max-w-7xl mx-auto px-4">
            <div className="utilitiTitle mb-[5vh]">
              <h2>Utilities in Chennai</h2>
              <p>
                {/* Essential services include trash management, water supply,
                energy, and transportation networks. */}
                Chennai is designed for everyday ease — with well-connected
                utilities, accessible essentials, and services that keep life
                running smoothly.
              </p>
            </div>
            <div className="utilitiCheCol ">
              <div className="utilitiCTabs flex">
                <ul className="tabs flex flex-col items-start tabsSectionFlex">
                  {tabsData.map((tab, index) => (
                    // <li
                    //   key={tab.id}
                    //   className={`tab ${activeTab === tab.id ? "active" : ""} ${
                    //     index === tabsData.length - 1 ? "tab_last" : ""
                    //   }`}
                    //   rel={tab.id}
                    //   onClick={() => handleTabClick(tab.id)}
                    // >
                    //   {tab.title}
                    // </li>
                    <li
                      key={tab.id}
                      className={`tab ${activeTab === tab.id ? "active" : ""} ${
                        index === tabsData.length - 1 ? "tab_last" : ""
                      }`}
                      rel={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      style={{ transition: "all 0.3s ease" }}
                    >
                      {tab.title}
                    </li>
                  ))}
                </ul>

                <div className="Utilitiestab_container">
                  {tabsData.map((tab) => (
                    <React.Fragment key={tab.id}>
                      <h3
                        className={`tab_drawer_heading ${
                          activeTab === tab.id ? "d_active" : ""
                        }`}
                        rel={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }} // flex to align title + symbol
                      >
                        {tab.title}
                        <span className="mapsFontSymbols">
                          {activeTab === tab.id ? "−" : "+"}
                        </span>
                      </h3>
                      <div
                        id={tab.id}
                        className="tab_content"
                        style={{
                          display: activeTab === tab.id ? "block" : "none",
                        }}
                      >
                        {tab.content}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`UtilitiesBackground ${
              scrollDir === "right"
                ? "Utilitiesscroll-right"
                : "Utilitiesscroll-left"
            }`}
            ref={bgTextRef}
          >
            <p>Namma &nbsp; Chennai &nbsp; Namma &nbsp; Chennai</p>
          </div>
        </section>
      </div>
    </>
  );
}
