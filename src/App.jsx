import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import Explore from "./Components/Explore";
import Funchennai from "./Components/FunChennai";
import ChennaiInvestments from "./Components/ChennaiInvestments";
import Becameavolunteer from "./Components/BecameAVolunteer";
import InstagramReelsMarquee from "./Components/SocialChennai";
import CardCarousel111 from "./Components/EventsCalender";
import DiverseDelights from "./Components/DiverseDelights";
import StartupChennai from "./Components/StartupChennai";
import HeroSection from "./Components/Testing";
import ChennaiChillZoneout from "./Components/ChennaiChillZoneOut";
import PeekCardCarousel from "./Components/PeekCarousel";
import MegaMenu from "./Components/Header";
import HeroSlider from "./Components/HeroSlider";
import MenuBar from "./Components/MenuBar";
import Volunteer from "../src/Pages/Volunteer";
import HomePage from "../src/Pages/HomePage";
import Invest from "../src/Pages/Invest";
import Work from "../src/Pages/Work";
import Live from "../src/Pages/Live";
import Innovate from "../src/Pages/Innovate";
import InnovateSlider from "./Components/InnovateSldier";
import HeaderWithMegaMenu from "./Components/ExampleMegamenu";
import Visit from "../src/Pages/VisitPage";
import CostLivinginChennai from "../src/Pages/CostOfLiving";
import CareerGrowth from "./Pages/SubPages/WorkPages/CareerGrowth";
import CoworkingSpaces from "./Pages/SubPages/WorkPages/CoworkingSpaces";
import Networking from "./Pages/SubPages/WorkPages/Networking";
import PG from "./Pages/SubPages/WorkPages/PG";
import SalariesBenefits from "./Pages/SubPages/WorkPages/SalariesBenefits";
import Unicorns from "./Pages/SubPages/WorkPages/Unicorns";
import WorkLifeBalance from "./Pages/SubPages/WorkPages/WorkLifeBalance";
import EmploymentinChennai from "./Pages/SubPages/LivePages/EmploymentinChennai";
import FutureGrowthDevelopment from "./Pages/SubPages/LivePages/FutureGrowthDevelopment";
import TechCategories from "./NewCarosel/Tech";
import Culturereligiousattractions from "./Pages/SubPages/LivePages/culturereligiousattractions";
import EducationInstitutions from "./Pages/SubPages/LivePages/EducationInstitutions";
import Healthcare from "./Pages/SubPages/LivePages/Healthcare";
import Neighbourhood from "./Pages/SubPages/LivePages/Neighbourhood";
import QualityofLife from "./Pages/SubPages/LivePages/QualityofLife";
import Recreation from "./Pages/SubPages/LivePages/Recreation";
import ResidencyPropertyRentBuyinChennai from "./Pages/SubPages/LivePages/ResidencyPropertyRentBuyinChennai";
import Transportation from "./Pages/SubPages/LivePages/Transportation";
import { AnimatePresence, motion } from "framer-motion";

