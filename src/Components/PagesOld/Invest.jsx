import { useState, useEffect, useRef } from "react";
import "../Css/Invest.css";
import MegaMenu from "../Header";
import Search from "../Search";
import InstagramReelsMarquee from "../SocialChennai";
import Becameavolunteer from "../BecameAVolunteer";
import HeaderWithMegaMenu from "../ExampleMegamenu";

export default function Invest() {
  const [scrollDir, setScrollDir] = useState("left");

  const InvestSections = [
    {
      title: "Digital",
      description:
        "Empowering communities through technology and digital literacy programs. Invests help bridge the digital divide by offering training and access to tools.",
      image: "./images/BacameAvolunterImage0.png",
      linkText: "Enquire Now",
      linkUrl: "/digital",
    },
    {
      title: "Education",
      description:
        "Promoting education for all through tutoring, mentorship, and resources. Be a part of shaping young minds and building brighter futures.",
      image: "./images/BacameAvolunterImage1.png",
      linkText: "Enquire Now",
      linkUrl: "/education",
    },
    {
      title: "Health",
      description:
        "Supporting health and wellness with awareness campaigns and aid drives. Join us in making essential healthcare accessible to those in need.",
      image: "./images/BacameAvolunterImage2.png",
      linkText: "Enquire Now",
      linkUrl: "/health",
    },
    {
      title: "Environment",
      description:
        "Investing toward a cleaner, greener planet through sustainable initiatives. Your actions can help preserve nature for future generations.",
      image: "./images/BacameAvolunterImage3.png",
      linkText: "Enquire Now",
      linkUrl: "/environment",
    },
    {
      title: "Women Empowerment",
      description:
        "Advocating for women's rights and helping them build sustainable futures. Support equality and uplift communities by enabling women.",
      image: "./images/BacameAvolunterImage4.png",
      linkText: "Enquire Now",
      linkUrl: "/women",
    },
    {
      title: "Youth Development",
      description:
        "Creating programs that inspire and guide the youth to be future leaders. Help nurture talents and open doors for young individuals.",
      image: "./images/BacameAvolunterImage1.png",
      linkText: "Enquire Now",
      linkUrl: "/youth",
    },
    {
      title: "Disaster Relief",
      description:
        "Providing timely aid and rehabilitation to those affected by natural disasters. Be a lifeline when it matters most with your support.",
      image: "./images/BacameAvolunterImage0.png",
      linkText: "Enquire Now",
      linkUrl: "/relief",
    },
  ];

  const investItems = [
    {
      title: "Realestate",
      subtitle: "Residential & Commercial",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      image: "./images/realesate-icon.svg",
      link: "#",
    },
    {
      title: "Franchise",
      // subtitle: "software & hardware",
      description:
        "Cutting-edge tech innovations that shape the future of industries.",
      image: "./images/franchise-icon.svg",
      link: "#",
    },
    {
      title: "STARTUPS ",
      // subtitle: "hospitals & wellness",
      description:
        "Invest in advanced healthcare infrastructure and wellness centers.",
      image: "./images/startups-icon.svg",
      link: "#",
    },
    {
      title: "RENEWABLE ENERGY",
      subtitle: "SOLAR & WIND ",
      description:
        "Building the future through world-class education initiatives.",
      image: "./images/renewable-icon.svg",
      link: "#",
    },
    {
      title: "RETIRE IN CHENNAI",
      // subtitle: "malls & outlets",
      description:
        "Thriving retail spaces designed for modern consumers and brands.",
      image: "./images/retire-icon.svg",
      link: "#",
    },
    {
      title: "GOVERNMENT INITIATIVES",
      // subtitle: "hotels & resorts",
      description: "Premium hospitality ventures offering comfort and luxury.",
      image: "./images/government-icon.svg",
      link: "#",
    },
    {
      title: "FORMALITIES & REGULATIONS",
      // subtitle: "industrial growth",
      description:
        "State-of-the-art industrial parks for scalable manufacturing.",
      image: "./images/formalities-icon.svg",
      link: "#",
    },
    {
      title: "NEWS",
      // subtitle: "banks & fintech",
      description:
        "Empowering financial ecosystems with digital transformation.",
      image: "./images/news-icon.svg",
      link: "#",
    },
    {
      title: "EVENTS",
      // subtitle: "mobility & logistics",
      description: "Smart mobility solutions that move cities forward.",
      image: "./images/events-icon.svg",
      link: "#",
    },
    {
      title: "EXHIBITIONS",
      subtitle: "PROPERTY, AUTOMOBILE ",
      description: "Clean and sustainable energy projects for the future.",
      image: "./images/exhibition-icon.svg",
      link: "#",
    },
  ];

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
      <div className="InvestPageId">
       <div className="VolunteerBgSection InvestBgSection notHome">
          <div className="VolunteerMainContainer">
            <div className="volunteerSectionBanner">
              <div className="VolunteerBannerImage">
                <img src="./images/volunteerBanner.png" alt="" />
              </div>
              <h3 className="voluntterContent">Invest</h3>
            </div>
          </div>

          {/* <div className="mainMegamenuContainer">
            <HeaderWithMegaMenu />
          </div> */}
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div> 
    

        <div>
          <div className="InvestChennaiContainerFlex">
            <div className="InvestChennaiContent">
              <h3>Invest Chennai</h3>
              <h6>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the i ndustry's standard dummy
                text ever since the
              </h6>
              <p>
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
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

        <div className="BackgrounInvestImage">
          <div className="BgInvestSections">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="InvestFlexContainer">
                {/* <div className="InvestMainDivFirstSection">
                <div className="InvestMainDivFlexSection">
                  <img src="./images/realesate-icon.svg" alt="" />
                  <div className="InvestMainDivSection">
                    <h3>Realestate</h3>
                    <h5>residential & commercial</h5>
                    <p>
                      orem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type..
                    </p>

                    <div className="exploreMorebuttonInvestChennai">
                    <a href="">Explore More</a>


                    </div>
                  </div>
                </div>
              </div> */}
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
                          <a href={item.link}>Explore More</a>
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
              <img src="./images/InvestSectionImageBanner.jpg" alt="" />
            </div>
          </div>
        </div>

        <InstagramReelsMarquee />
        <Becameavolunteer />
      </div>
    </>
  );
}
