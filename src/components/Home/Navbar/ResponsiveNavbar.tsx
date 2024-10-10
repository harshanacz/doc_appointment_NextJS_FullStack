"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <MobileNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default ResponsiveNavbar;
