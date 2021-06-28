import React, { Component } from "react";
import TopNavigation from "../components/SingleProduct/TopNavigation";
import ProductDetails from "../components/SingleProduct/ProductDetails";
import ProductDescription from "../components/SingleProduct/ProductDescription";
import ProductReviews from "../components/SingleProduct/ProductReviews";
import Notification from "../components/Notification";
import { connect } from "react-redux";
import { addToCart } from "../actions";

import "../styles/product.css";

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemAdded: false,
    };
  }
  componentDidMount() {
    let productId = this.props.match.params.id;
    console.log(productId);
  }
  showAndHideNotification = () => {
    this.setState({
      itemAdded: true,
    });
    setTimeout(() => {
      this.setState({
        itemAdded: false,
      });
    }, 3000);
  };
  addToCart = () => {
    this.showAndHideNotification();
    this.props.addToCart(this.props.product);
  };
  render() {
    return (
      <div>
        {this.state.itemAdded ? <Notification /> : ""}
        <TopNavigation />
        <ProductDetails product={this.props.product} />
        <ProductDescription />
        <ProductReviews />
        <div className="flex justify-between px-3 py-2 bg-white mt-1">
          <div>
            <button className="checkout-button btn" onClick={this.addToCart}>
              Add to cart
            </button>
          </div>
          <div>
            <button className="wishlist-button btn">Wishlist</button>
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
