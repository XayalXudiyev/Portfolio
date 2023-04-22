/** @format */

import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="div flex   justify-between items-center fixed top-0  w-full h-20 text-white bg-black px-4">
      <div>
        <h1 className="font-signature  font-bold text-4xl">Khayal</h1>
      </div>

      <div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"
              >
                <a href={`#${link}`}>
                  <Link to={link} smooth duration={500}>
                  {link}</Link>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="cursor-pointer  pr-4 z-10 text-gray-500  md:hidden ">
        {show ? (
          <FaTimes size={30} onClick={() => setShow(!show)} />
        ) : (
          <FaBars size={30} onClick={() => setShow(!show)} />
        )}
      </div>

      {show && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 capitalize">
          {links.map(({ id, link }) => {
            return (
              <li key={id} className="  px-4 cursor-pointer py-6 text-4xl">
               <Link onClick={()=>setShow(!show)} to={link} smooth duration={500}>{link}</Link>
              </li> 
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
