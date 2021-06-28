import React from "react";
import backIcon from "../../icons/back.svg";
import cartIcon from "../../icons/cart.svg";
import "../../styles/top-navigation.css";

const TopNavigation = () => {
  return (
    <div className="product-navigation">
      <div>
        <img src={backIcon} alt="back icon" />
      </div>
      <div>
        <p>Details</p>
      </div>
      <div>
        <img src={cartIcon} alt="cart icon" />
      </div>
    </div>
  );
};

export default TopNavigation;
