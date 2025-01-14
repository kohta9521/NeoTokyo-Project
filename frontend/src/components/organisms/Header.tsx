import React from "react";
import Logo from "../atoms/Logo";

// components

const Header = () => {
  return (
    <div className="w-full h-auto border-blue-500">
      <div className="w-8/12 h-max mx-auto border-s-red-500">
        <Logo id="header-logo" text="NEO TOKYO" size="lg" color="primary" />
        <Logo id="header-logo" text="NEO TOKYO" size="md" color="primary" />
        <Logo id="header-logo" text="NEO TOKYO" size="sm" color="primary" />
        <Logo id="header-logo" text="NEO TOKYO" size="lg" color="secondary" />
        <Logo id="header-logo" text="NEO TOKYO" size="md" color="secondary" />
      </div>
    </div>
  );
};

export default Header;
