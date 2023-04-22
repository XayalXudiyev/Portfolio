/** @format */

import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 via-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div>
          <p className="text-xl mt-20">
            Dynamic and creative front-end developer with a solution-oriented
            approach, passionate about learning new technologies. Proficient in
            communication, collaboration, and technical documentation. Committed
            to delivering high-quality work as a team player. Continuously
            seeking opportunities to learn and grow in the field of front-end
            development.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
