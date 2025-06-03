import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import MegaMenu from "../../../Components/Header";
import MenuBar from "../../../Components/MenuBar";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function CareerGrowth() {
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
      sectionTitleLine1: " Information ",
      sectionTitleLine2: "Technology (IT)",
      sectionDesc:
        "By raising salaries via skill development, IT has helped professionals go from entry-level to higher-level positions and progressively boost their financial growth.",
      label: "Information Technology ",
      image: "/images/clcscrlImg.jpg",
       benefits: [
        {
          id: 1,
          title: "Skill Development",
          para: "Professionals should acquire and improve their knowledge in artificial intelligence (AI), cloud computing, digital marketing, cybersecurity, and many other areas in order to remain competitive.",
          imgs: "/images/costofliving/AccomodationIcon.svg",
        },
        {
          id: 2,
          title: "Opportunities",
          para: "Emerging industries like IoT, blockchain development, web development, machine learning, etc., have a number of opportunities thanks to IT sectors.",
          imgs: "/images/costofliving/GroceriesIcon.svg",
        },
        {
          id: 3,
          title: "Leadership Roles",
          para: "With their knowledge and abilities, seasoned professionals will advance to leadership positions like project manager, senior manager, and team leader.",
          imgs: "/images/costofliving/GroceriesIcon.svg",
        },
      ],
    },
    {
      sectionTitleLine1: " Non-IT  ",
      sectionTitleLine2: "Sectors",
      sectionDesc:
        "Core industries, manufacturing and services with government skill assistance, and developing technology are examples of non-IT sectors.",
      label: "Non-IT Sectors",
      image: "/images/clcscrlImg.jpg",
       benefits: [
        {
          id: 1,
          title: "Core Industries",
          para: "Government-initiated programs that call for technical expertise with machines and hands-on experience with them frequently help core industries.",
          imgs: "/images/costofliving/WorkHoursIcon.svg",
        },
        {
          id: 2,
          title: "Skill Requirements and Career Ladders",
          para: "To advance in your core career, you must have certain abilities and certifications in the field you work in. These will help you advance along clearly defined career routes.",
          imgs: "/images/costofliving/UtilitiesIcon.svg",
        },
        {
            id: 3,
            title: "Automation",
            para: " Automation has an impact on career advancement by changing job functions and necessitating that employees adjust to new domain skills. ",
            imgs: "/images/costofliving/UtilitiesIcon.svg",
          },
        ],
    },
    {
        sectionTitleLine1: "Other Non-IT ",
        sectionTitleLine2: "Sectors",
        sectionDesc:
          " Chennai's many non-IT industries, including retail, healthcare, education, and finance, provide a range of employment paths.",
        label: "Other Non-IT Sectors",
        image: "/images/clcscrlImg.jpg",
        benefits: [
          {
            id: 1,
            title: "Professional Paths",
            para: " A person must have a certain level of education and experience in order to advance to the next higher job in their professional path.",
            imgs: "/images/costofliving/HealthIcon.svg",
          },
          {
            id: 2,
            title: "Required Qualifications",
            para: " The advancement is determined by your industry-specific soft skills, technical expertise, and pertinent credentials.",
            imgs: "/images/costofliving/TimeOffIcon.svg",
          },
          {
            id: 3,
            title: "Technology and Digitalization",
            para: " Even in non-IT industries, employers are requesting digital literacy and tech-related abilities due to the rapid advancement of technology.",
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
          <img src="./images/cowrking-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Career Growth </h3>
              <div className="breadCrum">
                <a href="">Work</a> - <a href="">Career Growth</a>
              </div>
            </div>
          </div>
          {/* <MegaMenu /> */}
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
              Career Growth &nbsp; in Chennai &nbsp; Career Growth  &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>Career Growth</h3>
              <p>
              Chennai offers a wide range of employment options in core, non-core, and IT industries.
               Strategic career planning, adoption of innovative technology, and ongoing upskilling 
               could give rise to a wealth of professional progression prospects. Technological 
               developments and governmental regulations further stimulated the profession.

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
