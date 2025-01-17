import React from "react";

// components
import Logo from "../atoms/Logo";
import HeaderList from "../atoms/HeaderList";
import HeaderBoxList from "../atoms/HeaderBoxList";

const Header = () => {
  return (
    <div className="w-full h-24 py-7">
      <div className="w-11/12 h-max mx-auto flex justify-between items-center">
        <Logo id="header-logo" text="NEO TOKYO" size="lg" color="primary" />
        <div className="flex justify-between items-center">
          <HeaderList id="header-list-1" link="/" text="Home" />
          <HeaderList id="header-list-1" link="/about" text="About" />
          <HeaderList id="header-list-1" link="/services" text="Services" />
          <HeaderBoxList
            id="header-box-list-1"
            link="/contact"
            text="Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
