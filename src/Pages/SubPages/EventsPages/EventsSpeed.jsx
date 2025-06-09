import { Link } from "react-router-dom";
export default function EventsSpeed() {
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
              <h2>Speed Friending</h2>
              <div className="EventBanImg">
                <img src="./images/events/speed.jpg" alt="" />
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
                  Step out of your comfort zone and join Small World Strangers
                  Meet , an event designed for those who love meeting new people
                  and forging real connections. Whether you`re looking to meet
                  someone with similar interests or simply enjoy a refreshing
                  conversation, this event offers both one-on-one and group
                  interaction opportunities. It`s the perfect setting to
                  discover people who match your vibe, in a relaxed, real-life
                  environment. Say goodbye to the digital world and dive into
                  authentic conversations—because sometimes, the best
                  connections happen face-to-face!
                </p>
              </div>
              {/* <div className="EventContBox">
                <h3>Artists</h3>
                <div className="ArtistsImg">
                  <img src="./images/events/Artistimg/vikram-arul.jpg" alt="" />
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
                      <p>Sat 7 Jun 2025 - Sun 29 Jun 2025</p>
                    </a>
                    <a class="evderlinks flex items-center">
                      <div className="iconsssec flex items-center">
                        <img src="./images/events/time.png" alt="" />
                      </div>
                      <p>5:00 PM</p>
                    </a>
                    <a class="evderlinks flex items-center">
                      <div className="iconsssec flex  items-center">
                        <img src="./images/events/duration.png" alt="" />
                      </div>
                      <p>1 Hour</p>
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
                      <p>Bengali, English, Hindi,</p>
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
                      <p>Lil Gamby Pizza Shop & Bar, Lower Parel: Mumbai</p>
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
