import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.description} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
