/** @format */

import React from "react";
import Logo from "../assets/photo.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black to-gray-800  via-black max-md:pt-24 text-center  md:h-screen mt-0 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className=" text-4xl sm:text-5xl font-bold max-sm::text-center text-white md:text-6xl text-start">
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
              className="group text-white w-fit px-6 py-3 my-4 flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-3/4 md:1/4 mb-5  ">
          <img
            src={Logo}
            alt="my profile "
            className="rounded-2xl ms-auto
              w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
