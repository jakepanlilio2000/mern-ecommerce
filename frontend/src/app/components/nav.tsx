import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav>
      <div></div>
      <div>
        <Link href="/">Home</Link>

        <Link href="/about">About Us</Link>

        <Link href="/contact">Contact Us</Link>

        <Link href="/products">Products</Link>

        <Link href="/vouchers">Vouchers</Link>
      </div>
    </nav>
  );
}

export default Nav;
