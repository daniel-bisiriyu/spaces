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
      <div className="products ">
        <div className="flex justify-between">
          <p>Recently Viewed</p>
          <p>View All</p>
        </div>
        {this.state.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    );
  }
}

export default RecentlyViewed;
