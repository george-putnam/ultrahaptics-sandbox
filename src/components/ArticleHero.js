import React from "react";
import classnames from "classnames";

class ArticleHero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero--article relative">
        <img
          className="hero--article__image object-cover w-full h-full"
          src="https://source.unsplash.com/random"
          alt="unsplash"
        />
        <div className="hero--article__inner absolute w-11/12 lg:w-3/4 bottom-0 lg:right-0 bg:white">
          <div className="flex flex-col lg:flex-row bg-white p-10 -mx-2 lg:-mx-10">
            <div className="w-full :w-6/12 lg:w-6/12 pb-10 lg:pb-0 text-left px-2 lg:px-10">
              <p className="title uppercase">Category or topic</p>
              <h3 className="pt-5">
                Article title name goes here, across 2 lines
              </h3>
              <p className="date text-xs pt-10 uppercase">May 28th 2019</p>
            </div>
            <div className="w-full lg:w-6/12 text-left px-2 lg:px-10">
              <p className="p-5 pt-1 lg:pb-20 lg:pt-20">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleHero;
