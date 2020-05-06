import React from "react";
import Slider from "react-slick";
import slider_one from "../../resources/images/slider_one.jpg";
import slider_two from "../../resources/images/slider_two.jpg";
import slider_three from "../../resources/images/slider_three.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };
  const photos = [
    {
      name: "photo1",
      url: slider_one,
    },
    {
      name: "photo1",
      url: slider_two,
    },
    {
      name: "photo1",
      url: slider_three,
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {photos.map((photos) => {
          return (
            <div className="Carrousel_image">
              <img src={photos.url} width="100%" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
