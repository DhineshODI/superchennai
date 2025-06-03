import Becameavolunteer from "../BecameAVolunteer";
import CardCarousel from "../ChennaiChillZoneOut";
import ChennaiInvestments from "../ChennaiInvestments";
import HoverImageSectionHorizontal from "../DiverseDelights";
import CardCarousel111 from "../EventsCalender";
import Explore from "../Explore";
import Funchennai from "../FunChennai";
import MegaMenu from "../Header";
import HeroSlider from "../HeroSlider";
import InstagramReelsMarquee from "../SocialChennai";
import StartupChennai from "../StartupChennai";

export default function HomePage() {
  return (
    <>
      <MegaMenu />
      <HeroSlider />
      <Explore />
      <Funchennai />
      <StartupChennai />
      {/* <DiverseDelights /> */}
      <HoverImageSectionHorizontal/>
      <ChennaiInvestments />
      {/* <ChennaiChillZoneout /> */}
      <CardCarousel/>
      <CardCarousel111 />
      <InstagramReelsMarquee />
      <Becameavolunteer />
      {/* <Footer />
      <HeroSection /> */}
    </>
  );
}
