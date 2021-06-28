import initialState from "./storeInitialState";

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });
    case "incrementQuantity":
      let increasedItem = state.filter((item) => {
        return item.id === action.payload.id;
      })[0];
      increasedItem.quantity += 1;
      return [...state, increasedItem];
    case "decrementQuantity":
      let decreasedItem = state.filter((item) => {
        return item.id === action.payload.id;
      })[0];
      decreasedItem.quantity -= 1;
      return [...state, decreasedItem];
    default:
      return state;
  }
};

export default Reducer;
