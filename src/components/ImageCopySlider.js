import React, { Component } from "react";
import Slider from "react-slick";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const navSettings = {
      infinite: true,
      speed: 500,
      arrows: false,
      dots: true,
      nav: false,
      cssEase: "ease-in-out",
      responsive: [
        {
          breakpoint: 1310,
          settings: {
            centerMode: false
          }
        }
      ]
    };

    const settings = {
      infinite: true,
      variableWidth: true,
      centerMode: true,
      speed: 500,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1310,
          settings: {
            centerMode: false
          }
        }
      ]
    };

    return (
      <div className="relative sm:pt-38 sm:pb-38  pt-48 pb-48 bg-gray-200 ">
        <div>
          <Slider
            className="copy-slider"
            {...navSettings}
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            fade={true}
          >
            <div className="copy lg:pr-20 lg:pl-20 lg:pb-10 lg:pt-10 pr-20 pl-20 pb-10 pt-10 text-left">
              <div className="copy__content">
                <h5 className="text-left pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                </h5>
                <p className="text-left pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ac diam mattis, posuere nunc sit amet, pulvinar ipsum.
                  Vestibulum mattis, felis egestas sodales viverra, eros justo
                  rhoncus metus, at elementum elit purus placerat ante.
                </p>
                <a
                  className="bg-green-500 hover:shadow-md text-white text-xs text-left font-bold py-2 px-4 rounded-full"
                  href="0#"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="copy lg:pr-20 lg:pl-20 lg:pb-10 lg:pt-10 pr-20 pl-20 pb-10 pt-10 text-left">
              <div className="copy__content">
                <h5 className="text-left pb-3">
                  Reimagining immersive entertainment with virtual touch
                </h5>
                <p className="text-left pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ac diam mattis, posuere nunc sit amet, pulvinar ipsum.
                  Vestibulum mattis, felis egestas sodales viverra, eros justo
                  rhoncus metus, at elementum elit purus placerat ante.
                </p>
                <a
                  className="bg-green-500 hover:shadow-md text-white text-xs text-left font-bold py-2 px-4 rounded-full"
                  href="0#"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="copy lg:pr-20 lg:pl-20 lg:pb-10 lg:pt-10 pr-20 pl-20 pb-10 pt-10 text-left">
              <div className="copy__content">
                <h5 className="text-left pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                </h5>
                <p className="text-left pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ac diam mattis, posuere nunc sit amet, pulvinar ipsum.
                  Vestibulum mattis, felis egestas sodales viverra, eros justo
                  rhoncus metus, at elementum elit purus placerat ante.
                </p>
                <a
                  className="bg-green-500 hover:shadow-md text-white text-xs text-left font-bold py-2 px-4 rounded-full"
                  href="0#"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="copy lg:pr-20 lg:pl-20 lg:pb-10 lg:pt-10 pr-20 pl-20 pb-10 pt-10 text-left">
              <div className="copy__content">
                <h5 className="text-left pb-3">
                  Reimagining immersive entertainment with virtual touch
                </h5>
                <p className="text-left pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ac diam mattis, posuere nunc sit amet, pulvinar ipsum.
                  Vestibulum mattis, felis egestas sodales viverra, eros justo
                  rhoncus metus, at elementum elit purus placerat ante.
                </p>
                <a
                  className="bg-green-500 hover:shadow-md text-white text-xs text-left font-bold py-2 px-4 rounded-full"
                  href="0#"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="copy pr-20 pl-20 pb-10 pt-10 text-left">
              <div className="copy__content">
                <h5 className="text-left pb-3">
                  Reimagining immersive entertainment with virtual touch
                </h5>
                <p className="text-left pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ac diam mattis, posuere nunc sit amet, pulvinar ipsum.
                  Vestibulum mattis, felis egestas sodales viverra, eros justo
                  rhoncus metus, at elementum elit purus placerat ante.
                </p>
                <a
                  className="bg-green-500 hover:shadow-md text-white text-xs text-left font-bold py-2 px-4 rounded-full"
                  href="0#"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="copy pr-20 pl-20 pb-10 pt-10 text-left">
              <div className="copy__content">
                <h5 className="text-left pb-3">
                  Reimagining immersive entertainment with virtual touch
                </h5>
                <p className="text-left pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ac diam mattis, posuere nunc sit amet, pulvinar ipsum.
                  Vestibulum mattis, felis egestas sodales viverra, eros justo
                  rhoncus metus, at elementum elit purus placerat ante.
                </p>
                <a
                  className="bg-green-500 hover:shadow-md text-white text-xs text-left font-bold py-2 px-4 rounded-full"
                  href="0#"
                >
                  Read More
                </a>
              </div>
            </div>
          </Slider>

          <Slider
            className="image-copy-slider relative w-full"
            {...settings}
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div className="image-copy-slide">
              <img
                src="https://source.unsplash.com/user/rafaelnadai"
                alt="unsplash"
              />
            </div>
            <div className="image-copy-slide">
              <img
                src="https://source.unsplash.com/user/rafaelnadai"
                alt="unsplash"
              />
            </div>
            <div className="image-copy-slide">
              <img
                src="https://source.unsplash.com/user/rafaelnadai"
                alt="unsplash"
              />
            </div>
            <div className="image-copy-slide">
              <img
                src="https://source.unsplash.com/user/rafaelnadai"
                alt="unsplash"
              />
            </div>
            <div className="image-copy-slide">
              <img
                src="https://source.unsplash.com/user/rafaelnadai"
                alt="unsplash"
              />
            </div>
            <div className="image-copy-slide">
              <img
                src="https://source.unsplash.com/user/rafaelnadai"
                alt="unsplash"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
