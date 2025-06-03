import { useRef, useState, useEffect , useMemo} from "react";
import { motion } from "framer-motion";
import "../assets/Css/ChennaiChillZone.css";
import { link } from "framer-motion/client";
import { Link, useNavigate } from "react-router-dom";

const cards = [
  {
    title: "Artists' Villages",
    description:
      "Explore distinctive neighborhoods where gifted artists reside and display their most recent creations.",
    image: "/images/HomePage-Images/Chillout/artists-villages.jpg",
    link: "/placestovisit",
  },
  {
    title: "Botanical Gardens",
    description:
      "In exquisitely designed urban oasis, discover peace amid a variety of plants and luxuriant foliage.",
    image: "/images/HomePage-Images/Chillout/botanical.jpg",
    link: "/placestovisit",
  },
  {
    title: "Cultural",
    description:
      "Take in the mesmerizing performances of traditional art, which preserve India's rich cultural heritage.",
    image: "/images/HomePage-Images/Chillout/cultural.jpg",
    link: "/placestovisit",
  },
  {
    title: "Modern Malls",
    description:
      "Enjoy a variety of culinary options, entertainment, and retail therapy at the city's modern centers.",
    image: "/images/HomePage-Images/Chillout/modern-malls.jpg",
    link: "/placestovisit",
  },
  {
    title: "Urban Beaches",
    description:
      "Take in the vibrant ambiance, stroll along the lengthy beach, and see the busy local life.",
    image: "/images/HomePage-Images/Chillout/urban-beaches.jpg",
    link: "/placestovisit",
  },
 
  
];

export default function CardCarousel() {
  const navigate = useNavigate();
  const carouselRef = useRef();
  const [x, setX] = useState(0);

  const [cardWidth, setCardWidth] = useState(
    window.innerWidth < 768 ? window.innerWidth : 320
  );

  const maxX = -(cards.length - 1) * cardWidth;

  const slide = (direction) => {
    if (direction === "left") {
      setX((prev) => Math.min(prev + cardWidth, 0));
    } else if (direction === "right") {
      setX((prev) => Math.max(prev - cardWidth, maxX));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const newWidth = isMobile ? window.innerWidth : 320;
      setCardWidth(newWidth);
      setX(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);





  return (
    <div className="chillZoneMainContainer">
      <div className="carousel-section-container">
        <div className="chillZonecarousel-static-content">
          <h2>Chennai's</h2>
          <h3>ChillOUt Zone</h3>
          <p>
            Get away from the hustle and bustle of the city in peaceful areas.
            Find serene parks, and peaceful nooks that are ideal for resting and
            reviving your mind.
          </p>
          <div className="chillZonecarousel-buttons DesktopButtons">
            <button
              className="chilloutZoneButtonsleft"
              onClick={() => slide("left")}
            ></button>
            <button
              className="chilloutZoneButtonsRight"
              onClick={() => slide("right")}
            ></button>
          </div>
        </div>

        <div className="chillZonecarousel-container">
          <motion.div
            ref={carouselRef}
            className="carousel-track"
            drag="x"
            dragConstraints={{ left: maxX, right: 0 }}
            animate={{ x }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {cards.map((card, idx) => (
              <motion.div
                onClick={() => navigate("/placestovisit")}
                className="chillZoneImageCard cursor-pointer"
                key={idx}
                style={{ width: `${cardWidth}px` }}
              >
                <img
                  className="chillZoneImage"
                  src={card.image}
                  alt={card.title}
                />
                <div className="chillzoneContentSection">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="chillZonecarousel-buttons">
            <button
              className="chilloutZoneButtonsleft"
              onClick={() => slide("left")}
            ></button>
            <button
              className="chilloutZoneButtonsRight"
              onClick={() => slide("right")}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
