/** @format */

import React from "react";
import Logo from "../assets/man.jpg";
import Alqoritmika from "../assets/Portfolioİmg/algoritmika.png";
import ToDo from "../assets/Portfolioİmg/todo.png";
import Converter from "../assets/Portfolioİmg/converter.png";
import EmojiRating from "../assets/Portfolioİmg/emojiRating.png";
import PortfolioImg from "../assets/Portfolioİmg/portfolio.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Alqoritmika,
      codeUrl: "https://github.com/Xudiyef21/1.Alqoritmika.git",
      demoUrl: "https://xudiyef21.github.io/1.Alqoritmika/",
    },
    {
      id: 2,
      src: ToDo,
      codeUrl: "https://github.com/Xudiyef21/2.TO-DO-list.git",
      demoUrl: "https://xudiyef21.github.io/2.TO-DO-list/",
    },
    {
      id: 3,
      src: Converter,
      codeUrl: "https://github.com/Xudiyef21/3.CONVERTER.git",
      demoUrl: "https://xudiyef21.github.io/3.CONVERTER/",
    },
    {
      id: 4,
      src: EmojiRating,
      codeUrl: "https://github.com/Xudiyef21/4.Emoji_rating.git",
      demoUrl: "https://xudiyef21.github.io/4.Emoji_rating/",
    },
    {
      id: 5,
      src: PortfolioImg,
      codeUrl: "https://github.com/Xudiyef21/My-Portfolio.git",
      demoUrl: "https://xudiyef21.github.io/My-Portfolio/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800  text-white pt-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-between    w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check Out Some Of My Work Right Here</p>
        </div>

        <div className=" pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 flex-wrap">
          {portfolios.map(({ id, src, codeUrl, demoUrl }) => (
            <div key={id}>
              <div className="shadow-md shadow-gray-600 rounded-lg ">
                <img
                  src={src}
                  alt="Portfolio item"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex justify-center items-center">
                  <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={demoUrl} target="_blank">
                      Demo
                    </a>
                  </button>
                  <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={codeUrl} target="_blank">
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
