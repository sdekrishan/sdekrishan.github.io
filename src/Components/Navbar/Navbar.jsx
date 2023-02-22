import React from "react";
import "./Navbar.scss";
import { HiX } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className=" app__navbar-logo ">
        {/* <p>KRISHAN KUMAR</p> */}
        <span>K</span>
        <span>R</span>
        <span>I</span>
        <span>S</span>
        <span>H</span>
        <span>A</span>
        <span>N</span>
        <span>_</span>
        <span>K</span>
        <span>U</span>
        <span>M</span>
        <span>A</span>
        <span>R</span>
      </div>
      <ul className="app__navbar-links">
        <li className="app__flex p-text" key={`link-home`}>
          <div />
          <a href="#home">home</a>
        </li>
        <li className="app__flex p-text" key={`link-aboutme`}>
          <div />
          <a href="#about me">about me</a>
        </li>
        <li className="app__flex p-text" key={`link-projects`}>
          <div />
          <a href="#projects">projects</a>
        </li>
        <li className="app__flex p-text" key={`link-skills`}>
          <div />
          <a href="#skills">skills</a>
        </li>
        <li className="app__flex p-text" key={`link-contacts`}>
          <div />
          <a href="#contacts">contacts</a>
        </li>
        <li className="app__flex p-text" key={`link-resume`}>
          <div />
          <a
            href="https://drive.google.com/uc?export=download&id=1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv"
            download
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv/view?usp=sharing"
              )
            }
          >
            resume
          </a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <GiHamburgerMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            animate={{ x: [200, 0] }}
            transition={{ duration: 0.9, type: "spring" }}
          >
            <HiX
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul>
              <li key={`link-home`}>
                <a onClick={() => setToggle(false)} href="#home">
                  home
                </a>
              </li>
              <li key={`link-aboutme`}>
                <a onClick={() => setToggle(false)} href="#about me">
                  about me
                </a>
              </li>
              <li key={`link-projects`}>
                <a onClick={() => setToggle(false)} href="#projects">
                  projects
                </a>
              </li>
              <li key={`link-skills`}>
                <a onClick={() => setToggle(false)} href="#skills">
                  skills
                </a>
              </li>
              <li key={`link-contacts`}>
                <a onClick={() => setToggle(false)} href="#contacts">
                  contacts
                </a>
              </li>
              <li key={`link-resume`}>
                <a
                  onClick={() => {
                    setToggle(false);
                    window.open(
                      "https://drive.google.com/file/d/1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv/view?usp=sharing"
                    );
                  }}
                  href="https://drive.google.com/uc?export=download&id=1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv"
                  download
                >
                  resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
