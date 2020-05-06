import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
export default class Discount extends Component {
  render() {
    return (
      <Fade>
        <div className="center_wrapper">
          <div className="discount_wrapper">
            <Fade delay={1000}>
              <div className="discount_porcentage">
                <span>100%</span>
                <span>OFF</span>
              </div>
            </Fade>
            <Slide right>
              <div className="discount_description">
                <h3>Visit our facebook page For Session Link when Starts </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
              </div>
            </Slide>
          </div>
        </div>
        ;
      </Fade>
    );
  }
}
