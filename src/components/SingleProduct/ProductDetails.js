import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details ">
      <div className="product-image">
        <img src={product.image} alt={product.description} />
      </div>
      <div>
        <h2 className="name">{product.name}</h2>
        <p className="description">{product.description}</p>
        <h2 className="price">{product.price}</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
