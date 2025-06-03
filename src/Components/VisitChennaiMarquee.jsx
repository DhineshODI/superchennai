import Marquee from "react-fast-marquee";
import "../assets/Css/SocialChennai.css";
import { useEffect, useState, useRef } from "react";

export default function VisitChennaiMarquee() {
  const reels = [
    {
      thumbnail: "./images/Visit-Images/visit-scroll-img1.jpg",
      link: "https://www.instagram.com/reel/REEL_ID_1/",
    },
    {
        thumbnail: "./images/Visit-Images/visit-scroll-img2.jpg",
      link: "https://www.instagram.com/reel/REEL_ID_2/",
    },
    {
     thumbnail: "./images/Visit-Images/visit-scroll-img3.jpg",
      link: "https://www.instagram.com/reel/REEL_ID_3/",
    },
    {
          thumbnail: "./images/Visit-Images/visit-scroll-img4.jpg",
      link: "https://www.instagram.com/reel/REEL_ID_4/",
    },
    {
       thumbnail: "./images/Visit-Images/visit-scroll-img5.jpg",
      link: "https://www.instagram.com/reel/REEL_ID_5/",
    },
    {
        thumbnail: "./images/Visit-Images/visit-scroll-img1.jpg",
      link: "https://www.instagram.com/reel/REEL_ID_1/",
    },
    {
        thumbnail: "./images/Visit-Images/visit-scroll-img2.jpg",
      link: "https://www.instagram.com/reel/REEL_ID_2/",
    },
    {
     thumbnail: "./images/Visit-Images/visit-scroll-img3.jpg",
      link: "https://www.instagram.com/reel/REEL_ID_3/",
    },
    {
         thumbnail: "./images/Visit-Images/visit-scroll-img4.jpg",
      link: "https://www.instagram.com/reel/REEL_ID_4/",
    },
    {
       thumbnail: "./images/Visit-Images/visit-scroll-img5.jpg",
      link: "https://www.instagram.com/reel/REEL_ID_5/",
    },
  ];
  const [scrollDir, setScrollDir] = useState("left");

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
    <>
      <div className="socialChnennaiMaincontainer">
        {/* <div
          className={`SocialChennairunningTextBackground ${
            scrollDir === "right" ? "scroll-right" : "scroll-left"
          }`}
          ref={bgTextRef}
        >
          <p>
            Super Chennai &nbsp; Super Chennai &nbsp; Super Chennai &nbsp; Super
            Chennai
          </p>
        </div> */}
        {/* <div className="socialChennaiContent">
          <div className="socialChennaiContainer">
            <h4>Social Chennai</h4>
            <p>
              Showcases not just events and lifestyle, but also exclusive
              interviews with entrepreneurs, celebrities, sports personalities,
              and Humans of Chennai.
            </p>
          </div>
        </div> */}
        <div className="reelsMarqueeSection py-6 relative overflow-hidden">
          <div className=""></div>
          <div className=""></div>

          <Marquee pauseOnHover={true} speed={50}>
            {reels.map((reel, index) => (
              <div
                key={index}
                className={`mx-4 ${index % 2 !== 0 ? "mt-18" : "mt-0"}`}
              >
                <a
                  href={reel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={reel.thumbnail}
                    alt="Instagram Reel"
                    className="w-[365px] h-[auto] object-cover"
                  />
                </a>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
}
