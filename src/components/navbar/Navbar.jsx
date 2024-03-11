import React, { useContext, useState } from "react";
import "./Navbar.css";
import { TiWeatherSnow } from "react-icons/ti";
import { FcSearch } from "react-icons/fc";
import { Context } from "../../context/AppContext";

const Navbar = () => {
  const { setCity, city } = useContext(Context);
  const [location, setLocation] = useState("");

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && location.length > 0) {
      setCity(location);
      setLocation("");
      console.log("Enter key pressed");
    }
  };

  const searchPlaceHandler = () => {
    setCity(location);
    setLocation(""); // Clear the search bar after setting the city
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <TiWeatherSnow className="logo" />
        <span>weather</span>
      </div>

      <div className="wrapper">
        <FcSearch className="search-icon" />
        <input
          className="search"
          placeholder="City"
          type="text"
          value={location}
          onKeyUp={searchQueryHandler}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <button className="searchbtn" onClick={searchPlaceHandler}>
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
