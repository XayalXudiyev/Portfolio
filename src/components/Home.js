/** @format */

import React from "react";
import Logo from "../assets/man.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-6xl  font-bold text-white">
            I'm a Front-End developer
          </h2>
          <p className="text-neutral-400 py-4 max-w-md">
            A front-End developer passionate about creative interactive
            applications and experiences on web.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Logo}
            alt="my profile "
            className="rounded-2xl mx-auto w-2/3 mt-9
             md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
