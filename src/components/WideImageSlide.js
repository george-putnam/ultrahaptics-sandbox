import React from "react";

class ImageCopySlide extends React.Component {
  render() {
    return (
      <div className="image-copy-slide relative">
        <img
          src="https://source.unsplash.com/user/rafaelnadai"
          alt="unsplash"
        />
        <div className="copy w-1/2 p-12 text-left absolute">
          <div className="copy__content">
            <h5 className="text-left pb-3">
              Reimagining immersive entertainment with virtual touch
            </h5>
            <p className="text-left pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              diam mattis, posuere nunc sit amet, pulvinar ipsum. Vestibulum
              mattis, felis egestas sodales viverra, eros justo rhoncus metus,
              at elementum elit purus placerat ante.
            </p>
            <a
              className="bg-green-500 hover:shadow-md text-white text-xs text-left font-bold py-2 px-4 rounded-full"
              href="0#"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCopySlide;
