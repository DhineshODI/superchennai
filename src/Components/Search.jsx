import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Css/Search.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

//   const suggestionsData = [
//   { title: "Trending Chennai", searchText: "Trending Chennai" },
//   { title: "fun chennai", searchText: "fun chennai" },
//   { title: "startup chennai", searchText: "startup chennai" },
//   { title: "it sector", searchText: "it sector" },
//   { title: "diverse delights", searchText: "diverse delights" },
//   { title: "chettinad", searchText: "chettinad" },
//   { title: "italian", searchText: "italian" },
//   { title: "chinese", searchText: "chinese" },
//   { title: "north indian", searchText: "north indian" },
//   { title: "continental", searchText: "continental" },
//   { title: "burmese", searchText: "burmese" },
//   { title: "malaysian", searchText: "malaysian" },
//   { title: "south indian", searchText: "south indian" },
//   { title: "mexican", searchText: "mexican" },
//   { title: "investments", searchText: "investments" },
//   { title: "real estate", searchText: "real estate" },
//   { title: "omr", searchText: "omr" },
//   { title: "adyar", searchText: "adyar" },
//   { title: "maraimalai", searchText: "maraimalai" },
//   { title: "utilities", searchText: "utilities" },
//   { title: "banks", searchText: "banks" },
//   { title: "chillout", searchText: "chillout" },
//   { title: "beaches", searchText: "beaches" },
//   { title: "malls", searchText: "malls" },
//   { title: "restobars", searchText: "restobars" },
//   { title: "events", searchText: "events" },
//   { title: "concerts", searchText: "concerts" },
//   { title: "volunteer", searchText: "volunteer" },
//   { title: "design", searchText: "design" },
//   { title: "explore", searchText: "explore" },
//   { title: "social chennai", searchText: "social chennai" },
//   { title: "humans", searchText: "humans" },
//   { title: "culinary", searchText: "culinary" },
//   { title: "nightlife", searchText: "nightlife" },
//   { title: "festivals", searchText: "festivals" },
//   { title: "culture", searchText: "culture" },
//   { title: "innovation", searchText: "innovation" },
//   { title: "retire", searchText: "retire" },
//   { title: "franchise", searchText: "franchise" },
//   { title: "energy", searchText: "energy" },
//   { title: "mentorship", searchText: "mentorship" },
//   { title: "technology", searchText: "technology" },
// ];


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

    // const filtered = suggestionsData.filter(
    //   (item) =>
    //     item.title.toLowerCase().includes(value.toLowerCase()) ||
    //     item.searchText.toLowerCase().includes(value.toLowerCase())
    // );
    // setSuggestions(value ? filtered : []);
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
