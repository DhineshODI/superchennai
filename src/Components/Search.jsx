import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Css/Search.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const suggestionList = [
    "Chennai Marina Beach",
    "Chennai Temples",
    "Chennai Food",
    "Chennai Nightlife",
    "Chennai IT Parks",
    "Chennai Malls",
    "Chennai Events",
    "Chennai Marina Beach",
    "Chennai Temples",
    "Chennai Food",
    "Chennai Nightlife",
    "Chennai IT Parks",
    "Chennai Malls",
    "Chennai Events",
    "Chennai Marina Beach",
    "Chennai Temples",
    "Chennai Food",
    "Chennai Nightlife",
    "Chennai IT Parks",
    "Chennai Malls",
    "Chennai Events",
  ];
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

  return (
    <>
      <div className="formsSection">
        <div className="searchInputFormbanner mobileSearchContainer">
          <form className="searchInputForm" onSubmit={handleSearch}>
            <input
              placeholder="Experience Chennai"
              value={query}
              onChange={handleInputChange}
            />
            <button type="submit" disabled={loading}>
              {loading ? <span className="spinner"></span> : "Search"}
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
  

        {/* <div className="mobileSearchSectionsRow">
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
        </div> */}
      </div>
    </>
  );
}
