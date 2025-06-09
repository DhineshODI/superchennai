import { Link } from "react-router-dom";
export default function EventsVishal() {
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
              <h2>Vikkals of Vikram </h2>
              <div className="EventBanImg">
                <img src="./images/events/vikkals.jpg" alt="" />
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
                  A middle class Tamil boy during his college days faces the
                  modern world for the 1st time and realises the rules at his
                  home and the outside world are very different.. How he learns
                  to unlearn certain unnecessary rules of his home is Vikkals of
                  Vikram…
                </p>
              </div>
              <div className="EventContBox">
                <h3>Artists</h3>
                <div className="ArtistsImg">
                  <img src="./images/events/Artistimg/vikram-arul.jpg" alt="" />
                </div>
                <h4 className="flex flex-col">
                  <strong>D. Imman</strong>
                  <small>Singer</small>
                </h4>
              </div>
            </div>
            <div className="EventRight">
              <div class="evderibox">
                <div class="evderListbox">
                  <div class="evderViewbox">
                    <a class="evderlinks flex items-center">
                      <div className="iconsssec flex items-center">
                        <img src="./images/events/calendar.png" alt="" />
                      </div>
                      <p>Sun 22 Jun 2025</p>
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
