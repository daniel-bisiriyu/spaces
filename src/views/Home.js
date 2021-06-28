import React, { Component } from "react";
import TopNavigation from "../components/Home/TopNavigation";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import ProductList from "../components/Home/ProductList";
import BottomNavigation from "../components/BottomNavigation";
// import Carousel from "../components/Home/Carousel";

import { connect } from "react-redux";

import "../styles/home.css";

class AppHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchQuery: "",
    };
  }
  componentDidMount() {
    this.setState({
      products: this.props.products,
    });
  }
  filterProducts = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  render() {
    const filteredProducts = this.state.products.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(this.state.searchQuery.toLowerCase());
    });
    return (
      <div className="mx-3">
        <TopNavigation />
        <SearchBar filterProducts={this.filterProducts} />
        {/* <Carousel /> */}
        <Categories />
        <ProductList products={filteredProducts} />
        <BottomNavigation />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapState)(AppHome);
