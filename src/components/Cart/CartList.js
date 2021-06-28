import React, { Component } from "react";
import CartItem from "./CartItem";
import productImage from "../../images/product-image.png";
import { connect } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../actions";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        {
          id: "1234ads421egjdsc",
          name: "NIKE Huararche 2019",
          description:
            "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
          image: productImage,
          price: "45,000 - 90,000",
          location: "Lagos",
          stock: 5,
        },
      ],
    };
  }
  componentDidMount() {
    console.log("na the cart");
    console.log(this.props.cartItems);
  }

  incrementQuantity(index) {
    console.log("increment called");
    this.props.incrementQuantity(index);
  }
  decrementQuantity(index) {
    this.props.decrementQuantity(index);
  }
  removeFromCart(id) {
    this.props.removeFromCart(id);
  }

  render() {
    return (
      <div>
        {this.props.cartItems.map((product, index) => {
          return (
            <CartItem
              key={product.id}
              product={product}
              incrementQuantity={() => this.incrementQuantity(index)}
              decrementQuantity={() => this.decrementQuantity(index)}
              removeFromCart={() => this.removeFromCart(product.id)}
            />
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

const mapDispatch = (dispatch) => {
  return {
    incrementQuantity: (index) => {
      dispatch(incrementQuantity(index));
    },
    decrementQuantity: (index) => {
      dispatch(decrementQuantity(index));
    },
    removeFromCart: (id) => {
      dispatch(removeFromCart(id));
    },
  };
};

export default connect(mapState, mapDispatch)(CardList);
