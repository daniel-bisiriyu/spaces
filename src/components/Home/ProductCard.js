import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product">
        <img src={product.image} alt={product.description} />
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
