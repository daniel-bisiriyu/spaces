import React from "react";

const CartCheckout = () => {
  return (
    <div className="checkout">
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>N18,099.09</p>
      </div>
      <div className="flex justify-between">
        <p>Total</p>
        <p>N18,099.09</p>
      </div>
      <div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default CartCheckout;
