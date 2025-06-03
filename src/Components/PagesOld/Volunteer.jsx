import { useState, useEffect, useRef } from "react";
import "../Css/Volunteer.css";
import MegaMenu from "../Header";
import HeaderWithMegaMenu from "../ExampleMegamenu";
import Search from "../Search";
import InstagramReelsMarquee from "../SocialChennai";
import Becameavolunteer from "../BecameAVolunteer";

export default function Volunteer() {
  const [scrollDir, setScrollDir] = useState("left");

  const volunteerSections = [
    {
      title: "Digital",
      description:
        "Empowering communities through technology and digital literacy programs. Volunteers help bridge the digital divide by offering training and access to tools.",
      image: "./images/BacameAvolunterImage0.png",
      linkText: "Enquire Now",
      linkUrl: "/digital",
    },
    {
      title: "Education",
      description:
        "Promoting education for all through tutoring, mentorship, and resources. Be a part of shaping young minds and building brighter futures.",
      image: "./images/BacameAvolunterImage1.png",
      linkText: "Enquire Now",
      linkUrl: "/education",
    },
    {
      title: "Health",
      description:
        "Supporting health and wellness with awareness campaigns and aid drives. Join us in making essential healthcare accessible to those in need.",
      image: "./images/BacameAvolunterImage2.png",
      linkText: "Enquire Now",
      linkUrl: "/health",
    },
    {
      title: "Environment",
      description:
        "Working toward a cleaner, greener planet through sustainable initiatives. Your actions can help preserve nature for future generations.",
      image: "./images/BacameAvolunterImage3.png",
      linkText: "Enquire Now",
      linkUrl: "/environment",
    },
    {
      title: "Women Empowerment",
      description:
        "Advocating for women's rights and helping them build sustainable futures. Support equality and uplift communities by enabling women.",
      image: "./images/BacameAvolunterImage4.png",
      linkText: "Enquire Now",
      linkUrl: "/women",
    },
    {
      title: "Youth Development",
      description:
        "Creating programs that inspire and guide the youth to be future leaders. Help nurture talents and open doors for young individuals.",
      image: "./images/BacameAvolunterImage1.png",
      linkText: "Enquire Now",
      linkUrl: "/youth",
    },
    {
      title: "Disaster Relief",
      description:
        "Providing timely aid and rehabilitation to those affected by natural disasters. Be a lifeline when it matters most with your support.",
      image: "./images/BacameAvolunterImage0.png",
      linkText: "Enquire Now",
      linkUrl: "/relief",
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
    <>
      <div className="VolunteerBgSection notHome">
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <div className="VolunteerBannerImage">
              <img src="./images/volunteerBanner.png" alt="" />
            </div>
            <h3 className="voluntterContent">Volunteer</h3>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      <div className="DootedBannerSectionVolunteer">
        <div className="volunteerParaSection container max-w-7xl mx-auto px-4">
          <div
            className={`VolunteeerTextBackground ${
              scrollDir === "right" ? "scroll-right" : "scroll-left"
            }`}
            ref={bgTextRef}
          >
            <p>Volunteer &nbsp; Volunteer &nbsp; Volunteer &nbsp; Volunteer</p>
          </div>
          <div className="volunteerRow">
            <img src="./images/volunteerBannerImagesContent.png" alt="" />
            <div className="volunteeerMainContent">
              <h3>Volunteer</h3>
              <p className="paraZeroVolunteerSection">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="paraoneVolunteerSection">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="paraTwoVolunteerSection">
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="VolunterPageBecameVolunteerBg">
        <div className="VolunteerBecameavolunteer">
          <h3>Became a Volunteer</h3>
          <p>
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolormagna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra
          </p>
        </div>

        <div>
          <div className="container max-w-7xl mx-auto px-4">
            {volunteerSections.map((section, index) => (
              <div className="DigitalSectionFLex" key={index}>
                {index % 2 === 0 ? (
                  <>
                    <img src={section.image} alt={section.title} />
                    <div className="BecamaAVolunterContentsSection">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="exploreVolunteerPage">
                        <a href={section.linkUrl}>{section.linkText}</a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="BecamaAVolunterContentsSection1">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="exploreVolunteerPage1">
                        <a href={section.linkUrl}>{section.linkText}</a>
                      </div>
                    </div>
                    <img src={section.image} alt={section.title} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <InstagramReelsMarquee />
      <Becameavolunteer />
    </>
  );
}
