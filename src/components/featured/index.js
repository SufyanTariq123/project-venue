import React from "react";
import Carousel from "./Carousel";
import Time_Untill from "./Time_Untill";
const Featured = () => {
  return (
    <React.Fragment>
      <div className="Crousel">
        <Carousel />
        <div className="web_images_name">
          <div className="wrapper">Web development</div>
        </div>
      </div>
      <Time_Untill />
    </React.Fragment>
  );
};

export default Featured;
