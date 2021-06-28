import React from "react";
import searchIcon from "../../icons/search.svg";

const SearchBar = ({ filterProducts }) => {
  return (
    <div className="search-bar justify-between px-3">
      <input
        placeholder="Search merchbuy"
        className="py-2"
        onChange={filterProducts}
      />
      <img src={searchIcon} alt="search icon" />
    </div>
  );
};

export default SearchBar;
