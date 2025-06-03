import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Becameavolunteer from "../Components/BecameAVolunteer";
import CardCarousel from "../Components/ChennaiChillZoneOut";
import ChennaiInvestments from "../Components/ChennaiInvestments";
import HoverImageSectionHorizontal from "../Components/DiverseDelights";
import CardCarousel111 from "../Components/EventsCalender";
import Explore from "../Components/Explore";
import Funchennai from "../Components/FunChennai";
import MegaMenu from "../Components/Header";
import HeroSlider from "../Components/HeroSlider";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import StartupChennai from "../Components/StartupChennai";
import TechEdu from "../Components/TechEdu";
import TrendingChennai1 from "../Components/TrendingChenna1i";
import TrendingChennai from "../Components/TrendingChennai";
import Utilitiesinchennai from "../Components/Utilities";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);
  return (
    <>
      <div data-aos="fade-up" data-aos-delay="0">
        <HeroSlider />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <Explore />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <TrendingChennai1 />
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <Funchennai />
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        <StartupChennai />
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        <HoverImageSectionHorizontal />
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        <ChennaiInvestments />
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        <TechEdu />
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        <Utilitiesinchennai />
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        <CardCarousel />
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        <CardCarousel111 />
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        <InstagramReelsMarquee />
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        <Becameavolunteer />
      </div>
    </>
  );
}
