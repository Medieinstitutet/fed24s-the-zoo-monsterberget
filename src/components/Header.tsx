import React from "react";
import { Navigation } from "./Navigation";
import logo from "../assets/images/Logo.png";

export const Header = () => {
  return (
    <>
      <header className="flex p-10 bg-yellow-300 justify-center">
        <img
          className="rounded-t-full border-4 border-black"
          src={logo}
          alt="The Zoo Monsterberget Logo"
        />
      </header>
      <Navigation />
    </>
  );
};

export default Header;
