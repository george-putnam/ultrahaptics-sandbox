import React, { Component } from "react";
import Slider from "react-slick";
import ImageSlide from "./Image-Slide.js";
import { Parallax } from "react-scroll-parallax";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: false,
      variableWidth: true,
      centerMode: true,
      speed: 500,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <div className="flex lg:justify-center">
          <div className="w-full lg:w-6/12">
            <div className="image-slider-container">
              <h3>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis.
              </h3>
              <div className="image-slider">
                <Slider {...settings}>
                  <ImageSlide />
                  <ImageSlide />
                  <ImageSlide />
                  <ImageSlide />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
