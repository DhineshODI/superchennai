import { useState, useRef, useEffect } from "react";
import "../Css/Innovate.css";
import MegaMenu from "../Header";
import HeaderWithMegaMenu from "../ExampleMegamenu";
import Search from "../Search";
import Slider from "react-slick";
import InnovateSlider from "../InnovateSldier";
import InstagramReelsMarquee from "../SocialChennai";
export default function Innovate() {
  return (
    <>
      <div className="VolunteerBgSection InnovateBgSection notHome">
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <div className="VolunteerBannerImage">
              <img src="./images/InnovateHeroBanner.jpg" alt="" />
            </div>
            <h3 className="voluntterContent">Innovate</h3>
          </div>
        </div>
        {/* <div className="mainMegamenuContainer">
          <HeaderWithMegaMenu />
        </div> */}
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      <div>
        <div className="InnovateChennaiContainerFlex">
          <div className="InnovateChennaiContent">
            <h3>Innovate</h3>
            <h6>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the i ndustry's standard dummy text
              ever since the
            </h6>
            <p>
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>

      <div className="accomodationSldierSection">
        <div></div>
      </div>

      <InnovateSlider />
      <InstagramReelsMarquee />
    </>
  );
}
