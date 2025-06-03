import React from "react";
import Marquee from "react-fast-marquee";
import "../Css/CostOfLiving.css";
import Search from "../Search";

export default function CostLivinginChennai() {
  const single = [
    {
      id: 1,
      title: "Accomodation",
      para: "Chennai offers a wide variety of accommodation options to suit individual preferences, including shared rooms (₹2,000-₹15,000), paying guests (₹5,000-₹20,000), and 1 BHKs (₹6,000-₹18,000).",
      imgs: "/images/icons/AccomodationIcon.svg",
    },
    {
      id: 2,
      title: "Groceries",
      para: "Grocery prices in Chennai typically fall between ₹2,000 and ₹4,000 per month. Depending on dietary patterns, this includes veggies and other necessary foods.",
      imgs: "/images/icons/GroceriesIcon.svg",
    },
    {
      id: 3,
      title: "Commute",
      para: "Depending on the distance, an individual's monthly commute might cost between ₹800 and ₹2,000 for bus or between ₹1,500 and ₹4,000+ for own transport.",
      imgs: "/images/icons/CommuteIcon.svg",
    },
    {
      id: 4,
      title: "Utilities",
      para: "Depending on consumption and apartment size, monthly utility expenditures for a single person (water, electricity, and internet) often vary from ₹1,500 to ₹3,500.",
      imgs: "/images/icons/UtilitiesIcon.svg",
    },
    {
      id: 5,
      title: "Clothing",
      para: "Depending on brand preferences and shopping habits, a single person's monthly clothing costs in Chennai might range from ₹500 to ₹2,000+.",
      imgs: "/images/icons/ClothingIcon.svg",
    },
    {
      id: 6,
      title: "Food",
      para: "Depending on preferences, a single individual may spend between ₹2,000 and ₹5,000+ per month on eating out or ordering meals, not including groceries.",
      imgs: "/images/icons/FoodIcon.svg",
    },
    {
      id: 7,
      title: "Entertainment",
      para: "Depending on activities like dining, movies, and social gatherings, expenses in Chennai might range from ₹500 to ₹3,000+ per month for a single individual.",
      imgs: "/images/icons/EntertainmentIcon.svg",
    },
  ];
  const couple = [
    {
      id: 1,
      title: "Accomodation",
      para: "According to location and facilities, couples in Chennai anticipate paying between ₹12,000 and ₹25,000 per month for a 1-2 BHK flat.",
      imgs: "/images/icons/AccomodationIcon.svg",
    },
    {
      id: 2,
      title: "Groceries",
      para: "Relying on their dietary choices and habits, a couple's monthly grocery costs in Chennai usually fall between ₹3,000 and ₹5,000.",
      imgs: "/images/icons/GroceriesIcon.svg",
    },
    {
      id: 3,
      title: "Commute",
      para: "With respect to the frequency of travel and car ownership, a couple's combined monthly commute in Chennai might cost between ₹2,000 and ₹5,000.",
      imgs: "/images/icons/CommuteIcon.svg",
    },
    {
      id: 4,
      title: "Utilities",
      para: "A couple in Chennai typically pays between ₹2,000 and ₹4,000 per month for utilities (water, electricity, internet, and even more).",
      imgs: "/images/icons/UtilitiesIcon.svg",
    },
  ];
  const family = [
    {
      id: 1,
      title: "Accomodation",
      para: "Families in Chennai typically spend ₹15,000-₹35,000+ monthly for 2-3+ BHK apartments, influenced by size, financial status, and location preferences.",
      imgs: "/images/icons/AccomodationIcon.svg",
    },
    {
      id: 2,
      title: "Groceries",
      para: "Monthly grocery expenses for a family in Chennai generally range from ₹4,000 to ₹8,000+, depending on size and basic and other dietary needs.",
      imgs: "/images/icons/GroceriesIcon.svg",
    },
    {
      id: 3,
      title: "Commute",
      para: "A family's transportation costs can range from ₹3,000 to ₹7,000+ monthly, considering own transport and usage and how frequently they set out.",
      imgs: "/images/icons/CommuteIcon.svg",
    },
    {
      id: 4,
      title: "Utilities",
      para: "Monthly utility expenses (electricity, water, internet, and phone bill) for a family in Chennai typically range from ₹2,500 to ₹5,000+ based on the usage.",
      imgs: "/images/icons/UtilitiesIcon.svg",
    },
  ];

  return (
    <>
      {/*----------------Accodimation-Banner----------- */}

      <div className="accaodomationBannerSection">
        <div>
          <img src="./images/AccodomationBannerr.jpg" alt="" />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Cost of Living in Chennai</h3>
            <div className="breadCrum">
              <a href="">LIVE</a> - <a href="">COST OF LIVING</a>{" "}
            </div>
          </div>
        </div>
        <Search />
      </div>

      {/*----------------Accodimation-Banner----------- */}
      <section className="inpageBan">
        <img src="/images/clcbanimg.jpg" alt="" />
      </section>
      <section className="costlcIntrosec Secpadblock bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="SecTitletb text-center mb-[8vh] costOfLivingIntro">
            <h3>
              Still chennai, one of <br />
              India’s most vibrant cities
            </h3>
            <p>
              Offers a dynamic and diverse lifestyle. The cost of living here
              can <br />
              vary depending on your lifestyle, preferences, and location within
              the city. Here's a <br />
              breakdown of what you can expect:
            </p>
          </div>
        </div>
        <div className="marqueetag">
          <Marquee>
            Living in chennai Living in chennai Living in chennai
          </Marquee>
        </div>
      </section>
      <section className="clcSecscrl flex">
        <div className="clcscrlCol clcscrlLft relative">
          <div className="clcscrlinLBox sticky top-0">
            <img src="/images/clcscrlImg.jpg" alt="" />
            <div className="clcscrLtitle bg-[#7d377c] relative">
              <h2 className="flex flex-col">
                <small>For a</small> Single{" "}
              </h2>
              <p>
                The cost of living in Chennai will be determined by each
                person's preferences for food, lodging, and location. Let's take
                a closer look.
              </p>
              <div className="boxttlsec">Single</div>
            </div>
          </div>
        </div>
        <div className="clcscrlCol clcscrlRight padbtm">
          <div className="clcscrlinRBox">
            {single.map((user) => (
              <div key={user.id} className="clcboxItemss flex">
                <div className="clcboxIImg">
                  <img src={user.imgs} alt={user.title} />
                </div>
                <div className="clcboxICont">
                  <h3>{user.title}</h3>
                  <p>{user.para}</p>
                  <p className="linkpara">
                    <a href="#">
                      <img src="/images/icons/LinkArrowRightIcon.svg" alt="" />
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="clcSecscrl clcSecscrlTwo bg-[#7d377c] flex">
        <div className="clcscrlCol clcscrlLft relative">
          <div className="clcscrlinLBox sticky top-0">
            <img src="/images/clcscrCoplImg.jpg" alt="" />
            <div className="clcscrLtitle bg-[#672866] relative">
              <h2 className="flex flex-col">
                <small>For a</small> Couple{" "}
              </h2>
              <p>
                When compared to a single person living alone, couples' combined
                spending for housing and groceries sometimes results in a higher
                total cost of living in Chennai.
              </p>
              <div className="boxttlsec"> Couple</div>
            </div>
          </div>
        </div>
        <div className="clcscrlCol clcscrlRight padbtm">
          <div className="clcscrlinRBox">
            {couple.map((user) => (
              <div key={user.id} className="clcboxItemss flex">
                <div className="clcboxIImg">
                  <img src={user.imgs} alt={user.title} />
                </div>
                <div className="clcboxICont">
                  <h3>{user.title}</h3>
                  <p>{user.para}</p>
                  <p className="linkpara">
                    <a href="#">
                      <img src="/images/icons/LinkArrowRightIcon.svg" alt="" />
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="clcSecscrl clcSecscrlThree bg-[#ffffff] flex">
        <div className="clcscrlCol clcscrlLft relative">
          <div className="clcscrlinLBox sticky top-0">
            <img src="/images/clcscrfamilylImg.jpg" alt="" />
            <div className="clcscrLtitle bg-[#672866] relative">
              <h2 className="flex flex-col">
                <small>For a</small> Family{" "}
              </h2>
              <p>
                As they require more space, devour additional meals, and
                sometimes pay more for transportation, families in Chennai
                usually have to pay greater living expenditures.
              </p>
              <div className="boxttlsec"> Family</div>
            </div>
          </div>
        </div>
        <div className="clcscrlCol clcscrlRight padbtm">
          <div className="clcscrlinRBox">
            {family.map((user) => (
              <div key={user.id} className="clcboxItemss flex">
                <div className="clcboxIImg">
                  <img src={user.imgs} alt={user.title} />
                </div>
                <div className="clcboxICont">
                  <h3>{user.title}</h3>
                  <p>{user.para}</p>
                  <p className="linkpara">
                    <a href="#">
                      <img src="/images/icons/LinkArrowRightIcon.svg" alt="" />
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
