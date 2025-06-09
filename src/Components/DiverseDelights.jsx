import { useState, useEffect, useRef } from "react";
import "../assets/Css/DivereseDelights.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HoverImageSectionHorizontal() {
  const [activeImage, setActiveImage] = useState(
    "/images/HomePage-Images/Italian.png"
  );
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);
  const [scrollDir, setScrollDir] = useState("left");

  const [fade, setFade] = useState(false);

  const handleHover = (newImage, index) => {
    if (newImage === activeImage && index === activeIndex) return;
    setFade(true);
    setActiveIndex(index);
    setTimeout(() => {
      setActiveImage(newImage);
      setFade(false);
    }, 300);
  };

  const toggleAccordion = (index) => {
    if (activeAccordionIndex === index) {
      setActiveAccordionIndex(null);
    } else {
      setActiveAccordionIndex(index);
    }
  };

  const foodItems = [
    {
      title: "ITALIAN",
      description:
        "A celebration of traditional, hearty recipes and fresh ingredients.",
      imageUrl: "/images/HomePage-Images/Italian.png",
      link: "/menu/italian",
    },
    {
      title: "CHINESE",
      description:
        " Regional styles that are aromatic, flavorful, and umami-rich.",
      // imageUrl: "/images/HomePage-Images/CHINESE.png",
      imageUrl: "/images/HomePage-Images/chineseFoodMenu.png",
      link: "/menu/mexican",
    },
    {
      title: "NORTH INDIAN",
      description:
        "Fragrant - (Aroma or flavor) spice combinations and hearty, savory gravies.",
      imageUrl: "/images/HomePage-Images/North-Indian.png",
      link: "/menu/chinese",
    },
    {
      title: "CONTINENTAL",
      description:
        "Variety of sophisticated and varied European culinary traditions.",
      // imageUrl: "/images/HomePage-Images/FoodImageSection.png",
      imageUrl: "/images/HomePage-Images/Continental.png",
      link: "/menu/indian",
    },
    {
      title: "BURMESE",
      description: "A distinctive fusion of savory, sour, and sweet flavors.",
      // imageUrl: "/images/HomePage-Images/CHINESE.png",
      imageUrl: "/images/HomePage-Images/Burmese.png",
      link: "/menu/thai",
    },
    {
      title: "THAI",
      description:
        "Distinguished by its well-balanced flavors and fragrant herbs and spices.",
      // imageUrl: "/images/HomePage-Images/FoodImageSection.png",
      imageUrl: "/images/HomePage-Images/Thai.png",
      link: "/menu/italian",
    },
    {
      title: "SOUTH INDIAN",
      description: "Offers tangy, spicy, and tasty vegetarian alternatives.",
      imageUrl: "/images/HomePage-Images/South-Indian.png",
      link: "/menu/mexican",
    },
    {
      title: "SRI LANKAN",
      description:
        "Strong and fragrant, with distinct island influences and spice blends.",
      // imageUrl: "/images/HomePage-Images/CHINESE.png",
      imageUrl: "/images/HomePage-Images/Sri-Lankan.png",
      link: "/menu/chinese",
    },
    {
      title: "MALAYSIAN",
      description:
        "Dynamic blend of many culinary traditions that results in multi-layered flavors.",
      // imageUrl: "/images/HomePage-Images/MEEXICAN.png",
      imageUrl: "/images/HomePage-Images/Malaysian.png",
      link: "/menu/indian",
    },
    {
      title: "MEXICAN",
      description: "Renowned for its fresh ingredients and colorful flavors.",
      // imageUrl: "/images/HomePage-Images/CHINESE.png",
      imageUrl: "/images/HomePage-Images/Mexican.png",
      link: "/menu/thai",
    },
  ];

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
    <div className="DiverseDelightsSectionContainer">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="DiverseDelightsTextDiv">
          <h3 className="DiverseDelightsText">Diverse</h3>
          <img src="./images/HomePage-Images/DeliciousFood.png" alt="" />
          <h3 className="DiverseDelightsText">Delights</h3>
        </div>
        <div className="paragarphTextDiverseFood">
          <p>
            Savor a culinary journey that highlights the city's diverse and
            lively culinary scene, from Chettinad to delicate dosas and
            international flavors.
          </p>
        </div>

        {window.innerWidth < 900 ? (
          <div className="accordionContainer">
            {foodItems.map((item, index) => {
              const isOpen = activeAccordionIndex === index;
              return (
                <div
                  key={index}
                  className={`accordionItem ${isOpen ? "activeAccordion" : ""}`}
                >
                  <div
                    className="accordionTitle"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h4>{item.title}</h4>
                    <span className="accordionIcon">{isOpen ? "−" : "+"}</span>
                  </div>
                  <div
                    className={`accordionContent ${isOpen ? "open" : ""}`}
                    style={{
                      maxHeight: isOpen ? "500px" : "0px",
                    }}
                  >
                    <div className="accordionInnerContent">
                      <p>{item.description}</p>
                      <img src={item.imageUrl} alt={item.title} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="FoodSectionDesignContainer">
            <div className="foodSectionFirst">
              {foodItems.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className={`foodSectionConatiner ${
                    activeIndex === index ? "activeDiverseSection" : ""
                  }`}
                  onMouseEnter={() => handleHover(item.imageUrl, index)}
                >
                  <Link to="/food">
                    <h4>{item.title}</h4>
                  </Link>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="foodSectionSecond">
              <img
                className={`dishImage ${fade ? "fade-out" : ""}`}
                src={activeImage}
                alt="Active Dish"
              />
            </div>

            <div className="foodSectionThird">
              {foodItems.slice(5, 10).map((item, index) => {
                const actualIndex = index + 5;
                return (
                  <div
                    key={actualIndex}
                    className={`foodSectionConatiner ${
                      activeIndex === actualIndex ? "activeDiverseSection" : ""
                    }`}
                    onMouseEnter={() => handleHover(item.imageUrl, actualIndex)}
                  >
                    {/* <h4>{item.title}</h4> */}
                    <Link to="/food">
                      <h4>{item.title}</h4>
                    </Link>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div
        className={`DelightPageText ${
          scrollDir === "right" ? "scroll-right" : "DelightPageTextscroll-left"
        }`}
        ref={bgTextRef}
      >
        <p>Foodie &nbsp; Foodie &nbsp; Foodie &nbsp; Foodie</p>
        <p>Fever &nbsp; Fever &nbsp; Fever &nbsp; Fever</p>
      </div>
    </div>
  );
}
