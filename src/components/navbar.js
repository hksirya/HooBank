import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav class="flex flex-between py-6 w-full items-center navbar ">
      <img
        src={logo}
        alt="logo-img"
        className="w-[124px] h-[32px] cursor-pointer"
      />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins text-white opacity-70 font-normal cursor-pointer ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } hover:opacity-100`}
          >
            <a href={`#${nav.title}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          className="cursor-pointer w-[28px] h-[28px] object-contain"
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins text-white opacity-70 font-normal cursor-pointer ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } hover:opacity-100`}
              >
                <a href={`#${nav.title}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
