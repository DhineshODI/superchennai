import { motion } from "framer-motion";
import "../assets/Css/EventsCalendar.css";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { link } from "framer-motion/client";

export default function CardCarousel111() {
  const [scrollDir, setScrollDir] = useState("left");
  const carouselRef = useRef();
  const [x, setX] = useState(0);

  const navigate = useNavigate();

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const cards = [
    {
      EventsCalendarTitle: "Startup Networking Global Startup Clubs",
      EventsCalendarContent:
        "Join global startup clubs and expand your network.",
      EventsCalendarMonth: "April",
      EventsCalendarTime: "10:30 AM",
      EventsCalendarCategory: "Networking",
      image: "/images/HomePage-Images/Events/Events1.jpg",
      link: "https://in.bookmyshow.com/events/shaadi-shud-i-by-mohammed-hussain/ET00396162",
    },
    {
      EventsCalendarTitle: "Tech Innovators Meetup",
      EventsCalendarContent: "Meet the brightest minds in tech innovation.",
      EventsCalendarMonth: "May",
      EventsCalendarTime: "2:00 PM",
      EventsCalendarCategory: "Technology",
      image: "/images/HomePage-Images/Events/Events2.jpg",
      link: "https://in.bookmyshow.com/events/chennai-business-networking/ET00446574",
    },
    {
      EventsCalendarTitle: "Entrepreneur Workshop",
      EventsCalendarContent: "Learn business skills from top entrepreneurs.",
      EventsCalendarMonth: "June",
      EventsCalendarTime: "11:00 AM",
      EventsCalendarCategory: "Business",
      image: "/images/HomePage-Images/Events/Events3.jpg",
      link: "https://in.bookmyshow.com/events/cyber-security-expo-and-conference-india-csec/ET00440106",
    },
    {
      EventsCalendarTitle: "Startup Networking Global Startup Clubs",
      EventsCalendarContent:
        "Join global startup clubs and expand your network.",
      EventsCalendarMonth: "April",
      EventsCalendarTime: "10:30 AM",
      EventsCalendarCategory: "Networking",
      image: "/images/HomePage-Images/Events/Events1.jpg",
      link: "https://in.bookmyshow.com/events/shaadi-shud-i-by-mohammed-hussain/ET00396162",
    },
    {
      EventsCalendarTitle: "Tech Innovators Meetup",
      EventsCalendarContent: "Meet the brightest minds in tech innovation.",
      EventsCalendarMonth: "May",
      EventsCalendarTime: "2:00 PM",
      EventsCalendarCategory: "Technology",
      image: "/images/HomePage-Images/Events/Events2.jpg",
      link: "https://in.bookmyshow.com/events/chennai-business-networking/ET00446574",
    },
    {
      EventsCalendarTitle: "Entrepreneur Workshop",
      EventsCalendarContent: "Learn business skills from top entrepreneurs.",
      EventsCalendarMonth: "June",
      EventsCalendarTime: "11:00 AM",
      EventsCalendarCategory: "Business",
      image: "/images/HomePage-Images/Events/Events3.jpg",
      link: "https://in.bookmyshow.com/events/cyber-security-expo-and-conference-india-csec/ET00440106",
    },
    {
      EventsCalendarTitle: "Startup Networking Global Startup Clubs",
      EventsCalendarContent:
        "Join global startup clubs and expand your network.",
      EventsCalendarMonth: "April",
      EventsCalendarTime: "10:30 AM",
      EventsCalendarCategory: "Networking",
      image: "/images/HomePage-Images/Events/Events1.jpg",
      link: "https://in.bookmyshow.com/events/shaadi-shud-i-by-mohammed-hussain/ET00396162",
    },
    {
      EventsCalendarTitle: "Tech Innovators Meetup",
      EventsCalendarContent: "Meet the brightest minds in tech innovation.",
      EventsCalendarMonth: "May",
      EventsCalendarTime: "2:00 PM",
      EventsCalendarCategory: "Technology",
      image: "/images/HomePage-Images/Events/Events2.jpg",
      link: "https://in.bookmyshow.com/events/chennai-business-networking/ET00446574",
    },
    {
      EventsCalendarTitle: "Entrepreneur Workshop",
      EventsCalendarContent: "Learn business skills from top entrepreneurs.",
      EventsCalendarMonth: "June",
      EventsCalendarTime: "11:00 AM",
      EventsCalendarCategory: "Business",
      image: "/images/HomePage-Images/Events/Events3.jpg",
      link: "https://in.bookmyshow.com/events/cyber-security-expo-and-conference-india-csec/ET00440106",
    },
  ];

  const slide = (direction) => {
    const cardWidth = 300;
    const gap = 40;
    const visibleWidth = window.innerWidth;
    const totalCardsWidth = cards.length * (cardWidth + gap);
    const maxX = -(totalCardsWidth - visibleWidth + gap);

    setX((prevX) => {
      if (direction === "left") {
        return Math.min(prevX + (cardWidth + gap), 0);
      } else if (direction === "right") {
        return Math.max(prevX - (cardWidth + gap), maxX);
      }
      return prevX;
    });
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
      <div className="EventsCalendarMainSection">
        <div
          className={`EventsCalenderBackground ${
            scrollDir === "right"
              ? "Utilitiesscroll-right"
              : "Utilitiesscroll-left"
          }`}
          ref={bgTextRef}
        >
          <p>Events &nbsp; Events &nbsp; Events &nbsp; Events </p>
          <p>Calendar &nbsp; Calendar &nbsp; Calendar &nbsp; Calendar</p>
        </div>
        <div className="container max-w-7xl mx-auto px-4 EventsCalendarTitleMain">
          <h2>Events Calendar</h2>
          <p>
            Keep updated with Chennai's exciting events, including seminars,
            concerts, exhibits, and cultural festivals. Examine a variety of
            events in the city that appeal to a range of interests.
          </p>
        </div>

        <div className="eventsCalendarMainSectionConatiner container max-w-7xl mx-auto px-4">
          <div className="CalendarEventsFirst">
            <img
              className="eventsCalenderIamge"
              src="  /images/HomePage-Images/Events/Events1.jpg"
              alt=""
            />
            <div className="MainCalendarSectionEvent">
              <h4>
                <span>June - 2025 </span> YMCA Nandanam : Chennai
              </h4>

              <div className="secondSectionEventsCalendar">
                <div className="EventsCalendarDateandTime">
                  <p className="dateEvents">14</p>
                  <p className="dayEvents">Saturday</p>
                </div>

                <div>
                  <p className="eventsNAME">D.I in The House</p>
                  <p className="eventspLACE">D.I in the House</p>
                </div>
              </div>

              <div className="thirdSectionCalendarContent">
                <p>
                 Startup Networking Global Startup Clubs...
                </p>
              </div>

              <div className="eventsCalendarLinks">
                {/* <a href="#">Concerts</a> */}
                <a href="#">Music Shows</a>
              </div>

              {/* <Link to="/eventsmain"> */}
              <p
                onClick={() => {
                  navigate("/eventsmain");
                  window.scrollTo({ top: 0 });
                }}
                className="FindOutMore"
              >
                Find Out More
              </p>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className="overflow-hidden py-17 cardMobileSection">
          <div className="relative">
            {/* Left Gradient Overlay */}
            <div className="absolute top-0 left-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>

            {/* Right Gradient Overlay */}
            <div className="absolute top-0 right-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

            {/* Carousel */}
            <motion.div
              ref={carouselRef}
              className="flex gap-10 cursor-grab active:cursor-grabbing cardsMobileSection"
              drag="x"
              // dragConstraints={{ right: 0, left: -1200 }}
              dragConstraints={{
                right: 0,
                left: -(cards.length * (300 + 40) - window.innerWidth + 40),
              }}
              animate={{ x }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }} // <-- Smooth animation
            >
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="EventsCalendarCardSection min-w-[300px] h-[400px] bg-white"
                  onClick={() => navigate("/eventsmain")}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full h-[250px]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-t-md"
                    />
                    <div className="absolute top-3 right-3 CalenderCategoryOverlay">
                      {card.EventsCalendarCategory}
                    </div>
                  </div>
                  <div className="EventsCalendarMonthtime">
                    <div className="EventsCalendarMonthStyle">
                      {card.EventsCalendarMonth}
                    </div>
                    <div className="EventsCalendarMonthStyle">|</div>
                    <div className="EventsCalendarMonthStyle">
                      {card.EventsCalendarTime}
                    </div>
                  </div>
                  <h3 className="EventsCalendarTitlecss">
                    {card.EventsCalendarTitle}
                  </h3>
                  <h4 className="EventsCalendarContentcss">
                    {card.EventsCalendarContent}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Buttons BELOW the slider */}
          <div className="EventsCalenderButtons flex justify-center gap-8 mt-8">
            <div
              className="EventsCalenderLeftButton"
              onClick={() => slide("left")}
            ></div>
            <div
              className="EventsCalenderRightButton"
              onClick={() => slide("right")}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
