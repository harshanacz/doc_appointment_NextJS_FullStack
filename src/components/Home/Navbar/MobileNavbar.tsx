"use client";

import React from "react";
import Link from "next/link";
import { navItems } from "@/data/data";
import { HiX } from "react-icons/hi";

const MobileNavbar: React.FC<{ isOpen: boolean; toggleMenu: () => void }> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMenu}></div>}

      {/* Sliding Navbar */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="flex justify-end p-4">
          <HiX className="w-8 h-8 cursor-pointer text-black" onClick={toggleMenu} />
        </div>
        <div className="flex flex-col items-start p-4 space-y-4 ml-4" style={{ marginTop: '25%' }}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`/${item.label.toLowerCase()}`}
              className="text-black text-xl hover:text-yellow-400 transition-all duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
