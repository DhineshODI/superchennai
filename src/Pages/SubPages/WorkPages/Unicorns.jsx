import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import SliderWorkPage from "./SliderWorkPage";

export default function Unicorns() {
  const [scrollDir, setScrollDir] = useState("left");

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const users = [
    {
      id: 1,
      title: "Tech firms",
      para: " Chennai is home to an increasing number of tech businesses that exhibit significant innovation and scalability in fields like finance, AI, and SaaS.",
      imgs: "/images/Work-Images/SubPages/Icons/Tech-firms.svg",
    },
    {
      id: 2,
      title: "Manufacturing Innovations",
      para: " Chennai-based businesses that use cutting-edge deep tech and manufacturing technologies offer distinctive unicorn potential. ",
      imgs: "/images/Work-Images/SubPages/Icons/Manufacturing-Innovations.svg",
    },
    {
      id: 3,
      title: "Businesses",
      para: "Chennai's customer base fosters e-commerce, ed-tech, and healthcare businesses that have room to develop quickly.",
      imgs: "/images/Work-Images/SubPages/Icons/Businesses.svg",
    },
  ];

  const images = [
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/Work-Images/SubPages/employment-slide.jpg",
      title: "Employment",
      link: "/employmentbusinesspermits",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/Work-Images/SubPages/unicorns-slide.jpg",
      title: "Unicorns",
      link: "/unicorn",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/Work-Images/SubPages/co-workingspaces-slide.jpg",
      title: "Co-workingspaces",
      link: "/coworkingspaces",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/Work-Images/SubPages/PG-slide.jpg",
      title: "PG",
      link: "/pg",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/Work-Images/SubPages/Salaries-Benefits-slide.jpg",
      title: "Salaries & Benefits",
      link: "/salariesbenefits",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/Work-Images/SubPages/career-growth-slide.jpg",
      title: "Career Growth",
      link: "/careergrowth",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/Work-Images/SubPages/Networking-slide.jpg",
      title: "Networking",
      link: "/networking",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/Work-Images/SubPages/Worklife-balance-slide.jpg",
      title: "Worklife balance",
      link: "/worklifebalance",
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
      <div>
        {/*----------------Accodimation-Banner----------- */}

        <div className="accaodomationBannerSection">
          <div>
            <img src="/images/Work-Images/SubPages/unicorns.jpg" alt="" />
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Unicorns </h3>
              <div className="breadCrum">
                <Link to="/work"> Work </Link> - <a href="">Unicorns </a>{" "}
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------Accodimation-Banner----------- */}

        <div className="visitIntroParaSection detailIntro">
          <div className=" container max-w-7xl mx-auto px-4">
            <div
              className={`CostOflivingBackground ${
                scrollDir === "right"
                  ? "scroll-rightCostofLiving"
                  : "scroll-leftCostofLiving"
              }`}
              ref={bgTextRef}
            >
              <p>
                Unicorns &nbsp; in Chennai &nbsp; Unicorns &nbsp; in Chennai
              </p>
            </div>

            <div className="workIntro">
              <h3>Unicorns </h3>
              <p>
                The startup scene in Chennai is steadily creating unicorns. The
                foundation for upcoming international corporations in Chennai is
                being laid by the city's robust, skilled workforce, extensive
                industry expertise, and growing investor interest.
              </p>
            </div>
          </div>
        </div>

        <section className="clcSecscrl flex">
          <div className="clcscrlCol clcscrlLft relative">
            <div className="clcscrlinLBox sticky top-0">
              <img
                src="/images/Work-Images/SubPages/Possible-Unicorns.jpg"
                alt=""
              />
              <div className="clcscrLtitle bg-[#7d377c] relative">
                <h2 className="flex flex-col">
                  <small> Possible </small> Unicorns{" "}
                </h2>
                <p>
                  {" "}
                  Chenani holds promise for the diverse startup landscape,
                  exhibiting rapid growth across several areas, suggesting the
                  potential for unicorns in this urban area in the future.
                </p>
              </div>
            </div>
          </div>
          <div className="clcscrlCol clcscrlRight padbtm">
            <div className="clcscrlinRBox MainSectionHovered">
              {users.map((user) => (
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
                          src="/images/Work-Images/SubPages/LinkArrowRightIcon.svg"
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

        {/*--------------- Hotels-Chennai----------------- */}

          <SliderWorkPage />

        {/*--------------- Explore More Chennai----------------- */}

        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>

        <Becameavolunteer />
      </div>
    </>
  );
}
