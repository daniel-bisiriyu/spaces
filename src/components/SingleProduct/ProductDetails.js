import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details ">
      <div className="product-image">
        <img src={product.image} alt={product.description} />
      </div>
      <div className="bg-white px-3 py-1 my-1">
        <h2 className="name">{product.name}</h2>
        <p className="description">{product.description}</p>
        <h2 className="price">N{product.price}.00</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
