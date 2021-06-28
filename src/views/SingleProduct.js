import React, { Component } from "react";
import TopNavigation from "../components/SingleProduct/TopNavigation";
import ProductDetails from "../components/SingleProduct/ProductDetails";
import productImage from "../images/product-image.png";
import ProductDescription from "../components/SingleProduct/ProductDescription";
import ProductReviews from "../components/SingleProduct/ProductReviews";
import { connect } from "react-redux";
import { addToCart } from "../actions";

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
  componentDidMount() {
    let productId = this.props.match.params.id;
    console.log(productId);
  }
  addToCart = () => {
    console.log("adding to cart");
    this.props.addToCart(this.props.product);
  };
  render() {
    return (
      <div className="mx-3">
        <TopNavigation />
        <ProductDetails product={this.props.product} />
        <ProductDescription />
        <ProductReviews />
        <div className="flex justify-between">
          <div>
            <button className="checkout-button" onClick={this.addToCart}>
              Add to cart
            </button>
          </div>
          <div>
            <button className="wishlist-button">Wishlist</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  let productId = ownProps.match.params.id;
  return {
    product: state.products.find((product) => product.id === productId),
  };
};

const mapDispatch = (dispatch) => {
  return {
    addToCart: (product) => {
      // dispatch({ type: "ADD_TO_CART", payload: id });
      dispatch(addToCart(product));
    },
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
