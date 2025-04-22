import React from "react";
import Slider from "react-slick";

function Carousell(imagePaths) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imagePaths.map((path, index) => {
          return (
            <div>
              <img src={path} key={index} alt="carousell picture" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousell;
