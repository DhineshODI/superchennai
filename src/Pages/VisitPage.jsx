import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "../assets/Css/VisitPage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import Becameavolunteer from "../Components/BecameAVolunteer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderWithMegaMenu from "../Components/ExampleMegamenu";
import VisitChennaiMarquee from "../Components/VisitChennaiMarquee";
import { line, link } from "framer-motion/client";
import { Link } from "react-router-dom";

export default function Visit() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const images = [
    {
      src: "./images/Visit-Images/accomodation.jpg",
      label: "Accomodation",
      description: "Find comfortable stays for your memorable city visit",
      link: "/accomodation",
    },
    {
      src: "./images/Visit-Images/food.jpg?text=Image+2",
      label: "Food",
      description:
        "Taste delicious local cuisine during your exploration here.",
      link: "/food",
    },
    {
      src: "./images/Visit-Images/places-to-visit.jpg?text=Image+3",
      label: "Places to visit",
      description: "Discover ancient landmarks and vibrant markets here.",
      link: "/placestovisit",
    },
    {
      src: "./images/Visit-Images/things-to-do.jpg?text=Image+4",
      label: "Things to do",
      description:
        "Explore vibrant culture and exciting activities in the city.",
      link: "/thingstodo",
    },
    {
      src: "./images/Visit-Images/itinerary.jpg?text=Image+5",
      label: "Itinerary",
      description: "Plan your cultural trail for enriching local experiences.",
      link: "/itinerary",
    },
    {
      src: "./images/Visit-Images/hidden-gems.jpg?text=Image+6",
      label: "Hidden Gems",
      description: "Uncover local secrets and unique spots around.",
      link: "/hiddengems",
    },
    {
      src: "./images/Visit-Images/shopping.jpg?text=Image+7",
      label: "Shopping",
      description: "Indulge in textiles and traditional crafts locally.",
      link: "/shopping",
    },
    {
      src: "./images/Visit-Images/travel-tips.jpg?text=Image+8",
      label: "Travel Tips",
      description: "Navigate the city easily with helpful local advice.",
      link: "/traveltips",
    },
    {
      src: "./images/Visit-Images/wellness.jpg?text=Image+9",
      label: "Wellness",
      description: "Rejuvenate with local therapies during your city stay.",
      link: "/wellness",
    },
    {
      src: "./images/Visit-Images/events.jpg?text=Image+10",
      label: "Events",
      description: "Experience happening events and festivals locally now.",
      link: "/events",
    },
    {
      src: "./images/Visit-Images/conferences.jpg?text=Image+11",
      label: "Conferences",
      description: "Experience happening events and festivals locally now.",
      link: "/conferences",
    },
  ];
  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(mainSlider.current);
    setNav2(thumbSlider.current);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainSettings = {
    asNavFor: nav2,
    arrows: true,
    fade: true,
    infinite: false,
  };

  const thumbSettings = {
    asNavFor: nav1,
    slidesToShow: 11,
    focusOnSelect: true,
    infinite: false,
    vertical: true,
    arrows: false,
    verticalSwiping: false,
  };

  return (
    <>
      <div>
        <div className="VolunteerBgSection visitBgSection notHome" data-aos="fade-up" data-aos-delay="200">
          <div className="VolunteerMainContainer">
            <div className="volunteerSectionBanner">
              <div className="VolunteerBannerImage">
                <img src="./images/Visit-Images/visitBanner.jpg" alt="Banner" />
              </div>
              <h3 className="voluntterContent">Visit</h3>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        <div className="visitIntroParaSection" data-aos="fade-up" data-aos-delay="400">
          <div className=" container max-w-7xl mx-auto px-4">
            <div
              className={`VolunteeerTextBackground ${
                scrollDir === "right" ? "scroll-right" : "scroll-left"
              }`}
              ref={bgTextRef}
            >
              {/* <p>Visit&nbsp; - Visit &nbsp; - Visit&nbsp; - Visit&nbsp;</p>
              <p>Chennai&nbsp;- Chennai &nbsp;- Chennai &nbsp; </p> */}
              <p>
                Visit&nbsp; Chennai &nbsp; Visit&nbsp; Chennai&nbsp; Visit&nbsp;
                Chennai&nbsp;
              </p>
            </div>
            <div className="workIntro">
              <h3>Visit Chennai</h3>
              <p>
                <strong>
                  Are you someone who just visits Chennai to study, relax, or
                  find a place to stay for work? Whatever it may be. We have you
                  covered.
                </strong>
              </p>
              <p>
                You can have fun and visit and discover a lot of locations in
                this big metropolis. All recommendations and guidance for
                cuisine, lodging, destinations, itineraries, travel, shopping,
                hidden treasures, activities, wellness, and events will be
                provided here. In simpler terms, consider this as a portable
                guide.
              </p>
            </div>
          </div>
        </div>

        <div className="visitChennaiMarqueeSection" data-aos="fade-up" data-aos-delay="800">
          <VisitChennaiMarquee />
        </div>

        <div className="visitslideOut" data-aos="fade-up" data-aos-delay="1000">
          <div className="visitslideTop container max-w-7xl mx-auto px-4">
            <h3>visit chennai</h3>
            <p>
              When you visit Chennai seldom or for the first time, how about
              navigating the city and locating everything you need without a
              guide? Isn't it amazing? Super Chennai does this for you, though.
            </p>
          </div>

          {/* Slider Section */}
          <div className="sliderSection">
            {/* Main Image */}
            <div className="visitslideImg">
              <Slider {...mainSettings} ref={mainSlider}>
                {images.map((img, index) => (
                  <div key={index} style={{ textAlign: "center" }}>
                    <img src={img.src} alt={img.label} />
                    <Link to={img.link}>
                      <div className="titleOut">
                        <h4>{img.label}</h4>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Thumbnail with Multiple Links */}
            <div className="visitContSlide">
              <Slider {...thumbSettings} ref={thumbSlider}>
                {images.map((img, index) => (
                  <div key={index}>
                    {/* Link on image */}
                    <Link to={img.link}>
                      <img
                        src={img.src}
                        alt={img.label}
                        style={{
                          width: "100%",
                          height: "auto",
                          cursor: "pointer",
                          borderRadius: "4px",
                        }}
                      />
                    </Link>

                    {/* Title as separate link */}
                    <h3>
                      <Link to={img.link}>{img.label}</Link>
                    </h3>

                    {/* Description with Learn More link */}
                    <p>
                      {img.description} <Link to={img.link}>Learn more</Link>
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
          
        <InstagramReelsMarquee />
        <Becameavolunteer />
      </div>
    </>
  );
}
