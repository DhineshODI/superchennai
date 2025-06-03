import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/Css/BecameAVolunteer.css";
import { Link } from "react-router-dom";

export default function Becameavolunteer() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/Volunteer-Images/BacameAvolunterImage0.png",
      title: "Digital",
      subtitle:
        "Chennai Needs Your Creativity! Help us paint and design public spaces.",
      description:
        "Utilize your technological expertise to assist Super Chennai. Help with data analysis, site design, or social media to create a virtual influence throughout the city.",
      link: "/volunteer",
    },
    {
      image: "/images/Volunteer-Images/BacameAvolunterImage1.png",
      title: "EVENTS",
      subtitle:
        "Chennai Needs Your Creativity! Help us paint and design public spaces.",
      description:
        "Volunteer to bring colorful designs, murals, and artistic flair to the city. Help make Chennai a canvas of creativity",
      link: "/volunteer",
    },

    {
      image: "/images/Volunteer-Images/BacameAvolunterImage4.png",
      title: "INFLUENCERS",
      subtitle: "Amplify Chennai’s Voice—Inspire Action Through Your Network!",
      description:
        "Make effective use of your platform! Encourage civic involvement within your network and spread the word about Chennai's events and concerns.",
      link: "/volunteer",
    },
    {
      image: "/images/Volunteer-Images/BacameAvolunterImage1.png",
      title: "MENTORS",
      subtitle:
        "Empower Chennai’s Future—Share Your Skills and Inspire Growth!",
      description:
        "Lead and empower the people of Chennai! By sharing your expertise, you can assist Super Chennai in developing both personally and professionally.",
      link: "/volunteer",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="Becameavolunteerbg">
        {/* Running Background Text */}
        <div className="runningTextContainer">
          <p className="runningText">
            BECOME A <br /> VOLUNTEER{" "}
          </p>
        </div>

        <div className="BecameavolunteerContent">
          <h4>BECOME A</h4>
          <h2>Volunteer</h2>
          <h6>
            Change things! Contribute your time and expertise to worthwhile
            causes in Chennai.
          </h6>
        </div>

        <div className="volunteerSlider container max-w-7xl mx-auto px-4">
          <div className="volunteerContainer">
            <div className="volunteerSectionImage">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slides[currentSlide].image}
                  src={slides[currentSlide].image}
                  alt=""
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
            <div className="volunteerSectionContent">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[currentSlide].title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>{slides[currentSlide].title}</h3>
                  <h4>{slides[currentSlide].subtitle}</h4>
                  <p>{slides[currentSlide].description}</p>
                  <div className="linksContainer">
                    <Link
                      to={slides[currentSlide].link}
                      className="exploreMoreLink"
                    >
                      Explore More
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="sliderControlsVolunteer">
                <div className="leftarrowVolunteer" onClick={prevSlide}></div>
                <div className="rightarrowVolunteer" onClick={nextSlide}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
