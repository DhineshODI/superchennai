import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "../Css/VisitPage.css";
import MegaMenu from "../Header";
import Search from "../Search";
import InstagramReelsMarquee from "../SocialChennai";
import Becameavolunteer from "../BecameAVolunteer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderWithMegaMenu from "../ExampleMegamenu";
import VisitChennaiMarquee from "../VisitChennaiMarquee";

export default function Visit() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = [
    {
      src: "/images/accomodation-img.jpg",
      label: "Accomodation",
      description: "Details about accommodations in Chennai.",
    },
    {
      src: "/images/accomodation-img.jpg?text=Image+2",
      label: "Food",
      description: "Explore Chennai's delicious food options.",
    },
    {
      src: "/images/accomodation-img.jpg?text=Image+3",
      label: "Places to visit",
      description: "Top places to visit while in Chennai.",
    },
    {
      src: "/images/accomodation-img.jpg?text=Image+4",
      label: "Things to do",
      description: "Exciting activities and experiences.",
    },
    {
      src: "/images/accomodation-img.jpg?text=Image+5",
      label: "Itinerary",
      description: "Plan your trip with this sample itinerary.",
    },
    {
      src: "/images/accomodation-img.jpg?text=Image+6",
      label: "Hidden Gems",
      description: "Discover Chennai's lesser-known attractions.",
    },
    {
      src: "/images/accomodation-img.jpg?text=Image+7",
      label: "Shopping",
      description: "Best places to shop in Chennai.",
    },
    {
      src: "/images/accomodation-img.jpg?text=Image+8",
      label: "Travel Tips",
      description: "Helpful tips for traveling to Chennai.",
    },
    {
      src: "/images/accomodation-img.jpg?text=Image+9",
      label: "Wellness",
      description: "Relax and unwind during your stay.",
    },
    {
      src: "/images/accomodation-img.jpg?text=Image+10",
      label: "Events",
      description: "Upcoming events and festivals.",
    },
    {
      src: "/images/accomodation-img.jpg?text=Image+11",
      label: "Conferences",
      description: "Major conferences happening in Chennai.",
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

  const mainSettings = {
    asNavFor: nav2,
    arrows: true,
    fade: true,
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
        <div className="VolunteerBgSection visitBgSection notHome">
          <div className="VolunteerMainContainer">
            <div className="volunteerSectionBanner">
              <div className="VolunteerBannerImage">
                <img src="/images/visitBanner.jpg" alt="Banner" />
              </div>
              <h3 className="voluntterContent">Visit</h3>
            </div>
          </div>
          {/* <div className="mainMegamenuContainer">
            <HeaderWithMegaMenu />
          </div> */}
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        <div className="visitIntroParaSection">
          <div className=" container max-w-7xl mx-auto px-4">
            <div
              className={`VolunteeerTextBackground ${
                scrollDir === "right" ? "scroll-right" : "scroll-left"
              }`}
              ref={bgTextRef}
            >
              <p>Visit &nbsp; Visit &nbsp; Visit &nbsp; Visit</p>
            </div>
            <div className="workIntro">
              <h3>Visit Chennai</h3>
              <p>
                <strong>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </strong>
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting.
              </p>
            </div>
          </div>
        </div>

        <div className="visitChennaiMarqueeSection">
          <VisitChennaiMarquee />
        </div>

        <div className="visitslideOut">
          <div className="visitslideTop container max-w-7xl mx-auto px-4">
            <h3>visit chennai</h3>
            <p>
              dard dummy text ever since the 1500s, when an unknown took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
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
                    <div className="titleOut">
                      <h4>{img.label}</h4>
                    </div>
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
                    <a
                      href={`/visit/${img.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
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
                    </a>

                    {/* Title as separate link */}
                    <h3>
                      <a
                        href={`/category/${img.label
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {img.label}
                      </a>
                    </h3>

                    {/* Description with Learn More link */}
                    <p>
                      {img.description}{" "}
                      <a
                        href={`/details/${img.label
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        Learn more
                      </a>
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
