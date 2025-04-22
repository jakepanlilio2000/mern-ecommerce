import React from "react";
import Slider from "react-slick";
import { Items } from "../../types/global";

interface CarousellProps{
  items: Items[];
}


function Carousell({items}: CarousellProps) {
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
        {items.map((item, index) => {
          return (
            <div>
              {item.title}
              {item.description}
              <img src={item.imgPath} key={index} alt="carousell picture" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousell;
