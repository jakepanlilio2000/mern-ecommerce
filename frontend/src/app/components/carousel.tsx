/* CarouselComp.tsx */
"use client";
import React, { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComp = ({
  withZoom,
  children,
  classToAdd = "",
  targetElement,
}: {
  withZoom: boolean;
  children: React.ReactNode;
  classToAdd?: string;
  targetElement?: string;
}) => {
  const [isMoving, setIsMoving] = React.useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const zoomHighLight = () => {
    if (!withZoom || !carouselRef.current) return;

    const activeItems = carouselRef.current.querySelectorAll(
      ".react-multi-carousel-item--active"
    );

    if (activeItems.length === 0) return;

    const middleIndex = Math.floor(activeItems.length / 2);
    const zoomClasses = classToAdd.trim().split(/\s+/);
    const movingClass = "."; // Or any other class you want during movement

    activeItems.forEach((item, index) => {
      const target = targetElement ? item.querySelector(targetElement) : item;

      if (!target) return;

      if (index === middleIndex) {
        zoomClasses.forEach((cls) => target.classList.add(cls));
        if (isMoving) {
          target.classList.add(movingClass);
        } else {
          target.classList.remove(movingClass);
        }
      } else {
        zoomClasses.forEach((cls) => target.classList.remove(cls));
        target.classList.remove(movingClass);
      }
    });
  };

  useEffect(() => {
    zoomHighLight();
  }, [isMoving]);

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
        beforeChange={() => {
          setIsMoving(true);
        }}
        afterChange={() => {
          setIsMoving(false);
        }}
        containerClass="carousel-container"
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
