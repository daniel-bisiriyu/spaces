import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import carouselImage from "../../images/carousel-img.png";

class Carousel extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="carousel-slide">
            {/* <img src={carouselImage} alt="contact us" /> */}
            <div></div>
          </div>
          <div className="carousel-slide">
            {/* <img src={carouselImage} alt="contact us" /> */}
            <div></div>
          </div>
          <div className="carousel-slide">
            {/* <img src={carouselImage} alt="contact us" /> */}
            <div></div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
