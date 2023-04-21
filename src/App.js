import React from "react";
import {
  About,
  Footer,
  Home,
  Skills,
  Work,
} from "./Container/index";
import { Navbar } from "./Components";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />

      <Footer />
    </div>
  );
};

export default App;
