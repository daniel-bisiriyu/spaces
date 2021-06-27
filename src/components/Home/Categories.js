import React from "react";
import productCategoriesIcon from "../../icons/product-categories.svg";
import popularProductsIcon from "../../icons/popular-products.svg";
import recommendedProductIcons from "../../icons/recommended-products.svg";
import shopsIcon from "../../icons/shops.svg";

const Categories = () => {
  return (
    <div className="categories mx-3 my-4">
      <div className="category">
        <img src={productCategoriesIcon} alt="categories" />
        <p>Product categories</p>
      </div>
      <div className="category">
        <img src={popularProductsIcon} alt="popular" />
        <p>Popular Products</p>
      </div>
      <div className="category">
        <img src={recommendedProductIcons} alt="recommended" />
        <p>Recommended Products</p>
      </div>
      <div className="category">
        <img src={shopsIcon} alt="shops" />
        <p>Shops</p>
      </div>
    </div>
  );
};

export default Categories;
