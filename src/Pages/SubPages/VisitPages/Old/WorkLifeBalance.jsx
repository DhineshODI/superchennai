import { useState, useRef, useEffect } from "react";
import "../Css/work-detail.css";
import MegaMenu from "../Header";
import MenuBar from "../MenuBar";
import Search from "../Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../SocialChennai";
import Becameavolunteer from "../BecameAVolunteer";

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
      image: "/images/clcscrlImg.jpg",
       benefits: [
        {
          id: 1,
          title: "Set priorities and make a schedule",
          para: "arrange your family time and activities and make memories to make sure you have time for them even when you have obligations.",
          imgs: "/images/costofliving/AccomodationIcon.svg",
        },
        {
          id: 2,
          title: "Set Clear limits",
          para: "To safeguard Chennai residents' personal lives, clearly define and convey the limits between work and family time.",
          imgs: "/images/costofliving/GroceriesIcon.svg",
        },
      ],
    },
    {
      sectionTitleLine1: " For a ",
      sectionTitleLine2: "Bachelor",
      sectionDesc:
        "Work-life balance is improved for bachelors in Chennai by engaging in personal interests, going to the gym, and spending time with friends whenever feasible.",
      label: "Bachelor",
      image: "/images/clcscrlImg.jpg",
       benefits: [
        {
          id: 1,
          title: "Hobbies and Interests",
          para: "Work-from-home and flexible schedules are now common...",
          imgs: "/images/costofliving/WorkHoursIcon.svg",
        },
        {
          id: 2,
          title: "Social Network",
          para: "For bachelors in Chennai, forming deep bonds with friends and peers provides fun and social support.",
          imgs: "/images/costofliving/UtilitiesIcon.svg",
        },
        {
            id: 2,
            title: "Flexible Work Options",
            para: "Bachelors can enjoy more control over their personal time if flexible work arrangements are available in Chennai.",
            imgs: "/images/costofliving/UtilitiesIcon.svg",
          },
       ],
    },
    {
        sectionTitleLine1: "For a",
        sectionTitleLine2: "Spinster",
        sectionDesc:
          "For single women in Chennai, work-life balance entails putting self-care first, creating a community of support, and establishing clear professional boundaries to protect personal time.",
        label: "Spinster",
        image: "/images/clcscrlImg.jpg",
        benefits: [
          {
            id: 1,
            title: "Self-Care",
            para: "Giving self-care tasks like hair and skin care, i.e., grooming themselves, a top priority, among many other things.",
            imgs: "/images/costofliving/HealthIcon.svg",
          },
          {
            id: 2,
            title: "Supportive Community",
            para: " Establishing a positive social circle is crucial to achieving emotional well-being.",
            imgs: "/images/costofliving/TimeOffIcon.svg",
          },
          {
            id: 3,
            title: "Personal Time",
            para: " To safeguard their personal time, single people must set clear boundaries regardless of the nature of their employment.",
            imgs: "/images/costofliving/TimeOffIcon.svg",
          },
        ],
      },
  ];

  return (
    <>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="./images/workdetail/cowrking-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Work-Life Balance  </h3>
              <div className="breadCrum">
                <a href="">Work</a> - <a href="">Work-Life Balance</a>
              </div>
            </div>
          </div>
          <MegaMenu />
          <Search />
        </div>

        {/*----------------- Intro Section ----------------*/}
        <div className="visitIntroParaSection">
          <div className="container max-w-7xl mx-auto px-4">
            <div
              className={`workdetailTextBackground ${
                scrollDir === "right"
                  ? "scroll-rightAccomodation"
                  : "scroll-leftAccomodation"
              }`}
              ref={bgTextRef}
            >
              <p>
              Work-Life Balance &nbsp; in Chennai &nbsp; Work-Life Balance  &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>Work-Life Balance</h3>
              <p>
              In Chennai, striking a work-life balance can be challenging. However, you may work on it in
               peace if you've learned how to handle it. Setting limits and making time a priority will be
                crucial for family folks. Hobbies and social connections will help bacheolors and spinsters
                 unwind. Everyone should prioritize their well-being in order to succeed both 
                 personally and professionally.

              </p>
            </div>
          </div>
        </div>

         

        {/*----------------- Multiple Benefit Sections ----------------*/}
        {benefitSections.map((section, index) => (
        <section
        className={`clcSecscrl flex transition-colors duration-300 ${
          index % 2 === 0 ? "bg-white" : "bg-[#7d377d]"
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
              <div className="clcscrlinRBox">
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
                            src="/images/costofliving/LinkArrowRightIcon.svg"
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

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
