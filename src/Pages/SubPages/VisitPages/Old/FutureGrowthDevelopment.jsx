import { useState, useRef, useEffect } from "react";
import "../Css/work-detail.css";
import MegaMenu from "../Header";
import MenuBar from "../MenuBar";
import Search from "../Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../SocialChennai";
import Becameavolunteer from "../BecameAVolunteer";

export default function FutureGrowthDevelopment() {
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
      sectionTitleLine1: " Chennai's ",
      sectionTitleLine2: "Third Master Plan (2027–2046)",
      sectionDesc:
        "This long-term strategy targets sustainable and inclusive progress, emphasizing land utilization, infrastructure, economic advancement, and environmental conservation for the Chennai Metropolitan Region. ",
      label: "Third Master Plan",
      image: "/images/clcscrlImg.jpg",
       benefits: [
        {
          id: 1,
          title: "Compact Urban Design",
          para: " The strategy encourages more compact, mixed-use projects to minimize sprawl, enhance walkability, and maximize infrastructure use throughout the metropolitan region. ",
          imgs: "/images/costofliving/AccomodationIcon.svg",
        },
        {
          id: 2,
          title: "Sustainable City Growth",
          para: " Incorporating green infrastructure, renewable energy, and resource efficiency is key to promoting environmentally sustainable and resilient urban development in Chennai. ",
          imgs: "/images/costofliving/GroceriesIcon.svg",
        },
        {
          id: 3,
          title: "Infrastructure Improvement ",
          para: "Major investments in metro growth, roadway systems, and utility infrastructure are designed to boost connectivity, alleviate congestion, and improve living standards. ",
          imgs: "/images/costofliving/GroceriesIcon.svg",
        },
         {
          id:4,
          title: "Participation of Stakeholders",
          para: " The participation of citizens, specialists, and diverse organizations is vital in developing the Third Master Plan and guaranteeing its effective execution. ",
          imgs: "/images/costofliving/GroceriesIcon.svg",
        },
      ],
    },
    {
      sectionTitleLine1: " Expansion of",
      sectionTitleLine2: "Chennai Metro",
      sectionDesc:
        " Comprehensive metro development initiatives seek to improve Chennai's connectivity, with Phase II currently in progress and additional expansions intended to reach wider regions. ",
      label: "Chennai Metro",
      image: "/images/clcscrlImg.jpg",
       benefits: [
        {
          id: 1,
          title: "Stage II",
          para: "Presently in development, Phase II introduces additional lines and stations, greatly enhancing the metro system throughout different areas of the city. ",
          imgs: "/images/costofliving/WorkHoursIcon.svg",
        },
        {
          id: 2,
          title: "Prospective Growth ",
          para: "Additional expansions are intended to link more locations, such as the airport and significant suburban areas, enhancing overall urban transportation. ",
          imgs: "/images/costofliving/UtilitiesIcon.svg",
        },
         
        ],
    },
    {
        sectionTitleLine1: "Parandur",
        sectionTitleLine2: "Greenfield Airstrip",
        sectionDesc:
          " A new greenfield airport is planned near Parandur to accommodate the increasing air traffic of the Chennai Metropolitan Area as an additional hub. ",
        label: "Greenfield Airstrip",
        image: "/images/clcscrlImg.jpg",
        benefits: [
          {
            id: 1,
            title: "Placement",
            para: "The planned airport will be situated close to Parandur in the Kanchipuram district, around 70 kilometers away from the current airport. ",
            imgs: "/images/costofliving/HealthIcon.svg",
          },
          {
            id: 2,
            title: "Ability",
            para: " The newly designed airport is intended to have a considerable capacity for passenger handling to meet the upcoming air travel requirements in the area. ",
            imgs: "/images/costofliving/TimeOffIcon.svg",
          },
          {
            id: 3,
            title: "Connection",
            para: " Enhanced access to the airport is expected via road and metro rail expansions to facilitate smooth travel for travelers. ",
            imgs: "/images/costofliving/TimeOffIcon.svg",
          },
        ],
      },
      {
        sectionTitleLine1: "Chennai ",
        sectionTitleLine2: "Smart City Projects",
        sectionDesc:
          " Several smart city initiatives are being implemented in Chennai, emphasizing technology-based solutions to enhance urban living and promote sustainability.  ",
        label: "Smart City",
        image: "/images/clcscrlImg.jpg",
        benefits: [
          {
            id: 1,
            title: "Intelligent Transportation ",
            para: "Efforts comprise smart traffic control, enhanced public transportation systems, and encouragement of non-motorized transport alternatives. ",
            imgs: "/images/costofliving/HealthIcon.svg",
          },
          {
            id: 2,
            title: "Intelligent Water Administration ",
            para: " Initiatives emphasize effective water allocation, sewage management, and conservation via technological advancements and infrastructure improvements. ",
            imgs: "/images/costofliving/TimeOffIcon.svg",
          },
          {
            id: 3,
            title: "Intelligent Setting ",
            para: " Initiatives seek to expand green areas, enhance waste disposal methods, and encourage sustainable energy consumption throughout the city. ",
            imgs: "/images/costofliving/TimeOffIcon.svg",
          },
        ],
      },
      {
        sectionTitleLine1: "Chennai ",
        sectionTitleLine2: "IT Investment Area (ITIR) ",
        sectionDesc:
          "A proposed mega-region designed to draw investments in IT, electronics production, and associated industries, promoting economic development and job opportunities.  ",
        label: "IT Investment",
        image: "/images/clcscrlImg.jpg",
        benefits: [
          {
            id: 1,
            title: "Region ",
            para: " The suggested ITIR encompasses a vast region to the southwest of Chennai, strategically positioned between the IT corridor and national roads.  ",
            imgs: "/images/costofliving/HealthIcon.svg",
          },
          {
            id: 2,
            title: "Framework ",
            para: "The strategy encompasses major funding for road, rail, and air connections, along with utilities and social infrastructure in the area.  ",
            imgs: "/images/costofliving/TimeOffIcon.svg",
          },
          {
            id: 3,
            title: "Connection",
            para: " Improved connectivity is a primary emphasis, connecting the ITIR with Chennai, major roadways, and possibly a new airport to support commerce and travel.  ",
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
              <h3>Future Growth & Development </h3>
              <div className="breadCrum">
                <a href="">Live</a> - <a href="">Future Growth & Development</a>
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
              Future Growth & Development &nbsp; in Chennai &nbsp; Future Growth & Development  &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>Future Growth & Development</h3>
              <p>
              Chennai's future imagines a dense, eco-friendly urban design with improved infrastructure.
               Main focal points encompass enlarging green areas, enhancing waste management, strengthening
                public transportation, and rehabilitating water bodies, all propelled by active participation
                 from stakeholders for equitable advancement. 


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
