import React from "react";
import { Parallax } from "react-scroll-parallax";

const TwoColumn = () => (
  <div className="flex">
    <div className="w-6/12 relative">
      <Parallax className="parallax" y={[-30, 30]} tagOuter="figure">
        <img
          className="parallax__image relative left-0 right-0 bottom-0"
          src="https://source.unsplash.com/random"
          alt="unspalsh"
        />
      </Parallax>
    </div>
    <div className="w-6/12">
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam
        mattis, posuere nunc sit amet, pulvinar ipsum. Vestibulum mattis, felis
        egestas sodales viverra, eros justo rhoncus metus, at elementum elit
        purus placerat ante. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec ac diam mattis, posuere nunc sit amet, pulvinar ipsum.
        Vestibulum mattis, felis egestas sodales viverra, eros justo rhoncus
        metus, at elementum elit purus placeratante.,
      </h5>
    </div>
  </div>
);

export default TwoColumn;
