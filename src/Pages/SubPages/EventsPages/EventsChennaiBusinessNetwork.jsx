import { Link } from "react-router-dom";
export default function EventsChennaiBusinessNetwork() {
  return (
    <>
      <section className="accaodomationBannerSection">
        <div>
          <img src="./images/AccodomationBannerr.jpg" alt="" />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Events</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="/eventsmain">Events</Link>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="EventsBanSec SecPadblock12">
        <div className="container max-w-7xl mx-auto ">
          <div className="EventContBox flex">
            <div className="EventLeft">
              <h2>Chennai Business Networking</h2>
              <div className="EventBanImg">
                <img src="./images/events/chennaibusinessnetwork.jpg" alt="" />
              </div>
              <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
                <div className="ebbmgiL flex">
                  <h5>Business</h5>
                  <h5>Conferences</h5>
                </div>
                {/* <div className="ebbmgiR flex items-center">
                  <h5>573 are interested</h5>
                  <button>I'm Interested</button>
                </div> */}
              </div>
              <div className="EventContBox mb-[5vh]">
                <h3>About The Event</h3>
                <p>
                  Chennai Business Network the ultimate meetup for professionals
                  seeking to connect exchange sales opportunities expand their
                  business networks and engage in insightful discussions on
                  industry-related topics. This curated event provides a
                  platform for entrepreneurs business owners and professionals
                  to foster meaningful connections and explore collaborative
                  opportunities.
                </p>
                <p>
                  At Chennai Business Network you`ll have the opportunity to
                  engage with like-minded individuals who are passionate about
                  growing their businesses and expanding their reach. The event
                  offers a relaxed and friendly environment conducive to
                  building relationships sharing experiences and gaining
                  valuable insights.
                </p>
                <p>
                  Key highlights of the meetup include a sales connect session
                  where participants can showcase their products or services
                  exchange leads and explore potential partnerships. This
                  interactive session allows you to pitch your offerings learn
                  about others` offerings and discover new business
                  opportunities. Additionally industry-related small talks cover
                  a wide range of subjects such as market trends business
                  strategies and marketing techniques. These discussions provide
                  an excellent opportunity to learn from industry experts gain
                  new perspectives and stay updated on the latest developments
                  in your field.
                </p>
              </div>
              {/* <div className="EventContBox">
                <h3>Artists</h3>
                <div className="ArtistsImg">
                  <img src="./images/events/Artistimg/d-imman-img.jpg" alt="" />
                </div>
                <h4 className="flex flex-col">
                  <strong>D. Imman</strong>
                  <small>Singer</small>
                </h4>
              </div> */}
            </div>
            <div className="EventRight">
              <div class="evderibox">
                <div class="evderListbox">
                  <div class="evderViewbox">
                    <a class="evderlinks flex items-center">
                      <div className="iconsssec flex items-center">
                        <img src="./images/events/calendar.png" alt="" />
                      </div>
                      <p>Sat 14 Jun 2025</p>
                    </a>
                    <a class="evderlinks flex items-center">
                      <div className="iconsssec flex items-center">
                        <img src="./images/events/time.png" alt="" />
                      </div>
                      <p>10:30 AM</p>
                    </a>
                    <a class="evderlinks flex items-center">
                      <div className="iconsssec flex  items-center">
                        <img src="./images/events/duration.png" alt="" />
                      </div>
                      <p>3 Hours</p>
                    </a>
                    <a class="evderlinks flex items-center">
                      <div className="iconsssec flex  items-center">
                        <img src="./images/events/age_limit.png" alt="" />
                      </div>
                      <p>Age Limit - 18yrs +</p>
                    </a>
                    <a class="evderlinks flex items-center">
                      <div className="iconsssec flex items-center">
                        <img src="./images/events/language.png" alt="" />
                      </div>
                      <p>English, Hindi</p>
                    </a>
                    <a class="evderlinks flex items-center">
                      <div className="iconsssec flex items-center">
                        <img src="./images/events/genre.png" alt="" />
                      </div>
                      <p>Regional</p>
                    </a>
                    <a class="evderlinks flex items-center">
                      <div className="iconsssec flex items-center">
                        <img src="./images/events/location.png" alt="" />
                      </div>
                      <p>Annular Technologies: Chennai</p>
                    </a>
                  </div>
                </div>
                {/* <div class="evdPricbox flex justify-between">
                  <div class="EpriLeft">
                    <h4>₹499 onwards</h4>
                    <h6>Filling Fast</h6>
                  </div>
                  <div class="ebokbtn">
                    <button class="evbookbtnd">Book Now</button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
