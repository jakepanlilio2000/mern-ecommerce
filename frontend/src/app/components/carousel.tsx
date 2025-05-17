"use client";
import React, { useRef } from "react";
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

  const carouselRef = useRef<HTMLDivElement>(null);

  const zoomHighLight = (previousSlide: number, currentSlide: number) => {
    if (!withZoom || !carouselRef.current) return;
    
  };

  return (
    <div ref={carouselRef}>
      <Carousel
        responsive={responsive}
        infinite={true}
        itemClass="flex justify-center"
        afterChange={(previousSlide, { currentSlide }) => {
          zoomHighLight(previousSlide, currentSlide);
        }}
        containerClass="carousel-container"
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
