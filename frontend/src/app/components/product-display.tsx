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

function ProductDisplay({
  title,
  img,
  genre,
  stars,
  origPrice,
  currentPrice,
}: ProductDisplayProps) {
  return (
    <div className="bg-third rounded-lg h-[420px] w-[300px] p-5">
      <div className="relative rounded-lg h-[272px]">
        <span className="bg-red-600 text-white uppercase rounded-r-lg absolute top-0 left-0 size-fit py-5">New</span>
        <HeartButton className="absolute top-0 right-0"></HeartButton>
        <img src="https://picsum.photos/200/300" alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="grid grid-cols-10 text-white">
        <span className="col-span-8">{title}</span>
        <span className="col-span-2">{stars} &#9733;</span>
        <span className="col-span-10 bg-black text-white rounded-lg">{genre}</span>
        <span className="col-span-10 line-through">{origPrice}</span>
        <span className="col-span-10">{currentPrice}$</span>
        <button className="col-span-7 rounded-full bg-white">Buy</button>
        <CartButton className="col-start-9"></CartButton>
      </div>
    </div>
  );
}

export default ProductDisplay;
