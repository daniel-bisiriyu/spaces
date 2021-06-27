import React from "react";
import "../navigation.css";
import NavigationItem from "./NavigationItem";
import homeIcon from "../icons/home.svg";
import buyIcon from "../icons/buy.svg";
import dealsIcon from "../icons/deals.svg";
import walletIcon from "../icons/wallet.svg";
import moreIcon from "../icons/more.svg";

const BottomNavigation = () => {
  return (
    <div className="navigation-menu px-3 py-3">
      <NavigationItem icon={homeIcon} name="Home" />
      <NavigationItem icon={buyIcon} name="Buy" />
      <NavigationItem icon={dealsIcon} name="Deals" />
      <NavigationItem icon={walletIcon} name="Wallet" />
      <NavigationItem icon={moreIcon} name="More" />
    </div>
  );
};

export default BottomNavigation;
