"use client";
import React, { useState } from "react";

// next
import Image from "next/image";

// icon
import { Menu, X } from "lucide-react";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* header */}
      <div className="w-screen h-16 px-5 flex justify-between items-center border sm:hidden">
        <Image
          src="/images/logo.webp"
          width={380}
          height={200}
          alt="logo"
          className="w-44 h-4"
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[var(--blue)]"
          aria-label="Toggle Menu"
        >
          <Menu size={24} />
        </button>
      </div>
      {/* menu */}
      <div className={` ${isOpen ? "" : ""}`}>
        <button
          onClick={() => setIsOpen(false)}
          className={`absolute top-4 right-4 text-white ${
            isOpen ? "block" : "hidden"
          }`}
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>
      </div>
    </>
  );
};

export default MobileHeader;
