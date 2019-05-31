import React from "react";

class Slide extends React.Component {
  render() {
    return (
      <div className="testimonial-slide p-10 mr-3">
        <p>{this.props.bodyCopy}</p>
        <div className="credit pt-5">
          <div className="image p-2">
            <img src="https://source.unsplash.com/user/erondu" alt="unsplash" />
          </div>
          <div className="meta">
            <p className="pb-2">{this.props.creditName}</p>
            <span>
              {this.props.creditTitle}
              {this.props.creditCompany}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
