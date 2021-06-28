import React from "react";
import dropdownIcon from "../../icons/dropdown.svg";

const ProductDescription = () => {
  return (
    <div className="flex justify-between items-center product-description px-3 py-1">
      <div>
        <p>Product Description</p>
      </div>
      <div>
        <img src={dropdownIcon} alt="dropdown icon" />
      </div>
    </div>
  );
};

export default ProductDescription;
