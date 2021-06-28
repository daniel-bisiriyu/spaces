import React, { Component } from "react";
import CartItem from "./CartItem";
import productImage from "../../images/product-image.png";

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

  render() {
    return (
      <div>
        <CartItem product={this.state.cartItems[0]} />
      </div>
    );
  }
}

export default CardList;
