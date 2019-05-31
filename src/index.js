import React from "react";
import ReactDOM from "react-dom";
import Testimonial from "./components/Testimonial-Slider.js";
import ImageSlider from "./components/Image-Slider.js";
import Footer from "./components/Footer.js";
import ArticleHero from "./components/ArticleHero.js";
import ImageCopySlider from "./components/ImageCopySlider.js";
import BillboardExpand from "./components/MagicScroll.js";
import { ParallaxProvider } from "react-scroll-parallax";

import "./styles.css";

function App() {
  const billboardDetails = {
    title: "Technology",
    heading: "Turning sound into touch",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam mattis, posuere nunc sit amet, pulvinar ipsum. Vestibulum mattis, felis egestas sodales viverra, eros justo rhoncus metus, at elementum elit purus placerat ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam mattis, posuere nunc sit amet, pulvinar ipsum. Vestibulum mattis, felis egestas sodales viverra, eros justo rhoncus metus, at elementum elit purus placeratante.",
    ctaLink: "https://www.google.co.uk/",
    ctaText: "Learn how it works"
  };

  return (
    <ParallaxProvider>
      <div className="App">
        <ArticleHero />
        <div className="py-40 lg:py-20" />
        <div className="py-40 lg:py-20" />
        <Testimonial />
        <div className="py-40" />
        <BillboardExpand />
        <div className="py-40" />
        <ImageSlider />
        <div className="py-40" />
        <ImageCopySlider />
        <div className="py-40" />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
