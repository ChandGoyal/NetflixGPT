import React from "react";
import { LOGO } from "../utils/Constants";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-20">
      <img className="w-44 mx:auto md:mx-0" src={LOGO} alt="Netflix Logo" />
    </div>
  );
};

export default Header;
