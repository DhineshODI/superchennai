import { useState, useEffect, useRef } from "react";
import "../assets/Css/CostOfLiving.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import Becameavolunteer from "../Components/BecameAVolunteer";
import Slider from "react-slick";

export default function CostLivinginChennai() {
  const [scrollDir, setScrollDir] = useState("left");
  const single = [
    {
      id: 1,
      title: "Accomodation",
      para: "Chennai offers a wide variety of accommodation options to suit individual preferences, including shared rooms (₹2,000-₹15,000), paying guests (₹5,000-₹20,000), and 1 BHKs (₹6,000-₹18,000).",
      imgs: "/images/Live-Images/SubPages/Icons/AccomodationIcon.svg",
    },
    {
      id: 2,
      title: "Groceries",
      para: "Grocery prices in Chennai typically fall between ₹2,000 and ₹4,000 per month. Depending on dietary patterns, this includes veggies and other necessary foods.",
      imgs: "/images/Live-Images/SubPages/Icons/GroceriesIcon.svg",
    },
    {
      id: 3,
      title: "Commute",
      para: "Depending on the distance, an individual's monthly commute might cost between ₹800 and ₹2,000 for bus or between ₹1,500 and ₹4,000+ for own transport.",
      imgs: "/images/Live-Images/SubPages/Icons/CommuteIcon.svg",
    },
    {
      id: 4,
      title: "Utilities",
      para: "Depending on consumption and apartment size, monthly utility expenditures for a single person (water, electricity, and internet) often vary from ₹1,500 to ₹3,500.",
      imgs: "/images/Live-Images/SubPages/Icons/Utilities.svg",
    },
    {
      id: 5,
      title: "Clothing",
      para: "Depending on brand preferences and shopping habits, a single person's monthly clothing costs in Chennai might range from ₹500 to ₹2,000+.",
      imgs: "/images/Live-Images/SubPages/Icons/ClothingIcon.svg",
    },
    {
      id: 6,
      title: "Food",
      para: "Depending on preferences, a single individual may spend between ₹2,000 and ₹5,000+ per month on eating out or ordering meals, not including groceries.",
      imgs: "/images/Live-Images/SubPages/Icons/FoodIcon.svg",
    },
    {
      id: 7,
      title: "Entertainment",
      para: "Depending on activities like dining, movies, and social gatherings, expenses in Chennai might range from ₹500 to ₹3,000+ per month for a single individual.",
      imgs: "/images/Live-Images/SubPages/Icons/EntertainmentIcon.svg",
    },
  ];
  const couple = [
    {
      id: 1,
      title: "Accomodation",
      para: "According to location and facilities, couples in Chennai anticipate paying between ₹12,000 and ₹25,000 per month for a 1-2 BHK flat.",
      imgs: "/images/Live-Images/SubPages/Icons/AccomodationIcon.svg",
    },
    {
      id: 2,
      title: "Groceries",
      para: "Relying on their dietary choices and habits, a couple's monthly grocery costs in Chennai usually fall between ₹3,000 and ₹5,000.",
      imgs: "/images/Live-Images/SubPages/Icons/GroceriesIcon.svg",
    },
    {
      id: 3,
      title: "Commute",
      para: "With respect to the frequency of travel and car ownership, a couple's combined monthly commute in Chennai might cost between ₹2,000 and ₹5,000.",
      imgs: "/images/Live-Images/SubPages/Icons/CommuteIcon.svg",
    },
    {
      id: 4,
      title: "Utilities",
      para: "A couple in Chennai typically pays between ₹2,000 and ₹4,000 per month for utilities (water, electricity, internet, and even more).",
      imgs: "/images/Live-Images/SubPages/Icons/Utilities.svg",
    },
  ];
  const family = [
    {
      id: 1,
      title: "Accomodation",
      para: "Families in Chennai typically spend ₹15,000-₹35,000+ monthly for 2-3+ BHK apartments, influenced by size, financial status, and location preferences.",
      imgs: "/images/Live-Images/SubPages/Icons/AccomodationIcon.svg",
    },
    {
      id: 2,
      title: "Groceries",
      para: "Monthly grocery expenses for a family in Chennai generally range from ₹4,000 to ₹8,000+, depending on size and basic and other dietary needs.",
      imgs: "/images/Live-Images/SubPages/Icons/GroceriesIcon.svg",
    },
    {
      id: 3,
      title: "Commute",
      para: "A family's transportation costs can range from ₹3,000 to ₹7,000+ monthly, considering own transport and usage and how frequently they set out.",
      imgs: "/images/Live-Images/SubPages/Icons/CommuteIcon.svg",
    },
    {
      id: 4,
      title: "Utilities",
      para: "Monthly utility expenses (electricity, water, internet, and phone bill) for a family in Chennai typically range from ₹2,500 to ₹5,000+ based on the usage.",
      imgs: "/images/Live-Images/SubPages/Icons/UtilitiesIcon.svg",
    },
  ];
  const images = [
    {
      src: "/images/Live-Images/Cost-of-living.jpg",
      title: "Cost-of-Living",
      link: "/costofliving",
    },
    {
      src: "/images/Live-Images/Residency.jpg",
      title: "Residency",
      link: "/residencypropertyrentbuyinchennai",
    },
    {
      src: "/images/Live-Images/Residency.jpg",
      title: "Eduational Insitiutions",
      link: "/educationinstitutions",
    },
    {
      src: "/images/Live-Images/Employment.jpg",
      title: "Employment",
      link: "/employmentinchennai",
    },
    {
      src: "/images/Live-Images/chennaiLifeEssential4.png",
      title: "Transportation",
      link: "/transportation",
    },
    {
      src: "/images/Live-Images/Healthcare-banner.jpg",
      title: "Healthcare",
      link: "/healthcare",
    },
    {
      src: "/images/Live-Images/Culture-Religious-Attractions.jpg",
      title: "Culture Religious",
      link: "/culturereligiousattractions",
    },
    {
      src: "/images/Live-Images/Recreation.jpg",
      title: "Recreation",
      link: "/recreation",
    },
    {
      src: "/images/Live-Images/Neighbourhood.jpg",
      title: "Neighbourhood",
      link: "/neighbourhood",
    },
    {
      src: "/images/Live-Images/Quality-of-Life.jpg",
      title: "Quality of Life",
      link: "/qualityoflife",
    },
    {
      src: "/images/Live-Images/Future-Growth-&-Development.jpg",
      title: "Future Growth & Development",
      link: "/futuregrowthdeveloping",
    },
  ];
  // Custom Arrow Components
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

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
      {/*----------------Accodimation-Banner----------- */}

      <div className="accaodomationBannerSection">
        <div>
          <img
            src="./images/Live-Images/SubPages/cost-of-living-banner.jpg"
            alt=""
          />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Cost of Living in Chennai</h3>
            <div className="breadCrum">
              <a href="">LIVE</a> - <a href="">COST OF LIVING</a>{" "}
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      {/*----------------Accodimation-Banner----------- */}

      <div className="visitIntroParaSection detailIntro">
        <div className="container max-w-7xl mx-auto px-4">
          <div
            className={`CostOflivingBackground ${
              scrollDir === "right"
                ? "scroll-rightCostofLiving"
                : "scroll-leftCostofLiving"
            }`}
            ref={bgTextRef}
          >
            <p>Live &nbsp; in Chennai &nbsp; Live &nbsp; in Chennai</p>
          </div>
          <div className="workIntro">
            <h3>CHENNAI, ONE OF INDIA’S MOST VIBRANT CITIES </h3>
            <p>
              Still offers a range of lifestyle options according to your tastes
              and financial situation. Additionally, you can prefer your
              location here. Let's talk about the cost of living in this area in
              further depth.
            </p>

            {/* <p>
              For a bachelor/Spinster: The cost of living in Chennai will be
              determined by each person's preferences for food, lodging, and
              location. Let's take a closer look.
            </p> */}
          </div>
        </div>
      </div>

      <section className="clcSecscrl flex">
        <div className="clcscrlCol clcscrlLft relative">
          <div className="clcscrlinLBox sticky top-0">
            <img src="/images/clcscrlImg.jpg" alt="" />
            <div className="clcscrLtitle bg-[#7d377c] relative">
              <h2 className="flex flex-col">
                <small>For</small> A Bachelor
              </h2>
              <p>
                The cost of living in Chennai will be determined by each
                person's preferences for food, lodging, and location. Let's take
                a closer look.
              </p>
              <div className="boxttlsec">Single</div>
            </div>
          </div>
        </div>
        <div className="clcscrlCol clcscrlRight padbtm">
          <div className="clcscrlinRBox MainSectionHovered">
            {single.map((user) => (
              <div key={user.id} className="clcboxItemss flex">
                <div className="clcboxIImg">
                  <img src={user.imgs} alt={user.title} />
                </div>
                <div className="clcboxICont">
                  <h3>{user.title}</h3>
                  <p>{user.para}</p>
                  <p className="linkpara">
                    <a href="#">
                      <img
                        src="/images/Live-Images/SubPages/Icons/LinkArrowRightIcon.svg"
                        alt=""
                      />
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="clcSecscrl clcSecscrlTwo bg-[#7d377c] flex">
        <div className="clcscrlCol clcscrlLft relative">
          <div className="clcscrlinLBox sticky top-0">
            <img src="/images/clcscrCoplImg.jpg" alt="" />
            <div className="clcscrLtitle bg-[#672866] relative">
              <h2 className="flex flex-col">
                <small>For </small>A Couple{" "}
              </h2>
              <p>
                When compared to a single person living alone, couples' combined
                spending for housing and groceries sometimes results in a higher
                total cost of living in Chennai.
              </p>
              <div className="boxttlsec"> Couple</div>
            </div>
          </div>
        </div>
        <div className="clcscrlCol clcscrlRight padbtm">
          <div className="clcscrlinRBox">
            {couple.map((user) => (
              <div key={user.id} className="clcboxItemss flex">
                <div className="clcboxIImg">
                  <img src={user.imgs} alt={user.title} />
                </div>
                <div className="clcboxICont">
                  <h3>{user.title}</h3>
                  <p>{user.para}</p>
                  <p className="linkpara">
                    <a href="#">
                      <img
                        src="/images/Live-Images/SubPages/Icons/LinkArrowRightIcon.svg"
                        alt=""
                      />
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="clcSecscrl clcSecscrlThree bg-[#ffffff] flex">
        <div className="clcscrlCol clcscrlLft relative">
          <div className="clcscrlinLBox sticky top-0">
            <img src="/images/clcscrfamilylImg.jpg" alt="" />
            <div className="clcscrLtitle bg-[#672866] relative">
              <h2 className="flex flex-col">
                <small>For</small>A Family{" "}
              </h2>
              <p>
                As they require more space, devour additional meals, and
                sometimes pay more for transportation, families in Chennai
                usually have to pay greater living expenditures.
              </p>
              <div className="boxttlsec"> Family</div>
            </div>
          </div>
        </div>
        <div className="clcscrlCol clcscrlRight padbtm">
          <div className="clcscrlinRBox">
            {family.map((user) => (
              <div key={user.id} className="clcboxItemss flex">
                <div className="clcboxIImg">
                  <img src={user.imgs} alt={user.title} />
                </div>
                <div className="clcboxICont">
                  <h3>{user.title}</h3>
                  <p>{user.para}</p>
                  <p className="linkpara">
                    <a href="#">
                      <img
                        src="/images/Live-Images/SubPages/Icons/LinkArrowRightIcon.svg"
                        alt=""
                      />
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="exploreSldierBg">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="exploreMoreSectionContent">
            <h4>CHENNAI LIFE ESSENTIALS</h4>
            <p>
              Regardless of whether you have chosen Chennai to stay or move from
              one area to another area, Super Chennai will be the best guide to
              explore the essentials. So that you could easily live a lively and
              energetic life in Chennai.
            </p>
          </div>
          <div className="exploreSldierSection">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index} className="ExplorePageSliderImage">
                  <a href={img.link} style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={img.src}
                        alt={`Slide ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                      {/* Gradient Background */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          left: 0,
                          right: 0,
                          height: "160px",
                          background:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                        }}
                      ></div>

                      {/* Title Text */}
                      <div className="titleTextExploreChennai">{img.title}</div>
                    </div>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/*----------------- Social & CTA ----------------*/}
      <div className="AccomodationInstaReel">
        <InstagramReelsMarquee />
      </div>
      <Becameavolunteer />
    </>
  );
}
