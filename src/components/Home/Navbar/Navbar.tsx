"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/data/data";
import { HiBars3BottomRight } from "react-icons/hi2";

interface NavbarProps {
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMenu }) => {
  const [navBg, setNavBg] = React.useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div className={`fixed w-full top-0 z-30 border-b ${navBg ? "bg-white shadow-md" : "bg-white"} lg:px-32`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-black text-2xl font-bold">
          EDoc Lanka
        </Link>

        {/* Nav Links and Book Now Button in one flex container */}
        <div className="hidden sm:flex items-center space-x-8">
          {/* Nav Links */}
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`/${item.label.toLowerCase()}`}
              className="text-black font-light text-base hover:text-blue-700  transition-all duration-300"

            >
              {item.label}
            </Link>
          ))}
          {/* Book Now Button */}
          <button className="bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-light">
            Sign in
          </button>
        </div>

        {/* Menu Button for Mobile View */}
        <div className="flex sm:hidden items-center space-x-4">
          <button className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-normal">
          Sign in
          </button>
          <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-black" onClick={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
