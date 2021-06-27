import React from "react";
import searchIcon from "../../icons/search.svg";

const SearchBar = () => {
  return (
    <div className="search-bar mx-3 justify-between px-3">
      <input placeholder="Search merchbuy" className="py-2" />
      <img src={searchIcon} alt="search icon" />
    </div>
  );
};

export default SearchBar;
