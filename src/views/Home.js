import React from "react";
import TopNavigation from "../components/Home/TopNavigation";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import ProductList from "../components/Home/ProductList";
import BottomNavigation from "../components/BottomNavigation";

import "../styles/home.css";

const AppHome = () => {
  return (
    <div>
      <TopNavigation />
      <SearchBar />
      <Categories />
      <ProductList />
      <BottomNavigation />
    </div>
  );
};

export default AppHome;
