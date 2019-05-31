import React, { Component, createRef } from "react";
import Slider from "react-slick";
import Slide from "./Slide.js";

export default class TestimonialSlider extends Component {
  constructor(props) {
    super(props);

    this.nav1 = createRef();
    this.nav2 = createRef();
  }

  render() {
    const settings = {
      infinite: false,
      centerMode: true,
      variableWidth: true,
      speed: 500,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1310,
          settings: {
            centerMode: false
          }
        }
      ]
    };

    const content = {
      bodyCopy:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien vestibulum, cursus tortor eu, maximus dolor. Sed ut gravida lectus, ac suscipit augue. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec, aliquam vel nibh. Donec a aliquet lorem. Donec et sapien maximus, rhoncus nisi at, egestas est. Fusce mauris lacus, molestie vel pretium nec.”",
      creditName: "Johannes Bloggs",
      creditTitle: "Tech lead",
      creditCompany: " BMW"
    };
    return (
      <div className="flex justify-end lg:justify-end container mx-auto">
        <div className="w-11/12 md:w-10/12">
          <div className="testimonial-container">
            <h3 className="text-left">
              What does the future of automotive look like?
            </h3>
            <div className="testimonial-slider relative">
              <Slider
                className="testimonial-slider__slides"
                {...settings}
                ref={this.nav1}
                slidesToShow={1}
                swipeToSlide={true}
              >
                <Slide {...content} />
                <Slide {...content} />
                <Slide {...content} />
                <Slide {...content} />
                <Slide {...content} />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
