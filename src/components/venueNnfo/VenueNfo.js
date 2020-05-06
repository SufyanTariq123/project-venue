import React from "react";
import calandar from "../../resources/images/icons/calendar.png";
import location from "../../resources/images/icons/location.png";
import Zoom from "react-reveal/Zoom";

const VenueNfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={5000}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red "></div>
                  <div
                    className="vn_icon "
                    style={{ background: `url(${calandar})` }}
                  ></div>
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">Online Session</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={5000} delay={1000}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon "
                    style={{ background: `url(${location})` }}
                  ></div>
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">Online Session</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueNfo;
