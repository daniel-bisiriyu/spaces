import React from "react";
import backIcon from "../../icons/back.svg";
import "../../styles/top-navigation.css";

const TopNavigation = () => {
  return (
    <div className="cart-navigation">
      <div>
        <img src={backIcon} alt="back icon" />
      </div>
      <div>
        <p>Carts</p>
      </div>
    </div>
  );
};

export default TopNavigation;
