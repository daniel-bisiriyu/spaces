import React, { Component } from "react";
import ProductCard from "../Home/ProductCard";
import productImage from "../../images/product-image.png";

class RecentlyViewed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
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
        {
          id: "1234ads421egjdsy",
          name: "NIKE Huararche 2019",
          description:
            "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
          image: productImage,
          price: "45,000 - 90,000",
          location: "Lagos",
          stock: 5,
        },
        {
          id: "1234ads421egjdsq",
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
      <div className="recently-viewed px-3">
        <div className="flex justify-between heading">
          <p className="">Recently Viewed</p>
          <p className="view-all">View All</p>
        </div>
        <div className="recently-viewed-products flex">
          {this.state.products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    );
  }
}

export default RecentlyViewed;
