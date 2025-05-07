import React from "react";
import HeaderDefiner from "./ui/headerDefiner";
import AppLogo from "./ui/app-logo";

function Footer() {
  const CARDS = [
    {
      title: "gcash",
      img: "https://picsum.photos/200/300",
    },
  ];

  return (
    <footer>
      {/* cards */}
      <div className="bg-primary flex">
        {CARDS.map((item, index) => {
          return (
            <div>
              <img src={item.img} alt={item.title} className="" />
            </div>
          );
        })}
      </div>
      {/* information */}
      <div className="grid grid-cols-3 gap-4 grid-rows-2">
        <div className="row-span-2">
          <HeaderDefiner>Customer Service</HeaderDefiner>
          <ul>
            <li>Home</li>
            <li>Track an Order</li>
            <li>Cancel an Order</li>
            <li>Payment FAQs</li>
            <li>Return and Refund</li>
          </ul>
        </div>
        <div className="row-span-2">
          <HeaderDefiner>Company</HeaderDefiner>
          <ul>
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
    </footer>
  );
}

export default Footer;
