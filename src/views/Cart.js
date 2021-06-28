import React from "react";
import TopNavigation from "../components/Cart/TopNavigation";
import CartList from "../components/Cart/CartList";
import CartCheckout from "../components/Cart/Checkout";
import RecentlyViewed from "../components/Cart/RecentlyViewed";

const Cart = () => {
  return (
    <div className="mx-3">
      <TopNavigation />
      <CartList />
      <CartCheckout />
      <RecentlyViewed />
    </div>
  );
};

export default Cart;
