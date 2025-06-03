import { useState, useEffect, useRef } from "react";
import "../assets/Css/Invest.css";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import Becameavolunteer from "../Components/BecameAVolunteer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Invest() {
  const [scrollDir, setScrollDir] = useState("left");

  const InvestSections = [
    {
      title: "Digital",
      description:
        "Empowering communities through technology and digital literacy programs. Invests help bridge the digital divide by offering training and access to tools.",
      image: "./images/Invest-Images/BacameAvolunterImage0.png",
      linkText: "Enquire Now",
      linkUrl: "/digital",
    },
    {
      title: "Education",
      description:
        "Promoting education for all through tutoring, mentorship, and resources. Be a part of shaping young minds and building brighter futures.",
      image: "./images/Invest-Images/BacameAvolunterImage1.png",
      linkText: "Enquire Now",
      linkUrl: "/education",
    },
    {
      title: "Health",
      description:
        "Supporting health and wellness with awareness campaigns and aid drives. Join us in making essential healthcare accessible to those in need.",
      image: "./images/Invest-Images/BacameAvolunterImage2.png",
      linkText: "Enquire Now",
      linkUrl: "/health",
    },
    {
      title: "Environment",
      description:
        "Investing toward a cleaner, greener planet through sustainable initiatives. Your actions can help preserve nature for future generations.",
      image: "./images/Invest-Images/BacameAvolunterImage3.png",
      linkText: "Enquire Now",
      linkUrl: "/environment",
    },
    {
      title: "Women Empowerment",
      description:
        "Advocating for women's rights and helping them build sustainable futures. Support equality and uplift communities by enabling women.",
      image: "./images/Invest-Images/BacameAvolunterImage4.png",
      linkText: "Enquire Now",
      linkUrl: "/women",
    },
    {
      title: "Youth Development",
      description:
        "Creating programs that inspire and guide the youth to be future leaders. Help nurture talents and open doors for young individuals.",
      image: "./images/Invest-Images/BacameAvolunterImage1.png",
      linkText: "Enquire Now",
      linkUrl: "/youth",
    },
    {
      title: "Disaster Relief",
      description:
        "Providing timely aid and rehabilitation to those affected by natural disasters. Be a lifeline when it matters most with your support.",
      image: "./images/Invest-Images/BacameAvolunterImage0.png",
      linkText: "Enquire Now",
      linkUrl: "/relief",
    },
  ];

  const investItems = [
    {
      title: "Realestate",
      subtitle: "Residential & Commercial",
      description:
        "Due to rising property values and the need for rental space in cities, real estate investments in Chennai could provide attractive returns. Both residential and commercial prospects were abundant.",
      image: "./images/Invest-Images/Icons/realesate-icon.svg",
      link: "/investrealestatechennai",
    },
    {
      title: "Franchise",
      // subtitle: "software & hardware",
      description:
        "Profit from established brands and local market knowledge through franchising. Investing in a franchise in Chennai would provide you with a quicker path to becoming an entrepreneur in this city's economy.",
      image: "./images/Invest-Images/Icons/franchise-icon.svg",
      link: "/investfranchisechennai",
    },
    {
      title: "STARTUPS ",
      // subtitle: "hospitals & wellness",
      description:
        "Unlike service-based startups, making a product-based investment requires an initial payment. In any case, you can quickly locate your target audience in this city and increase your return on investment.",
      image: "./images/Invest-Images/Icons/startups-icon.svg",
      link: "/investstartupschennai",
    },
    {
      title: "RENEWABLE ENERGY",
      subtitle: "SOLAR & WIND ",
      description:
        "Existing investment opportunities in government-initiated and driven wind and solar projects. It can help create a more environmentally friendly future while taking advantage of a growing market.",
      image: "./images/Invest-Images/Icons/renewable-icon.svg",
      link: "/investrenewableenergychennai",
    },
    {
      title: "RETIRE IN CHENNAI",
      // subtitle: "malls & outlets",
      description:
        "Chennai retirement provides a thriving cultural scene and good healthcare. Investing in this area promises a pleasant living in a friendly community and meets the rising need for senior-friendly accommodation.",
      image: "./images/Invest-Images/Icons/retire-icon.svg",
      link: "/investretirementchennai",
    },
    {
      title: "GOVERNMENT INITIATIVES",
      // subtitle: "hotels & resorts",
      description:
        "Through laws, infrastructure development, and taxation, the TN government encourages investment in Chennai. Focusing on industries like manufacturing and renewable energy will increase economic growth and create jobs.",
      image: "./images/Invest-Images/Icons/government-icon.svg",
      link: "/investgovernmentinitiativeschennai",
    },
    {
      title: "FORMALITIES & REGULATIONS",
      // subtitle: "industrial growth",
      description:
        "Navigating legal systems, such as company registration and environmental permits, is part of investing in Chennai. To make these requirements easier, government organizations provide online portals and instruction.",
      image: "./images/Invest-Images/Icons/formalities-icon.svg",
      link: "/investformalitiesregulationschennai",
    },
    {
      title: "NEWS",
      // subtitle: "banks & fintech",
      description:
        "Chennai's increasing investment in industries like data centers and electric cars has been highlighted in recent headlines. Stay up-to-date on business news to learn about the most recent advancements and prospects.",
      image: "./images/Invest-Images/Icons/news-icon.svg",
      link: "/investnewschennai",
    },
    {
      title: "EVENTS",
      // subtitle: "mobility & logistics",
      description:
        "A number of corporate conferences, industry-specific seminars, and investment summits are held in Chennai. These gatherings offer chances for networking, information about new industries, and stages for exhibiting investment possibilities.",
      image: "./images/Invest-Images/Icons/events-icon.svg",
      link: "/investeventschennai",
    },
    {
      title: "EXHIBITIONS",
      subtitle: "PROPERTY, AUTOMOBILE ",
      description:
        "Investors have the opportunity to evaluate industry trends and uncover potential enterprises by attending these events, which feature goods, innovations, and possible collaborations.",
      image: "./images/Invest-Images/Icons/exhibition-icon.svg",
      link: "/investexhibitionschennai",
    },
  ];

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
  return (
    <>
      <div className="InvestPageId">
        <div
          className="VolunteerBgSection InvestBgSection notHome"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="VolunteerMainContainer">
            <div className="volunteerSectionBanner">
              <div className="VolunteerBannerImage">
                <img src="./images/Invest-Images/investBanner.jpg" alt="" />
              </div>
              <h3 className="voluntterContent">Invest</h3>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <div className="InvestChennaiContainerFlex">
            <div className="InvestChennaiContent">
              <h3>Invest Chennai</h3>
              <h6>
                Chennai City is an attractive choice since it combines heritage
                with innovation and provides a range of investment choices
                across industries including manufacturing, IT, and real estate.
              </h6>
              <p>
                With a vast industrial base, Chennai provides many advantages in
                investing. The investment environment is further significantly
                boosted by the expanding healthcare and IT sectors. In the South
                Indian hub, company growth with long-term outcomes is being
                fostered by all the helpful government policies, qualified
                personnel, and well-connected infrastructure.
              </p>
            </div>
            <div
              className={`InvestTextBackground ${
                scrollDir === "right"
                  ? "scroll-rightInvestPage"
                  : "scroll-leftInvestPage"
              }`}
              ref={bgTextRef}
            >
              <p>Invest &nbsp; Chennai &nbsp; Invest &nbsp; Chennai</p>
            </div>
          </div>
        </div>

        <div
          className="BackgrounInvestImage"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="BgInvestSections">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="InvestFlexContainer">
                {investItems.map((item, index) => (
                  <div
                    className={`InvestMainDivFirstSection ${
                      index % 2 === 0
                        ? "InvestPagesection-odd"
                        : "InvestPagesection-even"
                    }`}
                    key={index}
                  >
                    <div className="InvestMainDivFlexSection">
                      <img src={item.image} alt={item.title} />
                      <div className="InvestMainDivSection">
                        <h3>{item.title}</h3>
                        <h5>{item.subtitle}</h5>
                        <p className={index % 2 === 0 ? "odd-paragraph" : ""}>
                          {item.description}
                        </p>
                        <div className="exploreMorebuttonInvestChennai">
                          <Link to={item.link}>Explore More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="BgImageInvesetSection">
            <div className="BgImageInvestRowImage">
              <img
                src="./images/Invest-Images/InvestSectionImageBanner.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <InstagramReelsMarquee />
        <Becameavolunteer />
      </div>
    </>
  );
}
