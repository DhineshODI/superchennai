import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import "../assets/Css/SearchResults.css";
import Search from "./Search";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const dummyData = [
  // HOTELS AND STAYS IN CHENNAI",#####################################################

  {
    id: 79,
    title: "MID-RANGE HOTELS",
    description:
      "Enjoy your stay at well-located hotels, which are typically found close to important areas, as a practical starting point. It offers basic conveniences, welcoming service, and elegantly designed rooms.",
    slug: "mid-range-hotels",
    name: "Explore",
    imageUrl: "/images/explore/mid-range-hotels.jpg",
    pageUrl: "/accomodation",
  },
  {
    id: 80,
    title: "BUDGET STAYS",
    description:
      "Basic lodgings are always included in a reasonable budget, allowing you to concentrate on both the cost and the orderly service. You can dependably count on the necessities without going over budget.",
    slug: "budget-stays",
    name: "Explore",
    imageUrl: "/images/explore/budget-stays.jpg",
    pageUrl: "/accomodation",
  },
  {
    id: 81,
    title: "SERVICED APARTMENTS",
    description:
      "Serviced apartments in Chennai offer a homelike experience with kitchens, comfortable living areas, and hotel-like amenities, whether you're looking for independence, a family vacation, or extended stay.",
    slug: "serviced-apartments",
    name: "Explore",
    imageUrl: "/images/explore/serviced-apartments.jpg",
    pageUrl: "/accomodation",
  },
  {
    id: 82,
    title: "RESORTS AND VILLAS",
    description:
      "Experience a relaxing break from the hustle and bustle of the city and find a calm environment with upscale amenities like spas and pools. It is ideal for resting and revitalizing.",
    slug: "resorts-and-villas",
    name: "Explore",
    imageUrl: "/images/explore/resorts-and-villas.jpg",
    pageUrl: "/accomodation",
  },

  //##################### FOOD ########################################################

  {
    id: 90,
    title: "FOOD",
    description:
      "Food means a lot to us. It is an emotion. Chennai was providing space to food trucks, small- to medium-sized hotels, and even high-end restaurants. Food highlights the city's diverse and lively culinary scene, from Chettinad to international flavors.",
    slug: "food",
    name: "Explore",
    imageUrl: "/images/explore/food.jpg",
    pageUrl: "/food",
  },
  {
    id: 91,
    title: "ITALIAN CUISINE",
    description:
      "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional.",
    slug: "italian-cuisine",
    name: "Explore",
    imageUrl: "/images/explore/italian-cuisine.jpg",
    pageUrl: "/italian-cuisine",
  },
  {
    id: 92,
    title: "CLASSIC ITALIAN FLAVORS",
    description:
      "Experience and indulge in creamy Carbonara and rich Lasagna, alongside iconic Margherita Pizza in Chennai. Find out these classical Italian flavours at.",
    slug: "classic-italian-flavors",
    name: "Explore",
    imageUrl: "/images/explore/classic-italian-flavors.jpg",
    pageUrl: "/classic-italian-flavors",
  },
  {
    id: 93,
    title: "REGIONAL ITALIAN DELIGHTS",
    description:
      "Experience amazing tastes of regional delights such as fragrant Pesto Genovese and saffron-infused Risotto alla Milanese in Chennai.",
    slug: "regional-italian-delights",
    name: "Explore",
    imageUrl: "/images/explore/regional-italian-delights.jpg",
    pageUrl: "/regional-italian-delights",
  },
  {
    id: 94,
    title: "THAI CUISINE",
    description:
      "All of the dishes, which range from fragrant to vivid Thai flavors, are practically lovingly prepared to please the palate.",
    slug: "thai-cuisine",
    name: "Explore",
    imageUrl: "/images/explore/thai-cuisine.jpg",
    pageUrl: "/thai-cuisine",
  },
  {
    id: 95,
    title: "AROMATIC THAI CURRIES",
    description:
      "Experience the balance of green and red Thai curries, infused with coconut milk, herbs, and spices with aromatic flavours. Explore these at.",
    slug: "aromatic-thai-curries",
    name: "Explore",
    imageUrl: "/images/explore/aromatic-thai-curries.jpg",
    pageUrl: "/aromatic-thai-curries",
  },
  {
    id: 96,
    title: "VIBRANT THAI STREET FOOD",
    description:
      "As they embody Thailand's dynamic street food culture, savor the crispness of Tom Yum soup, the freshness of Som Tum (papaya salad), and the tang of Pad Thai noodles.",
    slug: "vibrant-thai-street-food",
    name: "Explore",
    imageUrl: "/images/explore/vibrant-thai-street-food.jpg",
    pageUrl: "/vibrant-thai-street-food",
  },
  {
    id: 97,
    title: "SRI LANKAN CUISINE",
    description:
      "Discover the spicy and flavorful cuisine in Chennai and indulge in delectable curries, hoppers, kothu roti, and seafood preparations with distinctive spice combinations.",
    slug: "sri-lankan-cuisine",
    name: "Explore",
    imageUrl: "/images/explore/sri-lankan-cuisine.jpg",
    pageUrl: "/sri-lankan-cuisine",
  },
  {
    id: 98,
    title: "SPICY SRI LANKAN CURRIES",
    description:
      "Savor savory chicken curry and spicy fish curry, which are made with coconut milk and aromatic spices to capture the rich tastes of Sri Lanka.",
    slug: "spicy-sri-lankan-curries",
    name: "Explore",
    imageUrl: "/images/explore/spicy-sri-lankan-curries.jpg",
    pageUrl: "/spicy-sri-lankan-curries",
  },
  {
    id: 99,
    title: "SRI LANKAN HOPPERS",
    description:
      "Discover the crisp bowl-shaped hoppers (appam) and string hoppers (idiappam), which are commonly eaten with curries and sambol, a staple of Sri Lankan cuisine.",
    slug: "sri-lankan-hoppers",
    name: "Explore",
    imageUrl: "/images/explore/sri-lankan-hoppers.jpg",
    pageUrl: "/sri-lankan-hoppers",
  },

  //##################### THINGS TO DO ########################################################

  {
    id: 100,
    title: "THINGS TO DO",
    description:
      "Discover your inner adventurer in Chennai, a city full of chances to stimulate your senses and make lifelong experiences. Chennai has a wide range of activities, from enjoying the tranquility of bygone times to embracing the energy of contemporary life and indulging in cultural diversity.",
    slug: "things-to-do",
    name: "Explore",
    imageUrl: "/images/explore/things-to-do.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 101,
    title: "ENVELOP YOURSELF IN HERITAGE",
    description:
      "Travel back in time and establish a connection with the city's past.",
    slug: "envelop-yourself-in-heritage",
    name: "Explore",
    imageUrl: "/images/explore/heritage.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 102,
    title: "HISTORIC FORT",
    description:
      "Discover Antiques of Old: Discover intriguing artifacts and tales within the walls of historical repositories.",
    slug: "historic-fort",
    name: "Explore",
    imageUrl: "/images/explore/historic-fort.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 103,
    title: "EXPLORE ARCHITECTURAL MARVELS",
    description:
      "Stroll through imposing structures that whisper tales of past empires and artistic brilliance.",
    slug: "explore-architectural-marvels",
    name: "Explore",
    imageUrl: "/images/explore/architectural-marvels.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 104,
    title: "WITNESS TRADITIONAL PRACTICES",
    description:
      "Take in ancient customs and rituals that still flourish in the city's vibrant heart.",
    slug: "witness-traditional-practices",
    name: "Explore",
    imageUrl: "/images/explore/traditional-practices.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 105,
    title: "RECOGNIZE THE CITY'S EXCITEMENT",
    description:
      "Experience the vitality and vibrant spirit of modern-day Chennai.",
    slug: "recognize-city-excitement",
    name: "Explore",
    imageUrl: "/images/explore/city-excitement.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 106,
    title: "WALK ALONG URBAN SHORES",
    description:
      "Take in the vibrant energy and local interactions on the city's vast beachfronts.",
    slug: "walk-along-urban-shores",
    name: "Explore",
    imageUrl: "/images/explore/urban-shores.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 107,
    title: "INDULGE IN MODERN PURSUITS",
    description:
      "Discover busy commercial districts that provide retail therapy, a variety of entertainment options, and delectable cuisine.",
    slug: "indulge-in-modern-pursuits",
    name: "Explore",
    imageUrl: "/images/explore/modern-pursuits.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 108,
    title: "FIND SERENITY IN GREEN SPACES",
    description:
      "Get away from the hustle and bustle of the city in serene parks and gardens that provide brief moments of calm.",
    slug: "find-serenity-in-green-spaces",
    name: "Explore",
    imageUrl: "/images/explore/green-spaces.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 109,
    title: "INVOLVE WITH ART AND CULTURE",
    description:
      "Explore Chennai's vibrant artistic community and its diverse range of artistic expressions.",
    slug: "involve-with-art-and-culture",
    name: "Explore",
    imageUrl: "/images/explore/art-culture.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 110,
    title: "ARTISTIC ZONES",
    description:
      "Stroll through areas where creativity thrives, showcasing a variety of artistic mediums.",
    slug: "artistic-zones",
    name: "Explore",
    imageUrl: "/images/explore/artistic-zones.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 111,
    title: "REGIONAL CRAFTS",
    description:
      "Learn about and appreciate the complex skills and heritage embedded in local artistry.",
    slug: "regional-crafts",
    name: "Explore",
    imageUrl: "/images/explore/regional-crafts.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 112,
    title: "CAPTIVATING PERFORMANCES",
    description:
      "See traditional and contemporary art forms come to life on stage.",
    slug: "captivating-performances",
    name: "Explore",
    imageUrl: "/images/explore/captivating-performances.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 113,
    title: "FUN THINGS TO DO",
    description:
      "Chennai offers a wide range of enjoyable activities that will provide heart-pounding adventures and amusing locations for an unforgettable time.",
    slug: "fun-things-to-do",
    name: "Explore",
    imageUrl: "/images/explore/fun-things-to-do.jpg",
    pageUrl: "/thingstodo",
  },
  {
    id: 114,
    title: "ADVENTURE & THRILLS",
    description:
      "Experience the exhilaration of bungee jumping, amusement park rides, water parks, horror houses, trampolines, and ziplines that splash into fun across the city.",
    slug: "adventure-thrills",
    name: "Explore",
    imageUrl: "/images/explore/adventure-thrills.jpg",
    pageUrl: "/thingstodo",
  },
  // PLACE TO VISIT #

  {
    id: 200,
    title: "PLACES TO VISIT",
    description:
      "Discover a city where contemporary landmarks stand tall, lively art foundations flow through its veins, and old religious sites whisper stories of dynasties past. Chennai welcomes you to discover its many facets of charm, providing a fascinating variety of experiences for each visitor.",
    slug: "places-to-visit",
    name: "Visit",
    imageUrl: "/images/visit/places-to-visit.jpg",
    pageUrl: "/placestovisit",
  },
  {
    id: 201,
    title: "HERITAGE ECHOES",
    description:
      "Experience the rich history of the city by traveling back in time.",
    slug: "heritage-echoes",
    name: "Visit",
    imageUrl: "/images/visit/heritage-echoes.jpg",
    pageUrl: "/placestovisit",
  },
  {
    id: 202,
    title: "HISTORIC FORT",
    description:
      "Discover the ancient citadel, a silent witness to bygone eras, which now frequently houses a museum demonstrating its noteworthy history.",
    slug: "historic-fort",
    name: "Visit",
    imageUrl: "/images/visit/historic-fort.jpg",
    pageUrl: "/placestovisit",
  },
  {
    id: 203,
    title: "ANCIENT TEMPLES",
    description:
      "Take in the elaborate Dravidian architecture and colorful rituals of important religious sites.",
    slug: "ancient-temples",
    name: "Visit",
    imageUrl: "/images/visit/ancient-temples.jpg",
    pageUrl: "/placestovisit",
  },
  {
    id: 204,
    title: "A CANVAS OF CULTURE",
    description:
      "Visit Chennai's creative heart, where innovation flourishes in many forms.",
    slug: "a-canvas-of-culture",
    name: "Visit",
    imageUrl: "/images/visit/canvas-of-culture.jpg",
    pageUrl: "/placestovisit",
  },
  {
    id: 205,
    title: "CULTURAL FOUNDATIONS",
    description:
      "Take in the mesmerizing performances of traditional art, which preserve India's rich cultural heritage.",
    slug: "cultural-foundations",
    name: "Visit",
    imageUrl: "/images/visit/cultural-foundations.jpg",
    pageUrl: "/placestovisit",
  },
  {
    id: 206,
    title: "ARTISTS' VILLAGES",
    description:
      "Explore distinctive neighborhoods where gifted artists reside and display their most recent creations.",
    slug: "artists-villages",
    name: "Visit",
    imageUrl: "/images/visit/artists-villages.jpg",
    pageUrl: "/placestovisit",
  },
  {
    id: 207,
    title: "MODERN VIBRANCY",
    description:
      "Experience the vibrant energy of Chennai, a city that is always changing.",
    slug: "modern-vibrancy",
    name: "Visit",
    imageUrl: "/images/visit/modern-vibrancy.jpg",
    pageUrl: "/placestovisit",
  },
  {
    id: 208,
    title: "URBAN BEACHES",
    description:
      "Take in the vibrant ambiance, stroll along the lengthy beach, and see the busy local life.",
    slug: "urban-beaches",
    name: "Visit",
    imageUrl: "/images/visit/urban-beaches.jpg",
    pageUrl: "/placestovisit",
  },
  {
    id: 209,
    title: "MODERN MALLS",
    description:
      "Enjoy a variety of culinary options, entertainment, and retail therapy at the city's modern centers.",
    slug: "modern-malls",
    name: "Visit",
    imageUrl: "/images/visit/modern-malls.jpg",
    pageUrl: "/placestovisit",
  },
  {
    id: 210,
    title: "BOTANICAL GARDENS / POONGAS",
    description:
      "In exquisitely designed urban oasis, discover peace amid a variety of plants and luxuriant foliage.",
    slug: "botanical-gardens-poongas",
    name: "Visit",
    imageUrl: "/images/visit/botanical-gardens.jpg",
    pageUrl: "/placestovisit",
  },

  // IT SOLUTIONS ##############################################################33

  {
    id: 1,
    title: "IT and Software Development in Chennai",
    description:
      "Chennai's numerous software and IT ecosystems draw young people from all over the world, particularly from India. It promotes the development of products, developing technologies, and a robust startup culture. Chennai is hence a major factor in India's development.",
    slug: "it-and-software-development-in-chennai",
    name: "Explore",
    imageUrl: "/images/explore/it-software-development.jpg",
    pageUrl: "/itandsoftwaredevelopment",
  },
  {
    id: 2,
    title: "Thriving Software Services Sector",
    description:
      "Chennai is home to a wide variety of IT firms whose experts service customers worldwide across several sectors.",
    slug: "thriving-software-services-sector",
    name: "Explore",
    imageUrl: "/images/explore/software-services.jpg",
    pageUrl: "/itandsoftwaredevelopment",
  },
  {
    id: 3,
    title: "Global Outsourcing Destination",
    description:
      "Chennai-based businesses utilize their highly qualified staff and professionals for software development and support services to outsource many projects from all around the world.",
    slug: "global-outsourcing-destination",
    name: "Explore",
    imageUrl: "/images/explore/global-outsourcing.jpg",
    pageUrl: "/itandsoftwaredevelopment",
  },
  {
    id: 4,
    title: "Diverse Service Offerings",
    description:
      "The software business is divided into several domains. From consultation to application development, Chennai software businesses offer all of those services.",
    slug: "diverse-service-offerings",
    name: "Explore",
    imageUrl: "/images/explore/service-offerings.jpg",
    pageUrl: "/itandsoftwaredevelopment",
  },
  {
    id: 5,
    title: "Skilled Talent Pool",
    description:
      "Chennai is a popular destination for international businesses due to its highly qualified workforce. Chennai positions itself as a top destination for IT services.",
    slug: "skilled-talent-pool",
    name: "Explore",
    imageUrl: "/images/explore/skilled-talent.jpg",
    pageUrl: "/itandsoftwaredevelopment",
  },
  {
    id: 6,
    title: "Growing Software Product Development",
    description:
      "Beyond services, Chennai also offers product and application development with startups and IT organizations to provide a solution to the domestic and worldwide market.",
    slug: "software-product-development",
    name: "Explore",
    imageUrl: "/images/explore/software-product.jpg",
    pageUrl: "/itandsoftwaredevelopment",
  },
  {
    id: 7,
    title: "Startup Ecosystem Growth",
    description:
      "Chennai's startup community is encouraging the development of original and inventive software to address a range of societal and commercial issues.",
    slug: "startup-ecosystem-growth",
    name: "Explore",
    imageUrl: "/images/explore/startup-ecosystem.jpg",
    pageUrl: "/itandsoftwaredevelopment",
  },
  {
    id: 8,
    title: "Focus on Innovation",
    description:
      "When it comes to their own software, which doesn't exist, or creating a superior one that meets industrial demands, Chennai businesses are always focused on innovation and creativity.",
    slug: "focus-on-innovation",
    name: "Explore",
    imageUrl: "/images/explore/innovation.jpg",
    pageUrl: "/itandsoftwaredevelopment",
  },
  {
    id: 9,
    title: "Catering to Global Markets",
    description:
      "Chennai-developed software is promoted and utilized by both Indian and foreign markets, making it a worldwide application.",
    slug: "catering-to-global-markets",
    name: "Explore",
    imageUrl: "/images/explore/global-markets.jpg",
    pageUrl: "/itandsoftwaredevelopment",
  },
  {
    id: 10,
    title: "Emergence of Niche Technologies",
    description:
      "Niche technologies, including cloud computing, cybersecurity, AI and machine learning, and digital marketing, are growing quickly in Chennai. For qualified experts, this opens up specific options.",
    slug: "niche-technologies",
    name: "Explore",
    imageUrl: "/images/explore/niche-technologies.jpg",
    pageUrl: "/itandsoftwaredevelopment",
  },
  {
    id: 11,
    title: "AI and Machine Learning Advancements",
    description:
      "With businesses creating innovative solutions, Chennai is emerging as a major hub for AI and ML research and development.",
    slug: "ai-and-machine-learning",
    name: "Explore",
    imageUrl: "/images/explore/ai-ml.jpg",
    pageUrl: "/itandsoftwaredevelopment",
  },
  {
    id: 12,
    title: "Cloud Computing Adoption",
    description:
      "The growing use of cloud technology by Chennai businesses has increased the need for knowledge of cloud platforms and services.",
    slug: "cloud-computing-adoption",
    name: "Explore",
    imageUrl: "/images/explore/cloud-computing.jpg",
    pageUrl: "/itandsoftwaredevelopment",
  },
  {
    id: 13,
    title: "Cybersecurity Focus",
    description:
      "Chennai's IT industry is putting more of an emphasis on cybersecurity due to the rise in digital threats, which is opening doors for experts in this vital field.",
    slug: "cybersecurity-focus",
    name: "Explore",
    imageUrl: "/images/explore/cybersecurity.jpg",
    pageUrl: "/itandsoftwaredevelopment",
  },

  // ITREATE ##############################################################33

  {
    id: 101,
    title: "Revealing the Historical Tapestry",
    description:
      "Spend some time exploring the city's origins through heritage buildings, iconic sites, and cultural events.",
    slug: "historical-tapestry",
    name: "Visit",
    imageUrl: "/images/visit/historical-tapestry.jpg",
    pageUrl: "/itinerary",
  },
  {
    id: 102,
    title: "Feeling the Current Flow",
    description:
      "Get lost in Chennai's contemporary beat—from lively beaches and bustling hubs to tranquil green spaces.",
    slug: "current-flow",
    name: "Live",
    imageUrl: "/images/live/current-flow.jpg",
    pageUrl: "/itinerary",
  },
  {
    id: 103,
    title: "Enjoying the Cultural Palette",
    description:
      "Discover Chennai’s creative spirit with vibrant shows, artsy alleys, and immersive crafts.",
    slug: "cultural-palette",
    name: "Culture",
    imageUrl: "/images/culture/cultural-palette.jpg",
    pageUrl: "/itinerary",
  },
  {
    id: 104,
    title: "Super Chennai",
    description:
      "Explore the dynamic energy and larger-than-life personality of the city in full glory.",
    slug: "super-chennai",
    name: "Live",
    imageUrl: "/images/live/super-chennai.jpg",
    pageUrl: "/itinerary",
  },
  {
    id: 105,
    title: "Social Chennai",
    description:
      "Engage with Chennai's social scene—its people, trends, events, and community vibe.",
    slug: "social-chennai",
    name: "Live",
    imageUrl: "/images/live/social-chennai.jpg",
    pageUrl: "/itinerary",
  },

  // ARTIFICILA INTELIGENCE ###########################################################################

  {
    id: 14,
    title: "Artificial Intelligence and Machine Learning in Chennai",
    description:
      "Chennai is becoming a well-known destination for AI and ML. It has a robust talent pool that develops via analysis and research inside the ecosystem. There are more chances in this innovative industry in Chennai.",
    slug: "ai-ml-in-chennai",
    name: "Explore",
    imageUrl: "/images/explore/ai-ml-chennai.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 15,
    title: "Growing Research & Development in AI",
    description:
      "Academic institutes in Chennai that specialize in artificial intelligence and machine learning are actively engaged in research in a number of areas for both theoretical and practical reasons.",
    slug: "ai-research-development",
    name: "Explore",
    imageUrl: "/images/explore/ai-research.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 16,
    title: "Strong Academic Foundation",
    description:
      "To build strong, bright individuals in research and development, universities in Chennai provide a range of internships, webinars, and programs in this area.",
    slug: "strong-academic-foundation",
    name: "Explore",
    imageUrl: "/images/explore/academic-foundation.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 17,
    title: "Dedicated Research Institutions",
    description:
      "Through partnerships and efforts, there are a few Chennai-based institutions that are primarily focused on research rather than training.",
    slug: "dedicated-research-institutions",
    name: "Explore",
    imageUrl: "/images/explore/research-institutions.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 18,
    title: "Industry-Academia Collaboration",
    description:
      "To help students gain a deeper understanding and expertise in this sector, several academies are working with businesses to provide them with real-world working experts.",
    slug: "industry-academia-collaboration",
    name: "Explore",
    imageUrl: "/images/explore/industry-academia.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 19,
    title: "Growing Industry Adoption of AI and ML",
    description:
      "Recently developed, artificial intelligence is also a popular technology. AI technology is used in many industries, including digital marketing, healthcare, finance, and information technology, to enhance decision-making and maintain company trends.",
    slug: "ai-ml-industry-adoption",
    name: "Explore",
    imageUrl: "/images/explore/ai-industry.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 20,
    title: "Integration of the IT Sector",
    description:
      "In order to provide their customers the best possible service, a number of Chennai-based IT organizations integrate AI and ML into their service offerings.",
    slug: "ai-ml-it-integration",
    name: "Explore",
    imageUrl: "/images/explore/ai-it-integration.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 21,
    title: "Healthcare Advancements",
    description:
      "Drug research, patient-specific therapy, and diagnostics are all being facilitated by this technology.",
    slug: "ai-healthcare-advancements",
    name: "Explore",
    imageUrl: "/images/explore/ai-healthcare.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 22,
    title: "Innovation in Financial Services",
    description:
      "AI and ML are also connected with financial services to improve customer service, analyze risk, and detect fraud.",
    slug: "ai-financial-innovation",
    name: "Explore",
    imageUrl: "/images/explore/ai-fintech.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 23,
    title: "Expanding AI and ML Startup Ecosystem",
    description:
      "Numerous artificial intelligence and machine learning firms are emerging to provide cutting-edge solutions in this field of technology in an effort to maintain Chennai on the cutting edge.",
    slug: "ai-ml-startup-ecosystem",
    name: "Explore",
    imageUrl: "/images/explore/ai-startups.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 24,
    title: "Rise of AI-Native Companies",
    description:
      "A growing number of companies in Chennai are focusing on machine learning and artificial intelligence technology.",
    slug: "ai-native-companies",
    name: "Explore",
    imageUrl: "/images/explore/ai-native.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 25,
    title: "Investment in AI Innovation",
    description:
      "Given its significance for the future, a lot of investors express interest in funding AI and ML technologies.",
    slug: "investment-in-ai",
    name: "Explore",
    imageUrl: "/images/explore/ai-investment.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 26,
    title: "Emphasis on Real-World Applications",
    description:
      "Chennai-based AI and ML firms are creating workable answers to a range of problems in diverse sectors.",
    slug: "real-world-ai-applications",
    name: "Explore",
    imageUrl: "/images/explore/ai-applications.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },

  // HIIDEN GEMS ##############################################################33

  {
    id: 200,
    title: "HIDDEN GEMS",
    description:
      "There is a network of hidden gems beyond the busy streets and famous sites, just waiting for the inquisitive mind to find them. Away from the typical tourist routes, these hidden jewels provide a window into the true spirit of Chennai, showcasing quiet areas, surprising artistic talent, and regional charm.",
    slug: "hidden-gems",
    name: "Explore",
    imageUrl: "/images/explore/hidden-gems.jpg",
    pageUrl: "/hiddengems",
  },
  {
    id: 201,
    title: "DISCOVER HIDDEN GREEN",
    description:
      "Discover hidden green areas that provide peaceful times for reflection and take in the beauty of nature.",
    slug: "discover-hidden-green",
    name: "Explore",
    imageUrl: "/images/explore/hidden-green.jpg",
    pageUrl: "/hiddengems",
  },
  {
    id: 202,
    title: "CALM WATERWAYS",
    description:
      "Discover peace in lesser-known backwaters or canals, which may provide unusual city views.",
    slug: "calm-waterways",
    name: "Explore",
    imageUrl: "/images/explore/calm-waterways.jpg",
    pageUrl: "/hiddengems",
  },
  {
    id: 203,
    title: "QUIET CORNERS OF HISTORY",
    description:
      "Discover lesser-known historical locations that seem ageless and serene.",
    slug: "quiet-corners-of-history",
    name: "Explore",
    imageUrl: "/images/explore/quiet-history.jpg",
    pageUrl: "/hiddengems",
  },
  {
    id: 204,
    title: "UNEXPECTED CREATIVE EXPRESSIONS",
    description:
      "Experience the unadulterated and unrefined forms of creativity.",
    slug: "unexpected-creative-expressions",
    name: "Explore",
    imageUrl: "/images/explore/unexpected-creative.jpg",
    pageUrl: "/hiddengems",
  },
  {
    id: 205,
    title: "OFFBEAT GALLERIES",
    description:
      "Find tiny, independent art galleries that display unusual pieces and up-and-coming artists.",
    slug: "offbeat-galleries",
    name: "Explore",
    imageUrl: "/images/explore/offbeat-galleries.jpg",
    pageUrl: "/hiddengems",
  },
  {
    id: 206,
    title: "STREET ART SURPRISES",
    description:
      "Look for colorful murals and installations that surprisingly change the look of cities.",
    slug: "street-art-surprises",
    name: "Explore",
    imageUrl: "/images/explore/street-art.jpg",
    pageUrl: "/hiddengems",
  },
  {
    id: 207,
    title: "HIDDEN CRAFT HAVENS",
    description:
      "Find workshops or studios where traditional craftspeople discreetly hone their complex techniques.",
    slug: "hidden-craft-havens",
    name: "Explore",
    imageUrl: "/images/explore/craft-havens.jpg",
    pageUrl: "/hiddengems",
  },
  {
    id: 208,
    title: "LOCAL FLAVORS AND DISCOVERIES",
    description: "Indulge in the city's genuine flavors and sensations.",
    slug: "local-flavors-discoveries",
    name: "Explore",
    imageUrl: "/images/explore/local-flavors.jpg",
    pageUrl: "/hiddengems",
  },
  {
    id: 209,
    title: "NEIGHBORHOOD RESTAURANTS",
    description:
      "Explore your neighborhood to find casual eateries offering genuinely regional fare.",
    slug: "neighborhood-restaurants",
    name: "Explore",
    imageUrl: "/images/explore/neighborhood-restaurants.jpg",
    pageUrl: "/hiddengems",
  },
  {
    id: 210,
    title: "LOCAL MARKETS",
    description:
      "Explore lively, smaller markets that are teeming with distinctive local goods, vegetables, and daily life.",
    slug: "local-markets",
    name: "Explore",
    imageUrl: "/images/explore/local-markets.jpg",
    pageUrl: "/hiddengems",
  },
  {
    id: 211,
    title: "COMMUNITY MEETING PLACES",
    description:
      "Look for those quiet spots where people congregate and share a true piece of Chennai's social life.",
    slug: "community-meeting-places",
    name: "Explore",
    imageUrl: "/images/explore/community-places.jpg",
    pageUrl: "/hiddengems",
  },

  //   Shopping ##################################################################################

  {
    id: 300,
    title: "SHOPPING",
    description:
      "Take a sensory tour of Chennai's bustling retail region, where modern and traditional styles coexist to provide a wide range of treasures. The city welcomes you to locate one-of-a-kind treasures and satiate your cravings, from vibrant marketplaces resonating with regional craftsmanship to modern retreats exhibiting international trends.",
    slug: "shopping",
    name: "Explore",
    imageUrl: "/images/explore/shopping.jpg",
    pageUrl: "/shopping",
  },
  {
    id: 301,
    title: "EXPLORE ARTISAN HUBS",
    description:
      "Take in the region's great artistic talents by exploring lively marketplaces and special areas filled with handcrafted items.",
    slug: "explore-artisan-hubs",
    name: "Explore",
    imageUrl: "/images/explore/artisan-hubs.jpg",
    pageUrl: "/shopping",
  },
  {
    id: 302,
    title: "LOCATE CLASSIC TEXTILES",
    description:
      "Enter a world of gorgeous textiles and traditional attire, each of which tells a tale of skill and tradition.",
    slug: "locate-classic-textiles",
    name: "Explore",
    imageUrl: "/images/explore/classic-textiles.jpg",
    pageUrl: "/shopping",
  },
  {
    id: 303,
    title: "EXPLORE RETAIL SANCTUARIES",
    description:
      "Explore contemporary retail centers and malls that include a variety of national and international brands.",
    slug: "explore-retail-sanctuaries",
    name: "Explore",
    imageUrl: "/images/explore/retail-sanctuaries.jpg",
    pageUrl: "/shopping",
  },
  {
    id: 304,
    title: "WELCOMING LIFESTYLE TRAVEL DESTINATIONS",
    description:
      "Discover carefully chosen areas that provide a whole experience by combining food, entertainment, and shopping.",
    slug: "welcoming-lifestyle-destinations",
    name: "Explore",
    imageUrl: "/images/explore/lifestyle-destinations.jpg",
    pageUrl: "/shopping",
  },
  {
    id: 305,
    title: "DISCOVER LOCAL TREASURES",
    description:
      "Look for smaller stores and local markets that sell distinctive, frequently homemade goods with a distinctively local flair.",
    slug: "discover-local-treasures",
    name: "Explore",
    imageUrl: "/images/explore/local-treasures.jpg",
    pageUrl: "/shopping",
  },
  {
    id: 306,
    title: "SAVOR EDIBLE SOUVENIRS",
    description:
      "Learn about local specialties and cuisines that provide a flavor of Chennai that you could bring home.",
    slug: "savor-edible-souvenirs",
    name: "Explore",
    imageUrl: "/images/explore/edible-souvenirs.jpg",
    pageUrl: "/shopping",
  },

  //   ELECTRICAL CHENNAI ##############################################################33

  {
    id: 14,
    title: "Artificial Intelligence and Machine Learning in Chennai",
    description:
      "Chennai is becoming a well-known destination for AI and ML. It has a robust talent pool that develops via analysis and research inside the ecosystem. There are more chances in this innovative industry in Chennai.",
    slug: "ai-ml-in-chennai",
    name: "Explore",
    imageUrl: "/images/explore/ai-ml-chennai.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 15,
    title: "Growing Research & Development in AI",
    description:
      "Academic institutes in Chennai that specialize in artificial intelligence and machine learning are actively engaged in research in a number of areas for both theoretical and practical reasons.",
    slug: "ai-research-development",
    name: "Explore",
    imageUrl: "/images/explore/ai-research.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 16,
    title: "Strong Academic Foundation",
    description:
      "To build strong, bright individuals in research and development, universities in Chennai provide a range of internships, webinars, and programs in this area.",
    slug: "strong-academic-foundation",
    name: "Explore",
    imageUrl: "/images/explore/academic-foundation.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 17,
    title: "Dedicated Research Institutions",
    description:
      "Through partnerships and efforts, there are a few Chennai-based institutions that are primarily focused on research rather than training.",
    slug: "dedicated-research-institutions",
    name: "Explore",
    imageUrl: "/images/explore/research-institutions.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 18,
    title: "Industry-Academia Collaboration",
    description:
      "To help students gain a deeper understanding and expertise in this sector, several academies are working with businesses to provide them with real-world working experts.",
    slug: "industry-academia-collaboration",
    name: "Explore",
    imageUrl: "/images/explore/industry-academia.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 19,
    title: "Growing Industry Adoption of AI and ML",
    description:
      "Recently developed, artificial intelligence is also a popular technology. AI technology is used in many industries, including digital marketing, healthcare, finance, and information technology, to enhance decision-making and maintain company trends.",
    slug: "ai-ml-industry-adoption",
    name: "Explore",
    imageUrl: "/images/explore/ai-industry.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 20,
    title: "Integration of the IT Sector",
    description:
      "In order to provide their customers the best possible service, a number of Chennai-based IT organizations integrate AI and ML into their service offerings.",
    slug: "ai-ml-it-integration",
    name: "Explore",
    imageUrl: "/images/explore/ai-it-integration.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 21,
    title: "Healthcare Advancements",
    description:
      "Drug research, patient-specific therapy, and diagnostics are all being facilitated by this technology.",
    slug: "ai-healthcare-advancements",
    name: "Explore",
    imageUrl: "/images/explore/ai-healthcare.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 22,
    title: "Innovation in Financial Services",
    description:
      "AI and ML are also connected with financial services to improve customer service, analyze risk, and detect fraud.",
    slug: "ai-financial-innovation",
    name: "Explore",
    imageUrl: "/images/explore/ai-fintech.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 23,
    title: "Expanding AI and ML Startup Ecosystem",
    description:
      "Numerous artificial intelligence and machine learning firms are emerging to provide cutting-edge solutions in this field of technology in an effort to maintain Chennai on the cutting edge.",
    slug: "ai-ml-startup-ecosystem",
    name: "Explore",
    imageUrl: "/images/explore/ai-startups.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 24,
    title: "Rise of AI-Native Companies",
    description:
      "A growing number of companies in Chennai are focusing on machine learning and artificial intelligence technology.",
    slug: "ai-native-companies",
    name: "Explore",
    imageUrl: "/images/explore/ai-native.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 25,
    title: "Investment in AI Innovation",
    description:
      "Given its significance for the future, a lot of investors express interest in funding AI and ML technologies.",
    slug: "investment-in-ai",
    name: "Explore",
    imageUrl: "/images/explore/ai-investment.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  {
    id: 26,
    title: "Emphasis on Real-World Applications",
    description:
      "Chennai-based AI and ML firms are creating workable answers to a range of problems in diverse sectors.",
    slug: "real-world-ai-applications",
    name: "Explore",
    imageUrl: "/images/explore/ai-applications.jpg",
    pageUrl: "/artificialintelligenceandmachinelearning",
  },
  //   TRAVEL TIP ##################################################################################

  {
    id: 301,
    title: "Embracing the Local Rhythm",
    description:
      "Your experience will be enhanced if you comprehend the city's rhythm.",
    slug: "embracing-local-rhythm",
    name: "Travel Tips",
    imageUrl: "/images/traveltips/local-rhythm.jpg",
    pageUrl: "/traveltips",
  },
  {
    id: 302,
    title: "Getting About",
    description:
      "Learn about the several ways to get about, such as public transportation and local ride-hailing services, and make plans appropriately for effective travel.",
    slug: "getting-about",
    name: "Travel Tips",
    imageUrl: "/images/traveltips/getting-about.jpg",
    pageUrl: "/traveltips",
  },
  {
    id: 303,
    title: "Getting Used to the Climate",
    description:
      "Take note of the tropical climate, pack for warmth and humidity, and drink plenty of water while exploring.",
    slug: "climate-awareness",
    name: "Travel Tips",
    imageUrl: "/images/traveltips/climate.jpg",
    pageUrl: "/traveltips",
  },
  {
    id: 304,
    title: "Getting Involved with Local Customs",
    description:
      "A basic awareness of local customs and manners can promote constructive relationships and a greater level of cultural immersion.",
    slug: "local-customs",
    name: "Travel Tips",
    imageUrl: "/images/traveltips/customs.jpg",
    pageUrl: "/traveltips",
  },
  {
    id: 305,
    title: "Enhancing Your Exploration",
    description: "Going beyond the obvious will unlock a richer experience.",
    slug: "enhance-exploration",
    name: "Travel Tips",
    imageUrl: "/images/traveltips/exploration.jpg",
    pageUrl: "/traveltips",
  },
  {
    id: 306,
    title: "Investigating Diverse Neighborhoods",
    description:
      "Go outside of the popular tourist destinations to find the distinct personality and allure of other smaller villages.",
    slug: "diverse-neighborhoods",
    name: "Travel Tips",
    imageUrl: "/images/traveltips/neighborhoods.jpg",
    pageUrl: "/traveltips",
  },
  {
    id: 307,
    title: "Enjoying Local Flavors",
    description:
      "Use your taste buds to their full potential and discover the real food scene, which includes both classic restaurants and street food.",
    slug: "local-flavors",
    name: "Travel Tips",
    imageUrl: "/images/traveltips/food.jpg",
    pageUrl: "/traveltips",
  },
  {
    id: 308,
    title: "Connecting with Local Insights",
    description:
      "For a more authentic and off-the-beaten-path experience, don't be afraid to ask locals for advice and suggestions.",
    slug: "local-insights",
    name: "Travel Tips",
    imageUrl: "/images/traveltips/local-insights.jpg",
    pageUrl: "/traveltips",
  },
  //   Wellness ##################################################################################

  {
    id: 400,
    title: "WELLNESS",
    description:
      "Your inner peace can be found in a haven amidst Chennai's vibrant pulse. Explore opportunities to re-energize yourself, achieving balance and energy in this dynamic city.",
    slug: "wellness",
    name: "Explore",
    imageUrl: "/images/explore/wellness.jpg",
    pageUrl: "/wellness",
  },
  {
    id: 401,
    title: "EXPLORE AGELESS HEALING",
    description:
      "Take part in traditional healing practices that promote bodily equilibrium and renewal.",
    slug: "explore-ageless-healing",
    name: "Explore",
    imageUrl: "/images/explore/ageless-healing.jpg",
    pageUrl: "/wellness",
  },
  {
    id: 402,
    title: "ACCEPT CONTEMPORARY SANCTUARIES",
    description:
      "Learn about modern retreats devoted to calming the body and relieving stress.",
    slug: "accept-contemporary-sanctuaries",
    name: "Explore",
    imageUrl: "/images/explore/contemporary-sanctuaries.jpg",
    pageUrl: "/wellness",
  },
  {
    id: 403,
    title: "LOCATE YOUR CENTER",
    description:
      "Examine techniques that promote mindfulness and develop a serene concentration while navigating the bustle of the city.",
    slug: "locate-your-center",
    name: "Explore",
    imageUrl: "/images/explore/locate-center.jpg",
    pageUrl: "/wellness",
  },
  {
    id: 404,
    title: "LOOK FOR PEACEFUL MOMENTS",
    description:
      "Find calm areas of Chennai that provide comfort and chances for introspection.",
    slug: "look-for-peaceful-moments",
    name: "Explore",
    imageUrl: "/images/explore/peaceful-moments.jpg",
    pageUrl: "/wellness",
  },
  {
    id: 405,
    title: "SERENE ATMOSPHERE",
    description:
      "Experience the city's holy locations and cultural centers as you immerse yourself in cultural tranquility.",
    slug: "serene-atmosphere",
    name: "Explore",
    imageUrl: "/images/explore/serene-atmosphere.jpg",
    pageUrl: "/wellness",
  },
  {
    id: 406,
    title: "DISCOVER REVITALIZING RETREATS",
    description:
      "Discover healing havens that provide holistic experiences for well-being on the outskirts of Chennai.",
    slug: "discover-revitalizing-retreats",
    name: "Explore",
    imageUrl: "/images/explore/revitalizing-retreats.jpg",
    pageUrl: "/wellness",
  },

  // events###############################################################33

  {
    id: 401,
    title: "Experience Enchanting Performances",
    description:
      "Immerse yourself in the wonder of live events, ranging from classic dances and musical concerts to stage plays.",
    slug: "enchanting-performances",
    name: "Events",
    imageUrl: "/images/events/performances.jpg",
    pageUrl: "/events",
  },
  {
    id: 402,
    title: "Discover Artistic Exhibitions",
    description:
      "Uncover showcases and displays that feature the varied skills of local and traveling artists.",
    slug: "artistic-exhibitions",
    name: "Events",
    imageUrl: "/images/events/exhibitions.jpg",
    pageUrl: "/events",
  },
  {
    id: 403,
    title: "Engage in Vibrant Assemblies",
    description:
      "Participate in festivals and local events that unite individuals in joy and fellowship.",
    slug: "vibrant-assemblies",
    name: "Events",
    imageUrl: "/images/events/assemblies.jpg",
    pageUrl: "/events",
  },
  {
    id: 404,
    title: "Explore Distinct Local Events",
    description:
      "Find smaller, community-focused gatherings that provide a genuine glimpse into Chennai's social scene.",
    slug: "local-events",
    name: "Events",
    imageUrl: "/images/events/local-events.jpg",
    pageUrl: "/events",
  },
  {
    id: 405,
    title: "Engage in Cultural Festivities",
    description:
      "Dive into occasions that showcase the area's distinct traditions, practices, and artistic expressions.",
    slug: "cultural-festivities",
    name: "Events",
    imageUrl: "/images/events/culture.jpg",
    pageUrl: "/events",
  },
  {
    id: 406,
    title: "Participate in Knowledge Discussions",
    description:
      "Go to seminars, workshops, and lectures that encourage learning and exchanging thoughts.",
    slug: "knowledge-discussions",
    name: "Events",
    imageUrl: "/images/events/knowledge.jpg",
    pageUrl: "/events",
  },

  // Conferences ###############################################################33

  {
    id: 500,
    title: "CONFERENCES",
    description:
      "Chennai is a significant hub for a wide range of conferences, promoting knowledge sharing and career development across multiple industries. These meetings provide essential chances for people and organizations to network, exchange insights, and aid in progress within their specific sectors.",
    slug: "conferences",
    name: "Explore",
    imageUrl: "/images/explore/conferences.jpg",
    pageUrl: "/conferences",
  },
  {
    id: 501,
    title: "IN-DEPTH EXPLORATION OF SPECIALIZED SUBJECTS",
    description:
      "Participate in specialized conferences that explore the details of specific industries, technologies, or academic fields.",
    slug: "specialized-subjects",
    name: "Explore",
    imageUrl: "/images/explore/specialized-subjects.jpg",
    pageUrl: "/conferences",
  },
  {
    id: 502,
    title: "DISCOVER NEW TRENDS",
    description:
      "Acquire knowledge about the newest advancements, research discoveries, and changing best practices relevant to your area of interest.",
    slug: "discover-new-trends",
    name: "Explore",
    imageUrl: "/images/explore/new-trends.jpg",
    pageUrl: "/conferences",
  },
  {
    id: 503,
    title: "ENGAGE WITH SIMILAR PROFESSIONALS",
    description:
      "Establish important connections with coworkers, mentors, and prospective partners from various backgrounds.",
    slug: "engage-professionals",
    name: "Explore",
    imageUrl: "/images/explore/engage-professionals.jpg",
    pageUrl: "/conferences",
  },
  {
    id: 504,
    title: "BROADER PROFESSIONAL NETWORK",
    description:
      "Connect with leaders in the industry, researchers, and innovators to create new opportunities and collaborations.",
    slug: "broader-network",
    name: "Explore",
    imageUrl: "/images/explore/broader-network.jpg",
    pageUrl: "/conferences",
  },
  {
    id: 505,
    title: "MAKE A DIFFERENCE",
    description:
      "Participate in conversations that tackle existing issues and investigate possible solutions, shaping the future of your industry.",
    slug: "make-a-difference",
    name: "Explore",
    imageUrl: "/images/explore/make-a-difference.jpg",
    pageUrl: "/conferences",
  },
  {
    id: 506,
    title: "ACQUIRE INTERDISCIPLINARY INSIGHTS",
    description:
      "Participate in conferences that connect various fields of knowledge, enhancing understanding and motivating innovative solutions to intricate challenges.",
    slug: "interdisciplinary-insights",
    name: "Explore",
    imageUrl: "/images/explore/interdisciplinary-insights.jpg",
    pageUrl: "/conferences",
  },

  // REAL ESATE ##################################################################################

  {
    id: 501,
    title: "Explore Emerging Residential Hubs",
    description:
      "Invest in these desirable residential regions by purchasing a home there. These neighborhoods are renowned for their first-rate amenities, high property values, and significant appreciation.",
    slug: "emerging-residential-hubs",
    name: "Invest",
    imageUrl: "/images/invest/emerging-hubs.jpg",
    pageUrl: "/investrealestatechennai",
  },
  {
    id: 502,
    title: "OMR (Old Mahabalipuram Road)",
    description:
      "Many employees will search for rental homes because OMR is an IT corridor, so you may rent out your home.",
    slug: "omr",
    name: "Invest",
    imageUrl: "/images/invest/omr.jpg",
    pageUrl: "/investrealestatechennai",
  },
  {
    id: 503,
    title: "Perumbakkam",
    description:
      "There is also good connection in this location, and you may offer your home for a reasonable price.",
    slug: "perumbakkam",
    name: "Invest",
    imageUrl: "/images/invest/perumbakkam.jpg",
    pageUrl: "/investrealestatechennai",
  },
  {
    id: 504,
    title: "Pallikaranai",
    description:
      "There is an increasing demand for rental housing here because of its proximity to the airport and IT parks.",
    slug: "pallikaranai",
    name: "Invest",
    imageUrl: "/images/invest/pallikaranai.jpg",
    pageUrl: "/investrealestatechennai",
  },
  {
    id: 505,
    title: "Maraimalai Nagar",
    description:
      "The demand for homes in this region has increased since the municipality was expanding.",
    slug: "maraimalai-nagar",
    name: "Invest",
    imageUrl: "/images/invest/maraimalai-nagar.jpg",
    pageUrl: "/investrealestatechennai",
  },
  {
    id: 506,
    title: "Oragadam",
    description:
      "This is an industrial and manufacturing region, in order for the employees to search for rental homes.",
    slug: "oragadam",
    name: "Invest",
    imageUrl: "/images/invest/oragadam.jpg",
    pageUrl: "/investrealestatechennai",
  },

  //   Invest in Franchise in Chennai###################################################################33

  {
    id: 600,
    title: "INVEST IN FRANCHISE IN CHENNAI",
    description:
      "To increase their brand recognition, several brands open franchises across Chennai. In Chennai, several businesses are seeking investors to build franchises and offer training to operate them.",
    slug: "franchise-investment",
    name: "Invest",
    imageUrl: "/images/invest/franchise.jpg",
    pageUrl: "/investfranchisechennai",
  },
  {
    id: 601,
    title: "FOOD AND BEVERAGE BRANDS",
    description:
      "You can choose a reputable franchise of food and beverage businesses in Chennai's culinary sector, and you can make money with a track record of success.",
    slug: "food-beverage-franchise",
    name: "Invest",
    imageUrl: "/images/invest/food-beverage.jpg",
    pageUrl: "/investfranchisechennai",
  },
  {
    id: 602,
    title: "QUICK-SERVICE RESTAURANTS",
    description:
      "Since investing in the food industry is scorching, you could discover a franchise and begin operating it effectively.",
    slug: "quick-service",
    name: "Invest",
    imageUrl: "/images/invest/quick-service.jpg",
    pageUrl: "/investfranchisechennai",
  },
  {
    id: 603,
    title: "COFFEE SHOPS AND CAFES",
    description:
      "By offering a range of coffees, you could lure coffee lovers and market your franchise to them.",
    slug: "coffee-cafes",
    name: "Invest",
    imageUrl: "/images/invest/coffee-cafes.jpg",
    pageUrl: "/investfranchisechennai",
  },
  {
    id: 604,
    title: "ICE CREAM AND DESSERT SHOPS",
    description: "Chennai City's clientele for ice cream and sweets is varied.",
    slug: "ice-cream-desserts",
    name: "Invest",
    imageUrl: "/images/invest/ice-cream.jpg",
    pageUrl: "/investfranchisechennai",
  },
  {
    id: 605,
    title: "FOOD OUTLETS",
    description:
      "For a higher return on investment, open your business in areas where a lot of people congregate, including malls and high streets.",
    slug: "food-outlets",
    name: "Invest",
    imageUrl: "/images/invest/food-outlets.jpg",
    pageUrl: "/investfranchisechennai",
  },
  {
    id: 606,
    title: "FASHION & APPAREL RETAIL",
    description:
      "In Chennai, many people get dependent on stylish clothing to keep themselves presentable. This will be the ideal investment choice.",
    slug: "fashion-retail",
    name: "Invest",
    imageUrl: "/images/invest/fashion-retail.jpg",
    pageUrl: "/investfranchisechennai",
  },
  {
    id: 607,
    title: "RESIDENTIAL EDUCATION AND TUTORING SERVICES",
    description:
      "A lot of tutoring centers franchise their brand to charge tuition to all schoolchildren in order to give them a quality education and to build their reputation.",
    slug: "tutoring-services",
    name: "Invest",
    imageUrl: "/images/invest/tutoring.jpg",
    pageUrl: "/investfranchisechennai",
  },
  {
    id: 608,
    title: "HEALTH AND WELLNESS CENTERS",
    description:
      "If you want to work with a franchise and offer fitness and well-being to people in Chennai, pick health and wellness centers in residential and commercial locations.",
    slug: "wellness-centers",
    name: "Invest",
    imageUrl: "/images/invest/wellness.jpg",
    pageUrl: "/investfranchisechennai",
  },
  {
    id: 609,
    title: "BEAUTY AND PERSONAL CARE SERVICES",
    description: "Meet the need for grooming and self-care in these locations.",
    slug: "beauty-personal-care",
    name: "Invest",
    imageUrl: "/images/invest/beauty-care.jpg",
    pageUrl: "/investfranchisechennai",
  },
  {
    id: 610,
    title: "RESIDENTIAL PET CARE SERVICES",
    description:
      "There are a lot of pet owners in the Chennai area. You can run a profitable franchise if you open one in a residential location.",
    slug: "pet-care-franchise",
    name: "Invest",
    imageUrl: "/images/invest/pet-care.jpg",
    pageUrl: "/investfranchisechennai",
  },
  {
    id: 611,
    title: "OLDER CARE SERVICES",
    description:
      "You could be able to launch a franchise in residential regions by catering to the increasing demands of older persons.",
    slug: "elder-care",
    name: "Invest",
    imageUrl: "/images/invest/elder-care.jpg",
    pageUrl: "/investfranchisechennai",
  },
  {
    id: 612,
    title: "SUSTAINABLE AND ECO-FRIENDLY COMPANIES",
    description:
      "Leverage franchising to capitalize on growing environmental consciousness.",
    slug: "eco-franchise",
    name: "Invest",
    imageUrl: "/images/invest/eco-friendly.jpg",
    pageUrl: "/investfranchisechennai",
  },
  {
    id: 613,
    title: "REPAIR AND MAINTENANCE SERVICES",
    description:
      "Offer necessary solutions for home and organization maintenance.",
    slug: "repair-maintenance",
    name: "Invest",
    imageUrl: "/images/invest/repair.jpg",
    pageUrl: "/investfranchisechennai",
  },

  // INVERTS CHENNAI ###############################################################33

  {
    id: 601,
    title: "Emerging Tech Sectors",
    description:
      "If you provide exceptional customer service, investing your money to launch new businesses in technology-related disciplines will generate revenue.",
    slug: "emerging-tech-sectors",
    name: "Invest",
    imageUrl: "/images/invest/startups/emerging-tech.jpg",
    pageUrl: "/investstartupschennai",
  },
  {
    id: 602,
    title: "SaaS",
    description:
      "Software development is a one-time expenditure. However, it can provide you with lifetime income.",
    slug: "saas",
    name: "Invest",
    imageUrl: "/images/invest/startups/saas.jpg",
    pageUrl: "/investstartupschennai",
  },
  {
    id: 603,
    title: "Health",
    description:
      "As the healthcare sector expands, opening a business in a medically linked area, like a medical store or blood research facility, will be a wise choice.",
    slug: "health",
    name: "Invest",
    imageUrl: "/images/invest/startups/health.jpg",
    pageUrl: "/investstartupschennai",
  },
  {
    id: 604,
    title: "Fintech",
    description:
      "Establishing a financial business and charging interest will increase revenue.",
    slug: "fintech",
    name: "Invest",
    imageUrl: "/images/invest/startups/fintech.jpg",
    pageUrl: "/investstartupschennai",
  },
  {
    id: 605,
    title: "EdTech",
    description:
      "Aspirants in their desired niches are drawn to academies that deal with both IT and non-IT, TNPSC coaching centers, and tuition centers.",
    slug: "edtech",
    name: "Invest",
    imageUrl: "/images/invest/startups/edtech.jpg",
    pageUrl: "/investstartupschennai",
  },
  {
    id: 606,
    title: "Direct-to-Consumer (D2C) and E-commerce",
    description:
      "Find and fund e-commerce sites that have already amassed a sizable and devoted clientele.",
    slug: "d2c-ecommerce",
    name: "Invest",
    imageUrl: "/images/invest/startups/d2c-ecommerce.jpg",
    pageUrl: "/investstartupschennai",
  },
  {
    id: 607,
    title: "Logistics and Supply Chain Tech",
    description:
      "You can also make investments in logistics and supply chain technology in Chennai, a major metropolis where a lot of people import and export goods.",
    slug: "logistics-supply-chain",
    name: "Invest",
    imageUrl: "/images/invest/startups/logistics.jpg",
    pageUrl: "/investstartupschennai",
  },
  {
    id: 608,
    title: "Consumer Internet Platforms",
    description:
      "Finding and supporting consumer online platforms that have already drawn a sizable user base and shown engagement.",
    slug: "consumer-internet",
    name: "Invest",
    imageUrl: "/images/invest/startups/consumer-platforms.jpg",
    pageUrl: "/investstartupschennai",
  },

  // nvest in Retirement in Chennai ###############################################################33

  {
    id: 701,
    title: "Adyar",
    description:
      "Adyar is a good option if you want a calm environment, green areas, and a laid-back way of life.",
    slug: "adyar",
    name: "Retirement",
    imageUrl: "/images/invest/retirement/adyar.jpg",
    pageUrl: "/investretirementchennai",
  },
  {
    id: 702,
    title: "Anna Nagar",
    description:
      "Anna Nagar is the greatest choice if you're looking for a neighborhood with lots of parks and strong social infrastructure.",
    slug: "anna-nagar",
    name: "Retirement",
    imageUrl: "/images/invest/retirement/anna-nagar.jpg",
    pageUrl: "/investretirementchennai",
  },
  {
    id: 703,
    title: "Besant Nagar",
    description:
      "Reside in coastal communities with beaches, a laid-back atmosphere, and a lovely blend of residential and recreational activities.",
    slug: "besant-nagar",
    name: "Retirement",
    imageUrl: "/images/invest/retirement/besant-nagar.jpg",
    pageUrl: "/investretirementchennai",
  },
  {
    id: 704,
    title: "Nanganallur",
    description:
      "With all the facilities you need and first-rate connections, here is where your tranquil retirement begins.",
    slug: "nanganallur",
    name: "Retirement",
    imageUrl: "/images/invest/retirement/nanganallur.jpg",
    pageUrl: "/investretirementchennai",
  },
  {
    id: 705,
    title: "Mylapore",
    description:
      "Do you have any religious beliefs? Then this Mylapore neighborhood, which has temples and a high standard of life, will be ideal for your traditional rituals.",
    slug: "mylapore",
    name: "Retirement",
    imageUrl: "/images/invest/retirement/mylapore.jpg",
    pageUrl: "/investretirementchennai",
  },
  {
    id: 706,
    title: "Nungambakkam",
    description:
      "It is at a convenient location with easy access to medical facilities and hospitals.",
    slug: "nungambakkam",
    name: "Retirement",
    imageUrl: "/images/invest/retirement/nungambakkam.jpg",
    pageUrl: "/investretirementchennai",
  },
  {
    id: 707,
    title: "Alwarpet",
    description:
      "The top-notch medical facilities are found here. With wellness alternatives, retirement can be enjoyable.",
    slug: "alwarpet",
    name: "Retirement",
    imageUrl: "/images/invest/retirement/alwarpet.jpg",
    pageUrl: "/investretirementchennai",
  },
  {
    id: 708,
    title: "Mandaveli",
    description:
      "Enjoy your retirement by spending time in peace and quiet in Mandhaveli, and indulge in social activities by adopting a traditional neighborhood.",
    slug: "mandaveli",
    name: "Retirement",
    imageUrl: "/images/invest/retirement/mandaveli.jpg",
    pageUrl: "/investretirementchennai",
  },
  {
    id: 709,
    title: "T. Nagar",
    description:
      "T. Nagar offers chances to engage with a variety of temples, parks, and community centers.",
    slug: "t-nagar",
    name: "Retirement",
    imageUrl: "/images/invest/retirement/t-nagar.jpg",
    pageUrl: "/investretirementchennai",
  },
  {
    id: 710,
    title: "Santhome",
    description:
      "Discover a feeling of inclusion in this historically noteworthy neighborhood with a strong religious presence and a tight-knit community.",
    slug: "santhome",
    name: "Retirement",
    imageUrl: "/images/invest/retirement/santhome.jpg",
    pageUrl: "/investretirementchennai",
  },
  // INVERST RENEWABLE ENERGY IN CHENNAI ###############################################################33

  {
    title: "Solar Power Projects",
    description:
      "Invest in solar projects like rooftop installations, ground-mounted solar farms, and solar energy for industrial units to reduce power costs and support sustainable development in Chennai.",
    slug: "solar-power-projects",
    name: "Invest",
    imageUrl: "/images/invest/renewable/solar-power.jpg",
    pageUrl: "/investrenewableenergychennai",
  },
  {
    title: "Rooftop Solar Installations",
    description:
      "Take advantage of government programs to install rooftop solar panels on buildings, helping property owners save on electricity bills.",
    slug: "rooftop-solar",
    name: "Invest",
    imageUrl: "/images/invest/renewable/rooftop-solar.jpg",
    pageUrl: "/investrenewableenergychennai",
  },
  {
    title: "Ground-mounted Solar Farms",
    description:
      "Develop large-scale solar farms to provide clean energy to the grid and create long-term revenue opportunities.",
    slug: "solar-farms",
    name: "Invest",
    imageUrl: "/images/invest/renewable/solar-farm.jpg",
    pageUrl: "/investrenewableenergychennai",
  },
  {
    title: "Solar Power for Industrial Units",
    description:
      "Provide sustainable and cost-effective solar energy solutions to industrial estates in areas like Ambattur, Guindy, and Sriperumbudur.",
    slug: "solar-industrial",
    name: "Invest",
    imageUrl: "/images/invest/renewable/solar-industrial.jpg",
    pageUrl: "/investrenewableenergychennai",
  },
  {
    title: "Hospitals and Educational Institutions",
    description:
      "Support green initiatives in hospitals, medical labs, and educational campuses by providing solar energy solutions.",
    slug: "solar-hospitals-education",
    name: "Invest",
    imageUrl: "/images/invest/renewable/solar-institution.jpg",
    pageUrl: "/investrenewableenergychennai",
  },
  {
    title: "Solar-Powered Water Pumps",
    description:
      "Promote sustainable irrigation by installing solar-powered water pumps in agricultural areas of Chennai.",
    slug: "solar-water-pumps",
    name: "Invest",
    imageUrl: "/images/invest/renewable/solar-pumps.jpg",
    pageUrl: "/investrenewableenergychennai",
  },
  {
    title: "Wind Energy Farms",
    description:
      "Invest in wind farms along the Chennai coast or elevated terrain to harness wind power for clean energy.",
    slug: "wind-energy-farms",
    name: "Invest",
    imageUrl: "/images/invest/renewable/wind-farms.jpg",
    pageUrl: "/investrenewableenergychennai",
  },
  {
    title: "Wind-Solar Hybrid Projects",
    description:
      "Combine solar and wind energy systems to enhance energy production and stabilize the grid.",
    slug: "wind-solar-hybrid",
    name: "Invest",
    imageUrl: "/images/invest/renewable/wind-solar-hybrid.jpg",
    pageUrl: "/investrenewableenergychennai",
  },
  {
    title: "Small Wind Turbines",
    description:
      "Deploy small-scale wind turbines for localized renewable energy generation in coastal or elevated areas.",
    slug: "small-wind-turbines",
    name: "Invest",
    imageUrl: "/images/invest/renewable/small-wind-turbine.jpg",
    pageUrl: "/investrenewableenergychennai",
  },
  {
    title: "Wind Turbine Installation and Maintenance",
    description:
      "Support infrastructure growth by offering installation and maintenance services for industrial wind energy systems.",
    slug: "wind-install-maintenance",
    name: "Invest",
    imageUrl: "/images/invest/renewable/wind-maintenance.jpg",
    pageUrl: "/investrenewableenergychennai",
  },
  {
    title: "Research and Development",
    description:
      "Invest in R&D to improve wind energy technologies in academic and industrial hubs of Chennai.",
    slug: "wind-research",
    name: "Invest",
    imageUrl: "/images/invest/renewable/research-development.jpg",
    pageUrl: "/investrenewableenergychennai",
  },
  {
    title: "Waste-to-Energy",
    description:
      "Explore investment in waste-to-energy projects using municipal solid waste in Chennai's industrial zones.",
    slug: "waste-to-energy",
    name: "Invest",
    imageUrl: "/images/invest/renewable/waste-to-energy.jpg",
    pageUrl: "/investrenewableenergychennai",
  },
  {
    title: "Sustainable and Eco-Friendly Companies",
    description:
      "Support green startups and companies using renewable energy technologies to promote system stability and environmental health.",
    slug: "eco-friendly-companies",
    name: "Invest",
    imageUrl: "/images/invest/renewable/eco-friendly.jpg",
    pageUrl: "/investrenewableenergychennai",
  },

  //   Invest in Government Initiatives in Chennai################################################33

  {
    id: 801,
    title: "Metro Rail Expansion",
    description:
      "Chennai would gain from better public transit and higher property values along metro lines, which will also bring in money for you as an investor.",
    slug: "metro-rail-expansion",
    name: "Government",
    imageUrl: "/images/invest/government/metro.jpg",
    pageUrl: "/investgovernmentinitiativeschennai",
  },
  {
    id: 802,
    title: "New Flyovers and Roads",
    description:
      "Support initiatives to improve commuting times and lessen traffic congestion by building new flyovers and roads.",
    slug: "flyovers-and-roads",
    name: "Government",
    imageUrl: "/images/invest/government/flyovers.jpg",
    pageUrl: "/investgovernmentinitiativeschennai",
  },
  {
    id: 803,
    title: "Drainage and Flood Management",
    description:
      "Enhance the city's resilience and lower the dangers of floods by wastewater management.",
    slug: "drainage-flood-management",
    name: "Government",
    imageUrl: "/images/invest/government/flood.jpg",
    pageUrl: "/investgovernmentinitiativeschennai",
  },
  {
    id: 804,
    title: "Adyar River Restoration",
    description:
      "By improving the city's green areas and attractiveness, you can encourage environmental projects.",
    slug: "adyar-river-restoration",
    name: "Government",
    imageUrl: "/images/invest/government/adyar.jpg",
    pageUrl: "/investgovernmentinitiativeschennai",
  },
  {
    id: 805,
    title: "Multimodal Transportation Hubs",
    description:
      "Take part in hubs that combine different transportation options, such as Guindy.",
    slug: "multimodal-transportation-hubs",
    name: "Government",
    imageUrl: "/images/invest/government/hubs.jpg",
    pageUrl: "/investgovernmentinitiativeschennai",
  },
  {
    id: 806,
    title: "Fintech City Development",
    description:
      "Invest in Chennai's development as a major worldwide center for financial services.",
    slug: "fintech-city",
    name: "Government",
    imageUrl: "/images/invest/government/fintech.jpg",
    pageUrl: "/investgovernmentinitiativeschennai",
  },
  {
    id: 807,
    title: "Aerospace and Defence Park (Sriperumbudur)",
    description:
      "Select the Aerospace and Defense Park (Sriperumbudur) and encourage the growth of the aerospace industry.",
    slug: "aerospace-defence-park",
    name: "Government",
    imageUrl: "/images/invest/government/aerospace.jpg",
    pageUrl: "/investgovernmentinitiativeschennai",
  },
  {
    id: 808,
    title: "Tamil Nadu Defence Industrial Corridor",
    description:
      "You could get your return on investment by investing in research, even in defense management.",
    slug: "defence-industrial-corridor",
    name: "Government",
    imageUrl: "/images/invest/government/defence.jpg",
    pageUrl: "/investgovernmentinitiativeschennai",
  },
  {
    id: 809,
    title: "Micro, Small, and Medium-sized Enterprises (MSMEs)",
    description:
      "Invest in and support small businesses so they may expand and reap future benefits.",
    slug: "msmes",
    name: "Government",
    imageUrl: "/images/invest/government/msme.jpg",
    pageUrl: "/investgovernmentinitiativeschennai",
  },
  {
    id: 810,
    title: "Affordable Housing Projects",
    description:
      "To meet the rising demand for reasonably priced living spaces, they will be built in Chennai's suburbs.",
    slug: "affordable-housing",
    name: "Government",
    imageUrl: "/images/invest/government/housing.jpg",
    pageUrl: "/investgovernmentinitiativeschennai",
  },
  {
    id: 811,
    title: "Healthcare Infrastructure",
    description:
      "Fund projects that promote public health and well-being by enhancements.",
    slug: "healthcare-infrastructure",
    name: "Government",
    imageUrl: "/images/invest/government/healthcare.jpg",
    pageUrl: "/investgovernmentinitiativeschennai",
  },
  {
    id: 812,
    title: "Education and Skill Development",
    description:
      "It helps children in government schools learn; thus, investing here will be the greatest option.",
    slug: "education-skill-development",
    name: "Government",
    imageUrl: "/images/invest/government/education.jpg",
    pageUrl: "/investgovernmentinitiativeschennai",
  },
  {
    id: 813,
    title: "Waste Management",
    description:
      "Projects pertaining to environmental sustainability are carried out in specific areas where you can get involved and take part in initiatives aimed at creating a cleaner, greener city.",
    slug: "waste-management",
    name: "Government",
    imageUrl: "/images/invest/government/waste.jpg",
    pageUrl: "/investgovernmentinitiativeschennai",
  },
  // Invest in Formalities and Regulations in Chennai################################################################33

  {
    title: "Invest in Formalities",
    description:
      "Understand the policies of Chennai City authorities and help residents navigate them. Earn by guiding others through bureaucratic processes.",
    slug: "invest-formalities",
    name: "Invest",
    imageUrl: "/images/invest/formalities/formalities.jpg",
    pageUrl: "/investformalitiesregulationschennai",
  },
  {
    title: "ROC, Chennai-Nungambakkam",
    description:
      "Work with the Registrar of Companies for company registration and compliance. Earn by assisting in form submissions and navigating regulations.",
    slug: "roc-chennai",
    name: "Invest",
    imageUrl: "/images/invest/formalities/roc.jpg",
    pageUrl: "/investformalitiesregulationschennai",
  },
  {
    title: "Guidance Tamil Nadu - Nungambakkam",
    description:
      "Assist with export promotion and industrial guidance through the official Guidance Tamil Nadu agency. Help others register and start businesses.",
    slug: "guidance-tamilnadu",
    name: "Invest",
    imageUrl: "/images/invest/formalities/guidance.jpg",
    pageUrl: "/investformalitiesregulationschennai",
  },
  {
    title: "SIDCO - Guindy",
    description:
      "Support small and medium businesses with formal procedures and earn income by aiding startup entrepreneurs through SIDCO services.",
    slug: "sidco-guindy",
    name: "Invest",
    imageUrl: "/images/invest/formalities/sidco.jpg",
    pageUrl: "/investformalitiesregulationschennai",
  },
  {
    title: "MCA.gov.in",
    description:
      "Use the Ministry of Corporate Affairs portal for company registration and legal formalities. Help others file forms and get paid for your support.",
    slug: "mca-portal",
    name: "Invest",
    imageUrl: "/images/invest/formalities/mca.jpg",
    pageUrl: "/investformalitiesregulationschennai",
  },
  {
    title: "Understanding Tax Compliance",
    description:
      "Learn about business tax laws and compliance. Assist startups in filing taxes accurately and earn through your expertise.",
    slug: "tax-compliance",
    name: "Invest",
    imageUrl: "/images/invest/formalities/tax-compliance.jpg",
    pageUrl: "/investformalitiesregulationschennai",
  },
  {
    title: "Commercial Taxes Department",
    description:
      "Help people understand and register for GST and other state-level taxes through the Commercial Taxes Department.",
    slug: "commercial-taxes",
    name: "Invest",
    imageUrl: "/images/invest/formalities/gst.jpg",
    pageUrl: "/investformalitiesregulationschennai",
  },
  {
    title: "Income Tax Department",
    description:
      "Assist individuals with income tax filings and assessments. Guide them through forms, deadlines, and inquiries.",
    slug: "income-tax",
    name: "Invest",
    imageUrl: "/images/invest/formalities/income-tax.jpg",
    pageUrl: "/investformalitiesregulationschennai",
  },
  {
    title: "Qualified Tax Advisors",
    description:
      "Offer tax advice and compliance support as a qualified advisor. Help others with proper tax filing methods.",
    slug: "tax-advisors",
    name: "Invest",
    imageUrl: "/images/invest/formalities/tax-advisor.jpg",
    pageUrl: "/investformalitiesregulationschennai",
  },
  {
    title: "Online Tax Portals",
    description:
      "Assist with e-filing, payments, and document access via official online tax portals. Save time and streamline the tax process.",
    slug: "online-tax-portals",
    name: "Invest",
    imageUrl: "/images/invest/formalities/online-tax.jpg",
    pageUrl: "/investformalitiesregulationschennai",
  },

  // INVERST NEWS IN CHENNAI ###############################################################33

  {
    id: 901,
    title: "Established Print Media",
    description:
      "Invest in Chennai's magazine and newspaper industries. You can additionally concentrate on funding digital publications.",
    slug: "established-print-media",
    name: "News",
    imageUrl: "/images/invest/news/print-media.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    id: 902,
    title: "Regional Language Newspapers",
    description:
      "Take advantage of the large local following that Tamil news sources enjoy in different locales.",
    slug: "regional-language-newspapers",
    name: "News",
    imageUrl: "/images/invest/news/tamil-news.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    id: 903,
    title: "Print Media's Digital Transformation",
    description:
      "Many young people and businesses are searching for investors to establish their digital news applications and websites.",
    slug: "digital-transformation",
    name: "News",
    imageUrl: "/images/invest/news/digital-media.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    id: 904,
    title: "Specialized Publications",
    description:
      "To boost sales and return on investment, invest in and collaborate with businesses that provide magazines with relevant content.",
    slug: "specialized-publications",
    name: "News",
    imageUrl: "/images/invest/news/specialized.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    id: 905,
    title: "Solutions for Print Media Marketing and Advertising",
    description:
      "In order to market their print media and reach their target audience, some media seek investors.",
    slug: "print-media-marketing",
    name: "News",
    imageUrl: "/images/invest/news/marketing.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    id: 906,
    title: "Expanding Television News Channels",
    description:
      "Invest in Chennai's cutthroat television industry, sponsor them, and expand the audience for the business you represent.",
    slug: "television-news-channels",
    name: "News",
    imageUrl: "/images/invest/news/tv-news.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    id: 907,
    title: "Tamil News Channels",
    description:
      "You can invest in Tamil news outlets that serve sizable audiences because there are a lot of Tamil speakers in this area.",
    slug: "tamil-news-channels",
    name: "News",
    imageUrl: "/images/invest/news/tamil-tv.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    id: 908,
    title: "Business News Channels",
    description:
      "These provide financial reports to businesspeople. If your company is in the business-to-business (B2B) sector, investing here will grow it.",
    slug: "business-news-channels",
    name: "News",
    imageUrl: "/images/invest/news/business-tv.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    id: 909,
    title: "News Channel Streaming",
    description:
      "For a future return on investment, invest in internet or mobile news apps that are already built or in the process of being produced.",
    slug: "news-channel-streaming",
    name: "News",
    imageUrl: "/images/invest/news/streaming.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    id: 910,
    title: "Content Creation for News Channels",
    description:
      "Invest in news channel production and content creation to support top-notch news programming.",
    slug: "news-content-creation",
    name: "News",
    imageUrl: "/images/invest/news/content-creation.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    id: 911,
    title: "Burgeoning Digital News Landscape",
    description:
      "Find chances in Chennai's quickly expanding online news channels by emphasizing audience interaction and creative formats.",
    slug: "digital-news-landscape",
    name: "News",
    imageUrl: "/images/invest/news/digital-growth.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    id: 912,
    title: "Websites and Online News Portals",
    description:
      "You can also help by funding independent journalism that is available around the city.",
    slug: "news-websites-portals",
    name: "News",
    imageUrl: "/images/invest/news/news-websites.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    id: 913,
    title: "Video News Content",
    description:
      "Some individuals will use the growing popularity of videos to post news, and they need your help.",
    slug: "video-news-content",
    name: "News",
    imageUrl: "/images/invest/news/video-news.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    id: 914,
    title: "Data Journalism",
    description:
      "Invest in data journalism and investigative reporting projects to help suppliers of meaningful and in-depth news content.",
    slug: "data-journalism",
    name: "News",
    imageUrl: "/images/invest/news/data-journalism.jpg",
    pageUrl: "/investnewschennai",
  },

  {
    title: "Invest in News",
    description:
      "Support Chennai-based news ventures—both traditional and digital—as they seek investors to expand reach and build innovative platforms.",
    slug: "invest-news",
    name: "Invest",
    imageUrl: "/images/invest/news/invest-news.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "Established Print Media",
    description:
      "Invest in Chennai’s legacy newspapers and magazines, or help them transition to digital platforms to reach wider audiences.",
    slug: "print-media",
    name: "Invest",
    imageUrl: "/images/invest/news/print-media.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "Regional Language Newspapers",
    description:
      "Tamil news outlets have strong local followings. Invest in these to tap into a loyal reader base and regional growth.",
    slug: "regional-language-news",
    name: "Invest",
    imageUrl: "/images/invest/news/regional-news.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "Specialized Publications",
    description:
      "Partner with niche magazine publishers in Chennai to help boost sales and increase your return on investment.",
    slug: "specialized-publications",
    name: "Invest",
    imageUrl: "/images/invest/news/specialized.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "Print Media's Digital Transformation",
    description:
      "Support young entrepreneurs or businesses creating digital news platforms. This space offers high ROI potential.",
    slug: "digital-transformation",
    name: "Invest",
    imageUrl: "/images/invest/news/digital-transformation.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "Marketing and Advertising Solutions for Print Media",
    description:
      "Invest in marketing services that help traditional media outlets reach new digital audiences.",
    slug: "print-marketing",
    name: "Invest",
    imageUrl: "/images/invest/news/marketing.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "Expanding Television News Channels",
    description:
      "Invest in competitive TV news outlets in Chennai to help them expand viewership and modernize their content.",
    slug: "tv-news-channels",
    name: "Invest",
    imageUrl: "/images/invest/news/tv-channels.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "Tamil News Channels",
    description:
      "Tamil news channels cater to a large audience. Investing here means aligning with regional language growth trends.",
    slug: "tamil-news",
    name: "Invest",
    imageUrl: "/images/invest/news/tamil-news.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "Business News Channels",
    description:
      "Back B2B news broadcasters that focus on finance, commerce, and industry to reach a professional audience.",
    slug: "business-news",
    name: "Invest",
    imageUrl: "/images/invest/news/business-news.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "News Channel Streaming",
    description:
      "Fund the creation or expansion of mobile and internet news streaming platforms for future digital returns.",
    slug: "streaming-news",
    name: "Invest",
    imageUrl: "/images/invest/news/streaming.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "Content Creation for News Channels",
    description:
      "Invest in high-quality content production for TV and digital news platforms to improve viewership and engagement.",
    slug: "content-creation-news",
    name: "Invest",
    imageUrl: "/images/invest/news/content-creation.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "Burgeoning Digital News Landscape",
    description:
      "Back digital-first news ventures that focus on interactive content and creative storytelling to capture urban audiences.",
    slug: "digital-news-landscape",
    name: "Invest",
    imageUrl: "/images/invest/news/digital-landscape.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "Websites and Online News Portals",
    description:
      "Support independent news journalism through funding of reliable, unbiased local reporting portals and websites.",
    slug: "news-websites",
    name: "Invest",
    imageUrl: "/images/invest/news/news-sites.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "Video News Content",
    description:
      "Video is a growing format for news consumption. Invest in creators and platforms that prioritize engaging video journalism.",
    slug: "video-news",
    name: "Invest",
    imageUrl: "/images/invest/news/video-news.jpg",
    pageUrl: "/investnewschennai",
  },
  {
    title: "Data Journalism",
    description:
      "Fund data-driven storytelling and investigative reporting initiatives to promote deep, factual journalism in Chennai.",
    slug: "data-journalism",
    name: "Invest",
    imageUrl: "/images/invest/news/data-journalism.jpg",
    pageUrl: "/investnewschennai",
  },

  // invest in Events in Chennai################################################################33

  {
    title: "Invest in Events",
    description:
      "Chennai is home to numerous exciting events that seek investors to help elevate their scale and impact. Discover key opportunities through Super Chennai.",
    slug: "invest-events",
    name: "Invest",
    imageUrl: "/images/invest/events/invest-events.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Vibrant Cultural Celebrations",
    description:
      "Get involved in Chennai’s diverse festivals and cultural events, which attract both locals and tourists with colorful traditions and heritage.",
    slug: "cultural-celebrations",
    name: "Invest",
    imageUrl: "/images/invest/events/cultural-celebrations.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Margazhi Music and Dance Festival (Mylapore)",
    description:
      "Support this traditional event through funding of décor, costumes, performances, and hospitality.",
    slug: "margazhi-festival",
    name: "Invest",
    imageUrl: "/images/invest/events/margazhi.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Chennai Book Fair (Nandambakkam)",
    description:
      "A highly attended literary event. Invest to attract publishers and readers alike.",
    slug: "chennai-book-fair",
    name: "Invest",
    imageUrl: "/images/invest/events/book-fair.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Pongal Celebrations (City-Wide)",
    description:
      "Invest in city-wide festive programs that celebrate Tamil Nadu’s traditional harvest festival.",
    slug: "pongal-celebrations",
    name: "Invest",
    imageUrl: "/images/invest/events/pongal.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Film Festivals (Various Locations)",
    description:
      "Back film festivals across the city that attract large, diverse audiences and promote cinematic art.",
    slug: "film-festivals",
    name: "Invest",
    imageUrl: "/images/invest/events/film-festivals.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Natyanjali Dance Festival (Chidambaram)",
    description:
      "Support classical Indian dance in a spiritual temple setting, blending tradition with performance.",
    slug: "natyanjali-festival",
    name: "Invest",
    imageUrl: "/images/invest/events/natyanjali.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "The Chennai Trade Center (Nandambakkam)",
    description:
      "Invest in large-scale trade and industrial exhibitions hosted at this leading venue.",
    slug: "chennai-trade-center",
    name: "Invest",
    imageUrl: "/images/invest/events/chennai-trade.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "The Madras Trade Centre (Nandambakkam)",
    description:
      "This key trade hub seeks investors to support international business events and exhibitions.",
    slug: "madras-trade-centre",
    name: "Invest",
    imageUrl: "/images/invest/events/madras-trade.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Agricultural Expos (Multiple Locations)",
    description:
      "Invest in expos that promote agricultural innovation, education, and farmer support.",
    slug: "agricultural-expos",
    name: "Invest",
    imageUrl: "/images/invest/events/agri-expo.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Textile and Clothing Fairs",
    description:
      "Support events that spotlight Chennai’s thriving textile and apparel sector.",
    slug: "textile-fairs",
    name: "Invest",
    imageUrl: "/images/invest/events/textile-fairs.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Auto Expos (Nandambakkam)",
    description:
      "Contribute to auto expos that showcase Chennai’s robust automotive industry.",
    slug: "auto-expos",
    name: "Invest",
    imageUrl: "/images/invest/events/auto-expo.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Growing Entertainment and Lifestyle Events",
    description:
      "Back lifestyle-focused events that enhance work-life balance for urban residents.",
    slug: "entertainment-lifestyle",
    name: "Invest",
    imageUrl: "/images/invest/events/entertainment.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Music Concerts and Live Performances",
    description:
      "Support high-energy concerts that bring music lovers together and showcase talent.",
    slug: "music-concerts",
    name: "Invest",
    imageUrl: "/images/invest/events/concerts.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Food Festivals and Culinary Events",
    description:
      "Invest in food expos that attract crowds and celebrate local and international cuisine.",
    slug: "food-festivals",
    name: "Invest",
    imageUrl: "/images/invest/events/food-festival.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Athletic Events and Marathons",
    description:
      "Promote health and wellness by investing in sporting events and marathons across the city.",
    slug: "athletic-events",
    name: "Invest",
    imageUrl: "/images/invest/events/marathon.jpg",
    pageUrl: "/investeventschennai",
  },
  {
    title: "Pop Culture Events and Comic Conventions",
    description:
      "Fund the growing fanbase of pop culture, cosplay, anime, and comic events in Chennai.",
    slug: "pop-culture-events",
    name: "Invest",
    imageUrl: "/images/invest/events/comic-con.jpg",
    pageUrl: "/investeventschennai",
  },

  // EXOBITION #################################################################

  {
    id: 1001,
    title: "Established Trade Shows",
    description:
      "You might invest in well-known trade shows if you want to draw in prospective clients and industry professionals.",
    slug: "established-trade-shows",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/trade-shows.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1002,
    title: "Trade Center Events (Nandambakkam)",
    description:
      "Make investments in significant shows that address the consumer goods, technology, and manufacturing sectors.",
    slug: "trade-center-events-nandambakkam",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/trade-center.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1003,
    title: "Agricultural and Food Expos",
    description:
      "Provide financial assistance to several farmers so they may market their food items to a larger audience.",
    slug: "agricultural-food-expos",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/agri-food.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1004,
    title: "Auto Component Exhibits (Nandambakkam)",
    description:
      "The development of the automobile sector depends on your sponsorship of exhibitions.",
    slug: "auto-component-exhibits-nandambakkam",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/auto-components.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1005,
    title: "Building and Construction Exhibitions",
    description:
      "Make connections between real estate owners and infrastructure development.",
    slug: "building-construction-exhibitions",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/construction.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1006,
    title: "Specialized Industry Exhibitions",
    description:
      "Find your own expertise and begin investing in it by providing opportunities for focused networking and company growth.",
    slug: "specialized-industry-exhibitions",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/specialized-industry.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1007,
    title: "Textiles and Apparel Exhibitions",
    description:
      "Invest to increase Tamil Nadu's textile brand's business in Chennai City.",
    slug: "textiles-apparel-exhibitions",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/textiles.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1008,
    title: "Engineering and Manufacturing Exhibitions",
    description:
      "By holding these expos, you can help these industries cover the various industrial regions.",
    slug: "engineering-manufacturing-exhibitions",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/engineering.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1009,
    title: "Medical Equipment and Healthcare Exhibitions",
    description:
      "Link the medical technology developments with the healthcare sector.",
    slug: "medical-equipment-healthcare-exhibitions",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/medical.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1010,
    title: "Education and Training Fairs",
    description:
      "Attract the vast number of students who are in need of educational services to the megaexpo of training fairs.",
    slug: "education-training-fairs",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/education.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1011,
    title: "Consumer and Lifestyle Exhibitions",
    description:
      "Invest in trade shows where entrepreneurs and buyers can meet face-to-face and primarily offer their goods.",
    slug: "consumer-lifestyle-exhibitions",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/consumer-lifestyle.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1012,
    title: "Furniture and Home Decor Exhibitions",
    description:
      "People who work in real estate or construct their own homes would find this expo helpful.",
    slug: "furniture-home-decor-exhibitions",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/furniture.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1013,
    title: "Food and Beverage Expos",
    description:
      "Teach people to produce or sell your food products and beverages to capitalize on the city's thriving culinary culture.",
    slug: "food-beverage-expos",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/food-beverage.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1014,
    title: "Fashion and Lifestyle Exhibitions",
    description:
      "Invest in this market to reach the retail- and fashion-conscious customer base.",
    slug: "fashion-lifestyle-exhibitions",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/fashion.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1015,
    title: "Travel and Tourism Expos",
    description:
      "To happen networking with the expanding travel and hospitality industry, investing in this sector is mandatory.",
    slug: "travel-tourism-expos",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/travel-tourism.jpg",
    pageUrl: "/investexhibitionschennai",
  },
  {
    id: 1016,
    title: "Arts and Crafts Exhibitions",
    description: "Help out local artists and make connections with art lovers.",
    slug: "arts-crafts-exhibitions",
    name: "Exhibitions",
    imageUrl: "/images/invest/exhibitions/arts-crafts.jpg",
    pageUrl: "/investexhibitionschennai",
  },

  //   ELECTRICALLL ################################################################33

  {
    id: 2001,
    title: "Electric Vehicles (EV) and Clean Technology in Chennai",
    description:
      "Through incentives and focus on sustainability, Chennai is growing into an EV and clean tech hub with research, manufacturing, and infrastructure.",
    slug: "electric-vehicles-clean-tech",
    name: "Clean Tech",
    imageUrl: "/images/invest/clean-tech/ev-clean-tech.jpg",
    pageUrl: "/ElectricVehicles",
  },
  {
    id: 2002,
    title: "Growing Electric Vehicle Ecosystem",
    description:
      "Chennai is a growing EV hub attracting manufacturers, startups, and component suppliers for clean mobility.",
    slug: "growing-ev-ecosystem",
    name: "Clean Tech",
    imageUrl: "/images/invest/clean-tech/ev-ecosystem.jpg",
    pageUrl: "/ElectricVehicles",
  },
  {
    id: 2003,
    title: "EV Manufacturing Hub",
    description:
      "Home to multiple EV plants making two-wheelers and three-wheelers, fueling regional growth.",
    slug: "ev-manufacturing-hub",
    name: "Clean Tech",
    imageUrl: "/images/invest/clean-tech/ev-manufacturing.jpg",
    pageUrl: "/ElectricVehicles",
  },
  {
    id: 2004,
    title: "Development of Charging Infrastructure",
    description:
      "Public and private EV charging stations are expanding across the city.",
    slug: "charging-infrastructure",
    name: "Clean Tech",
    imageUrl: "/images/invest/clean-tech/charging.jpg",
    pageUrl: "/ElectricVehicles",
  },
  {
    id: 2005,
    title: "Battery Technology Research",
    description:
      "Companies and research institutions are innovating in battery design and performance.",
    slug: "battery-tech-research",
    name: "Clean Tech",
    imageUrl: "/images/invest/clean-tech/battery-research.jpg",
    pageUrl: "/ElectricVehicles",
  },
  {
    id: 2006,
    title: "Clean Technology Integration in Transportation",
    description:
      "Chennai adopts clean transport solutions to reduce fuel use and air pollution.",
    slug: "clean-transport-integration",
    name: "Clean Tech",
    imageUrl: "/images/invest/clean-tech/clean-transport.jpg",
    pageUrl: "/ElectricVehicles",
  },
  {
    id: 2007,
    title: "Emphasis on Sustainable Fuels",
    description:
      "Exploring biofuels and alternatives for public and private transport systems.",
    slug: "sustainable-fuels",
    name: "Clean Tech",
    imageUrl: "/images/invest/clean-tech/biofuels.jpg",
    pageUrl: "/ElectricVehicles",
  },
  {
    id: 2008,
    title: "Development of Smart Mobility Solutions",
    description:
      "Efforts to streamline traffic and optimize urban mobility using smart tech.",
    slug: "smart-mobility",
    name: "Clean Tech",
    imageUrl: "/images/invest/clean-tech/smart-mobility.jpg",
    pageUrl: "/ElectricVehicles",
  },
  {
    id: 2009,
    title: "Public and Shared Electric Mobility",
    description:
      "Chennai supports electric buses, e-rickshaws, and shared EVs to reduce congestion.",
    slug: "shared-ev-mobility",
    name: "Clean Tech",
    imageUrl: "/images/invest/clean-tech/shared-ev.jpg",
    pageUrl: "/ElectricVehicles",
  },
  {
    id: 2010,
    title: "Research and Development in Clean Transportation",
    description:
      "Institutions collaborate with industries to drive clean transport innovation.",
    slug: "clean-transport-rnd",
    name: "Clean Tech",
    imageUrl: "/images/invest/clean-tech/clean-rnd.jpg",
    pageUrl: "/ElectricVehicles",
  },
  {
    id: 2011,
    title: "Dedicated EV Research Centers",
    description:
      "EV-specific R&D centers are being set up to foster innovation and tech advancement.",
    slug: "ev-research-centers",
    name: "Clean Tech",
    imageUrl: "/images/invest/clean-tech/research-centers.jpg",
    pageUrl: "/ElectricVehicles",
  },
  {
    id: 2012,
    title: "Partnership with Automotive Sector",
    description:
      "Strong academic-industry collaborations are enhancing clean vehicle performance.",
    slug: "automotive-partnerships",
    name: "Clean Tech",
    imageUrl: "/images/invest/clean-tech/partnership.jpg",
    pageUrl: "/ElectricVehicles",
  },
  {
    id: 2013,
    title: "Materials and Manufacturing",
    description:
      "Sustainable materials and production techniques are being explored for EV components.",
    slug: "materials-manufacturing",
    name: "Clean Tech",
    imageUrl: "/images/invest/clean-tech/materials.jpg",
    pageUrl: "/ElectricVehicles",
  },
  // SMART CITY ################################################################33

  {
    id: 2101,
    title: "Smart City Initiatives in Chennai",
    description:
      "Chennai enhances urban life using innovation and technology to create a more secure and resilient city through smart living and sustainability.",
    slug: "smart-city-initiatives",
    name: "Smart City",
    imageUrl: "/images/invest/smart-city/smart-city.jpg",
    pageUrl: "/smartcityinitiatives",
  },
  {
    id: 2102,
    title: "Focus on Integrated Infrastructure",
    description:
      "Smart infrastructure covers energy, water, power, and transit systems to benefit the public and boost efficiency.",
    slug: "integrated-infrastructure",
    name: "Smart City",
    imageUrl: "/images/invest/smart-city/infrastructure.jpg",
    pageUrl: "/smartcityinitiatives",
  },
  {
    id: 2103,
    title: "Intelligent Transportation Systems",
    description:
      "Traffic control, mobility solutions, and transit improvements are key elements of Chennai's smart transport upgrades.",
    slug: "intelligent-transport",
    name: "Smart City",
    imageUrl: "/images/invest/smart-city/transport.jpg",
    pageUrl: "/smartcityinitiatives",
  },
  {
    id: 2104,
    title: "Smart Energy Grids",
    description:
      "Chennai integrates renewables and smart grid tech to minimize energy loss and improve distribution.",
    slug: "smart-energy-grids",
    name: "Smart City",
    imageUrl: "/images/invest/smart-city/energy.jpg",
    pageUrl: "/smartcityinitiatives",
  },
  {
    id: 2105,
    title: "Water and Waste Management",
    description:
      "Leak detection and real-time water usage monitoring improve efficiency and reduce consumption.",
    slug: "water-waste-management",
    name: "Smart City",
    imageUrl: "/images/invest/smart-city/water-waste.jpg",
    pageUrl: "/smartcityinitiatives",
  },
  {
    id: 2106,
    title: "Enhancing Public Services",
    description:
      "Smart solutions in governance, healthcare, and education streamline citywide public services.",
    slug: "enhancing-public-services",
    name: "Smart City",
    imageUrl: "/images/invest/smart-city/public-services.jpg",
    pageUrl: "/smartcityinitiatives",
  },
  {
    id: 2107,
    title: "E-Government and Digital Services",
    description:
      "Digital platforms speed up access to services like document processing for citizens and businesses.",
    slug: "e-government-digital-services",
    name: "Smart City",
    imageUrl: "/images/invest/smart-city/e-gov.jpg",
    pageUrl: "/smartcityinitiatives",
  },
  {
    id: 2108,
    title: "Smart Healthcare Solutions",
    description:
      "Remote healthcare, better monitoring, and faster recovery are enabled by smart health tech.",
    slug: "smart-healthcare",
    name: "Smart City",
    imageUrl: "/images/invest/smart-city/healthcare.jpg",
    pageUrl: "/smartcityinitiatives",
  },
  {
    id: 2109,
    title: "Technology in Education",
    description:
      "Smart classrooms and digital learning help students engage better with real-time applications.",
    slug: "education-technology",
    name: "Smart City",
    imageUrl: "/images/invest/smart-city/education.jpg",
    pageUrl: "/smartcityinitiatives",
  },
  {
    id: 2110,
    title: "Promoting Sustainability and Resilience",
    description:
      "Chennai prioritizes environmental and disaster resilience using innovative technologies and planning.",
    slug: "sustainability-resilience",
    name: "Smart City",
    imageUrl: "/images/invest/smart-city/sustainability.jpg",
    pageUrl: "/smartcityinitiatives",
  },
  {
    id: 2111,
    title: "Smart Environmental Monitoring",
    description:
      "Air and water quality sensors support smarter environmental decisions across Chennai.",
    slug: "environmental-monitoring",
    name: "Smart City",
    imageUrl: "/images/invest/smart-city/environment.jpg",
    pageUrl: "/smartcityinitiatives",
  },
  {
    id: 2112,
    title: "Disaster Management and Preparedness",
    description:
      "Advanced systems detect natural disasters early and support emergency response planning.",
    slug: "disaster-management",
    name: "Smart City",
    imageUrl: "/images/invest/smart-city/disaster.jpg",
    pageUrl: "/smartcityinitiatives",
  },
  {
    id: 2113,
    title: "Sustainable Urban Development",
    description:
      "Green spaces and smart building tech support Chennai’s goal for a sustainable city.",
    slug: "sustainable-urban-development",
    name: "Smart City",
    imageUrl: "/images/invest/smart-city/urban.jpg",
    pageUrl: "/smartcityinitiatives",
  },

  {
    id: 2201,
    title: "Healthcare Tech Innovation in Chennai",
    description:
      "Chennai’s healthcare sector is rapidly evolving with digital records, telemedicine, diagnostics, and AI, driving better medical outcomes.",
    slug: "healthcare-tech-innovation",
    name: "Healthcare Innovation",
    imageUrl: "/images/invest/healthcare/innovation.jpg",
    pageUrl: "/healthcaretechinnovation",
  },
  {
    id: 2202,
    title: "Advancements in Digital Health Platforms",
    description:
      "Digital health platforms in Chennai enable EHRs, online consultations, and remote monitoring for improved accessibility and care.",
    slug: "digital-health-platforms",
    name: "Healthcare Innovation",
    imageUrl: "/images/invest/healthcare/digital-platforms.jpg",
    pageUrl: "/healthcaretechinnovation",
  },
  {
    id: 2203,
    title: "Telemedicine and Remote Consultations",
    description:
      "Patients can receive virtual care from doctors via telemedicine, improving convenience and access to healthcare.",
    slug: "telemedicine-remote-consultations",
    name: "Healthcare Innovation",
    imageUrl: "/images/invest/healthcare/telemedicine.jpg",
    pageUrl: "/healthcaretechinnovation",
  },
  {
    id: 2204,
    title: "Electronic Health Records (EHRs)",
    description:
      "Chennai uses EHRs to digitally manage and access patient information for improved healthcare operations.",
    slug: "electronic-health-records",
    name: "Healthcare Innovation",
    imageUrl: "/images/invest/healthcare/ehr.jpg",
    pageUrl: "/healthcaretechinnovation",
  },
  {
    id: 2205,
    title: "Mobile Health Applications",
    description:
      "Mobile apps allow Chennai residents to monitor their health and access wellness tools directly from their devices.",
    slug: "mobile-health-apps",
    name: "Healthcare Innovation",
    imageUrl: "/images/invest/healthcare/mobile-apps.jpg",
    pageUrl: "/healthcaretechinnovation",
  },
  {
    id: 2206,
    title: "Integration of AI and Data Analytics",
    description:
      "Healthcare providers use AI and analytics for predictive insights, faster diagnosis, and better treatment outcomes.",
    slug: "ai-data-analytics-healthcare",
    name: "Healthcare Innovation",
    imageUrl: "/images/invest/healthcare/ai-analytics.jpg",
    pageUrl: "/healthcaretechinnovation",
  },
  {
    id: 2207,
    title: "AI-Powered Diagnostics",
    description:
      "AI helps analyze diagnostics, scan reports, and medical documents to assist doctors and improve accuracy.",
    slug: "ai-diagnostics",
    name: "Healthcare Innovation",
    imageUrl: "/images/invest/healthcare/diagnostics.jpg",
    pageUrl: "/healthcaretechinnovation",
  },
  {
    id: 2208,
    title: "Personalized Treatment Approaches",
    description:
      "AI-powered systems enable physicians to deliver custom treatments tailored to each patient’s needs.",
    slug: "personalized-treatment",
    name: "Healthcare Innovation",
    imageUrl: "/images/invest/healthcare/personalized.jpg",
    pageUrl: "/healthcaretechinnovation",
  },
  {
    id: 2209,
    title: "Predictive Healthcare Analytics",
    description:
      "With predictive analytics, Chennai’s healthcare providers anticipate risks and deliver proactive care.",
    slug: "predictive-healthcare-analytics",
    name: "Healthcare Innovation",
    imageUrl: "/images/invest/healthcare/predictive.jpg",
    pageUrl: "/healthcaretechinnovation",
  },
  // ROBERTIC S & AUTOMATION ################################################################33
  {
    id: 2301,
    title: "Robotics and Automation in Chennai",
    description:
      "Chennai is increasingly adopting robotics and automation across manufacturing, IT, and startups to drive efficiency, innovation, and growth.",
    slug: "robotics-automation-chennai",
    name: "Robotics & Automation",
    imageUrl: "/images/invest/automation/overview.jpg",
    pageUrl: "/roboticsandautomation",
  },
  {
    id: 2302,
    title: "Industrial Automation in Manufacturing",
    description:
      "Chennai’s industries use automated systems and industrial robots to improve production efficiency, quality, and reduce operational costs.",
    slug: "industrial-automation-manufacturing",
    name: "Robotics & Automation",
    imageUrl: "/images/invest/automation/industrial.jpg",
    pageUrl: "/roboticsandautomation",
  },
  {
    id: 2303,
    title: "Increased Robot Deployment",
    description:
      "Robots handle tasks like welding, assembling, and material handling to boost productivity in Chennai's manufacturing sector.",
    slug: "increased-robot-deployment",
    name: "Robotics & Automation",
    imageUrl: "/images/invest/automation/robot-deployment.jpg",
    pageUrl: "/roboticsandautomation",
  },
  {
    id: 2304,
    title: "Emphasis on Efficiency and Precision",
    description:
      "Chennai's automation initiatives focus on delivering high precision and optimized workflows across industrial processes.",
    slug: "efficiency-precision-automation",
    name: "Robotics & Automation",
    imageUrl: "/images/invest/automation/efficiency.jpg",
    pageUrl: "/roboticsandautomation",
  },
  {
    id: 2305,
    title: "IoT and AI Integration",
    description:
      "Robots in Chennai are enhanced by combining them with IoT and AI for smart, connected automation solutions.",
    slug: "iot-ai-integration-automation",
    name: "Robotics & Automation",
    imageUrl: "/images/invest/automation/iot-ai.jpg",
    pageUrl: "/roboticsandautomation",
  },
  {
    id: 2306,
    title: "Robotic Process Automation (RPA)",
    description:
      "Chennai’s IT sector uses RPA to automate repetitive workflows, boosting speed and accuracy in business operations.",
    slug: "robotic-process-automation-rpa",
    name: "Robotics & Automation",
    imageUrl: "/images/invest/automation/rpa.jpg",
    pageUrl: "/roboticsandautomation",
  },
  {
    id: 2307,
    title: "Automating Repetitive Tasks",
    description:
      "RPA is deployed for tasks like data entry and admin work in Chennai’s IT and BPO sectors, enhancing workforce productivity.",
    slug: "automating-repetitive-tasks",
    name: "Robotics & Automation",
    imageUrl: "/images/invest/automation/repetitive-tasks.jpg",
    pageUrl: "/roboticsandautomation",
  },
  {
    id: 2308,
    title: "Improving Workflow Efficiency",
    description:
      "Automation tools in Chennai reduce turnaround time and optimize resource allocation for more efficient workflows.",
    slug: "workflow-efficiency-automation",
    name: "Robotics & Automation",
    imageUrl: "/images/invest/automation/workflow.jpg",
    pageUrl: "/roboticsandautomation",
  },
  {
    id: 2309,
    title: "Enhancing Accuracy and Compliance",
    description:
      "RPA minimizes human errors and ensures compliance with regulations, improving trust and operational accuracy.",
    slug: "accuracy-compliance-rpa",
    name: "Robotics & Automation",
    imageUrl: "/images/invest/automation/compliance.jpg",
    pageUrl: "/roboticsandautomation",
  },
  {
    id: 2310,
    title: "Emergence of Robotics Startups and Innovation",
    description:
      "Chennai fosters robotic startups offering efficient solutions across logistics, manufacturing, and other industries.",
    slug: "robotics-startups-innovation",
    name: "Robotics & Automation",
    imageUrl: "/images/invest/automation/startups.jpg",
    pageUrl: "/roboticsandautomation",
  },
  {
    id: 2311,
    title: "Creating Innovative Robotic Solutions",
    description:
      "Startups in Chennai design smart robotic systems replacing traditional automation in various industries.",
    slug: "innovative-robotic-solutions",
    name: "Robotics & Automation",
    imageUrl: "/images/invest/automation/innovative.jpg",
    pageUrl: "/roboticsandautomation",
  },
  {
    id: 2312,
    title: "Pay Attention to Particular Industry Needs",
    description:
      "Robotics in Chennai is tailored to sector-specific challenges, especially in logistics and healthcare.",
    slug: "industry-specific-robotics",
    name: "Robotics & Automation",
    imageUrl: "/images/invest/automation/sector-solutions.jpg",
    pageUrl: "/roboticsandautomation",
  },
  {
    id: 2313,
    title: "Promoting Automation Innovation",
    description:
      "Chennai’s ecosystem encourages automation startups that drive innovation and transform industrial practices.",
    slug: "promoting-automation-innovation",
    name: "Robotics & Automation",
    imageUrl: "/images/invest/automation/innovation.jpg",
    pageUrl: "/roboticsandautomation",
  },
  // Blockchain and Fintech in Chennai ##################################################

  {
    id: 2401,
    title: "Blockchain and Fintech in Chennai",
    description:
      "Chennai is becoming a major hub for blockchain and fintech innovation, driving advancements in decentralized finance, digital identity, and secure transactions.",
    slug: "blockchain-fintech-chennai",
    name: "Blockchain & Fintech",
    imageUrl: "/images/invest/fintech/overview.jpg",
    pageUrl: "/blockchainandfintech",
  },
  {
    id: 2402,
    title: "Rising Adoption of Blockchain in Fintech",
    description:
      "Chennai-based fintech firms are integrating blockchain to secure customer data, ensure transparency, and validate completed transactions.",
    slug: "adoption-blockchain-fintech",
    name: "Blockchain & Fintech",
    imageUrl: "/images/invest/fintech/adoption.jpg",
    pageUrl: "/blockchainandfintech",
  },
  {
    id: 2403,
    title: "Secure and Transparent Transactions",
    description:
      "Blockchain is used to enable auditable, secure, and tamper-proof financial transactions for consumers in Chennai.",
    slug: "secure-transparent-transactions",
    name: "Blockchain & Fintech",
    imageUrl: "/images/invest/fintech/secure-transactions.jpg",
    pageUrl: "/blockchainandfintech",
  },
  {
    id: 2404,
    title: "Investigating Decentralized Finance (DeFi)",
    description:
      "Chennai fintech companies are exploring DeFi solutions such as blockchain-based lending, borrowing, and other decentralized financial services.",
    slug: "decentralized-finance-defi",
    name: "Blockchain & Fintech",
    imageUrl: "/images/invest/fintech/defi.jpg",
    pageUrl: "/blockchainandfintech",
  },
  {
    id: 2405,
    title: "Improving Digital Identity Solutions",
    description:
      "Blockchain-based digital identities offer secure, portable logins across the fintech ecosystem in Chennai.",
    slug: "digital-identity-blockchain",
    name: "Blockchain & Fintech",
    imageUrl: "/images/invest/fintech/digital-identity.jpg",
    pageUrl: "/blockchainandfintech",
  },
  {
    id: 2406,
    title: "Growth of Fintech Startups Utilizing Blockchain",
    description:
      "The demand for secure transactions is fueling the rise of blockchain-powered fintech startups across industries in Chennai.",
    slug: "growth-fintech-startups",
    name: "Blockchain & Fintech",
    imageUrl: "/images/invest/fintech/startups.jpg",
    pageUrl: "/blockchainandfintech",
  },
  {
    id: 2407,
    title: "Innovative Payment Solutions",
    description:
      "Fintech companies in Chennai provide advanced payment software that ensures fast, cost-effective, and secure transactions.",
    slug: "innovative-payment-solutions",
    name: "Blockchain & Fintech",
    imageUrl: "/images/invest/fintech/payments.jpg",
    pageUrl: "/blockchainandfintech",
  },
  {
    id: 2408,
    title: "Blockchain-Powered Lending Platforms",
    description:
      "Peer-to-peer lending platforms in Chennai are exploring blockchain to create transparent and efficient loan systems.",
    slug: "blockchain-lending-platforms",
    name: "Blockchain & Fintech",
    imageUrl: "/images/invest/fintech/lending.jpg",
    pageUrl: "/blockchainandfintech",
  },
  {
    id: 2409,
    title: "Asset Tokenization Initiatives",
    description:
      "Chennai’s fintech ecosystem is investigating blockchain-based asset tokenization to enhance liquidity and broaden investor access.",
    slug: "asset-tokenization-blockchain",
    name: "Blockchain & Fintech",
    imageUrl: "/images/invest/fintech/tokenization.jpg",
    pageUrl: "/blockchainandfintech",
  },
  {
    id: 2410,
    title: "Collaborations and Ecosystem Development",
    description:
      "Startups, tech providers, and financial institutions in Chennai collaborate to build a robust blockchain ecosystem.",
    slug: "blockchain-ecosystem-development",
    name: "Blockchain & Fintech",
    imageUrl: "/images/invest/fintech/ecosystem.jpg",
    pageUrl: "/blockchainandfintech",
  },
  {
    id: 2411,
    title: "Innovation Partnerships",
    description:
      "Established financial institutions partner with startups to co-develop blockchain-based fintech innovations.",
    slug: "fintech-innovation-partnerships",
    name: "Blockchain & Fintech",
    imageUrl: "/images/invest/fintech/partnerships.jpg",
    pageUrl: "/blockchainandfintech",
  },
  {
    id: 2412,
    title: "Incubation and Acceleration Programs",
    description:
      "Chennai supports blockchain advancement through startup incubators and accelerator initiatives tailored for fintech innovation.",
    slug: "blockchain-acceleration-programs",
    name: "Blockchain & Fintech",
    imageUrl: "/images/invest/fintech/incubators.jpg",
    pageUrl: "/blockchainandfintech",
  },
  {
    id: 2413,
    title: "Government Support and Regulatory Awareness",
    description:
      "Chennai receives government backing for blockchain adoption to reduce fraud, ensure compliance, and support secure financial ecosystems.",
    slug: "government-support-blockchain",
    name: "Blockchain & Fintech",
    imageUrl: "/images/invest/fintech/government.jpg",
    pageUrl: "/blockchainandfintech",
  },

  //   AUTOMATOVE TECH RAND D ##############################################################

  {
    id: 2501,
    title: "Automotive Tech and R&D in Chennai",
    description:
      "Chennai is a major automotive R&D hub in India, supporting smart mobility, electric vehicle technologies, and advanced safety systems through academic-industry collaboration and testing facilities.",
    slug: "automotive-tech-rnd-chennai",
    name: "Automotive R&D",
    imageUrl: "/images/invest/auto/overview.jpg",
    pageUrl: "/automotivetechandrandd",
  },
  {
    id: 2502,
    title: "Pioneering Electric Vehicle Technologies",
    description:
      "Chennai leads EV innovation through research in engine design, battery technology, and intelligent charging infrastructure.",
    slug: "ev-technologies-chennai",
    name: "Automotive R&D",
    imageUrl: "/images/invest/auto/ev-tech.jpg",
    pageUrl: "/automotivetechandrandd",
  },
  {
    id: 2503,
    title: "Advanced Battery Development",
    description:
      "Research is enhancing electric vehicle battery life, energy density, and charging efficiency in Chennai’s R&D sector.",
    slug: "battery-development-chennai",
    name: "Automotive R&D",
    imageUrl: "/images/invest/auto/battery.jpg",
    pageUrl: "/automotivetechandrandd",
  },
  {
    id: 2504,
    title: "Efficient Powertrain Design",
    description:
      "Electric powertrain innovations in Chennai focus on motors and power electronics to boost EV performance and range.",
    slug: "powertrain-design-chennai",
    name: "Automotive R&D",
    imageUrl: "/images/invest/auto/powertrain.jpg",
    pageUrl: "/automotivetechandrandd",
  },
  {
    id: 2505,
    title: "Charging Infrastructure Solutions",
    description:
      "R&D efforts in Chennai aim to deliver accessible and intelligent EV charging infrastructure for the future of mobility.",
    slug: "charging-infrastructure-chennai",
    name: "Automotive R&D",
    imageUrl: "/images/invest/auto/charging.jpg",
    pageUrl: "/automotivetechandrandd",
  },
  {
    id: 2506,
    title: "Enhancing Vehicle Safety and Intelligence",
    description:
      "Chennai’s R&D ecosystem prioritizes passenger safety through the integration of smart technologies and advanced vehicle systems.",
    slug: "vehicle-safety-intelligence",
    name: "Automotive R&D",
    imageUrl: "/images/invest/auto/safety.jpg",
    pageUrl: "/automotivetechandrandd",
  },
  {
    id: 2507,
    title: "Advanced Driver Assistance Systems (ADAS)",
    description:
      "Research in Chennai focuses on ADAS features including automatic emergency braking, lane keeping, and adaptive cruise control.",
    slug: "adas-chennai",
    name: "Automotive R&D",
    imageUrl: "/images/invest/auto/adas.jpg",
    pageUrl: "/automotivetechandrandd",
  },
  {
    id: 2508,
    title: "Passive Safety Innovations",
    description:
      "Automotive R&D in Chennai enhances crash safety with structural design improvements and passive safety features.",
    slug: "passive-safety-innovations",
    name: "Automotive R&D",
    imageUrl: "/images/invest/auto/passive-safety.jpg",
    pageUrl: "/automotivetechandrandd",
  },
  {
    id: 2509,
    title: "Connected Car Technologies",
    description:
      "V2X (vehicle-to-everything) connectivity is being developed in Chennai to improve road safety and traffic flow.",
    slug: "connected-car-technologies",
    name: "Automotive R&D",
    imageUrl: "/images/invest/auto/connected.jpg",
    pageUrl: "/automotivetechandrandd",
  },
  {
    id: 2510,
    title: "Fostering Sustainable and Smart Mobility",
    description:
      "Chennai’s R&D initiatives support future-ready mobility using sustainable energy sources and cutting-edge transportation technologies.",
    slug: "sustainable-smart-mobility",
    name: "Automotive R&D",
    imageUrl: "/images/invest/auto/smart-mobility.jpg",
    pageUrl: "/automotivetechandrandd",
  },
  {
    id: 2511,
    title: "Research on Alternative Fuels",
    description:
      "Chennai supports R&D on hydrogen, biofuels, and other alternatives to fossil fuels for cleaner automotive energy.",
    slug: "alternative-fuels-research",
    name: "Automotive R&D",
    imageUrl: "/images/invest/auto/alt-fuels.jpg",
    pageUrl: "/automotivetechandrandd",
  },
  {
    id: 2512,
    title: "Smart Mobility Outcomes",
    description:
      "Autonomous vehicles, intelligent traffic systems, and participatory mobility models are under active research in Chennai.",
    slug: "smart-mobility-research",
    name: "Automotive R&D",
    imageUrl: "/images/invest/auto/autonomous.jpg",
    pageUrl: "/automotivetechandrandd",
  },
  {
    id: 2513,
    title: "Material Innovation and Lightweighting",
    description:
      "R&D focuses on lightweight materials for vehicles to boost energy efficiency and driving comfort.",
    slug: "material-lightweighting",
    name: "Automotive R&D",
    imageUrl: "/images/invest/auto/lightweight.jpg",
    pageUrl: "/automotivetechandrandd",
  },

  // EDUCATION ###########################################################################
  {
    id: 2601,
    title: "Educational Institutions",
    description:
      "Chennai provides a wide range of real estate options and is home to diverse educational institutions, making it ideal for families seeking quality education.",
    slug: "educational-institutions-chennai",
    name: "Education",
    imageUrl: "/images/live/education/overview.jpg",
    pageUrl: "/educationinstitutions",
  },
  {
    id: 2602,
    title: "Local Language Emphasis",
    description:
      "Tamil is widely used as a medium of instruction in many schools, reflecting the region’s linguistic heritage.",
    slug: "tamil-medium-schools",
    name: "Education",
    imageUrl: "/images/live/education/tamil-medium.jpg",
    pageUrl: "/educationinstitutions",
  },
  {
    id: 2603,
    title: "National and International Languages",
    description:
      "Students have access to multiple languages including Hindi, English, French, and Spanish for holistic learning.",
    slug: "multilingual-education",
    name: "Education",
    imageUrl: "/images/live/education/languages.jpg",
    pageUrl: "/educationinstitutions",
  },
  {
    id: 2604,
    title: "Notable School Groups",
    description:
      "Prestigious institutions such as PSBB, Chettinad Vidyashram, and SBOA School & Junior College shape Chennai's school landscape.",
    slug: "top-schools-chennai",
    name: "Education",
    imageUrl: "/images/live/education/notable-schools.jpg",
    pageUrl: "/educationinstitutions",
  },
  {
    id: 2605,
    title: "International Schools",
    description:
      "Global schools like the American and British International Schools offer internationally accredited curricula and diverse environments.",
    slug: "international-schools-chennai",
    name: "Education",
    imageUrl: "/images/live/education/international-schools.jpg",
    pageUrl: "/educationinstitutions",
  },
  {
    id: 2606,
    title: "A Range of Fields",
    description:
      "Chennai’s colleges and universities, including VIT, SRM, and Loyola, offer programs in engineering, arts, science, and healthcare.",
    slug: "higher-education-fields",
    name: "Education",
    imageUrl: "/images/live/education/fields.jpg",
    pageUrl: "/educationinstitutions",
  },
  {
    id: 2607,
    title: "Selecting Your Specialization",
    description:
      "Choose institutions known for excellence in specific fields to align with your career goals.",
    slug: "education-specializations",
    name: "Education",
    imageUrl: "/images/live/education/specializations.jpg",
    pageUrl: "/educationinstitutions",
  },
  {
    id: 2608,
    title: "Prospects for Comprehensive Education",
    description:
      "Advanced learning and research institutions in Chennai provide comprehensive academic experiences across disciplines.",
    slug: "comprehensive-education-chennai",
    name: "Education",
    imageUrl: "/images/live/education/comprehensive.jpg",
    pageUrl: "/educationinstitutions",
  },
  {
    id: 2609,
    title: "Participating in Knowledge Development",
    description:
      "Explore research-driven universities in Chennai for opportunities to push the boundaries of knowledge.",
    slug: "research-institutions-chennai",
    name: "Education",
    imageUrl: "/images/live/education/research.jpg",
    pageUrl: "/educationinstitutions",
  },

  //   3D Printing and Additive Manufacturing in Chennai c#################

  {
    id: 2701,
    title: "3D Printing and Additive Manufacturing",
    description:
      "Chennai has embraced 3D printing across industries—automotive, medical, and design—enhancing customization, efficiency, and innovation.",
    slug: "3d-printing-chennai",
    name: "Innovation",
    imageUrl: "/images/innovation/3d-printing-overview.jpg",
    pageUrl: "/threedprintingandadditivemanufacturing",
  },
  {
    id: 2702,
    title: "Expanding 3D Printing Service Bureaus",
    description:
      "Chennai hosts numerous service bureaus offering metal printing, SLA, FDM, and other technologies for prototyping and low-volume manufacturing.",
    slug: "3d-printing-service-bureaus",
    name: "Innovation",
    imageUrl: "/images/innovation/service-bureaus.jpg",
    pageUrl: "/threedprintingandadditivemanufacturing",
  },
  {
    id: 2703,
    title: "Rapid Prototyping Solutions",
    description:
      "Local companies use 3D printing for cost-effective and fast design prototyping, enabling quick market testing and iteration.",
    slug: "rapid-prototyping-solutions",
    name: "Innovation",
    imageUrl: "/images/innovation/prototyping.jpg",
    pageUrl: "/threedprintingandadditivemanufacturing",
  },
  {
    id: 2704,
    title: "Customized Part Manufacturing",
    description:
      "Chennai's 3D printing sector facilitates bespoke component production for medical devices, automotive parts, and more.",
    slug: "customized-part-manufacturing",
    name: "Innovation",
    imageUrl: "/images/innovation/custom-parts.jpg",
    pageUrl: "/threedprintingandadditivemanufacturing",
  },
  {
    id: 2705,
    title: "Diverse Material Options",
    description:
      "Service providers offer a wide range of materials—from composites to plastics and metals—suiting various 3D printing needs.",
    slug: "diverse-material-options",
    name: "Innovation",
    imageUrl: "/images/innovation/materials.jpg",
    pageUrl: "/threedprintingandadditivemanufacturing",
  },
  {
    id: 2706,
    title: "Tooling and Fixture Production",
    description:
      "Manufacturers in Chennai use additive techniques to produce tools, jigs, molds, and fixtures cost-effectively.",
    slug: "tooling-fixture-production",
    name: "Innovation",
    imageUrl: "/images/innovation/tooling.jpg",
    pageUrl: "/threedprintingandadditivemanufacturing",
  },
  {
    id: 2707,
    title: "Medical Modeling and Implants",
    description:
      "3D printing is enabling personalized implants and anatomical models for the healthcare sector in Chennai.",
    slug: "medical-modeling-implants",
    name: "Innovation",
    imageUrl: "/images/innovation/medical.jpg",
    pageUrl: "/threedprintingandadditivemanufacturing",
  },
  {
    id: 2708,
    title: "Consumer Goods and Design",
    description:
      "Designers in Chennai utilize 3D printing to create custom products, artistic pieces, and architectural models.",
    slug: "consumer-goods-design",
    name: "Innovation",
    imageUrl: "/images/innovation/consumer-design.jpg",
    pageUrl: "/threedprintingandadditivemanufacturing",
  },
  {
    id: 2709,
    title: "Research and Startup Ecosystem Growth",
    description:
      "Academic institutions and startups are advancing 3D printing and additive manufacturing innovations in Chennai.",
    slug: "research-startup-growth",
    name: "Innovation",
    imageUrl: "/images/innovation/startup-research.jpg",
    pageUrl: "/threedprintingandadditivemanufacturing",
  },
  {
    id: 2710,
    title: "Academic Research Initiatives",
    description:
      "Leading universities in Chennai are conducting research in advanced material science and cutting-edge 3D printing techniques.",
    slug: "academic-research-3d-printing",
    name: "Innovation",
    imageUrl: "/images/innovation/academic-research.jpg",
    pageUrl: "/threedprintingandadditivemanufacturing",
  },
  {
    id: 2711,
    title: "Rise of 3D Printing Firms",
    description:
      "Chennai is witnessing a surge in 3D printing companies offering personalized and specialized services.",
    slug: "rise-3d-printing-firms",
    name: "Innovation",
    imageUrl: "/images/innovation/3d-printing-firms.jpg",
    pageUrl: "/threedprintingandadditivemanufacturing",
  },
  {
    id: 2712,
    title: "Industry and Government Support",
    description:
      "Government initiatives and industry demand are driving workforce training and adoption of additive manufacturing in Chennai.",
    slug: "industry-government-support",
    name: "Innovation",
    imageUrl: "/images/innovation/government-support.jpg",
    pageUrl: "/threedprintingandadditivemanufacturing",
  },

  //   Augmented Reality (AR) in Chennai##############################

  {
    id: 2801,
    title: "Augmented Reality in Chennai",
    description:
      "In Chennai, augmented reality is revolutionizing industries like manufacturing, education, and retail by offering immersive real-time digital experiences.",
    slug: "ar-in-chennai",
    name: "Innovation",
    imageUrl: "/images/innovation/ar-overview.jpg",
    pageUrl: "/augmentedreality",
  },
  {
    id: 2802,
    title: "Enhancing Customer Experience and Retail",
    description:
      "Chennai businesses are using AR to let customers view and experience products virtually, enhancing the online and offline retail journey.",
    slug: "ar-retail-customer-experience",
    name: "Innovation",
    imageUrl: "/images/innovation/ar-retail.jpg",
    pageUrl: "/augmentedreality",
  },
  {
    id: 2803,
    title: "Virtual Product Try-Ons",
    description:
      "Shoppers in Chennai can use AR to try on clothes and accessories virtually, improving confidence in purchasing decisions.",
    slug: "virtual-product-try-ons",
    name: "Innovation",
    imageUrl: "/images/innovation/ar-tryon.jpg",
    pageUrl: "/augmentedreality",
  },
  {
    id: 2804,
    title: "In-Home Product Visualization",
    description:
      "AR helps Chennai consumers visualize furniture and home decor products in their own space before purchasing.",
    slug: "in-home-visualization-ar",
    name: "Innovation",
    imageUrl: "/images/innovation/ar-visualization.jpg",
    pageUrl: "/augmentedreality",
  },
  {
    id: 2805,
    title: "Interactive Product Information",
    description:
      "Augmented overlays provide Chennai customers with detailed product specs and features in real time.",
    slug: "interactive-product-info-ar",
    name: "Innovation",
    imageUrl: "/images/innovation/ar-info.jpg",
    pageUrl: "/augmentedreality",
  },
  {
    id: 2806,
    title: "Transforming Industrial Applications and Training",
    description:
      "AR improves efficiency and training across Chennai industries by offering real-time data, simulations, and guided maintenance.",
    slug: "ar-industrial-training",
    name: "Innovation",
    imageUrl: "/images/innovation/ar-industrial.jpg",
    pageUrl: "/augmentedreality",
  },
  {
    id: 2807,
    title: "Guided Assembly and Maintenance",
    description:
      "Workers in Chennai use AR for step-by-step instructions on assembly, repairs, and upkeep of complex machinery.",
    slug: "ar-guided-assembly",
    name: "Innovation",
    imageUrl: "/images/innovation/ar-assembly.jpg",
    pageUrl: "/augmentedreality",
  },
  {
    id: 2808,
    title: "Remote Expert Assistance",
    description:
      "AR enables Chennai technicians to receive real-time remote support from experts using digital annotations and video.",
    slug: "ar-remote-assistance",
    name: "Innovation",
    imageUrl: "/images/innovation/ar-remote.jpg",
    pageUrl: "/augmentedreality",
  },
  {
    id: 2809,
    title: "Interactive Training Simulations",
    description:
      "Chennai workers benefit from immersive and safe training environments using AR simulations for complex procedures.",
    slug: "interactive-training-ar",
    name: "Innovation",
    imageUrl: "/images/innovation/ar-training.jpg",
    pageUrl: "/augmentedreality",
  },
  {
    id: 2810,
    title: "Innovative Applications in Education and Tourism",
    description:
      "AR is elevating tourism and education in Chennai by providing immersive historical experiences and engaging learning tools.",
    slug: "ar-education-tourism",
    name: "Innovation",
    imageUrl: "/images/innovation/ar-tourism-education.jpg",
    pageUrl: "/augmentedreality",
  },
  {
    id: 2811,
    title: "Interactive Learning Tools",
    description:
      "AR tools in Chennai offer visual learning aids, making complex subjects easier and more engaging for students.",
    slug: "interactive-learning-tools-ar",
    name: "Innovation",
    imageUrl: "/images/innovation/ar-education.jpg",
    pageUrl: "/augmentedreality",
  },
  {
    id: 2812,
    title: "Augmented Museum and Heritage Visits",
    description:
      "Chennai museums and sites use AR to overlay historical context and virtual reconstructions for enhanced cultural engagement.",
    slug: "ar-museum-heritage",
    name: "Innovation",
    imageUrl: "/images/innovation/ar-museum.jpg",
    pageUrl: "/augmentedreality",
  },
  {
    id: 2813,
    title: "Gamified Educational Content",
    description:
      "AR-powered games in Chennai make learning fun and interactive, improving knowledge retention among students.",
    slug: "gamified-ar-content",
    name: "Innovation",
    imageUrl: "/images/innovation/ar-gamified.jpg",
    pageUrl: "/augmentedreality",
  },

  // Agriculture Tech in Chennai ##########################################################

  {
    id: 2901,
    title: "Agriculture Tech in Chennai",
    description:
      "Chennai's agriculture is thriving with innovations like precision farming, IoT, drones, and digital marketplaces, empowering farmers to increase productivity and profits.",
    slug: "agri-tech-chennai",
    name: "Innovation",
    imageUrl: "/images/innovation/agri-tech.jpg",
    pageUrl: "/agriculturetech",
  },
  {
    id: 2902,
    title: "Precision Farming Initiatives in Chennai",
    description:
      "Farmers are using data analytics and smart irrigation methods in Chennai to improve crop and vegetable yields through precision farming.",
    slug: "precision-farming-chennai",
    name: "Innovation",
    imageUrl: "/images/innovation/precision-farming.jpg",
    pageUrl: "/agriculturetech",
  },
  {
    id: 2903,
    title: "IoT-Based Monitoring Systems",
    description:
      "IoT sensors track temperature, nutrients, humidity, and soil moisture, helping Chennai farmers make informed decisions for optimal farming practices.",
    slug: "iot-farming-chennai",
    name: "Innovation",
    imageUrl: "/images/innovation/iot-monitoring.jpg",
    pageUrl: "/agriculturetech",
  },
  {
    id: 2904,
    title: "Automated Irrigation Solutions",
    description:
      "Automated irrigation in Chennai ensures precise watering schedules, conserving water while maintaining crop hydration and health.",
    slug: "automated-irrigation-chennai",
    name: "Innovation",
    imageUrl: "/images/innovation/auto-irrigation.jpg",
    pageUrl: "/agriculturetech",
  },
  {
    id: 2905,
    title: "Data-Driven Crop Management",
    description:
      "Using data insights, Chennai farmers monitor crop health and manage pests more effectively, leading to healthier harvests.",
    slug: "data-driven-crop-management",
    name: "Innovation",
    imageUrl: "/images/innovation/data-crop.jpg",
    pageUrl: "/agriculturetech",
  },
  {
    id: 2906,
    title: "Drone Technology for Agricultural Needs",
    description:
      "Drones support Chennai’s agriculture with aerial monitoring, spraying, and field surveying for efficient crop care.",
    slug: "drone-agriculture-chennai",
    name: "Innovation",
    imageUrl: "/images/innovation/drone-agriculture.jpg",
    pageUrl: "/agriculturetech",
  },
  {
    id: 2907,
    title: "Aerial Crop Monitoring and Analysis",
    description:
      "Drones capture high-resolution images of farmlands in Chennai, identifying diseases early and boosting yield accuracy.",
    slug: "aerial-crop-analysis",
    name: "Innovation",
    imageUrl: "/images/innovation/drone-monitoring.jpg",
    pageUrl: "/agriculturetech",
  },
  {
    id: 2908,
    title: "Accurate Spraying Applications",
    description:
      "Precision drones in Chennai spray fertilizers and pesticides accurately, reducing waste and environmental impact.",
    slug: "drone-spraying-chennai",
    name: "Innovation",
    imageUrl: "/images/innovation/spraying.jpg",
    pageUrl: "/agriculturetech",
  },
  {
    id: 2909,
    title: "Effective Field Mapping and Planning",
    description:
      "Drones assist Chennai farmers with accurate mapping for improved planning across sowing, monitoring, and harvesting stages.",
    slug: "field-mapping-planning",
    name: "Innovation",
    imageUrl: "/images/innovation/field-mapping.jpg",
    pageUrl: "/agriculturetech",
  },
  {
    id: 2910,
    title: "Digital Marketplaces and Farmer Connectivity",
    description:
      "Chennai farmers use online platforms to sell directly to consumers, improving profitability and eliminating middlemen.",
    slug: "digital-farmer-marketplace",
    name: "Innovation",
    imageUrl: "/images/innovation/marketplace.jpg",
    pageUrl: "/agriculturetech",
  },
  {
    id: 2911,
    title: "Online Platforms for Direct Sales",
    description:
      "Digital platforms connect Chennai farmers directly with buyers, increasing earnings and reducing dependency on intermediaries.",
    slug: "direct-sales-platforms",
    name: "Innovation",
    imageUrl: "/images/innovation/direct-sales.jpg",
    pageUrl: "/agriculturetech",
  },
  {
    id: 2912,
    title: "Increased Price Transparency",
    description:
      "Chennai farmers access real-time pricing on digital platforms, enabling them to make smarter and more profitable decisions.",
    slug: "price-transparency-farming",
    name: "Innovation",
    imageUrl: "/images/innovation/price-info.jpg",
    pageUrl: "/agriculturetech",
  },
  {
    id: 2913,
    title: "Simplified Logistics and Supply Chain",
    description:
      "Technology platforms streamline transport and distribution for Chennai farmers, ensuring fresh produce reaches consumers efficiently.",
    slug: "agri-supply-chain-chennai",
    name: "Innovation",
    imageUrl: "/images/innovation/agri-logistics.jpg",
    pageUrl: "/agriculturetech",
  },

  {
    id: 3001,
    title: "Volunteer in Chennai",
    description:
      "Become an essential part of Chennai’s vibrant culture by contributing your time and expertise to causes that uplift communities citywide.",
    slug: "volunteer-chennai",
    name: "Volunteer",
    imageUrl: "/images/volunteer/volunteer-main.jpg",
    pageUrl: "/volunteer",
  },
  {
    id: 3002,
    title: "Became a Volunteer",
    description:
      "Donate your time and talents to support various causes like environment and education, fostering meaningful connections and lasting impact in Chennai.",
    slug: "become-volunteer",
    name: "Volunteer",
    imageUrl: "/images/volunteer/become.jpg",
    pageUrl: "/volunteer",
  },
  {
    id: 3003,
    title: "Digital",
    description:
      "Use your tech skills to assist Super Chennai — from website design to data analysis and social media outreach, create a digital impact across the city.",
    slug: "digital-volunteering",
    name: "Volunteer",
    imageUrl: "/images/volunteer/digital.jpg",
    pageUrl: "/volunteer",
  },
  {
    id: 3004,
    title: "Events",
    description:
      "Help organize and manage events like charity drives, festivals, and city meetups to build community connections and lasting memories in Chennai.",
    slug: "volunteer-events-chennai",
    name: "Volunteer",
    imageUrl: "/images/volunteer/events.jpg",
    pageUrl: "/volunteer",
  },
  {
    id: 3005,
    title: "Content Creators",
    description:
      "Leverage your storytelling skills to craft impactful text and visuals that amplify Super Chennai’s mission and community engagement.",
    slug: "content-creator-chennai",
    name: "Volunteer",
    imageUrl: "/images/volunteer/content.jpg",
    pageUrl: "/volunteer",
  },
  {
    id: 3006,
    title: "Design or Art",
    description:
      "Contribute your artistic talents to Chennai’s projects — design visuals, beautify spaces, or lead art initiatives that transform public environments.",
    slug: "design-art-chennai",
    name: "Volunteer",
    imageUrl: "/images/volunteer/art.jpg",
    pageUrl: "/volunteer",
  },
  {
    id: 3007,
    title: "Mentors",
    description:
      "Share your knowledge to empower individuals in Chennai. Support Super Chennai by guiding others in their personal and professional development.",
    slug: "mentors-chennai",
    name: "Volunteer",
    imageUrl: "/images/volunteer/mentor.jpg",
    pageUrl: "/volunteer",
  },

  //   HOMEPAGE #####################################################################################

  {
    id: 4001,
    title: "Trending Chennai",
    slug: "trending-chennai",
    description:
      "Keeps you updated on the latest happenings in the city—from exciting events and hotspots to cultural trends and must-visit places.",
    pageUrl: "/",
    category: "Explore",
  },
  {
    id: 4002,
    title: "Fun Chennai",
    slug: "fun-chennai",
    description:
      "Explore the fun side of Chennai! Discover thrilling activities, food trails, entertainment venues, and events that make the city lively.",
    pageUrl: "/",
    category: "Explore",
  },
  {
    id: 4003,
    title: "Startup Chennai",
    slug: "startup-chennai",
    description:
      "Discover the journey of Chennai's startups, driven by innovation and investment, and its booming IT sector—the tech hub of South India.",
    pageUrl: "/",
    category: "Innovate",
  },
  {
    id: 4004,
    title: "Diverse Delights",
    slug: "diverse-delights",
    description:
      "Take a culinary tour through Chennai’s food scene—from local Chettinad and dosas to international Italian, Thai, Burmese, and more.",
    pageUrl: "/",
    category: "Food",
  },
  {
    id: 4005,
    title: "Chennai Investments",
    slug: "chennai-investments",
    description:
      "Explore real estate, startups, renewable energy, government initiatives, and more. Chennai is a top spot for smart investments.",
    pageUrl: "/",
    category: "Invest",
  },
  {
    id: 4006,
    title: "Utilities in Chennai",
    slug: "utilities-chennai",
    description:
      "Access essential services in Chennai—banks, pharmacies, petrol stations and more—across North, South, East, West, and Central regions.",
    pageUrl: "/",
    category: "Live",
  },
  {
    id: 4007,
    title: "Chennai ChillOut Zone",
    slug: "chennai-chillout-zone",
    description:
      "Discover the city's relaxing side—beaches, parks, malls, and restobars that offer vibrant leisure experiences.",
    pageUrl: "/",
    category: "Fun",
  },
  {
    id: 4008,
    title: "Events Calendar",
    slug: "events-calendar",
    description:
      "Stay in the loop with cultural festivals, live shows, workshops, and exhibitions. Never miss what's happening in Chennai.",
    pageUrl: "/",
    category: "Events",
  },
  {
    id: 4009,
    title: "Social Chennai",
    slug: "social-chennai",
    description:
      "Spotlights events, lifestyle, and exclusive interviews with celebrities, entrepreneurs, sports stars, and Humans of Chennai.",
    pageUrl: "/",
    category: "People",
  },
  {
    id: 4010,
    title: "Volunteer - Super Chennai",
    slug: "volunteer-chennai",
    description:
      "Join our team and contribute to community projects across Chennai to shape a brighter, collaborative future.",
    pageUrl: "/",
    category: "Volunteer",
  },
  {
    id: 4011,
    title: "Design/Art Volunteering",
    slug: "design-volunteer",
    description:
      "Volunteer your creativity to design murals and beautify public spaces across Chennai. Help make the city a vibrant canvas.",
    pageUrl: "/",
    category: "Volunteer",
  },
];

export default function SearchResults() {
  const query = useQuery().get("search");
  const results = useMemo(() => {
    if (!query) return [];

    const lowerQuery = query.toLowerCase();

    return dummyData
      .map((item) => {
        let score = 0;

        if (item.title.toLowerCase() === lowerQuery) score += 10;
        else if (item.title.toLowerCase().includes(lowerQuery)) score += 5;

        if (item.description.toLowerCase().includes(lowerQuery)) score += 3;
        if (item.name && item.name.toLowerCase().includes(lowerQuery))
          score += 2;
        if (item.slug && item.slug.toLowerCase().includes(lowerQuery))
          score += 1;

        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score); // High score = higher relevance
  }, [query]);
  return (
    <>
      <div className="accaodomationBannerSection">
        <div>
          <img src="./images/AccodomationBannerr.jpg" alt="" />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Search Results for "{query}"</h3>
            <div className="breadCrum">
              <a href=""></a> - <a href="">Search Results for "{query}"</a>{" "}
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>
      <div className="searchResultsContainer">
        {results.length > 0 ? (
          <div className="SearchCardGrid">
            {results.map((item) => (
              <div className="Searchcard" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.pageUrl}>View More</a>
              </div>
            ))}
          </div>
        ) : (
          <div className="accodoamationBannerText">
            <p>No results found.</p>
          </div>
        )}
      </div>
    </>
  );
}
