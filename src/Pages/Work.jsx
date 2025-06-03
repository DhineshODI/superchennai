import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/Css/Work.css";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import Becameavolunteer from "../Components/BecameAVolunteer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Work() {
  const [previewSrc, setPreviewSrc] = useState(
    "/images/Work-Images/employment.jpg"
  );
  const [hoverIndex, setHoverIndex] = useState(null);
  const [fade, setFade] = useState(true);
  const tooltipRef = useRef(null);

  const items = [
    {
      label: "Employment",
      image: "/images/Work-Images/employment.jpg",
      link: "/employmentbusinesspermits",
    },
    {
      label: "Unicorns",
      image: "/images/Work-Images/unicorns.jpg",
      link: "/unicorn",
    },
    {
      label: "Co-workingspaces",
      image: "/images/Work-Images/co-workingspaces.jpg",
      link: "/coworkingspaces",
    },
    { label: "PG", image: "/images/Work-Images/PG.jpg", link: "/pg" },
    {
      label: "Salaries & Benefits",
      image: "/images/Work-Images/Salaries-and-Benefits.jpg",
      link: "/salariesbenefits",
    },
    {
      label: "Career Growth",
      image: "/images/Work-Images/career growth.jpg",
      link: "/careergrowth",
    },
    {
      label: "Networking",
      image: "/images/Work-Images/Networking.jpg",
      link: "/networking",
    },
    {
      label: "Worklife balance",
      image: "/images/Work-Images/Worklife-balance.jpg",
      link: "/worklifebalance",
    },
  ];

  // Tooltip follows cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (tooltipRef.current) {
        tooltipRef.current.style.top = `${e.clientY + 20}px`;
        tooltipRef.current.style.left = `${e.clientX + 20}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timeout);
  }, [previewSrc]);

  return (
    <>
      {/* Top Banner */}
      <div className="WorkBgSection VolunteerBgSection notHome" data-aos="fade-up" data-aos-delay="200">
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <div className="VolunteerBannerImage">
              <img src="/images/Work-Images/workBanner.jpg" alt="Work banner" />
            </div>
            <h3 className="voluntterContent">Work</h3>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      {/* Intro */}
      <div className="workMainContainer" data-aos="fade-up" data-aos-delay="400">
        <div className="workIntroParaSection container max-w-7xl mx-auto px-4">
          <div className="workIntro">
            <h3>WORK IN CHENNAI</h3>
            <p>
              <strong>
                Many people have found life in Chennai. Many people dream of
                working in Chennai since it offers them self-assurance, freedom,
                and more career options in a variety of fields.
              </strong>
            </p>
            <p>
              Chennai has a vibrant employment market, with both major
              corporations offering competitive packages and up-and-coming
              businesses offering a range of pay grades. Regular industry
              gatherings and networking events help to build relationships.
              Despite its challenges, work-life balance is becoming more and
              more important to many of the city's institutions.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop - Hover Preview */}
      <div className="hidden md:block workImageSection" data-aos="fade-up" data-aos-delay="800">
        <h4>
          work <br />
          chennai
        </h4>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="workimgIn flex">
            <div className="flex-4">
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => {
                      setPreviewSrc(item.image);
                      setHoverIndex(index);
                      if (tooltipRef.current) {
                        tooltipRef.current.style.display = "block";
                      }
                    }}
                    onMouseLeave={() => {
                      setHoverIndex(null);
                      if (tooltipRef.current) {
                        tooltipRef.current.style.display = "none";
                      }
                    }}
                    className={
                      hoverIndex === index ||
                      (hoverIndex === null && index === 0)
                        ? "active"
                        : ""
                    }
                  >
                    <Link
                      to={item.link}
                      className={`text-white font-bold text-lg transition-opacity ${
                        hoverIndex === index ||
                        (hoverIndex === null && index === 0)
                          ? "opacity-100"
                          : "opacity-20"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Tooltip */}
              <span
                ref={tooltipRef}
                id="tooltip"
                className="fixed z-50 bg-black text-white text-xs px-2 py-1 rounded hidden md:block pointer-events-none"
                style={{ transition: "opacity 0.2s ease" }}
              >
                <button>Explore More</button>
              </span>
            </div>

            <div className="flex-2 flex items-center justify-center hoverRightimg">
              <img
                src={previewSrc}
                alt="Category preview"
                className="hoverRightimg"
                style={{ opacity: fade ? 1 : 0, transition: "opacity 0.3s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="block md:hidden my-8 px-4 mobileCardsWorkMainContainer" data-aos="fade-up" data-aos-delay="200">
        <div className="overflow-x-auto flex space-x-4 pb-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 mobileCardsWork"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold text-gray-800 mb-2 CardTitleWork">
                  {item.label}
                </h5>
                <Link
                  to={item.link}
                  className="text-blue-500 hover:underline text-sm CardLinkWork"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <InstagramReelsMarquee />
      <Becameavolunteer />
    </>
  );
}
