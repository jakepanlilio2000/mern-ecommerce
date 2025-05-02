import React from "react";
import Link from "next/link";
import AppLogo from "./ui/app-logo";

interface NavProps {
  companyName: string;
}

function Nav({ companyName }: NavProps) {
  return (
    <nav>
      <div>
        <div>
          <AppLogo></AppLogo>
          <span>{companyName}</span>
        </div>
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
