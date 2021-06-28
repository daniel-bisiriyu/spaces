import React, { Component } from "react";
import SingleReview from "./SingleReview";

class ProductReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productReviews: [],
    };
  }

  render() {
    return (
      <div className="bg-white mt-1 product-reviews px-3">
        <div className="flex justify-between heading">
          <p>Review and Ratings</p>
          <p class="view-all">View All</p>
        </div>
        <SingleReview />
      </div>
    );
  }
}
export default ProductReviews;
