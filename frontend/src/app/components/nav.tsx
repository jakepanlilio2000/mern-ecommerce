"use client";
import React, { useState } from "react";
import Link from "next/link";
import AppLogo from "./ui/app-logo";
import SearchBar from "./ui/search-bar";
import AuthButtons from "./auth-buttons";
import HeartButton from "./heart-button";
import CartButton from "./cart-button";

interface NavProps {
  companyName: string;
}

function Nav({ companyName }: NavProps) {
  const NAV_ITEMS = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About Us",
      href: "#",
    },
    {
      name: "Contact Us",
      href: "#",
    },
    {
      name: "Products",
      href: "#",
    },
    {
      name: "Vouchers",
      href: "#",
    },
  ];

  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="">
      <div className="bg-third">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:cursor-pointer hover:text-primary focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setNavOpen(!navOpen)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 sm:flex-0 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <AppLogo></AppLogo>
                <span className="hidden sm:inline-block text-primary ml-2">
                  {companyName}
                </span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <SearchBar></SearchBar>
            </div>
            <div className="gap-4 hidden sm:ml-6 sm:flex">
              <HeartButton></HeartButton>
              <CartButton></CartButton>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <AuthButtons></AuthButtons>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="hidden sm:block max-w-7xl py-2 mx-auto">
          <div className="flex space-x-4 gap-4 justify-center items-center">
            {/* class of active:  rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white*/}
            {/* class of inactive: ro unded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white */}
            {NAV_ITEMS.map((item, index) => {
              return (
                <Link
                  href={item.href}
                  className="text-black font-bold px-3 py-2 text-sm hover:underline"
                  aria-current="page"
                  key={`${index}_web`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${navOpen ? "block" : "hidden"} bg-secondary`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* active class: "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" */}
          {/* inactive: block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white */}
          {NAV_ITEMS.map((item, index) => {
            return (
              <Link
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-black hover:underline"
                aria-current="page"
                key={`${index}_mobile`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

// link
// auth buttons
// search bar

export default Nav;
