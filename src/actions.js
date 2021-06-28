export const addToCart = (product) => {
  console.log("action ");
  console.log(product);
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    id,
  };
};

export const incrementQuantity = (index) => {
  return {
    type: "INCREMENT_QUANTITY",
    index,
  };
};

export const decrementQuantity = (index) => {
  return {
    type: "DECREMENT_QUANTITY",
    index: index,
  };
};
