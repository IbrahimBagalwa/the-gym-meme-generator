import React from "react";
import logo from "../imgs/Troll Face.png";
const Header = () => {
  return (
    <nav className="flex items-center bg-[#A426D0] w-[550px] m-auto text-white p-5">
      <img src={logo} alt="logo-image" className="h-10 mr-2" />
      <h2 className="text-xl font-bold mr-auto">Meme Generator</h2>
      <h4 className="text-xs font-medium">React Course - Project 3</h4>
    </nav>
  );
};

export default Header;
