import React, { Component } from "react";
import { connect } from "react-redux";

class CartCheckout extends Component {
  render() {
    let priceTotal = 0;
    this.props.cartItems.forEach((item) => {
      console.log(item.price);
      console.log(item.quantity);
      priceTotal += Number(item.quantity) * Number(item.price);
    });
    return (
      <div className="checkout">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>N{priceTotal}.00</p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>N{priceTotal}.00</p>
        </div>
        <div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapState)(CartCheckout);
