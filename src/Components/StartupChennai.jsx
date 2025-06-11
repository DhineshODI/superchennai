import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/Css/StartupChennai.css";

export default function StartupChennai() {
  const navigate = useNavigate();
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

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
      <div className="starupchennaiSection">
        <div className="starupChennaiMainContainer">
          <div
            className={`StartupTextBackground ${
              scrollDir === "right"
                ? "StartupTextScrolright"
                : "StartupTextScrollLeft"
            }`}
            ref={bgTextRef}
          >
            <p>Startup &nbsp; Chennai &nbsp; Startup &nbsp; Chennai</p>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4">
          <div className="startupChennaiMainContainer">
            <h3>STARTUP CHENNAI</h3>
            <p>
              {/* Learn about the technology and networks that drive this vibrant
              ecosystem. Discover the fascinating journey that Chennai's
              up-and-coming startups are taking as they influence the future.
              Here, creativity and investment meet. IT SECTOR - The IT Hub of
              South India, Expanding Quickly. */}
              {/* From cloud solutions to AI breakthroughs, Chennai’s IT sector is
              rewriting the rules. Join the journey of a city that’s turning
              bold ideas into global impact. */}
              
              From cloud solutions to AI breakthroughs, Chennai’s IT sector is
              transforming rapidly. As a hub of innovation and talent, the city
              empowers bold ideas to scale globally. With thriving startups,
              global tech players, and strong digital infrastructure, Chennai is
              shaping the future of technology across industries and borders.
            </p>
          </div>

          <div className="">
            <div className="startupChennaiImageSection">
              <div className="firstStarupSection">
                <img
                  onClick={() => navigate("/investstartupschennai")}
                  src="./images/HomePage-Images/StartupChennaiImage1.png"
                  alt=""
                />

                <div className="itsectorSection">
                  <h4>IT Sector</h4>
                  <p>The IT Hub of South India, Expanding Quickly.</p>
                </div>
              </div>

              <div className="STarupChennaiSections">
                <div className="rightSideSectionSTarup">
                  <div className="StartUpChennaiTextLayer">
                    <img
                      onClick={() => navigate("/investstartupschennai")}
                      src="./images/HomePage-Images/StartupChennaiImage2.png"
                      alt=""
                    />
                    <section className="itsectorSectionOne">
                      <h4>FinTech</h4>
                    </section>
                  </div>
                  <div className="StartUpChennaiTextLayer">
                    <img
                      onClick={() => navigate("/investstartupschennai")}
                      src="./images/HomePage-Images/StartupChennaiImage3.png"
                      alt=""
                    />
                    <section className="itsectorSectionOne">
                      <h4>DeppTech & AI</h4>
                    </section>
                  </div>
                </div>
                <div className="rightSideSectionSTarup">
                  <div className="StarupForBorder StartUpChennaiTextLayer">
                    <img
                      onClick={() => navigate("/investstartupschennai")}
                      src="./images/HomePage-Images/StartupChennaiImage4.png"
                      alt=""
                    />
                    <section className="itsectorSectionOne">
                      <h4>Automotive</h4>
                    </section>
                  </div>
                  <div className="StarupForBorder StartUpChennaiTextLayer">
                    <img
                      onClick={() => navigate("/investstartupschennai")}
                      src="./images/HomePage-Images/edTechHome.png"
                      alt=""
                    />
                    <section className="itsectorSectionOne">
                      <h4>EdTech</h4>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
