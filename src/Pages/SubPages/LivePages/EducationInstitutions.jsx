import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import { Link } from "react-router-dom";

export default function EducationInstitutions() {
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
      sectionTitle: "Newcomers",
      sectionDesc:
        "Chennai offers a wide variety of schooling options with a strong emphasis on academics, extracurriculars, and cultural values. Here’s what newcomers should know",
      image: "/images/Live-Images/SubPages/linguistic.jpg",
      benefits: [
        {
          id: 1,
          title: "Local and Neighborhood Schools",
          para: "Numerous schools in Chennai adhere to the State Board and Matriculation curricula, firmly embedded in the regional educational system. National Uniformity: The CBSE (Central Board of Secondary Education) curriculum is a favored option for families looking for a consistently recognized and uniform educational standard throughout India.",
          imgs: "/images/Live-Images/SubPages/Icons/Local-Language-Emphasis.svg",
        },
        {
          id: 2,
          title: "Wide English-Medium Method",
          para: "Institutions such as Sishya typically provide the ICSE/ISC curriculum, recognized for its English-medium teaching and an extensive variety of subjects.",
          imgs: "/images/Live-Images/SubPages/Icons/National-and-International-Languages.svg",
        },
        {
          id: 3,
          title: "Global Views",
          para: "Esteemed private and overseas institutions, including American International School and The British International School, offer international curricula such as IB (International Baccalaureate) and Cambridge (IGCSE).",
          imgs: "/images/Live-Images/SubPages/Icons/National-and-International-Languages.svg",
        },
      ],
    },
    {
      sectionTitle: "Linguistic Variety in Education",
      sectionDesc:
        "Schools in Chennai provide a range of language choices to serve its diverse linguistic community. ",
      image: "/images/Live-Images/SubPages/linguistic.jpg",
      benefits: [
        {
          id: 1,
          title: "Local Language Emphasis",
          para: "Tamil serves as a main medium of instruction in numerous schools, showcasing the local linguistic culture. ",
          imgs: "/images/Live-Images/SubPages/Icons/Local-Language-Emphasis.svg",
        },
        {
          id: 2,
          title: "National and International Languages",
          para: " Learners frequently get the chance to study Hindi and English, in addition to global languages such as French and Spanish.",
          imgs: "/images/Live-Images/SubPages/Icons/National-and-International-Languages.svg",
        },
      ],
    },
    {
      sectionTitle: "Renowned Educational Institutions",
      sectionDesc:
        "Chennai hosts many reputable school groups and individual schools recognized for their academic achievements.     ",
      image: "/images/Live-Images/SubPages/renowned.jpg",
      benefits: [
        {
          id: 1,
          title: "Notable School Groups",
          para: "Renowned institutions in Chennai's educational landscape consist of the PSBB Group of Schools, Chettinad Vidyashram, and SBOA School & Junior College. ",
          imgs: "/images/Live-Images/SubPages/Icons/Notable-School-Groups.svg",
        },
        {
          id: 2,
          title: "International Schools",
          para: "Establishments such as the American International School and the British International School provide worldwide acknowledged curricula and varied educational settings. ",
          imgs: "/images/Live-Images/SubPages/Icons/International-Schools.svg",
        },
      ],
    },
    {
      sectionTitle: "Mapping Your Higher Education",
      sectionDesc:
        "In addition to schools, Chennai has several top universities that educate students and produce a large number of UG and PG graduates annually.",
      image: "/images/Live-Images/SubPages/mapping.jpg",
      benefits: [
        {
          id: 1,
          title: "A Range of Fields",
          para: "Various colleges and universities, such as VIT, SRM, and Loyola colleges in Chennai, offer programs in a diverse selection of areas, spanning from arts and sciences to engineering and healthcare. ",
          imgs: "/images/Live-Images/SubPages/Icons/A-Range-of-Fields.svg",
        },
        {
          id: 2,
          title: "Selecting Your Specialization",
          para: " Investigate schools recognized for their unique expertise in certain fields to match your professional goals.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Selecting-Your-Specialization.svg",
        },
      ],
    },
    {
      sectionTitle: "Advancing Your Development",
      sectionDesc:
        "If you want to pursue a PhD after completing your postgraduate studies, Chennai also has prestigious universities that could assist you in becoming an expert in that field.",
      image: "/images/Live-Images/SubPages/advancing.jpg",
      benefits: [
        {
          id: 1,
          title: "Prospects for Comprehensive Education",
          para: "  Chennai features establishments focused on advanced studies and innovative research in multiple fields.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Prospects-for-Comprehensive-Education.svg",
        },
        {
          id: 2,
          title: "Participating in Knowledge Development",
          para: "If you're keen on expanding frontiers and uncovering new insights, look into research-oriented universities and institutions.  ",
          imgs: "/images/Live-Images/SubPages/Icons/Participating-in-Knowledge-Development.svg",
        },
      ],
    },
  ];

  const images = [
    {
      src: "/images/Live-Images/Cost-of-living.jpg",
      title: "Cost-of-living",
      link: "/costofliving",
    },
    {
      src: "/images/Live-Images/Residency.jpg",
      title: "Residency",
      link: "/residencypropertyrentbuyinchennai",
    },
    {
      src: "/images/Live-Images/Employment.jpg",
      title: "Employment",
      link: "/employmentinchennai",
    },
    {
      src: "/images/Live-Images/Transportation.jpg",
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
    {
      src: "/images/Live-Images/Educational-Institutions.jpg",
      title: "Eduational Insitiutions",
      link: "/educationinstitutions",
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
          <img
            src="./images/Live-Images/Educational-Institutions-Banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Educational Institutions</h3>
              <div className="breadCrum">
                <Link to="/live"> Live </Link> -{" "}
                <a href="">Educational Institutions </a>
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
              <p>Live &nbsp; in Chennai &nbsp; Live &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Your Educational Journey Starts Here</h3>
              <p>
                Chennai has a wide range of educational possibilities, from
                kindergarten to high school schooling and colleges, from
                undergraduate to doctoral degrees in fields like medicine,
                engineering, business, photography, and the arts and sciences,
                and more, from public to private schools and institutions.
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
                <div
                  className={`clcscrLtitle relative ${
                    index % 2 === 0 ? "bg-[#7d377c]" : "bg-[#672866]"
                  }`}
                >
                  <h2 className="flex flex-col text-white">
                    <small>{section.sectionTitle}</small>
                  </h2>
                  <p>{section.sectionDesc}</p>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <div className="exploreSldierBg">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="exploreMoreSectionContent">
              <h4>CHENNAI LIFE ESSENTIALS</h4>
              <p>
                Regardless of whether you have chosen Chennai to stay or move
                from one area to another area, Super Chennai will be the best
                guide to explore the essentials. So that you could easily live a
                lively and energetic life in Chennai.
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
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "160px",
                            background:
                              "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                          }}
                        ></div>

                        {/* Title Text */}
                        <div className="titleTextExploreChennai">
                          {img.title}
                        </div>
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
      </div>
    </>
  );
}
