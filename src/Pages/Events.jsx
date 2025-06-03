import { Link } from "react-router-dom";
import "../assets/Css/Eventstyle.css";
import Search from "../Components/Search";

export default function EventsHome() {
  const cards = [
    {
      EventsCalendarTitle: "Startup Networking Global Startup Clubs",
      EventsCalendarContent:
        "Join global startup clubs and expand your network.",
      EventsCalendarMonth: "April",
      EventsCalendarTime: "10:30 AM",
      EventsCalendarCategory: "Networking",
      image: "/images/HomePage-Images/Events/Events1.jpg",
      link: "/eventsmain",
    },
    {
      EventsCalendarTitle: "Tech Innovators Meetup",
      EventsCalendarContent: "Meet the brightest minds in tech innovation.",
      EventsCalendarMonth: "May",
      EventsCalendarTime: "2:00 PM",
      EventsCalendarCategory: "Technology",
      image: "/images/HomePage-Images/Events/Events2.jpg",
      link: "/eventsmain",
    },
    {
      EventsCalendarTitle: "Entrepreneur Workshop",
      EventsCalendarContent: "Learn business skills from top entrepreneurs.",
      EventsCalendarMonth: "June",
      EventsCalendarTime: "11:00 AM",
      EventsCalendarCategory: "Business",
    image: "/images/HomePage-Images/Events/Events3.jpg",
      link: "/eventsmain",
    },
    {
      EventsCalendarTitle: "Marketing Strategies 101",
      EventsCalendarContent: "Boost your brand with smart marketing tips.",
      EventsCalendarMonth: "July",
      EventsCalendarTime: "1:30 PM",
      EventsCalendarCategory: "Marketing",
      image: "/images/HomePage-Images/Events/Events1.jpg",
      link: "/eventsmain",
    },
    {
      EventsCalendarTitle: "Investment Opportunities Forum",
      EventsCalendarContent: "Find funding for your next big idea.",
      EventsCalendarMonth: "August",
      EventsCalendarTime: "9:00 AM",
      EventsCalendarCategory: "Finance",
      image: "/images/HomePage-Images/Events/Events2.jpg",
      link: "/eventsmain",
    },
    {
      EventsCalendarTitle: "Startup Showcase",
      EventsCalendarContent: "Showcase your startup to investors.",
      EventsCalendarMonth: "September",
      EventsCalendarTime: "4:00 PM",
      EventsCalendarCategory: "Startup",
      image: "/images/HomePage-Images/Events/Events3.jpg",
      link: "/eventsmain",
    },
    {
      EventsCalendarTitle: "Tech Trends Summit",
      EventsCalendarContent: "Explore the future of technology.",
      EventsCalendarMonth: "October",
      EventsCalendarTime: "5:00 PM",
      EventsCalendarCategory: "Technology",
      image: "/images/events/EventsCalenderImage3.png",
      link: "/eventsmain",
    },
    {
      EventsCalendarTitle: "Business Networking Night",
      EventsCalendarContent: "Expand your professional connections.",
      EventsCalendarMonth: "November",
      EventsCalendarTime: "6:30 PM",
      EventsCalendarCategory: "Networking",
      image: "/images/HomePage-Images/Events/Events1.jpg",
      link: "/eventsmain",
    },
    {
      EventsCalendarTitle: "Young Entrepreneurs Panel",
      EventsCalendarContent: "Get inspired by young business leaders.",
      EventsCalendarMonth: "December",
      EventsCalendarTime: "12:00 PM",
      EventsCalendarCategory: "Leadership",
      image: "/images/HomePage-Images/Events/Events2.jpg",
      link: "/eventsmain",
    },
    {
      EventsCalendarTitle: "Innovation Day",
      EventsCalendarContent: "Celebrate breakthrough innovations.",
      EventsCalendarMonth: "January",
      EventsCalendarTime: "3:30 PM",
      EventsCalendarCategory: "Innovation",
      image: "/images/HomePage-Images/Events/Events3.jpg",
      link: "/eventsmain",
    },
    {
      EventsCalendarTitle: "Venture Capital Insights",
      EventsCalendarContent: "Learn how to pitch VCs successfully.",
      EventsCalendarMonth: "February",
      EventsCalendarTime: "9:30 AM",
      EventsCalendarCategory: "Finance",
      image: "/images/events/EventsCalenderImage3.png",
      link: "/eventsmain",
    },
    {
      EventsCalendarTitle: "Product Launch Event",
      EventsCalendarContent: "Discover exciting new products.",
      EventsCalendarMonth: "March",
      EventsCalendarTime: "1:00 PM",
      EventsCalendarCategory: "Product",
      image: "/images/HomePage-Images/Events/Events1.jpg",
      link: "/eventsmain",
    },
    {
      EventsCalendarTitle: "Women in Business Conference",
      EventsCalendarContent: "Celebrate women leaders and entrepreneurs.",
      EventsCalendarMonth: "April",
      EventsCalendarTime: "11:30 AM",
      EventsCalendarCategory: "Leadership",
      image: "/images/HomePage-Images/Events/Events2.jpg",
      link: "/eventsmain",
    },
    {
      EventsCalendarTitle: "Global Business Fair",
      EventsCalendarContent: "Connect with businesses around the world.",
      EventsCalendarMonth: "May",
      EventsCalendarTime: "2:30 PM",
      EventsCalendarCategory: "Business",
      image: "/images/HomePage-Images/Events/Events3.jpg",
      link: "/eventsmain",
    },
  ];

  return (
    <>
      <section className="accaodomationBannerSection">
        <div>
          <img src="./images/AccodomationBannerr.jpg" alt="" />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Events</h3>
            <div className="breadCrum">
              <a href="">Home</a> - <a href="">Events</a>{" "}
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </section>
      <section className="EventsListSec SecPadblock12">
        <div className="container max-w-7xl mx-auto ">
          <div class="Eventitlesec mb-[50px] text-center">
            <h2 className="text-[#a44294]">Events Calendar</h2>
            <p>
              Keeps you in the loop with the latest happenings in Chennai. From
              cultural festivals and live performances to workshops and
              exhibitions, never miss an exciting event in the city.
            </p>
          </div>
          <div className="EventsListboxs flex flex-wrap">
            {cards.map((card, index) => (
              <div
                key={index}
                className="EventsItems bg-white"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full EventsItemImg">
                  <Link to="/eventsdetails">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full object-cover"
                    />
                  </Link>
                  <div className="absolute top-3 right-3 evntechnolg">
                    {card.EventsCalendarCategory}
                  </div>
                </div>
                <div className="EventsIteCont flex flex-col items-start">
                  <div className="datimeContbox">
                    <div className="dtDaymonth">{card.EventsCalendarMonth}</div>
                    <div className="dtLines">|</div>
                    <div className="dtTimess">{card.EventsCalendarTime}</div>
                  </div>
                  <h3 className="EveItemtitles">
                    <Link to="/eventsdetails">{card.EventsCalendarTitle}</Link>
                  </h3>
                  <h4 className="EveItemDescrip">
                    {card.EventsCalendarContent}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
