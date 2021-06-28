export const addToCart = (payload) => {
  return {
    type: "add",
    payload: payload,
  };
};

export const removeFromCart = (payload) => {
  return {
    type: "remove",
    payload: payload,
  };
};

export const incrementQuantity = (id) => {
  return {
    type: "increment",
    payload: id,
  };
};

export const decrementQuantity = (id) => {
  return {
    type: "decrement",
    payload: id,
  };
};
