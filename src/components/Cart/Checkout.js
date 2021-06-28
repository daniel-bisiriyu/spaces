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
      <div className="checkout bg-white px-3 my-1">
        <div className="flex justify-between sub-total">
          <p>Subtotal</p>
          <p> &#8358;{priceTotal}.00</p>
        </div>
        <div className="flex justify-between total">
          <p>Total</p>
          <p> &#8358;{priceTotal}.00</p>
        </div>
        <div>
          <button className="checkout-button btn">Checkout</button>
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
