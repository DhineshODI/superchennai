import { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";

import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";

export default function Food() {
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
      sectionTitle: "Italian Cuisine",
      sectionDesc:
        "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
      image: "/images/Visit-Images/SubPages/italian-cuisine.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Classic Italian Flavors",
              para: [
                "Experience and indulge in creamy Carbonara and rich Lasagna, alongside iconic Margherita Pizza in Chennai. Find out these classical Italian flavours at,",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Classic-Italian-Flavors.svg",
              link: "/classicItalianFlavors",
            },
          ],
        },
        {
          points: [
            {
              title: "Regional Italian Delights",
              para: [
                "Experience an amazing tastes of regional delights such as fragrant Pesto Genovese and saffron-infused Risotto alla Milanese in chennai at,",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Regional-Italian-Delights.svg",
              link: "/regionalItalianDelights",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Thai Cuisine",
      sectionDesc:
        "All of the dishes, which range from fragrant to vivid Thai flavors, are practically lovingly prepared to please the palate. ",
      image: "/images/Visit-Images/SubPages/thai-cuisine.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Aromatic Thai Curries",
              para: [
                "Experience the balance of green and red Thai curries, infused with coconut milk, herbs, and spices with aromatic flavours. Explore these at,",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Aromatic-Thai-Curries.svg",
              link: "/aromaticThaiCurries",
            },
          ],
        },
        {
          points: [
            {
              title: "Vibrant Thai Street Food",
              para: [
                "As they embody Thailand's dynamic street food culture, savor the crispness of Tom Yum soup, the freshness of Som Tum (papaya salad), and the tang of Pad Thai noodles.",
              ],
              imgs: "/images/Visit-Images/SubPages/Icons/Vibrant-Thai-Street-Food.svg",
              link: "/VibrantThaiStreetFood",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Sri Lankan Cuisine",
      sectionDesc:
        " Discover the spicy and flavorful cuisine in Chennai and indulge in delectable curries, hoppers, kothu roti, and seafood preparations with distinctive spice combinations. ",
      image: "/images/Visit-Images/SubPages/sri-lankan-cuisine.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Spicy Sri Lankan Curries",
              para: [
                "Savor savory chicken curry and spicy fish curry, which are made with coconut milk and aromatic spices to capture the rich tastes of Sri Lanka.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Spicy-Sri-Lankan-Curries.svg",
              link: "/spicySriLankanCurries",
            },
          ],
        },
        {
          points: [
            {
              title: "Sri Lankan Hoppers",
              para: [
                "Discover the crisp bowl-shaped hoppers (appam) and string hoppers (idiappam), which are commonly eaten with curries and sambol, a staple of Sri Lankan cuisine.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Sri-Lankan-Hoppers.svg",
              link: "/sriLankanHoppers",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Malaysian Cuisine",
      sectionDesc:
        "Enjoy foods like laksa, satay, and nasi lemak for a genuinely tasty experience. Try these meals at Chennai without having to travel to Malaysia. ",
      image: "/images/Visit-Images/SubPages/malaysian-cuisine.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Rich Malaysian Noodles",
              para: [
                " Savor the aromatic Laksa (spicy noodle soup) and the delicious Mee Goreng Mamak (Indian-style fried noodles), which highlight Malaysia's many culinary influences.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Rich-Malaysian-Noodles.svg",
              link: "/richMalaysianNoodles",
            },
          ],
        },
        {
          points: [
            {
              title: "Fragrant Malaysian Rice Dishes",
              para: [
                "Experience the delicious Nasi Kandar (steamed rice with a variety of curries) and the fragrant Nasi Lemak (coconut rice with sambal and accompaniments).  ",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Fragrant-Malaysian-Rice-Dishes.svg",
              link: "/fragrantMalaysianRiceDishes",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Mexican Cuisine",
      sectionDesc:
        "Savor authentically made tacos, burritos, enchiladas, and guacamole while adding strong, spicy flavors to your meal.",
      image: "/images/Visit-Images/SubPages/mexican-cuisine.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Zesty Mexican Tacos",
              para: [
                "Relish a range of tacos, a staple of Mexican street cuisine, stuffed with succulent meats, salsa, guacamole, and other fresh toppings.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Zesty-Mexican-Tacos.svg",
              link: "/zestyMexicanTacos",
            },
          ],
        },
        {
          points: [
            {
              title: "Hearty Mexican Burritos",
              para: [
                "Enjoy the comforting blend of rice, beans, cheese, and seasoned meats encased in a warm tortilla—a common and substantial Mexican cuisine.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Hearty-Mexican-Burritos.svg",
              link: "/heartyMexicanBurritos",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Burmese Cuisine",
      sectionDesc:
        "Savor delectable curries, tea leaf salad, and noodle soups like Khao Suey for a fascinating gastronomic journey. In our city, indulge your palate with spicy Burmese cuisine. ",
      image: "/images/Visit-Images/SubPages/burmese-cuisine.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Flavorful Burmese Soups",
              para: [
                "Discover the flavor of two staples of Burmese cuisine: the tart Khao Suey (coconut noodle soup) and the creamy Mohinga (fish noodle soup).  ",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Flavorful-Burmese-Soups.svg",
              link: "/flavorfulBurmeseSoups",
            },
          ],
        },
        {
          points: [
            {
              title: "Aromatic Burmese Curries",
              para: [
                "Taste the distinctive spice combination of Burmese chicken or vegetable curries, which are often milder and different from Indian curries. ",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Aromatic-Burmese-Curries.svg",
              link: "/aromaticBurmeseCurries",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Continental Cuisine",
      sectionDesc:
        "Anticipate pasta dishes with a variety of influences, grilled seafood, and meats. This includes both contemporary and historic European masterpieces.",
      image: "/images/Visit-Images/SubPages/continental-cuisine.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Classic European Dishes",
              para: [
                "Savor well-known dishes like roasted chicken, grilled steaks, and creamy pasta dishes that showcase the variety of Continental cuisine. ",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Classic-European-Dishes.svg",
              link: "/classicEuropeanDishes",
            },
          ],
        },
        {
          points: [
            {
              title: "Global Continental Flavors",
              para: [
                "Experience a varied dining experience by trying meals that draw inspiration from French, Italian, and other European culinary traditions.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Global Continental Flavors.svg",
              link: "/globalContinentalFlavors",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "North Indian Cuisine",
      sectionDesc:
        "Savor the fragrant flavors of North India by indulging in biryanis, tandoori delicacies, creamy curries, and a range of tasty breads. ",
      image: "/images/Visit-Images/SubPages/north-indian-cuisine.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Rich North Indian Curries",
              para: [
                "Savor the famous dishes that embody North India's culinary legacy: fragrant Rogan Josh, savory Dal Makhani, and creamy Butter Chicken.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Rich-North-Indian-Curries.svg",
              link: "/richNorthIndianCurries",
            },
          ],
        },
        {
          points: [
            {
              title: "Tandoori Delights",
              para: [
                "Savor delectable Tandoori Chicken, aromatic Seekh Kebabs, and an assortment of freshly baked Naans—all of which are mainstays of North Indian cooking prepared in a traditional clay oven.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Tandoori-Delights.svg",
              link: "/tandooriDelights",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Japanese Cuisine",
      sectionDesc:
        "Savor the fresh flavors of Japan in Chennai with carefully prepared sushi, sashimi, ramen, and tempura made with premium ingredients. ",
      image: "/images/Visit-Images/SubPages/japanese-cuisine.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Delicate Japanese Sushi",
              para: [
                "Discover the Japanese culinary perfection of sushi and sashimi, which feature freshly caught fish and expertly seasoned rice.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Delicate-Japanese-Sushi.svg",
              link: "/delicateJapaneseSushi",
            },
          ],
        },
        {
          points: [
            {
              title: "Savory Japanese Ramen",
              para: [
                "Savor the traditional Japanese cuisine of noodle soup, which is rich in broth and may be topped with a variety of ingredients such as meat, eggs, and vegetables.  ",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Savory-Japanese-Ramen.svg",
              link: "/savoryJapaneseRamen",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Mediterranean Cuisine",
      sectionDesc:
        "Savor meals made with olive oil, grilled meats and shellfish, fresh salads, and tasty dips that offer wholesome and vivid flavors. ",
      image: "/images/Visit-Images/SubPages/mediterranean-cuisine.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Fresh Mediterranean Salads",
              para: [
                "Savor colorful salads that exemplify the healthful Mediterranean diet, such as Greek salad and fattoush, which are made with fresh vegetables, herbs, feta cheese, and olive oil.",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Fresh-Mediterranean-Salads.svg",
              link: "/freshMediterraneanSalads",
            },
          ],
        },
        {
          points: [
            {
              title: "Grilled Mediterranean Specialties",
              para: [
                "Relish Mediterranean mainstays like hummus and baba ghanoush on the side with grilled meats like souvlaki and kebabs. ",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Grilled-Mediterranean-Specialties.svg",
              link: "/grilledMediterraneanSpecialties",
            },
          ],
        },
        {
          points: [
            {
              title: "Coastal & Regional Specialties",
              para: [
                "Explore the flavours of spicy blends and seafood recipes of south India from the coastal regions in Chennai.  ",
              ],
              imgs: "images/Visit-Images/SubPages/Icons/Grilled-Mediterranean-Specialties.svg",
              link: "/coastalandreginalspecialist",
            },
          ],
        },
      ],
    },
  ];

  const images = [
    {
      src: "images/Visit-Images/SubPages/accomodation-slide.jpg",
      title: "Accomodation",
      link: "/accomodation",
    },
    {
      src: "images/Visit-Images/SubPages/food-slide.jpg",
      title: "Food",
      link: "/food",
    },
    {
      src: "images/Visit-Images/SubPages/places-to-visit-slide.jpg",
      title: "Places to visit",
      link: "/placestovisit",
    },
    {
      src: "images/Visit-Images/SubPages/things-to-do-slide.jpg",
      title: "Things to do ",
      link: "/things-to-do",
    },
    {
      src: "images/Visit-Images/SubPages/itinerary-slide.jpg",
      title: "Itinerary",
      link: "/itinerary",
    },
    {
      src: "images/Visit-Images/SubPages/hidden-gems-slide.jpg",
      title: "Hidden Gems",
      link: "/hidden-gems",
    },
    {
      src: "images/Visit-Images/SubPages/shopping-slide.jpg",
      title: "Shopping",
      link: "/shopping",
    },
    {
      src: "images/Visit-Images/SubPages/travel-tips-slide.jpg",
      title: "Travel Tips",
      link: "/travel-tips",
    },
    {
      src: "images/Visit-Images/SubPages/wellness-slide.jpg",
      title: "Wellness ",
      link: "/wellness",
    },
    {
      src: "images/Visit-Images/SubPages/events-slide.jpg",
      title: "Events ",
      link: "/events",
    },
    {
      src: "images/Visit-Images/SubPages/conferences-slide.jpg",
      title: "Conferences ",
      link: "/conferences",
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
    autoplay: false,
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
          <img src="images/Visit-Images/SubPages/food-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Food </h3>
              <div className="breadCrum">
                <Link to="/visit"> Visit </Link> - <a href="">Food </a>
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
              <p>Visit &nbsp; in Chennai &nbsp; Visit &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Food</h3>
              <p>
                Food means a lot to us. It is an emotion. Chennai was providing
                space to food trucks, small- to medium-sized hotels, and even
                high-end restaurants. Food highlights the city's diverse and
                lively culinary scene, from Chettinad to international flavors.
              </p>
            </div>
          </div>
        </div>

        {/*----------------- Multiple Benefit Sections ----------------*/}
        <div className="foodlistsec">
          {imageSections.map((section, index) => {
            const tenantCount = section.tenantInfoSections?.length ?? 0;
            const parentClass =
              tenantCount % 2 === 0 ? "even-count" : "odd-count";

            return (
              <section
                key={index}
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
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

                <div
                  className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
                >
                  {section.tenantInfoSections.map((tenant, i) => (
                    <div key={i}>
                      {tenant.points.map((item, j) => (
                        <div key={j} className="clcboxItemss flex mb-4">
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.title} />
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            <p>{item.para}</p>
                            <div className="exploreMorebuttonVisitChennai">
                              <Link
                                to={item.link || "#"}
                                className="text-blue-600 hover:underline text-sm font-medium"
                              >
                                Explore More
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/*--------------- Explore More Chennai----------------- */}

          <div className="exploreSldierBg">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="exploreMoreSectionContent">
                <h4>Explore more of Chennai</h4>
                <p>
                  Chennai is a city full of sites where you may go exploring
                  every single day. Explore the city's various hidden treasures
                  based on your current mood.
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
