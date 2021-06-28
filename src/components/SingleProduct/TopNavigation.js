import React from "react";
import backIcon from "../../icons/back.svg";
import searchIcon from "../../icons/contracted-search.svg";
import CartNotification from "../CartNotification";

import "../../styles/top-navigation.css";

const TopNavigation = () => {
  return (
    <div className="product-navigation px-3 py-1">
      <div>
        <img src={backIcon} alt="back icon" />
      </div>
      <div>
        <p>Details</p>
      </div>
      <div className="flex items-center">
        <img src={searchIcon} alt="search icon" className="mx-2" />
        <CartNotification />
      </div>
    </div>
  );
};

export default TopNavigation;
