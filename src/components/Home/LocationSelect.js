import React, { Component } from "react";
import location from "../../icons/location.svg";
import dropdownIcon from "../../icons/dropdown.svg";

class LocationSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
  }

  render() {
    return (
      <div className="location-select">
        <div className="flex items-center">
          <img src={location} alt="location icon" />
          {/* <select onChange={this.props.filterByLocation}>
            <option value="lagos">Lagos</option>
            <option value="abuja">Abuja</option>
            <option value="ogun">Ogun</option>
          </select> */}
          <p>Lagos</p>
          <img src={dropdownIcon} alt="dropdown icon" className="mx-1" />
        </div>
      </div>
    );
  }
}

export default LocationSelect;
