import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import SliderWorkPage from "./SliderWorkPage";

export default function EmploymentBusinessPermits() {
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

  const imageSections = [
    {
      sectionTitle: "Types of Permits Available",
      sectionDesc:
        "Various authorizations provide visas and passports in the Chennai area to help locals reach foreign countries.",
      image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Employment Permits",
              desc: "Some locals could travel to foreign countries for employment, and they need this.", // <-- NEW FIELD
              para: [
                <>
                  <strong>Employment Visa: </strong> Individuals seeking
                  employment in other countries could apply for this.
                </>,
                <>
                  <strong> Intern Visa:</strong> If a fresher wants to work as
                  an intern in Chennai from other countries, they need this, and
                  they can apply for this.
                </>,
                <>
                  <strong> Research Visa:</strong> Permits foreign scholars and
                  researchers to conduct academic work in Chennai.
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Business Permits",
              desc: "Licenses and business permits are necessary for running a business in Chennai by other regions.", // <-- NEW FIELD
              para: [
                <>
                  <strong>Trade License: </strong> A person who is involved in
                  trading within the Chennai area must obtain this.
                </>,
                <>
                  <strong> Shops and Establishment License:</strong> Commercial
                  shops in the Chennai area have to be owned by the shop owner.
                </>,
                <>
                  <strong> FSSAI License:</strong> Food product sellers such as
                  grocery shop owners and restaurant owners need this.
                </>,
                <>
                  <strong> GST Registration:</strong> This is needed to collect
                  GST from the customers if you reach a specific turnover.
                </>,

                <>
                  <strong> Import/Export Code (IEC):</strong> A prerequisite for
                  businesses involved in international trade activities to and
                  from Chennai.
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Business-Permits.svg",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Application Process and Requirements",
      sectionDesc:
        "To apply for an Indian visa, TN labor, Chennai corporation, or the central government, online portals are always open. One can submit the passport, job proof, address, and business details.",
      image:
        "/images/Work-Images/SubPages/Application-Process-and-Requirements.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "For Employment Visa (Foreigners)",
              desc: "An international worker can work in Chennai by accessing this.", // <-- NEW FIELD
              para: [
                <>
                  <strong>Apply online: </strong> You can submit your details
                  and apply at the Indian visa portal online in your designated
                  region.
                </>,
                <>
                  <strong> Submit:</strong> To get your work done, you must
                  submit the required documents.
                  <br />
                  <small>
                    {" "}
                    <strong>Valid passport:</strong> This is the main document
                    to travel internationally.{" "}
                  </small>
                  <br />
                  <small>
                    {" "}
                    <strong>
                      Proof of employment or a contract from an Indian company:
                    </strong>{" "}
                    It is an official document to work.{" "}
                  </small>
                  <br />
                  <small>
                    {" "}
                    <strong>Company registration certificate:</strong> evidence
                    of the Indian employer’s legal standing.{" "}
                  </small>
                  <br />
                  <small>
                    {" "}
                    <strong>Financial documents of employer:</strong>{" "}
                    Information demonstrating the employer's financial capacity.{" "}
                  </small>
                </>,
                <>
                  Visit the Indian embassy/consulate in your country to complete
                  the process. Here the personal verification will be undertaken
                  diplomatically.
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Employment-Visa.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "For Business Licenses (Local or Foreign-Owned)",
              desc: "It is a general procedure to be undergone before starting a business. ", // <-- NEW FIELD
              para: [
                <>
                  <strong>Trade License (GCC): </strong> A person who is
                  involved in trading in the Chennai area should obtain this.
                </>,
                <>
                  <strong>
                    {" "}
                    Apply online at the Chennai Corporation website:
                  </strong>{" "}
                  one can apply for this via the online portal that is owned by
                  Chennai Corporation.
                </>,
                <>
                  <strong>
                    {" "}
                    Submit necessary documents to support your application.
                  </strong>{" "}
                  This is needed to collect GST from the customers if you reach
                  a specific turnover.
                </>,

                <>
                  <strong> Import/Export Code (IEC):</strong> A prerequisite for
                  businesses involved in international trade activities to and
                  from Chennai.
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Business-Licenses-1.svg",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Renewing or Transferring Your Permits",
      sectionDesc:
        "Having an expired license, such as a trade, FSSAI, or GCC certificate, will fine you. So renew it as soon as the present one expires. And also if you relocate your location, it has to be updated in the certificates",
      image:
        "/images/Work-Images/SubPages/Renewing-or-Transferring-Your-Permits.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Renewal",
              desc: "Renewal of documents will lead to running your business without interruption and avoiding fines.", // <-- NEW FIELD
              para: [
                <>
                  Most licenses (trade, FSSAI, GST) have a validity of 1–5
                  years.
                </>,
                <>
                  Apply for renewal before expiry to avoid penalties and ensure
                  uninterrupted operation.
                </>,
                <>
                  You can use the same portals that you have used to apply
                  before.
                </>,
                <>
                  Provide updated documents, if needed (rent agreements, proof
                  of continued business, etc.), to check the current status.
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/Renewal.svg",
            },
          ],
        },
        {
          points: [
            {
              title: "Transfer of Permits",
              desc: " If you transfer to a new location or if the owner has changed, it has to be updated.", // <-- NEW FIELD
              para: [
                <>
                  When changing ownership or location, some permits may require
                  fresh applications, while others may be transferred.
                  <br />
                  <small>
                    <strong>Trade License</strong> File for a change in business
                    ownership or location with GCC, adhering to their specific
                    procedures.
                  </small>
                  <br />
                  <small>
                    <strong> GST </strong> File for amendment in core fields on
                    the GST portal to reflect the changes.
                  </small>
                  <br />
                  <small>
                    {" "}
                    <strong>FSSAI</strong> Apply for modification or transfer of
                    license depending on the structure change, following FSSAI
                    guidelines.
                  </small>
                </>,
                <>
                  Provide essential documents for the transfer process.
                  <br />
                  <small>
                    {" "}
                    <strong>New ownership documents</strong> legal proof of the
                    change in ownership.
                  </small>
                  <br />
                  <small>
                    {" "}
                    <strong>NOC from old owner (if applicable)</strong> A No
                    Objection Certificate from the previous owner, if required.
                  </small>
                  <br />
                  <small>
                    {" "}
                    <strong>Updated business details</strong> Revised
                    information reflecting the new ownership or location.
                  </small>
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/transfer-of-permits.svg",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "For Employment (Foreign Nationals)",
      sectionDesc:
        "Streamlined Work Authorization For internationally trained professionals looking for a job in Chennai, an employment visa is necessary. Available from Indian embassies overseas with a valid employment offer. To complete your stay, you must register with the Foreigners Regional Registration Office (FRRO) upon arrival.",
      image:
        "/images/Work-Images/SubPages/For-Employment-Foreign-Nationals.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title:
                "For Business (All Residents): Essential Commercial Authorizations",
              desc: "You’ll typically need the following to operate legally:", // <-- NEW FIELD
              para: [
                <>
                  <strong>Trade License:</strong> A fundamental permit from the
                  Greater Chennai Corporation (GCC) for engaging in any form of
                  commercial activity within the city limits.
                </>,
                <>
                  <strong> Shops & Establishments Registration:</strong> A
                  mandatory registration under Tamil Nadu law for all types of
                  businesses and workplaces operating within the state.
                </>,
                <>
                  <strong>GST Registration</strong> Necessary for businesses
                  exceeding the threshold to ensure compliance with the Goods
                  and Services Tax regulations.
                </>,
                <>
                  <strong> FSSAI License </strong> A crucial license required
                  for any business involved in the handling, processing, or sale
                  of food items to ensure safety and standards.
                </>,
              ],
              imgs: "/images/Work-Images/SubPages/Icons/For-Business-All-Residents.svg",
            },
          ],
        },
      ],
    },
  ];

  const images = [
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/employment-slide.jpg",
      title: "Employment",
      link: "/employmentbusinesspermits",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/unicorns-slide.jpg",
      title: "Unicorns",
      link: "/unicorn",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/co-workingspaces-slide.jpg",
      title: "Co-workingspaces",
      link: "/coworkingspaces",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/PG-slide.jpg",
      title: "PG",
      link: "/pg",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/Salaries-Benefits-slide.jpg",
      title: "Salaries & Benefits",
      link: "/salariesbenefits",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/career-growth-slide.jpg",
      title: "Career Growth",
      link: "/careergrowth",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/Networking-slide.jpg",
      title: "Networking",
      link: "/networking",
    },
    {
      src: "/images/Work-Images/SubPages/Work-Images/SubPages/Worklife-balance-slide.jpg",
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
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="./images/Work-Images/SubPages/employment.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Employment/Business Permits </h3>
              <div className="breadCrum">
                <Link to="/work"> Work </Link> -
                <a href="">Employment/Business Permits </a>
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
              <p>Work &nbsp; in Chennai &nbsp; Work &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Employment/Business Permits in Chennai</h3>
              <p>
                One must obtain the proper permissions to work or perform
                business in Chennai. And applying for a visa for working or
                studying in foreign countries is also necessary. You can apply
                and obtain it in Chennai at specific offices. To work lawfully
                within the city, the documents that are needed are listed below:
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}

        {imageSections.map((section, index) => (
          <section
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${
      index % 3 === 0
        ? "pattern-a"
        : index % 3 === 1
        ? "pattern-b"
        : "pattern-c"
    }`}
            key={index}
          >
            <div className="imgLeft">
              <img src={section.image} alt={section.sectionTitle} />
            </div>
            <div className="imgText flex items-center">
              <div className="imgcolTitle bg-[#682865] relative">
                <h2 className="flex flex-col text-white">
                  <small>{section.sectionTitle}</small>
                </h2>
                <p>{section.sectionDesc}</p>
              </div>
            </div>

            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              {section.tenantInfoSections.map((tenant, i) => (
                <div key={i}>
                  <h4 className="text-lg font-semibold mb-4">{tenant.title}</h4>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4">
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3>{item.title}</h3>
                        <h5>{item.desc}</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {item.para.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
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
