import React, { Component } from "react";
import ProductCard from "./ProductCard";
import productImage from "../../images/product-image.png";

class ProductList extends Component {
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
      <div className="products mx-3">
        {this.state.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    );
  }
}

export default ProductList;
