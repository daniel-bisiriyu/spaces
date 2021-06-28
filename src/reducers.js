import initialState from "./storeInitialState";

const Reducer = (state = initialState, action) => {
  console.log("Reducer called");
  console.log(action.type);
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("I am adding to cart");
      console.log(action.payload);
      if (state.cartItems.includes(action.payload)) {
        console.log("product found");
        console.log(state);
        return state;
      } else {
        action.payload.quantity = 1;
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    // console.log("after adding to cart");
    // console.log(state);
    //   return [...state, action.payload];
    case "REMOVE_FROM_CART":
      let filteredCart = state.cartItems.filter((item) => {
        return item.id !== action.id;
      });
      return {
        ...state,
        cartItems: [...filteredCart],
      };
    case "INCREMENT_QUANTITY":
      console.log("increment");
      let increasedCart = state.cartItems;
      increasedCart[action.index].quantity += 1;
      return {
        ...state,
        cartItems: [...increasedCart],
      };
    case "DECREMENT_QUANTITY":
      console.log("decrement");
      let decreasedCart = state.cartItems;
      decreasedCart[action.index].quantity -= 1;
      return {
        ...state,
        cartItems: [...decreasedCart],
      };
    default:
      return state;
  }
};

export default Reducer;
