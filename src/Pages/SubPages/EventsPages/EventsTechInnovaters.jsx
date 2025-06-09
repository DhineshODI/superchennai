import { Link } from "react-router-dom";
export default function EventsTechInnovaters() {
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
              <h2>Startup Networking Global Startup Clubs</h2>
              <div className="EventBanImg">
                <img src="./images/events/Events1.jpg" alt="" />
              </div>
              <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
                <div className="ebbmgiL flex">
                  <h5>Concerts</h5>
                  <h5>Music Shows</h5>
                </div>
                {/* <div className="ebbmgiR flex items-center">
                  <h5>573 are interested</h5>
                  <button>I'm Interested</button>
                </div> */}
              </div>
              <div className="EventContBox mb-[5vh]">
                <h3>About The Event</h3>
                <p>
                  Get ready for an unforgettable night of music and magic! On
                  June 14th, D. Imman, one of Tamil cinema's most celebrated
                  music composers, will be performing live in Chennai. The
                  concert is being organized by Noise and Grains, a name
                  synonymous with exceptional production and flawless execution,
                  known for bringing some of the most spectacular events in the
                  city to life.
                </p>
                <p>
                  This event promises to be a feast for the senses, featuring a
                  blend of D. Imman’s hit tracks, from his soulful melodies to
                  the energetic beats that have captured the hearts of fans.
                  With Noise and Grains at the helm of production, the event
                  promises to deliver a top-tier experience, renowned for its
                  expertise in crafting flawless, memorable events.
                </p>
                <p>
                  Whether you’ve followed D. Imman’s music for years or are
                  discovering it for the first time, this concert is sure to be
                  a night to remember. So, save the date, because Chennai is
                  going to be one for the books!
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
                      <p>6:00 PM</p>
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
                      <p>Age Limit - 5yrs +</p>
                    </a>
                    <a class="evderlinks flex items-center">
                      <div className="iconsssec flex items-center">
                        <img src="./images/events/language.png" alt="" />
                      </div>
                      <p>Tamil</p>
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
                      <p>YMCA Nandanam: Chennai</p>
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
