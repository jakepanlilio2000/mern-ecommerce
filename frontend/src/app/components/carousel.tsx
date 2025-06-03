/* CarouselComp.tsx */
"use client";
import React, { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComp = ({
  withZoom,
  children,
  classToAdd = '',
}: {
  withZoom: boolean;
  children: React.ReactNode;
  classToAdd?: string;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const zoomHighLight = () => {
    if (!withZoom || !carouselRef.current) return;

    const activeItems = carouselRef.current.querySelectorAll(
      ".react-multi-carousel-item--active"
    );

    if (activeItems.length === 0) return;

    const middleIndex = Math.floor(activeItems.length / 2);

    activeItems.forEach((item, index) => {
      if (index === middleIndex) {
        item.classList.add(classToAdd);
      } else {
        item.classList.remove(classToAdd);
      }
    });
  };

  useEffect(() => {
    // Initial zoom after mount
    zoomHighLight();
  }, []);

  return (
    <div ref={carouselRef} className="relative">
      <Carousel
        responsive={{
          superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
        }}
        infinite={false}
        rewind={true}
        itemClass="flex justify-center items-center transition-transform duration-300 ease-in-out"
        afterChange={() => zoomHighLight()}
        containerClass="carousel-container"
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
