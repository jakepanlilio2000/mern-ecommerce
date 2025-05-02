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
      <div className="flex">
        <div>
          <AppLogo></AppLogo>
          <span>{companyName}</span>
        </div>
        <SearchBar></SearchBar>
      </div>
      <div>
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
