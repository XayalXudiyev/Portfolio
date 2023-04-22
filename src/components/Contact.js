/** @format */
import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 via-black text-white pt-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="font-bold text-4xl border-b-4  border-gray-500 inline">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center ">
          <form
            action="https://getform.io/f/162f499c-f6ad-49eb-9fa9-4f5504d6346a"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              className="p-2 my-4 bg-transparent border-2 rounded-md  text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none"
            ></textarea>
            <button className="bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's a talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
