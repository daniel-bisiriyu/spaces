import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product">
        <img src={product.image} alt={product.description} />
        <p className="name">{product.name}</p>
        <p className="price py-1"> &#8358;{product.price}</p>
        <p className="stock">MOQ {product.stock} (pieces)</p>
      </div>
    </Link>
  );
};

export default ProductCard;