import InvestEventsChennai from "./Pages/SubPages/InvestPages/InvestEventsChennai";
import InvestExhibitionsChennai from "./Pages/SubPages/InvestPages/InvestExhibitionsChennai";
import InvestFormalitiesRegulationsChennai from "./Pages/SubPages/InvestPages/InvestFormalitiesRegulationsChennai";
import InvestFranchiseChennai from "./Pages/SubPages/InvestPages/InvestFranchiseChennai";
import InvestGovernmentInitiativesChennai from "./Pages/SubPages/InvestPages/InvestGovernmentInitiativesChennai";
import InvestNewsChennai from "./Pages/SubPages/InvestPages/InvestNewsChennai";
import InvestRealEstateChennai from "./Pages/SubPages/InvestPages/InvestRealEstateChennai";
import InvestRenewableEnergyChennai from "./Pages/SubPages/InvestPages/InvestRenewableEnergyChennai";
import InvestRetirementChennai from "./Pages/SubPages/InvestPages/InvestRetirementChennai";
import InvestStartupsChennai from "./Pages/SubPages/InvestPages/InvestStartupsChennai";
import Conferences from "./Pages/SubPages/VisitPages/Conferences";
import Events from "./Pages/SubPages/VisitPages/Events";
import Food from "./Pages/SubPages/VisitPages/Food";
import Hiddengems from "./Pages/SubPages/VisitPages/Hiddengems";
import Itinerary from "./Pages/SubPages/VisitPages/Itinerary";
import Placestovisit from "./Pages/SubPages/VisitPages/Placestovisit";
import Shopping from "./Pages/SubPages/VisitPages/Shopping";
import Thingstodo from "./Pages/SubPages/VisitPages/Thingstodo";
import Traveltips from "./Pages/SubPages/VisitPages/Traveltips";
import Wellness from "./Pages/SubPages/VisitPages/Wellness";
import Accomodation from "./Pages/SubPages/VisitPages/Accomodation";
import AgricultureTech from "./Pages/SubPages/InnovatePages/AgricultureTech";
import ArtificialIntelligenceandMachineLearning from "./Pages/SubPages/InnovatePages/ArtificialIntelligenceandMachineLearning";
import AugmentedReality from "./Pages/SubPages/InnovatePages/AugmentedReality";
import AutomotiveTechandRandD from "./Pages/SubPages/InnovatePages/AutomotiveTechandRandD";
import BlockchainandFintech from "./Pages/SubPages/InnovatePages/BlockchainandFintech";
import EducationTech from "./Pages/SubPages/InnovatePages/EducationTech";
// import Events from "./Pages/SubPages/InnovatePages/Events";
import HealthcareTechInnovation from "./Pages/SubPages/InnovatePages/HealthcareTechInnovation";
import ITandSoftwareDevelopment from "./Pages/SubPages/InnovatePages/ITandSoftwareDevelopment";
import RoboticsandAutomation from "./Pages/SubPages/InnovatePages/RoboticsandAutomation";
import SmartCityInitiatives from "./Pages/SubPages/InnovatePages/SmartCityInitiatives";
import ThreeDPrintingandAdditiveManufacturing from "./Pages/SubPages/InnovatePages/ThreeDPrintingandAdditiveManufacturing";
import ElectricVehicles from "./Pages/SubPages/InnovatePages/ElectricVehicles";
import EmploymentBusinessPermits from "./Pages/SubPages/WorkPages/EmploymentBusinessPermits";
import EventsHome from "./Pages/Events";
import EventsDetails from "./Pages/SubPages/EventsPages/EventsDetails";
import ScrollToTop from "./Components/ScrollToTop";
import Luxuryhotels from "./Pages/SubPages/VisitPages/Luxuryhotels";
import PopupModal from "./Components/ModalPopup";
import BudgetStays from "./Pages/SubPages/VisitPages/BudgetStays";
import Midrangehotels from "./Pages/SubPages/VisitPages/Midrangehotels";
import Servicedapartments from "./Pages/SubPages/VisitPages/Servicedapartments";
import Resortsandvillas from "./Pages/SubPages/VisitPages/Resortsandvillas";
import SearchResults from "./Components/SearchResults";
import ShoppingTradition from "./Pages/SubPages/VisitPages/Shopping-Tradition-Explore-Artisan-Hubs";
import ShoppingTraditionLocate from "./Pages/SubPages/VisitPages/Shopping-Tradition-Locate-Classic-Textiles";
import ShoppingTheModernMarketplaceExplore from "./Pages/SubPages/VisitPages/Shopping-The-Modern-Marketplace-Explore";
import ShoppingLocalFindsDiscoverLocalTreasures from "./Pages/SubPages/VisitPages/Shopping-Local-Finds-Discover-Local-Treasures";
import ShoppingLocalFindsSavorEdibleSouvenirs from "./Pages/SubPages/VisitPages/Shopping-Local-Finds-Savor-Edible-Souvenirs";
import PlacetoVisitHistoricFort from "./Pages/SubPages/VisitPages/Place-to-Visit-Historic-Fort";
import ThingstodoAdventurePlaces from "./Pages/SubPages/VisitPages/Things-to-do-Adventure-Places";
import ThingstodoBungeeJumping from "./Pages/SubPages/VisitPages/Things-to-do-Bungee-Jumping";
import ThingstodoZiplines from "./Pages/SubPages/VisitPages/Things-to-do-Ziplines";
import ThingstodoHorrorHouse from "./Pages/SubPages/VisitPages/Things-to-do-HorrorHouse";
import ThingstodoTrampolineParks from "./Pages/SubPages/VisitPages/Things-to-do-Trampoline-Parks";
import ThingstodoGamingArcade from "./Pages/SubPages/VisitPages/Things-to-do-Gaming-Arcades";
import ThingstoBowlingAlleys from "./Pages/SubPages/VisitPages/Things-to-do-Bowling-Alleys";
import ThingstoFamilyEntertainmentCenters from "./Pages/SubPages/VisitPages/Things-to-do-Family-Entertainment-Centers";
import ThingstodoMultiplexes from "./Pages/SubPages/VisitPages/Things-to-do-Multiplexes";
import ThingstodoBeachSideFun from "./Pages/SubPages/VisitPages/Things-to-do-Beachside";
import ThingstodoTurfSports from "./Pages/SubPages/VisitPages/Things-to-do-TurfSports";
import ThingstodoNatureWalk from "./Pages/SubPages/VisitPages/Things-to-do-Naturewalk";
import ThingstodoGokart from "./Pages/SubPages/VisitPages/Things-to-do-Gokart";
import PlacetoVisitAncientTemples from "./Pages/SubPages/VisitPages/Place-to-Visit-Ancient-Temples";
import PlacetoVisitCulturalFoundations from "./Pages/SubPages/VisitPages/Place-to-Visit-Cultural-Foundations";
import PlacetoVisitArtistsVillages from "./Pages/SubPages/VisitPages/Place-to-Visit-Artists-Villages";
import PlacetoVisitUrbanBeaches from "./Pages/SubPages/VisitPages/Place-to-Visit-Urban-Beaches";
import PlacetoVisitModernMalls from "./Pages/SubPages/VisitPages/Place-to-Visit-Modern-Malls";
import PlacetoVisitBotanicalGardens from "./Pages/SubPages/VisitPages/Place-to-Visit-Botanical-Gardens";
import ClassicItalianFlavors from "./Pages/SubPages/VisitPages/ClassicItalianFlavors";
import RegionalItalianDelights from "./Pages/SubPages/VisitPages/RegionalItalianDelights";
import AromaticThaiCurries from "./Pages/SubPages/VisitPages/AromaticThaiCurries";
import VibrantThaiStreetFood from "./Pages/SubPages/VisitPages/VibrantThaiStreetFood";
import SpicySriLankanCurries from "./Pages/SubPages/VisitPages/SpicySriLankanCurries";
import SriLankanHoppers from "./Pages/SubPages/VisitPages/SriLankanHoppers";
import RichMalaysianNoodles from "./Pages/SubPages/VisitPages/RichMalaysianNoodles";
import FragrantMalaysianRiceDishes from "./Pages/SubPages/VisitPages/FragrantMalaysianRiceDishes";
import ZestyMexicanTacos from "./Pages/SubPages/VisitPages/ZestyMexicanTacos";
import HeartyMexicanBurritos from "./Pages/SubPages/VisitPages/HeartyMexicanBurritos";
import FlavorfulBurmeseSoups from "./Pages/SubPages/VisitPages/FlavorfulBurmeseSoups";
import AromaticBurmeseCurries from "./Pages/SubPages/VisitPages/AromaticBurmeseCurries";
import ClassicEuropeanDishes from "./Pages/SubPages/VisitPages/ClassicEuropeanDishes";
import GlobalContinentalFlavors from "./Pages/SubPages/VisitPages/GlobalContinentalFlavors";
import RichNorthIndianCurries from "./Pages/SubPages/VisitPages/RichNorthIndianCurries";
import TandooriDelights from "./Pages/SubPages/VisitPages/TandooriDelights";
import DelicateJapaneseSushi from "./Pages/SubPages/VisitPages/DelicateJapaneseSushi";
import SavoryJapaneseRamen from "./Pages/SubPages/VisitPages/SavoryJapaneseRamen";
import FreshMediterraneanSalads from "./Pages/SubPages/VisitPages/FreshMediterraneanSalads";
import GrilledMediterraneanSpecialties from "./Pages/SubPages/VisitPages/GrilledMediterraneanSpecialties";
import PlacetoVisitStateMuseum from "./Pages/SubPages/VisitPages/Place-to-Visit-State-Museum";
import CoastalandReginalSpecialist from "./Pages/SubPages/VisitPages/CoastalandReginalSpecilalist";
import EventsImman from "./Pages/SubPages/EventsPages/EventsImman";
import EventsVishal from "./Pages/SubPages/EventsPages/EventsVishal";
import EventsSpeed from "./Pages/SubPages/EventsPages/EventsSpeed";
import EventsStrangersMeet from "./Pages/SubPages/EventsPages/EventsStranger";
import EventsChennaiBusinessNetwork from "./Pages/SubPages/EventsPages/EventsChennaiBusinessNetwork";
import EventsTechInnovaters from "./Pages/SubPages/EventsPages/EventsTechInnovaters";
import EventsStartups from "./Pages/SubPages/EventsPages/EventsStarups";
import DimSumandNoodles from "./Pages/SubPages/VisitPages/DimSumandNoodles";
import AuthenticChineseMains from "./Pages/SubPages/VisitPages/AuthenticChineseMains";
import BreakfastTiffinStaples from "./Pages/SubPages/VisitPages/BreakfastTiffinStaples";
import TraditionalSouthIndianMealsThali from "./Pages/SubPages/VisitPages/TraditionalSouthIndianMealsThali";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  const [animate, setAnimate] = useState(false);
  const menuItems = [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Career", href: "/career" },
    { label: "Events", href: "/events" },
    { label: "Social Chennai", href: "/social-chennai" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
    { label: "Sustainability", href: "/sustainability" },
  ];
  const [query, setQuery] = useState("");
  const [menuBar, setMenuBar] = useState(false);
  const [menuBar1, setMenuBar1] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const suggestionsData = [
    { title: "Trending Chennai", searchText: "trending" },
    { title: "Fun in Chennai", searchText: "fun chennai" },
    { title: "Startup Ecosystem", searchText: "startup chennai" },
    { title: "IT Sector Growth", searchText: "it sector" },
    { title: "Food Trails", searchText: "diverse delights" },
    { title: "Chettinad Cuisine", searchText: "chettinad" },
    { title: "Italian Food", searchText: "italian" },
    { title: "Chinese Cuisine", searchText: "chinese" },
    { title: "North Indian Dishes", searchText: "north indian" },
    { title: "Continental Flavors", searchText: "continental" },
    { title: "Burmese Cuisine", searchText: "burmese" },
    { title: "Malaysian Food", searchText: "malaysian" },
    { title: "South Indian Veg", searchText: "south indian" },
    { title: "Mexican Dishes", searchText: "mexican" },
    { title: "Chennai Investments", searchText: "investments" },
    { title: "Real Estate", searchText: "real estate" },
    { title: "OMR - IT Corridor", searchText: "omr" },
    { title: "Adyar Properties", searchText: "adyar" },
    { title: "Maraimalai Nagar", searchText: "maraimalai" },
    { title: "Utilities", searchText: "utilities" },
    { title: "Banks & Pharmacies", searchText: "banks" },
    { title: "ChillOut Zone", searchText: "chillout" },
    { title: "Beaches in Chennai", searchText: "beaches" },
    { title: "Shopping Malls", searchText: "malls" },
    { title: "Restobars", searchText: "restobars" },
    { title: "Events Calendar", searchText: "events" },
    { title: "Music Shows", searchText: "concerts" },
    { title: "Volunteer in Chennai", searchText: "volunteer" },
    { title: "Public Art Projects", searchText: "design" },
    { title: "Explore More", searchText: "explore" },
    { title: "Social Chennai", searchText: "social chennai" },
    { title: "Humans of Chennai", searchText: "humans" },
    { title: "Food Culture", searchText: "culinary" },
    { title: "Nightlife in Chennai", searchText: "nightlife" },
    { title: "Local Events", searchText: "festivals" },
    { title: "Cultural Events", searchText: "culture" },
    { title: "Innovation in Chennai", searchText: "innovation" },
    { title: "Retire in Chennai", searchText: "retire" },
    { title: "Franchise in Chennai", searchText: "franchise" },
    { title: "Renewable Energy", searchText: "energy" },
    { title: "Youth Mentorship", searchText: "mentorship" },
    { title: "Technology in Chennai", searchText: "technology" },
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = suggestionsData.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.searchText.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value ? filtered : []);
  };

  const handleSuggestionClick = (title) => {
    setQuery(title);
    setSuggestions([]);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  const popupFunction = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    if (menuBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuBar]);
  useEffect(() => {
    if (menuBar1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuBar1]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setLoading(true);
      setTimeout(() => {
        navigate(`/results?search=${encodeURIComponent(query)}`);
        setLoading(false);
      }, 500);
    }
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <HeaderWithMegaMenu setMenuBar={setMenuBar} setMenuBar1={setMenuBar1} />

        {/* Sticky Icons */}
        <div className="stickyIconsContainer">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/super-chennai"
          >
            <img src="./images/Indeed.png" alt="" />
          </a>
          <a target="_blank" href="https://www.instagram.com/super_chennai_/">
            <img src="./images/insta.png" alt="" />
          </a>
          <a target="_blank" href="https://www.facebook.com/share/1Hsb1ypGGE/">
            <img src="./images/fb.png" alt="" />
          </a>
          <a target="_blank" href="https://www.youtube.com/@Super_Chennai">
            <img src="./images/youtube.png" alt="" />
          </a>
          <a target="_blank" href="https://x.com/Super_Chennai_	">
            <img src="./images/threads.png" alt="" />
          </a>
        </div>
        {/* Sticky Icons */}

        <Routes>
          {/*----Main-Pages---------*/}

          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<SearchResults />} />
          <Route
            path="/volunteer"
            element={<Volunteer popupFunction={popupFunction} />}
          />
          <Route path="/innovate" element={<Innovate />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/live" element={<Live />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/work" element={<Work />} />
          <Route path="/eventsmain" element={<EventsHome />} />

          {/*----Main-Pages---------*/}

          {/* ---------Sub-pages--------- */}

          {/* Work-Pages */}

          <Route path="/careergrowth" element={<CareerGrowth />} />
          <Route path="/coworkingspaces" element={<CoworkingSpaces />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/pg" element={<PG />} />
          <Route path="/salariesbenefits" element={<SalariesBenefits />} />
          <Route path="/unicorn" element={<Unicorns />} />
          <Route path="/worklifebalance" element={<WorkLifeBalance />} />
          <Route
            path="/employmentbusinesspermits"
            element={<EmploymentBusinessPermits />}
          />

          {/* Work-Pages */}

          {/* Live-Pages */}

          <Route path="/costofliving" element={<CostLivinginChennai />} />
          <Route
            path="/employmentinchennai"
            element={<EmploymentinChennai />}
          />
          <Route
            path="/futuregrowthdeveloping"
            element={<FutureGrowthDevelopment />}
          />
          <Route
            path="/culturereligiousattractions"
            element={<Culturereligiousattractions />}
          />
          <Route
            path="/educationinstitutions"
            element={<EducationInstitutions />}
          />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/neighbourhood" element={<Neighbourhood />} />
          <Route path="/qualityoflife" element={<QualityofLife />} />
          <Route path="/recreation" element={<Recreation />} />
          <Route
            path="/residencypropertyrentbuyinchennai"
            element={<ResidencyPropertyRentBuyinChennai />}
          />
          <Route path="/transportation" element={<Transportation />} />

          {/* Live-Pages */}

          {/* Invest-Pages */}

          <Route
            path="/investeventschennai"
            element={<InvestEventsChennai />}
          />
          <Route
            path="/investexhibitionschennai"
            element={<InvestExhibitionsChennai />}
          />
          <Route
            path="/investformalitiesregulationschennai"
            element={<InvestFormalitiesRegulationsChennai />}
          />
          <Route
            path="/investfranchisechennai"
            element={<InvestFranchiseChennai />}
          />
          <Route
            path="/investgovernmentinitiativeschennai"
            element={<InvestGovernmentInitiativesChennai />}
          />
          <Route path="/investnewschennai" element={<InvestNewsChennai />} />
          <Route
            path="/investrealestatechennai"
            element={<InvestRealEstateChennai />}
          />
          <Route
            path="/investrenewableenergychennai"
            element={<InvestRenewableEnergyChennai />}
          />
          <Route
            path="/investretirementchennai"
            element={<InvestRetirementChennai />}
          />
          <Route
            path="/investstartupschennai"
            element={<InvestStartupsChennai />}
          />

          {/* Invest-Pages */}

          {/* Visit-Pages */}

          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/food" element={<Food />} />
          <Route path="/placestovisit" element={<Placestovisit />} />
          <Route path="/thingstodo" element={<Thingstodo />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/hiddengems" element={<Hiddengems />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/traveltips" element={<Traveltips />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/events" element={<Events />} />
          <Route path="/conferences" element={<Conferences />} />

          <Route path="/luxuryhotels" element={<Luxuryhotels />} />
          <Route path="/midrangehotels" element={<Midrangehotels />} />
          <Route path="/budgetStays" element={<BudgetStays />} />
          <Route path="/servicedapartments" element={<Servicedapartments />} />
          <Route path="/resortsandvillas" element={<Resortsandvillas />} />

          {/* Shopping Pages */}

          <Route
            path="/visit-shopping-tradition-exploreartist"
            element={<ShoppingTradition />}
          />
          <Route
            path="/visit-shopping-tradition-locate-classic"
            element={<ShoppingTraditionLocate />}
          />
          <Route
            path="/visit-shopping-the-modern-marketplace-explore"
            element={<ShoppingTheModernMarketplaceExplore />}
          />
          <Route
            path="/visit-shopping-the-modernplace-welcoming-lifestyle"
            element={<ShoppingTheModernMarketplaceExplore />}
          />
          <Route
            path="/visit-shopping-local-finds-discover-local-treasures"
            element={<ShoppingLocalFindsDiscoverLocalTreasures />}
          />
          <Route
            path="/visit-shopping-local-finds-savoredible-souvenirs"
            element={<ShoppingLocalFindsSavorEdibleSouvenirs />}
          />

          {/* Shopping Pages */}

          {/* Place to Visit */}
          <Route
            path="/visit-placetovisit-historic-fort"
            element={<PlacetoVisitHistoricFort />}
          />
          <Route
            path="/visit-placetovisit-ancient-temples"
            element={<PlacetoVisitAncientTemples />}
          />
          <Route
            path="/visit-placetovisit-state-museum"
            element={<PlacetoVisitStateMuseum />}
          />
          <Route
            path="/visit-placetovisit-cultural-foundations"
            element={<PlacetoVisitCulturalFoundations />}
          />
          <Route
            path="/visit-placetovisit-artists-villages"
            element={<PlacetoVisitArtistsVillages />}
          />
          <Route
            path="/visit-placetovisit-urban-beaches"
            element={<PlacetoVisitUrbanBeaches />}
          />
          <Route
            path="/visit-placetovisit-modern-malls"
            element={<PlacetoVisitModernMalls />}
          />
          <Route
            path="/visit-placetovisit-botanical-gardens"
            element={<PlacetoVisitBotanicalGardens />}
          />

          {/* Place to Visit */}

          {/* Things to do */}

          <Route
            path="/visit-thingstodo-adventureplace"
            element={<ThingstodoAdventurePlaces />}
          />
          <Route
            path="/visit-thingstodo-bungeejumping"
            element={<ThingstodoBungeeJumping />}
          />
          <Route
            path="/visit-thingstodo-ziplines"
            element={<ThingstodoZiplines />}
          />
          <Route
            path="/visit-thingstodo-horrorhouse"
            element={<ThingstodoHorrorHouse />}
          />
          <Route
            path="/visit-thingstodo-trampolineparks"
            element={<ThingstodoTrampolineParks />}
          />
          <Route
            path="/visit-thingstodo-gamingarcade"
            element={<ThingstodoGamingArcade />}
          />
          <Route
            path="/visit-thingstodo-bowlingalleys"
            element={<ThingstoBowlingAlleys />}
          />
          <Route
            path="/visit-thingstodo-familyentertainmentcenters"
            element={<ThingstoFamilyEntertainmentCenters />}
          />
          <Route
            path="/visit-thingstodo-multiplexes"
            element={<ThingstodoMultiplexes />}
          />
          <Route
            path="/visit-thingstodo-beachsidefun"
            element={<ThingstodoBeachSideFun />}
          />
          <Route
            path="/visit-thingstodo-turfsports"
            element={<ThingstodoTurfSports />}
          />
          <Route
            path="/visit-thingstodo-naturewalk"
            element={<ThingstodoNatureWalk />}
          />
          <Route
            path="/visit-thingstodo-gokart"
            element={<ThingstodoGokart />}
          />

          {/* Things to do */}

          {/* Food sup pages */}

          <Route
            path="/classicItalianFlavors"
            element={<ClassicItalianFlavors />}
          />
          <Route
            path="/regionalItalianDelights"
            element={<RegionalItalianDelights />}
          />
          <Route
            path="/aromaticThaiCurries"
            element={<AromaticThaiCurries />}
          />
          <Route
            path="/VibrantThaiStreetFood"
            element={<VibrantThaiStreetFood />}
          />
          <Route
            path="/spicySriLankanCurries"
            element={<SpicySriLankanCurries />}
          />
          <Route path="/sriLankanHoppers" element={<SriLankanHoppers />} />
          <Route
            path="/richMalaysianNoodles"
            element={<RichMalaysianNoodles />}
          />
          <Route
            path="/fragrantMalaysianRiceDishes"
            element={<FragrantMalaysianRiceDishes />}
          />
          <Route path="/zestyMexicanTacos" element={<ZestyMexicanTacos />} />
          <Route
            path="/heartyMexicanBurritos"
            element={<HeartyMexicanBurritos />}
          />
          <Route
            path="/flavorfulBurmeseSoups"
            element={<FlavorfulBurmeseSoups />}
          />
          <Route
            path="/aromaticBurmeseCurries"
            element={<AromaticBurmeseCurries />}
          />
          <Route
            path="/classicEuropeanDishes"
            element={<ClassicEuropeanDishes />}
          />
          <Route
            path="/globalContinentalFlavors"
            element={<GlobalContinentalFlavors />}
          />
          <Route
            path="/richNorthIndianCurries"
            element={<RichNorthIndianCurries />}
          />
          <Route path="/tandooriDelights" element={<TandooriDelights />} />
          <Route
            path="/delicateJapaneseSushi"
            element={<DelicateJapaneseSushi />}
          />
          <Route
            path="/savoryJapaneseRamen"
            element={<SavoryJapaneseRamen />}
          />
          <Route
            path="/freshMediterraneanSalads"
            element={<FreshMediterraneanSalads />}
          />
          <Route
            path="/grilledMediterraneanSpecialties"
            element={<GrilledMediterraneanSpecialties />}
          />
          <Route
            path="/coastalandreginalspecialist"
            element={<CoastalandReginalSpecialist />}
          />

          <Route path="/dimsumandnoodles" element={<DimSumandNoodles />} />
          <Route
            path="/authenticchinesemains"
            element={<AuthenticChineseMains />}
          />

          <Route
            path="/breakfasttiffinstaples"
            element={<BreakfastTiffinStaples />}
          />

          <Route
            path="/traditionalsouthindianmealsthali"
            element={<TraditionalSouthIndianMealsThali />}
          />

          {/* Food sup pages */}

          {/* Visit-Pages */}

          {/* Innovate-Pages */}

          <Route path="/agriculturetech" element={<AgricultureTech />} />
          <Route
            path="/artificialintelligenceandmachinelearning"
            element={<ArtificialIntelligenceandMachineLearning />}
          />
          <Route path="/augmentedreality" element={<AugmentedReality />} />
          <Route
            path="/automotivetechandrandd"
            element={<AutomotiveTechandRandD />}
          />
          <Route
            path="/blockchainandfintech"
            element={<BlockchainandFintech />}
          />
          <Route path="/educationtech" element={<EducationTech />} />
          <Route
            path="/healthcaretechinnovation"
            element={<HealthcareTechInnovation />}
          />
          <Route
            path="/itandsoftwaredevelopment"
            element={<ITandSoftwareDevelopment />}
          />
          <Route
            path="/roboticsandautomation"
            element={<RoboticsandAutomation />}
          />
          <Route
            path="/smartcityinitiatives"
            element={<SmartCityInitiatives />}
          />
          <Route
            path="/threedprintingandadditivemanufacturing"
            element={<ThreeDPrintingandAdditiveManufacturing />}
          />
          <Route path="/electricvehicles" element={<ElectricVehicles />} />

          {/* Innovate-Pages */}

          {/* Events-Pages */}

          <Route path="/eventsdetails" element={<EventsDetails />} />
          <Route path="/eventsimman" element={<EventsImman />} />
          <Route path="/eventsvishal" element={<EventsVishal />} />
          <Route path="/eventsspeed" element={<EventsSpeed />} />
          <Route
            path="/eventsstarngersmeet"
            element={<EventsStrangersMeet />}
          />
          <Route
            path="/eventschennaibusinessnetwork"
            element={<EventsChennaiBusinessNetwork />}
          />
          <Route
            path="/eventstechinnovaters"
            element={<EventsTechInnovaters />}
          />
          <Route path="/eventstechstartups" element={<EventsStartups />} />

          {/* Events-Pages */}

          {/* ---------Sub-pages--------- */}
        </Routes>

        <Footer />
      </Router>
      {/* MenuBar */}

      <AnimatePresence>
        {menuBar && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{
              x: "0%",
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            exit={{
              x: "100%",
              opacity: 0,
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              zIndex: 100000000,
              overflowY: "auto",
            }}
          >
            <MenuBar setMenuBar={setMenuBar} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MenuBar */}

      {/* Search For Mobile */}

      <AnimatePresence>
        {menuBar1 && (
          // <div className="Neww">
          //   <div>
          <div className="mobileSearchSectionsRow">
            <div className="searchInputFormbanner">
              <form className="searchInputForm" onSubmit={handleSearch}>
                <input
                  placeholder="Experience Chennai"
                  value={query}
                  onChange={handleInputChange}
                />
                <button type="submit" disabled={loading}>
                  {loading ? (
                    <span className="spinner"></span> // Spinner icon
                  ) : (
                    "Search"
                  )}
                </button>{" "}
              </form>
              {suggestions.length > 0 && (
                <ul className="suggestionsList">
                  {suggestions.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(item.searchText)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div
              className="mobileCloseButtoniMAGE"
              onClick={() => setMenuBar1(false)}
            >
              <img src="./images/HomePage-Images/Icons/close-x.svg" alt="" />
            </div>
          </div>
          //   </div>
          // </div>
        )}
      </AnimatePresence>

      {/* Search For Mobile */}
    </>
  );
}

export default App;
