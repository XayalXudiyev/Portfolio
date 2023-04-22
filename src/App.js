/** @format */

import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experinece from "./components/Experinece";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experinece />
      <Contact />
    </div>
  );
}

export default App;
