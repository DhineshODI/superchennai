import Marquee from "react-fast-marquee";
import "../assets/Css/SocialChennai.css";
import { useEffect, useState, useRef } from "react";

export default function InstagramReelsMarquee() {
  const reels = [
    {
      thumbnail: "/images/HomePage-Images/reelimage1.png",
      link: "https://www.instagram.com/reel/REEL_ID_1/",
    },
    {
      thumbnail: "/images/HomePage-Images/reelimage2.png",
      link: "https://www.instagram.com/reel/REEL_ID_2/",
    },
    {
      thumbnail: "/images/HomePage-Images/reelimage3.png",
      link: "https://www.instagram.com/reel/REEL_ID_3/",
    },
    {
      thumbnail: "/images/HomePage-Images/reelimage4.png",
      link: "https://www.instagram.com/reel/REEL_ID_4/",
    },
    {
      thumbnail: "/images/HomePage-Images/reelimage5.png",
      link: "https://www.instagram.com/reel/REEL_ID_5/",
    },
    {
      thumbnail: "/images/HomePage-Images/reelimage1.png",
      link: "https://www.instagram.com/reel/REEL_ID_1/",
    },
    {
      thumbnail: "/images/HomePage-Images/reelimage2.png",
      link: "https://www.instagram.com/reel/REEL_ID_2/",
    },
    {
      thumbnail: "/images/HomePage-Images/reelimage3.png",
      link: "https://www.instagram.com/reel/REEL_ID_3/",
    },
    {
      thumbnail: "/images/HomePage-Images/reelimage4.png",
      link: "https://www.instagram.com/reel/REEL_ID_4/",
    },
    {
      thumbnail: "/images/HomePage-Images/reelimage5.png",
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
        <div
          className={`SocialChennairunningTextBackground ${
            scrollDir === "right" ? "scroll-right" : "scroll-left"
          }`}
          ref={bgTextRef}
        >
          <p>
            Super Chennai &nbsp; Super Chennai &nbsp; Super Chennai &nbsp; Super
            Chennai
          </p>
        </div>
        <div className="socialChennaiContent">
          <div className="socialChennaiContainer">
            <h4>Social Chennai</h4>
            <p>
              Make connections, participate, and add to Chennai's lively social
              events and community projects.
            </p>
          </div>
        </div>
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
                    className="w-[265px] h-[auto] object-cover mobileSocialWidjet"
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
