import React from "react";
import HeartButton from "./heart-button";
import CartButton from "./cart-button";

interface ProductDisplayProps {
  title: string;
  img: string;
  genre: string;
  stars: string;
  origPrice: number;
  currentPrice: number;
}
// its recommended that you use png files with background of white on this component
// its so that the heart is not being covered by the image
function ProductDisplay({
  title,
  img,
  genre,
  stars,
  origPrice,
  currentPrice,
}: ProductDisplayProps) {
  return (
    <div className="bg-third rounded-lg p-5">
      <div className="group relative rounded-lg overflow-hidden h-[272px] transform transition-transform duration-300 hover:scale-120 shadow-lg">
        {/* "New" badge */}
        <span className="bg-red-600 text-white uppercase rounded-e-xl absolute top-5 left-5 size-fit px-7 z-10">
          New
        </span>

        {/* Heart icon */}
        <HeartButton className="absolute top-5 right-5 text-2xl z-10" />

        {/* Image */}
        <img
          src="https://picsum.photos/200/300"
          alt=""
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay with description */}
        <div className="absolute bottom-0 left-0 w-full h-[25%] bg-secondary text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
          <p className="text-sm text-center">Short </p>
        </div>
      </div>
      <div className="grid grid-cols-10 text-white">
        <span className="col-span-8">{title}</span>
        <span className="col-span-2">{stars} &#9733;</span>
        <span className="col-span-5 bg-black text-white rounded-md capitalize px-2 items-center">
          {" "}
          {genre}
        </span>
        <span className="col-span-10 line-through">{origPrice}</span>
        <span className="col-span-10">{currentPrice}$</span>
        <button className="col-span-7 rounded-full bg-white text-black">
          Buy
        </button>
        <CartButton className="col-start-10 text-black flex justify-center items-center"></CartButton>
      </div>
    </div>
  );
}

export default ProductDisplay;
