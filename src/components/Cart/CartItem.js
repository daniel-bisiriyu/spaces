import React from "react";
import deleteIcon from "../../icons/delete.svg";
import subtractIcon from "../../icons/subtract.svg";
import addIcon from "../../icons/add.svg";
import "../../styles/cart.css";

const CartItem = ({
  product,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
}) => {
  return (
    <div className="cart-item my-2">
      <div className="item-details">
        <div>
          <img src={product.image} alt={product.description} />
        </div>
        <div>
          <h1 className="name">{product.name}</h1>
          <h1 className="price"> &#8358;{product.price}</h1>
        </div>
      </div>
      <hr className="hr" />
      <div className="flex justify-between items-center">
        <div className="flex">
          <img src={deleteIcon} alt="delete icon" onClick={removeFromCart} />
          <p className="px-2">Delete</p>
        </div>
        <div className="flex">
          <img
            src={subtractIcon}
            alt="subtract icon"
            onClick={decrementQuantity}
          />
          <p className="px-2">{product.quantity}</p>
          <img src={addIcon} alt="add icon" onClick={incrementQuantity} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
