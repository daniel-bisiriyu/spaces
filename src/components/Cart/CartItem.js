import React from "react";
import deleteIcon from "../../icons/delete.svg";
import subtractIcon from "../../icons/add.svg";
import addIcon from "../../icons/subtract.svg";
import "../../styles/cart.css";

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <div>
          <img src={product.image} alt={product.description} />
        </div>
        <div>
          <h1 className="name">{product.name}</h1>
          <h1 className="price">{product.price}</h1>
        </div>
      </div>
      <hr className="hr" />
      <div className="flex justify-between items-center">
        <div className="flex">
          <img src={deleteIcon} alt="delete icon" />
          <p>Delete</p>
        </div>
        <div className="flex">
          <img src={subtractIcon} alt="subtract icon" />
          <p className="px-2">0</p>
          <img src={addIcon} alt="add icon" />{" "}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
