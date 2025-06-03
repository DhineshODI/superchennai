import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import MegaMenu from "../../../Components/Header";
import MenuBar from "../../../Components/MenuBar";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { Link } from "react-router-dom";
import SliderWorkPage from "./SliderWorkPage";

export default function WorkLifeBalance() {
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

  const benefitSections = [
    {
      sectionTitleLine1: "For a",
      sectionTitleLine2: "Family Man",
      sectionDesc:
        "Scheduling quality time, using family-friendly facilities, going on family outings, unwinding, and—above all—establishing boundaries between your personal and professional lives are all ways to reconcile work and family.",
      label: "Family Man",
      image: "/images/Work-Images/SubPages/Family-Man.jpg",
      benefits: [
        {
          id: 1,
          title: "Set priorities and make a schedule",
          para: "arrange your family time and activities and make memories to make sure you have time for them even when you have obligations.",
          imgs: "/images/Work-Images/SubPages/Icons/set-priorities.svg",
        },
        {
          id: 2,
          title: "Set Clear limits",
          para: "To safeguard Chennai residents' personal lives, clearly define and convey the limits between work and family time.",
          imgs: "/images/Work-Images/SubPages/Icons/Set-Clear-limits.svg",
        },
      ],
    },
    {
      sectionTitleLine1: " For a ",
      sectionTitleLine2: "Bachelor",
      sectionDesc:
        "Work-life balance is improved for bachelors in Chennai by engaging in personal interests, going to the gym, and spending time with friends whenever feasible.",
      label: "Bachelor",
      image: "/images/Work-Images/SubPages/Bachelor.jpg",
      benefits: [
        {
          id: 1,
          title: "Hobbies and Interests",
          para: "Engaging in hobbies and personal interests outside of work brings relaxation and enjoyment for bachelors in Chennai.",
          imgs: "/images/Work-Images/SubPages/Icons/Hobbies-and-Interests.svg",
        },
        {
          id: 2,
          title: "Social Network",
          para: "For bachelors in Chennai, forming deep bonds with friends and peers provides fun and social support.",
          imgs: "/images/Work-Images/SubPages/Icons/Social-Network.svg",
        },
        {
          id: 2,
          title: "Flexible Work Options",
          para: "Bachelors can enjoy more control over their personal time if flexible work arrangements are available in Chennai.",
          imgs: "/images/Work-Images/SubPages/Icons/Flexible-Work-Options.svg",
        },
      ],
    },
    {
      sectionTitleLine1: "For a",
      sectionTitleLine2: "Spinster",
      sectionDesc:
        "For single women in Chennai, work-life balance entails putting self-care first, creating a community of support, and establishing clear professional boundaries to protect personal time.",
      label: "Spinster",
      image: "/images/Work-Images/SubPages/Spinster.jpg",
      benefits: [
        {
          id: 1,
          title: "Self-Care",
          para: "Giving self-care tasks like hair and skin care, i.e., grooming themselves, a top priority, among many other things.",
          imgs: "/images/Work-Images/SubPages/Icons/Self-Care.svg",
        },
        {
          id: 2,
          title: "Supportive Community",
          para: " Establishing a positive social circle is crucial to achieving emotional well-being.",
          imgs: "/images/Work-Images/SubPages/Icons/Supportive-Community.svg",
        },
        {
          id: 3,
          title: "Personal Time",
          para: " To safeguard their personal time, single people must set clear boundaries regardless of the nature of their employment.",
          imgs: "/images/Work-Images/SubPages/Icons/personal-time.svg",
        },
      ],
    },
  ];

  
  const images = [
    { src: "/images/Work-Images/SubPages/Work-Images/SubPages/employment-slide.jpg", title: "Employment", link: "/employmentbusinesspermits" },
    { src: "/images/Work-Images/SubPages/Work-Images/SubPages/unicorns-slide.jpg", title: "Unicorns", link: "/unicorn" },
    { src: "/images/Work-Images/SubPages/Work-Images/SubPages/co-workingspaces-slide.jpg", title: "Co-workingspaces", link: "/coworkingspaces" },
    { src: "/images/Work-Images/SubPages/Work-Images/SubPages/PG-slide.jpg", title: "PG", link: "/pg" },
    { src: "/images/Work-Images/SubPages/Work-Images/SubPages/Salaries-Benefits-slide.jpg", title: "Salaries & Benefits", link: "/salariesbenefits" },
    { src: "/images/Work-Images/SubPages/Work-Images/SubPages/career-growth-slide.jpg", title: "Career Growth", link: "/careergrowth" },
    { src: "/images/Work-Images/SubPages/Work-Images/SubPages/Networking-slide.jpg", title: "Networking", link: "/networking" },
    { src: "/images/Work-Images/SubPages/Work-Images/SubPages/Worklife-balance-slide.jpg", title: "Worklife balance", link: "/worklifebalance" },
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
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="/images/Work-Images/SubPages/Worklife-balance.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Work-Life Balance </h3>
              <div className="breadCrum">
                 <Link to="/work"> Work </Link> - <a href="">Work-Life Balance</a>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------- Intro Section ----------------*/}
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
              <p>
                Work-Life Balance &nbsp; in Chennai &nbsp; Work-Life Balance
                &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>Work-Life Balance</h3>
              <p>
                In Chennai, striking a work-life balance can be challenging.
                However, you may work on it in peace if you've learned how to
                handle it. Setting limits and making time a priority will be
                crucial for family folks. Hobbies and social connections will
                help bacheolors and spinsters unwind. Everyone should prioritize
                their well-being in order to succeed both personally and
                professionally.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}
        {benefitSections.map((section, index) => (
           <section
            className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#7d377d] colorbgsec"} 
    ${
      index % 3 === 0
        ? "pattern-a"
        : index % 3 === 1
        ? "pattern-b"
        : "pattern-c"
    }`}
            key={index}
          >
            <div className="clcscrlCol clcscrlLft relative">
              <div className="clcscrlinLBox sticky top-0">
                <img src={section.image} alt={section.sectionTitle} />
                <div className="clcscrLtitle bg-[#682865] relative">
                  <h2 className="flex flex-col text-white">
                    <small>{section.sectionTitleLine1}</small>
                    {section.sectionTitleLine2}
                  </h2>
                  <p>{section.sectionDesc}</p>
                  <div className="boxttlsec">{section.label}</div>
                </div>
              </div>
            </div>
            <div className="clcscrlCol clcscrlRight padbtm">
              <div className="clcscrlinRBox MainSectionHovered">
                {section.benefits.map((item) => (
                  <div key={item.id} className="clcboxItemss flex">
                    <div className="clcboxIImg">
                      <img src={item.imgs} alt={item.title} />
                    </div>
                    <div className="clcboxICont">
                      <h3>{item.title}</h3>
                      <p>{item.para}</p>
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
        ))}

          <SliderWorkPage />

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
