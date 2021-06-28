import React from "react";
import TopNavigation from "../components/Cart/TopNavigation";
import CartList from "../components/Cart/CartList";
import CartCheckout from "../components/Cart/Checkout";
import RecentlyViewed from "../components/Cart/RecentlyViewed";
import { connect } from "react-redux";

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

const mapState = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapState)(Cart);
