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
      <div>
        <div className="flex justify-between">
          <h2>Review and Ratings</h2>
          <h2>View All</h2>
        </div>
        <SingleReview />
      </div>
    );
  }
}
export default ProductReviews;
