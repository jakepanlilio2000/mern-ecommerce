"use client"
import React, { useState } from "react";
import Button from "./ui/button";
import Link from "next/link";
import ProfileIcon from "./ui/profile-icon";

// to be modified
// situational either profile circle or grp buttons
function AuthButtons() {
  const [profileOpen, setProfileOpen] = useState(false);
  // dapat naka reveal lang ung buttons kapag offline, pag online ung profile
  return (
    <>
      <div className="flex gap-2">
        <Link className="bg-white text-black rounded-full px-8 py-2 drop-shadow-lg" href="/login">
          Login
        </Link>
        <Link className="bg-transparent border-white border text-white rounded-full px-6 py-2" href="/register">
          Register
        </Link>
      </div>
      <div className="hidden">
        <div>
          <button
            type="button"
            className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden hover:cursor-pointer"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            <ProfileIcon src="https://picsum.photos/200/300"></ProfileIcon>
          </button>
        </div>

        <div
          className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 ${
            profileOpen ? "block" : "hidden"
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
        >
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-0"
          >
            Your Profile
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-1"
          >
            Settings
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-2"
          >
            Sign out
          </Link>
        </div>
      </div>
    </>
  );
}

export default AuthButtons;
