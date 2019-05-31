import React from "react";
import "intersection-observer";

class Billboard extends React.Component {
  render() {
    const {
      title,
      heading,
      copy,
      ctaLink,
      ctaText
    } = this.props.billboardDetails;
    return (
      <div
        className="billboard flex items-center justify-center step"
        data-step="a"
      >
        <div className="p-12 text-left step" data-step="b">
          <p className="title mb-10 text-white uppercase">{title}</p>
          <h5 className="text-left text-white pb-6">{heading}</h5>
          <p className="text-left text-white pb-6">{copy}</p>
          <a
            className="bg-purple-600 step hover:shadow-md text-white text-xs text-left font-bold py-2 px-4 rounded-full"
            href="0#"
            data-step="c"
          >
            Learn more
          </a>
        </div>
      </div>
    );
  }
}

export default Billboard;
