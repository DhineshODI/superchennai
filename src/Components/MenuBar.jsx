import "../assets/Css/MenuBar.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export default function MenuBar({ setMenuBar }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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

  const menuItemsMobile = [
    {
      label: "Live",
      labellink: "/live",
      content: [
        {
          title: "Overview",
          desc: "Affordable Chennai Lifestyle",
          link: "/live",
        },
        {
          title: "Cost of living",
          desc: "Affordable Chennai Lifestyle",
          link: "/costofliving",
        },
        {
          title: "Residency",
          desc: "Convenient Living Options",
          link: "/residencypropertyrentbuyinchennai",
        },
        {
          title: "Employment",
          desc: "Chennai Work Gateway",
          link: "/employmentinchennai",
        },
        {
          title: "Transportation",
          desc: "Connecting Mobility globally",
          link: "/transportation",
        },
        {
          title: "Healthcare",
          desc: "Quality Patient Care",
          link: "/healthcare",
        },
        {
          title: "Cultural / Religious attractions",
          desc: "Rich Chennai Heritage",
          link: "/culturereligiousattractions",
        },
        {
          title: "Recreation",
          desc: "Enjoy Leisure and fun",
          link: "/recreation",
        },
        {
          title: "Neighbourhood",
          desc: "Diverse compassionate Community",
          link: "/neighbourhood",
        },
        {
          title: "Quality of Life",
          desc: "Comfortable Chennai Living",
          link: "/qualityoflife",
        },
        {
          title: "Future Growth & Development",
          desc: "Evolving Chennai Landscape",
          link: "/futuregrowthdeveloping",
        },
        {
          title: "Educational Institutions",
          desc: "Connect services seamlessly",
          link: "/educationinstitutions",
        },
      ],
    },
    {
      label: "Visit",
      labellink: "/visit",
      content: [
        {
          title: "Overview",
          desc: "Affordable Chennai Lifestyle",
          link: "/visit",
        },
        {
          title: "Accomodation",
          desc: "Comfortable Chennai Stays",
          link: "/accomodation",
        },
        {
          title: "Food",
          desc: "Delicious global cuisines ",
          link: "/food",
        },
        {
          title: "Things to do",
          desc: "Explore Chennai Culture",
          link: "/thingstodo",
        },
        {
          title: "Places to Visit",
          desc: "Explore a lot more",
          link: "/placestovisit",
        },
        {
          title: "Itinerary",
          desc: "Chennai Cultural Trail",
          link: "/itinerary",
        },
        {
          title: "Hidden Gems",
          desc: "Discover Local Secrets",
          link: "/hiddengems",
        },
        {
          title: "Shopping",
          desc: "Everything under a sky",
          link: "/shopping",
        },
        {
          title: "Travel Tips",
          desc: "Navigate Chennai Easily",
          link: "/traveltips",
        },
        {
          title: "Wellness",
          desc: "Rejuvenate Chennai Style",
          link: "/wellness",
        },
        {
          title: "Events",
          desc: "Chennai Happening Now",
          link: "/events",
        },
        {
          title: "Conferences",
          desc: "Chennai Happening Now",
          link: "/conferences",
        },
      ],
    },
    {
      label: "Work",
      labellink: "/work",
      content: [
        {
          title: "Overview",
          desc: "Affordable Chennai Lifestyle",
          link: "/work",
        },
        {
          title: "Employment / Business Permits",
          desc: "Modern websites & web apps",
          link: "/employmentbusinesspermits",
        },
        {
          title: "Unicorns",
          desc: "Connect services seamlessly",
          link: "/unicorn",
        },
        {
          title: "Co-workingspaces",
          desc: "Connect services seamlessly",
          link: "/coworkingspaces",
        },
        {
          title: "PG",
          desc: "Connect services seamlessly",
          link: "/pg",
        },
        {
          title: "Salaries & Benefits",
          desc: "Connect services seamlessly",
          link: "/salariesbenefits",
        },
        {
          title: "Career Growth",
          desc: "Connect services seamlessly",
          link: "/careergrowth",
        },
        {
          title: "Networking",
          desc: "Connect services seamlessly",
          link: "/networking",
        },
        {
          title: "Worklife balance",
          desc: "Connect services seamlessly",
          link: "/worklifebalance",
        },
      ],
    },
    {
      label: "Invest",
      labellink: "/invest",
      content: [
        {
          title: "Overview",
          desc: "Affordable Chennai Lifestyle",
          link: "/invest",
        },
        {
          title: "Realestate",
          desc: "Chennai Property Potential",
          link: "/investrealestatechennai",
        },
        {
          title: "Franchise",
          desc: "Explore Business Opportunities",
          link: "/investfranchisechennai",
        },
        {
          title: "Startups",
          desc: "Invest Chennai Innovation",
          link: "/investstartupschennai",
        },
        {
          title: "Renewable Energy",
          desc: "Sustainable Chennai Growth",
          link: "/investrenewableenergychennai",
        },
        {
          title: "Retire in chennai",
          desc: "Serene Investment Choice",
          link: "/investretirementchennai",
        },
        {
          title: "Government initiatives",
          desc: "Chennai Policy Support",
          link: "/investgovernmentinitiativeschennai",
        },
        {
          title: "Formalities & Regulations",
          desc: "Navigate Chennai Investments",
          link: "/investformalitiesregulationschennai",
        },
        {
          title: "NEWS",
          desc: "Chennai Investment Insights",
          link: "/investnewschennai",
        },
        {
          title: "Events",
          desc: "Chennai Investment Insights",
          link: "/investeventschennai",
        },
        {
          title: "Exhibitions",
          desc: "Chennai Investment Insights",
          link: "/investexhibitionschennai",
        },
      ],
    },
    {
      label: "Innovate",
      labellink: "/innovate",
      content: [
        {
          title: "Overview",
          desc: "Affordable Chennai Lifestyle",
          link: "/innovate",
        },
        {
          title: "IT and Software Development",
          desc: "Modern websites & web apps",
          link: "/itandsoftwaredevelopment",
        },
        {
          title: "Artificial Intelligence",
          desc: "iOS & Android solutions",
          link: "/artificialintelligenceandmachinelearning",
        },
        {
          title: "Electric Vehicles",
          desc: "Connect services seamlessly",
          link: "/ElectricVehicles",
        },
        {
          title: "Smart City Initiatives",
          desc: "Modern websites & web apps",
          link: "/smartcityinitiatives",
        },
        {
          title: "Healthcare Tech",
          desc: "iOS & Android solutions",
          link: "/healthcaretechinnovation",
        },
        {
          title: "Robotics and Automation",
          desc: "Connect services seamlessly",
          link: "/roboticsandautomation",
        },
        {
          title: "Blockchain and Fintech",
          desc: "Modern websites & web apps",
          link: "/blockchainandfintech",
        },
        {
          title: "Automotive Tech and R&D",
          desc: "iOS & Android solutions",
          link: "/automotivetechandrandd",
        },
        {
          title: "Education Tech",
          desc: "Connect services seamlessly",
          link: "/educationtech",
        },
        {
          title: "3D Printing",
          desc: "Modern websites & web apps",
          link: "/threedprintingandadditivemanufacturing",
        },
        {
          title: "Augmented Reality",
          desc: "iOS & Android solutions",
          link: "/augmentedreality",
        },
        {
          title: "Agriculture Tech",
          desc: "Connect services seamlessly",
          link: "/agriculturetech",
        },
      ],
    },
    {
      label: "Volunteer",
      labellink: "/volunteer",

      content: [
        {
          title: "Overview",
          desc: "Affordable Chennai Lifestyle",
          link: "/volunteer",
        },
        {
          title: "Digital",
          desc: "Connect Chennai Volunteers",
          link: "/volunteer",
        },
        {
          title: "Events",
          desc: "Volunteers Power Gatherings",
          link: "/volunteer",
        },
        {
          title: "Content Creators",
          desc: "Sharing Volunteer Stories",
          link: "/volunteer",
        },
        {
          title: "Design &  Art",
          desc: "Visualizing Volunteer Impact",
          link: "/volunteer",
        },
        {
          title: "Influencers",
          desc: "Amplifying Volunteer Voices",
          link: "/volunteer",
        },
        {
          title: "Mentors",
          desc: "Guiding Future Volunteers",
          link: "/volunteer",
        },
        {
          title: "Pride of Chennai",
          desc: "Volunteers Shape City",
          link: "/volunteer",
        },
      ],
    },
  ];
  return (
    <>
      <div className="menuBarFullContainer">
        <div className="menuBarFullFirstSection"></div>

        <div className="menuBarFullSecondSection">
          <div className="closeButtonMenubar">
            {/* <img
              className="SuperCehnnaiLogoImages"
              src="./images/super-chennai-logo-final-header.png"
              src="./images/super-chennai-logo-final.png"
              alt=""
            /> */}
            <div className="SuperCehnnaiLogoImages"></div>
            <img className="closeButtonMenuBarMobile cursor:pointer"
              onClick={() => setMenuBar(false)}
              // src="./images/menuBarCloseButton.png"
              src="./images/close.svg"
              // src="./images/HomePage-Images/menuBarCloseButton-removebg-preview.png"
              alt=""
            />
               <img className="closeButtonMenuBaDesktop cursor-pointer"
              onClick={() => setMenuBar(false)}
              src="./images/menuBarCloseButton.png"
              alt=""
            />
          </div>
          {/* <div className="w-full max-w-md mx-auto menuBarMain">
            {menuItemsMobile.map((section, index) => (
              <div key={section.label} className="border-b border-gray-300">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center mobileNavLinks"
                >
                  <span>{section.label}</span>
                  <span className="text-2xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="pl-4 pb-4 space-y-2">
                    {section.content.map((item, i) => (
                      <a
                        key={i}
                        href={item.link}
                        className="block text-sm text-gray-700 hover:text-blue-500"
                      >
                        <div className="font-medium titleMenuBar">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div> */}
          <div className="w-full max-w-md mx-auto menuBarMain">
            {menuItemsMobile.map((section, index) => (
              <div key={section.label} className="">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center mobileNavLinks"
                >
                  <span>{section.label}</span>
                  <span className="text-2xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden pl-4 pb-4 space-y-2 MenuBarTitleSection"
                    >
                      {section.content.map((item, i) => (
                        <a
                          key={i}
                          href={item.link}
                          className="block text-sm text-gray-700 hover:text-blue-500"
                        >
                          <div className="font-medium titleMenuBar">
                            {item.title}
                          </div>
                          {/* <div className="text-xs text-gray-500">
                            {item.desc}
                          </div> */}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="w-full max-w-md mx-auto containerMenuBar">
            <ul className="w-full max-w-md mx-auto menuBarLinksContent">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
