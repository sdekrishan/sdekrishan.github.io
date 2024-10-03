import React from "react";
import {
  About,
  Contact,
  Home,
  Skills,
  Projects,
} from "./Container/index";
import { Navbar } from "./Components";
import "./App.scss";
const App = () => {
  //just for checking
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
