import React from "react";
import HeaderDefiner from "./ui/headerDefiner";
import AppLogo from "./ui/app-logo";

import Image from 'next/image'

function Footer() {
  const CARDS = [
    {
      title: "cod",
      img: "/images/cod.png",
    },
    {
      title: "mastercard",
      img: "/images/mastercard.png",
    },
    {
      title: "shopee",
      img: "/images/shopee.png",
    },
    {
      title: "gcash",
      img: "/images/gcash.png",
    },
    {
      title: "paymaya",
      img: "/images/paymaya.png",
    },
  ];

  return (
    <footer className="">
      {/* cards */}
      <div className="bg-primary flex justify-between items-center mx-auto max-w-7xl py-15">
        {CARDS.map((item, index) => {
          return (
            <div className="">
              <Image src={item.img} alt={item.title} width="90" height="90" />
            </div>
          );
        })}
      </div>
      {/* information */}
      <div className="text-white bg-[#505050]">
        <div className="mx-auto max-w-7xl py-10 grid grid-cols-3 gap-4 grid-rows-2 justify-items-center">
          <div className="row-span-2">
            <HeaderDefiner>Customer Service</HeaderDefiner>
            <ul className="flex flex-col gap-3 mt-3">
              <li>Home</li>
              <li>Track an Order</li>
              <li>Cancel an Order</li>
              <li>Payment FAQs</li>
              <li>Return and Refund</li>
            </ul>
          </div>
          <div className="row-span-2">
            <HeaderDefiner>Company</HeaderDefiner>
            <ul className="flex flex-col gap-3 mt-3">
              <li>Careers</li>
              <li>About Us</li>
              <li>FAQs</li>
              <li>Store Location</li>
              <li>News and Articles</li>
            </ul>
          </div>
          <div className="">
            <HeaderDefiner>Follow Us</HeaderDefiner>
            {/* socials */}
          </div>
          <div>
            <HeaderDefiner>Brand Name</HeaderDefiner>
            <AppLogo></AppLogo>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
