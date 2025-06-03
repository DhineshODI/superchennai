import { useState, useEffect, useRef } from "react";
import "../Css/Work.css";
import MegaMenu from "../Header";
import Search from "../Search";
import InstagramReelsMarquee from "../SocialChennai";
import Becameavolunteer from "../BecameAVolunteer";
import HeaderWithMegaMenu from "../ExampleMegamenu";
export default function Work() {
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
  const items = [
    {
      label: "Employment",
      image: "./images/co-workingspaces-img.jpg?text=Image+1",
      link: "/page1",
    },
    {
      label: "STARTUP",
      image: "images/co-workingspaces-img.jpg?text=Image+2",
      link: "/page2",
    },
    {
      label: "Unicorns",
      image: "images/co-workingspaces-img.jpg?text=Image+3",
      link: "/page3",
    },
    {
      label: "Co-workingspaces",
      image: "images/co-workingspaces-img.jpg?text=Image+2",
      link: "/page4",
    },
    {
      label: "PG",
      image: "images/co-workingspaces-img.jpg?text=Image+2",
      link: "/page5",
    },
    {
      label: "Salaries & Benefits",
      image: "images/co-workingspaces-img.jpg?text=Image+2",
      link: "/page6",
    },
    {
      label: "Career Growth",
      image: "images/co-workingspaces-img.jpg?text=Image+2",
      link: "/page7",
    },
    {
      label: "Networking",
      image: "images/co-workingspaces-img.jpg?text=Image+2",
      link: "/page8",
    },
    {
      label: "Worklife balance",
      image: "images/co-workingspaces-img.jpg?text=Image+2",
      link: "/page9",
    },
  ];
  const [previewSrc, setPreviewSrc] = useState(items[0].image);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timeout);
  }, [previewSrc]);

  return (
    <>
      <div className="WorkBgSection  VolunteerBgSection notHome">
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <div className="VolunteerBannerImage">
              <img src="./images/workBanner.jpg" alt="" />
            </div>
            <h3 className="voluntterContent">Work</h3>
          </div>
        </div>
        {/* <div className="mainMegamenuContainer">
          <HeaderWithMegaMenu />
        </div> */}
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      <div className="workMainContainer">
        <div className="workIntroParaSection container max-w-7xl mx-auto px-4">
          <div
            className={`VolunteeerTextBackground ${
              scrollDir === "right" ? "scroll-right" : "scroll-left"
            }`}
            ref={bgTextRef}
          >
            <p>Work &nbsp; Work &nbsp; Work &nbsp; Work</p>
          </div>
          <div className="workIntro">
            <h3>workBanner</h3>
            <p>
              {" "}
              <strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the i ndustry's standard dummy
                text ever since the
              </strong>{" "}
            </p>
            <p>
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="workImageSection">
        <h4>
          work <br />
          chennai
        </h4>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="workimgIn flex">
            {/* Left: List */}
            <div className="flex-4">
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => {
                      setPreviewSrc(item.image);
                      setHoverIndex(index);
                    }}
                    onMouseLeave={() => setHoverIndex(null)}
                    className={
                      hoverIndex === index ||
                      (hoverIndex === null && index === 0)
                        ? "active"
                        : ""
                    }
                  >
                    <a
                      href={item.link}
                      className={`text-white font-bold text-lg transition-opacity ${
                        hoverIndex === index ||
                        (hoverIndex === null && index === 0)
                          ? "opacity-100"
                          : "opacity-20"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Image */}
            <div className="flex-2 flex items-center justify-center hoverRightimg">
              <img
                src={previewSrc}
                alt="Preview"
                className="hoverRightimg"
                style={{
                  opacity: fade ? 1 : 0,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <InstagramReelsMarquee />
      <Becameavolunteer />
    </>
  );
}
