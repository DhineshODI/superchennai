import Search from "../Components/Search";
import "../assets/Css/Live.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useRef, useEffect } from "react";
import InstagramReelsMarquee from "../Components/SocialChennai";
import Becameavolunteer from "../Components/BecameAVolunteer";

export default function Live() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });

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
      image: "./images/Live-Images/Cost-of-living.jpg",
      text: "Cost of Living",
      link: "/costofliving",
    },
    {
      id: 2,
      image: "./images/Live-Images/Residency.jpg",
      text: "Residency",
      link: "/residencypropertyrentbuyinchennai",
    },
    {
      id: 3,
      image: "./images/Live-Images/Employment.jpg",
      text: "Employment",
      link: "/employmentinchennai",
    },
    {
      id: 4,
      image: "./images/Live-Images/chennaiLifeEssential4.png",
      text: "Transportation",
      link: "/transportation",
    },

    {
      id: 6,
      image: "./images/Live-Images/Healthcare-banner.jpg",
      text: "Healthcare",
      link: "/healthcare",
    },
    {
      id: 7,
      image: "./images/Live-Images/Culture-Religious-Attractions.jpg",
      text: "Culture Religious",
      link: "/culturereligiousattractions",
    },
    {
      id: 8,
      image: "./images/Live-Images/Recreation.jpg",
      text: "Recreation",
      link: "/recreation",
    },

    {
      id: 10,
      image: "./images/Live-Images/Neighbourhood.jpg",
      text: "Neighbourhood",
      link: "/neighbourhood",
    },
    {
      id: 11,
      image: "./images/Live-Images/Quality-of-Life.jpg",
      text: "Quality of Life",
      link: "/qualityoflife",
    },
    {
      id: 12,
      image: "./images/Live-Images/Future-Growth-&-Development.jpg",
      text: "Future Growth Developing",
      link: "/futuregrowthdeveloping",
    },
    {
      id: 12,
      image: "./images/Live-Images/Educational-Institutions.jpg",
      text: "Educational Institutions",
      link: "/educationinstitutions",
    },
  ];

  return (
    <>
      <div className="VolunteerBgSection LiveBgSection notHome"  data-aos="fade-up" data-aos-delay="200">
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <div className="VolunteerBannerImage">
              <img src="/images/Live-Images/liveBanner.jpg" alt="" />
            </div>
            <h3 className="voluntterContent">Live</h3>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      <div className="DootedBannerSectionLive"  data-aos="fade-up" data-aos-delay="200">
        <div className="LiveParaSection container max-w-7xl mx-auto px-4">
          <div
            className={`LiveTextBackground ${
              scrollDir === "right" ? "scroll-right" : "scroll-left"
            }`}
            ref={bgTextRef}
          >
            <p>
              Living in &nbsp; &nbsp; Living in <br /> Chennai &nbsp; &nbsp;
              Chennai
            </p>
          </div>
          <div className="LiveRow">
            <div className="LiveMainContent">
              <h3>Living in Chennai</h3>
              <p className="paraZeroLiveSection">
                Chennai is more than simply a metropolis. Many individuals feel
                this way since it has given them the chance to work and, for
                some, even their lives. In this one city, we can discover
                individuals from every district.
              </p>
              <p className="paraoneLiveSection">
                From PG to villas, food to other services, parks to beaches,
                resorts to concerts, malls to theaters, and even jobs to
                businesses, everything can be found here. However, Super Chennai
                will be your go-to resource for information about events in
                Chennai, including where they take place. Gain access to
                information about where events take place and enjoy Chennai's
                days and evenings.
              </p>
              <p className="paraTwoLiveSection">
                Super Chennai will be all yours, not just for enjoyment and
                amusement but also for employment prospects and other things
                that will change your life.
              </p>
            </div>
            <img
              src="./images/Live-Images/volunteerBannerImagesContent.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="ChennaiEssentisalMainContainer"  data-aos="fade-up" data-aos-delay="400">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="chennaiLifeEssentialHeading">
            <h3>Chennai Life Essential</h3>
            <p>
              Regardless of whether you have chosen Chennai to stay or move from
              one area to another area, Super Chennai will be the best guide to
              explore the essentials. So that you could easily live a lively and
              energetic life in Chennai.
            </p>
          </div>

          <div className="ChennaiContainerLiveEssential">
            <div className="ImageConatinerLiveEssential">
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

      <div className="LivePageInstragarm"  data-aos="fade-up" data-aos-delay="400">
        <InstagramReelsMarquee />
      </div>

      <Becameavolunteer />
    </>
  );
}
