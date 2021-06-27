import React from "react";

const NavigationItem = ({ icon, name }) => {
  return (
    <div className="navigation-item">
      <img src={icon} alt="icon" />
      <p>{name}</p>
    </div>
  );
};

export default NavigationItem;
