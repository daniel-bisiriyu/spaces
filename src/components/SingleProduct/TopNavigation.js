import React from "react";
import backIcon from "../../icons/back.svg";
import cartIcon from "../../icons/cart.svg";
import { Link } from "react-router-dom";

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
        <Link to="/cart">
          <img src={cartIcon} alt="cart icon" />
        </Link>
      </div>
    </div>
  );
};

export default TopNavigation;
