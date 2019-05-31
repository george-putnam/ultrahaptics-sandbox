import React from "react";
// import { animateElementOnScroll } from "../helpers";

class Footer extends React.Component {
  render() {
    // const { title, copy, ctaLink, ctaText } = this.props.footerDetails;
    return (
      <div className="container border-t mx-auto">
        <div className="footer container mx-auto pl-10 pr-10 pt-20 pb-20">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col footer-col sm:w-12/12 md:w-4/12 bg-green text-left pb-5">
              <p className="title mb-10 text-green-400">UK</p>
              <p className="pb-1">
                The West Wing
                <br />
                Glass Wharf
                <br />
                Bristol
                <br />
                England
                <br />
                BS2 0EL
                <br />
              </p>
              <a className="block text-green-400" href="tel:01173259002">
                +44 117 325 9002
              </a>
              <a
                className="block text-green-400"
                shref="mailto:info@ultrahaptics.com"
              >
                info@ultrahaptics.com
              </a>
              <a
                className="border border-green-400 w-6/12 lg:w-4/12  hover:shadow-md hover:bg-green-400 hover:text-white mt-auto text-green-400 text-xs text-center font-bold py-2 px-4 rounded-full"
                href="0#"
              >
                Get Directions
              </a>
            </div>
            <div className="flex flex-col footer-col sm:w-12/12 md:w-4/12 text-left pb-5">
              <p className="title mb-10 text-green-400">US</p>
              <p>
                2479 East Bayshore Road
                <br />
                Suite 280
                <br />
                Palo Alto
                <br />
                California 94303
                <br />
                United States
                <br />
              </p>
              <a className="block text-green-400" href="tel:+1 650 600 9916">
                +1 650 600 9916
              </a>
              <a
                className="border border-green-400 w-6/12 lg:w-4/12 hover:shadow-md hover:bg-green-400 hover:text-white mt-auto  text-green-400 text-xs text-center font-bold py-2 px-4 rounded-full"
                href="0#"
              >
                Get Directions
              </a>
            </div>
            <div className="flex flex-col sm:w-12/12 md:w-4/12 text-left pb-5">
              <ul className="pb-5">
                <li className="text-xs">
                  <a>Press Kit</a>
                </li>
                <li className="text-xs">
                  <a>Legal Information</a>
                </li>
                <li className="text-xs">
                  <a>Terms and conditions</a>
                </li>
              </ul>
              <a
                className="bg-purple-600 w-6/12 lg:w-4/12 hover:shadow-md text-white text-xs text-center font-bold py-2 px-4 rounded-full"
                href="0#"
              >
                Developer site
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
