import React from "react";
import Link from "next/link";
import AppLogo from "./ui/app-logo";
import SearchBar from "./ui/search-bar";

interface NavProps {
  companyName: string;
}

function Nav({ companyName }: NavProps) {
  return (
    <nav>
      <div className="flex justify-around">
        <div className="flex justify-center align-center">
          <AppLogo></AppLogo>
          <span>{companyName}</span>
        </div>
        <SearchBar></SearchBar>
        <div>
          <button>1</button>
          <button>2</button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 py-2">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/product">Products</Link>
        <Link href="/vouchers">Vouchers</Link>
      </div>
    </nav>
  );
}

export default Nav;
