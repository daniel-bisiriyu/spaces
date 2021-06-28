import React, { Component } from "react";
import TopNavigation from "../components/SingleProduct/TopNavigation";
import ProductDetails from "../components/SingleProduct/ProductDetails";
import productImage from "../images/product-image.png";
import ProductDescription from "../components/SingleProduct/ProductDescription";
import ProductReviews from "../components/SingleProduct/ProductReviews";

import "../styles/product.css";

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: "1234ads421egjdsc",
        name: "NIKE Huararche 2019",
        description:
          "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: productImage,
        price: "45,000 - 90,000",
        location: "Lagos",
        stock: 5,
      },
    };
  }
  render() {
    return (
      <div className="mx-3">
        <TopNavigation />
        <ProductDetails product={this.state.product} />
        <ProductDescription />
        <ProductReviews />
        <div className="flex justify-between">
          <div>
            <button className="checkout-button">Checkout</button>
          </div>
          <div>
            <button className="wishlist-button">Wishlist</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
