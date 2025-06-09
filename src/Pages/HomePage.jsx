import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  let aosInitialized = false; // global flag
  useEffect(() => {
    if (!aosInitialized) {
      AOS.init({
        duration: 800,
        offset: 100,
        once: true,
      });
      aosInitialized = true;
    }
  }, []);

  useEffect(() => {
    const scrollPos = sessionStorage.getItem("scrollPos");

    const handleAOSReadyScroll = () => {
      if (scrollPos) {
        window.scrollTo({ top: parseInt(scrollPos, 10), behavior: "auto" });
      }
    };

    // Delay scroll restore slightly to wait for AOS and layout
    const timeout = setTimeout(handleAOSReadyScroll, 500); // tweak this if needed

    // Save scroll position before unload
    const saveScrollPos = () => {
      sessionStorage.setItem("scrollPos", window.scrollY);
    };
    window.addEventListener("beforeunload", saveScrollPos);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("beforeunload", saveScrollPos);
    };
  }, []);

  return (
    <>
      <div data-aos="fade-up" data-aos-delay="0">
        <HeroSlider />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Explore />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <TrendingChennai1 />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Funchennai />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <StartupChennai />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <HoverImageSectionHorizontal />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <ChennaiInvestments />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <TechEdu />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Utilitiesinchennai />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <CardCarousel />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <CardCarousel111 />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <InstagramReelsMarquee />
      </div>
      <div data-aos="fade-up" data-aos-delay="50">
        <Becameavolunteer />
      </div>
    </>
  );
}
