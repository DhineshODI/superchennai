import { useState, useRef, useEffect } from "react";
import "../assets/Css/Innovate.css";
import Search from "../Components/Search";
import Slider from "react-slick";
import InnovateSlider from "../Components/InnovateSldier";
import InstagramReelsMarquee from "../Components/SocialChennai";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Innovate() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        className="VolunteerBgSection InnovateBgSection notHome"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <div className="VolunteerBannerImage">
              <img
                src="./images/Innovate-Images/InnovateHeroBanner.jpg"
                alt=""
              />
            </div>
            <h3 className="voluntterContent">Innovate</h3>
          </div>
        </div>

        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="600">
        <div className="InnovateChennaiContainerFlex">
          <div className="InnovateChennaiContent">
            <h3>Innovate</h3>
            <h6>
              Chennai is a booming center for innovation that supports a vibrant
              environment where established businesses and startups can
              collaborate together to develop innovative solutions for the
              future.
            </h6>
            <p>
              Innovation in a variety of fields is encouraged by the city's
              solid manufacturing, IT, and healthcare basis. An innovative
              culture is fostered by a talented labor pool, encouraging
              government regulations, and rising R&D expenditures. Chennai's
              inventive landscape is shaped by its thriving academic
              institutions and expanding startup community, which draw interest
              from both local and foreign sources.
            </p>
          </div>
        </div>
      </div>

      <div
        className="accomodationSldierSection"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div></div>
      </div>

      <div data-aos="fade-up" data-aos-delay="800">
        <InnovateSlider />
      </div>

      <InstagramReelsMarquee />
    </>
  );
}
