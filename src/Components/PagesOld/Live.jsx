import MegaMenu from "../Header";
import Search from "../Search";
import "../Css/Live.css";
import { useState, useRef, useEffect } from "react";
import InstagramReelsMarquee from "../SocialChennai";
import Becameavolunteer from "../BecameAVolunteer";
import HeaderWithMegaMenu from "../ExampleMegamenu";

export default function Live() {
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

  const chennaiEssentials = [
    {
      id: 1,
      image: "./images/chennaiLifeEssential4.png",
      text: "Employment / Business Permits",
      link: "/employment",
    },
    {
      id: 2,
      image: "./images/chennaiLifeEssential2.png",
      text: "Residency / Housing",
      link: "/residency",
    },
    {
      id: 3,
      image: "./images/chennaiLifeEssential3.png",
      text: "Transportation Services",
      link: "/transportation",
    },
    {
      id: 4,
      image: "./images/chennaiLifeEssential4.png",
      text: "Healthcare & Hospitals",
      link: "/healthcare",
    },
    {
      id: 5,
      image: "./images/chennaiLifeEssential4.png",
      text: "Education & Schools",
      link: "/education",
    },
    {
      id: 6,
      image: "./images/chennaiLifeEssential2.png",
      text: "Government Services",
      link: "/government-services",
    },
    {
      id: 7,
      image: "./images/chennaiLifeEssential3.png",
      text: "Legal & Documentation",
      link: "/legal-docs",
    },
    {
      id: 8,
      image: "./images/chennaiLifeEssential4.png",
      text: "Utilities & Bills",
      link: "/utilities",
    },
    {
      id: 9,
      image: "./images/chennaiLifeEssential3.png",
      text: "Public Safety & Emergencies",
      link: "/public-safety",
    },
    {
      id: 10,
      image: "./images/chennaiLifeEssential1.png",
      text: "Local Markets & Shopping",
      link: "/shopping",
    },
  ];

  return (
    <>
      <div className="VolunteerBgSection LiveBgSection notHome">
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <div className="VolunteerBannerImage">
              <img src="./images/LivePageHeroBannner.png" alt="" />
            </div>
            <h3 className="voluntterContent">Live</h3>
          </div>
        </div>

        {/* <div className="mainMegamenuContainer">
          <HeaderWithMegaMenu />
        </div> */}
        <div className="notHomePageSearch">
          <Search />
        </div>
        {/* <MegaMenu />
        <Search /> */}
      </div>

      <div className="DootedBannerSectionLive">
        <div className="LiveParaSection container max-w-7xl mx-auto px-4">
          <div
            className={`LiveTextBackground ${
              scrollDir === "right" ? "scroll-right" : "scroll-left"
            }`}
            ref={bgTextRef}
          >
            <p>
              Living in &nbsp; &nbsp; Living in <br /> Chennai &nbsp; &nbsp;
              Chennai{" "}
            </p>
          </div>
          <div className="LiveRow">
            <div className="LiveMainContent">
              <h3>Living in Chennai</h3>
              <p className="paraZeroLiveSection">
                Warm welcome to Chennai, where tradition meets modernity!
                Whether you are a citizen, a resident, or someone considering
                making this vibrant city your home, you’ll find everything you
                need to thrive in Chennai’s multicultural, dynamic, and
                business-friendly environment.
              </p>
              <p className="paraoneLiveSection">
                From top-notch healthcare and world-class education to family
                services, security, and exciting recreational activities -
                SuperChennai.com is your go-to guide for all things in Chennai.
                Unlock access to key information and services that will help you
                navigate the city with ease and make the most of what Chennai
                has to offer.
              </p>
              <p className="paraTwoLiveSection">
                Start your Chennai journey with confidence and convenience.
                Discover essential details, connect with the right services, and
                dive into a life full of opportunity and growth in the heart of
                South India.
              </p>
            </div>
            <img src="./images/volunteerBannerImagesContent.png" alt="" />
          </div>
        </div>
      </div>

      <div className="ChennaiEssentisalMainContainer">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="chennaiLifeEssentialHeading">
            <h3>Chennai Life Essential</h3>
            <p>
              Offers a comprehensive guide to help you navigate daily life in
              Chennai. Whether you're settling in or planning to move, this
              section provides valuable insights into the city’s lifestyle,
              making it easier to adapt and enjoy the vibrant, dynamic, and
              diverse experience of Chennai living.
            </p>
          </div>

          <div className="ChennaiContainerLiveEssential">
            <div className="ImageConatinerLiveEssential">
              {/* <div class="ChennaiEssentialimagecontainer">
                <img
                  src="./images/chennaiLifeEssential2.png"
                  alt="Chennai Life"
                />
                <div class="ChennaiEssentialOverlay">
                  <div class="ChennaiEssentialImageText">
                    Employment / Business Permits
                  </div>
                </div>
              </div> */}
              {chennaiEssentials.map((item) => (
                <a
                  href={item.link}
                  key={item.id}
                  className="ChennaiEssentialimagecontainer"
                >
                  <img src={item.image} alt={item.text} />
                  <div className="ChennaiEssentialOverlay">
                    <div className="ChennaiEssentialImageText">{item.text}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="LivePageInstragarm">
        <InstagramReelsMarquee />
      </div>

      <Becameavolunteer />
    </>
  );
}
