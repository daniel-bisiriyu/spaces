import React from "react";
import LocationSelect from "./LocationSelect";
import ordersIcon from "../../icons/orders.svg";
import cartIcon from "../../icons/cart.svg";
import "../../styles/top-navigation.css";

const TopNavigation = () => {
  return (
    <div className="top-navigation justify-between">
      <LocationSelect />
      <div className="flex items-center">
        <img src={ordersIcon} alt="location icon" />
        <p className="px-2">My Orders</p>
      </div>
      <div className="flex items-center">
        <img src={cartIcon} alt="location icon" />
        <p className="px-2">Cart</p>
      </div>
    </div>
  );
};

export default TopNavigation;
