import React from "react";
import LocationSelect from "./LocationSelect";
import ordersIcon from "../../icons/orders.svg";
import CartNotification from "../CartNotification";

import "../../styles/top-navigation.css";

const TopNavigation = () => {
  return (
    <div className="top-navigation justify-between py-1 px-3 bg-white">
      <LocationSelect />
      <div className="flex items-center">
        <img src={ordersIcon} alt="orders icon" />
        <p className="px-2">My Orders</p>
      </div>
      <div className="flex items-center">
        <CartNotification />
        <p className="px-2">Cart</p>
      </div>
    </div>
  );
};

export default TopNavigation;
