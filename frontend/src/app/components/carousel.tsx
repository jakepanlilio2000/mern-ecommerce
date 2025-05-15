// "use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComp = ({
  withZoom,
  children,
}: {
  withZoom: boolean;
  children: React.ReactNode;
}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const zoomHighLight = () => {
    // add and remove classes for zooming
    if (!withZoom) return;
  };

  return (
    <Carousel
      responsive={responsive}
      centerMode={true}
      infinite={true}
      afterChange={(previousSlide, { currentSlide, onMove }) => {
        zoomHighLight();
      }}
    >
      {children}
    </Carousel>
  );
};

export default CarouselComp;
