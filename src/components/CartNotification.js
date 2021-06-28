import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cartIcon from "../icons/cart.svg";

class CartNotification extends Component {
  render() {
    return (
      <Link to="/cart">
        <div className="cart-icon">
          <div className="flex items-center">
            <img src={cartIcon} alt="location icon" />
          </div>
          <div className="cart-count">
            <p>{this.props.cartItems.length}</p>
          </div>
        </div>
      </Link>
    );
  }
}

const mapState = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapState)(CartNotification);
