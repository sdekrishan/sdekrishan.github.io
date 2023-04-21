import React from "react";
import "./Navbar.scss";
import { HiX } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { useState } from "react";
import {Link} from 'react-scroll'
import { Text } from "@chakra-ui/react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () =>{
    window.open("https://drive.google.com/file/d/1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv/view?usp=sharing")
    const url = "https://drive.google.com/uc?export=download&id=1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv";
      const link = document.createElement('a');
      link.href = url;
      link.download = 'file.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }

  return (
    <nav className="app__navbar" id = "nav-menu">
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
          <Link to="home" className="nav-link home" spy={true} smooth={true} offset={-50} duration={500}>home</Link>
        </li>
        <li className="app__flex p-text" key={`link-aboutme`}>
          <div />
          <Link className="nav-link about" to="about me" spy={true} smooth={true} offset={-10} duration={500}>about me</Link>
        </li>
        <li className="app__flex p-text" key={`link-projects`}>
          <div />
          <Link to="projects" spy={true} className="nav-link projects" smooth={true} offset={-30} duration={500}>projects</Link>
        </li>
        <li className="app__flex p-text" key={`link-skills`}>
          <div />
          <Link className="nav-link skills" to="skills" spy={true} smooth={true} offset={10} duration={500}>skills</Link>
        </li>
        <li className="app__flex p-text" key={`link-contacts`}>
          <div />
          <Link className="nav-link contact" to="contacts" spy={true} smooth={true} offset={0} duration={500}>contacts</Link>
        </li>
        <li className="app__flex p-text" key={`link-resume`}>
          <div />
          <Text
            // href="https://drive.google.com/uc?export=download&id=1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv"
            // download
            className="nav-link resume"
            id="resume-button-1"
            onClick={handleClick}
          >
            resume
          </Text>
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
                <Link to="home" className="nav-link home" spy={true} smooth={true} offset={-50} duration={500}onClick={() => setToggle(false)} >
                  home
                </Link>
              </li>
              <li key={`link-aboutme`}>
                <Link to="about me" className="nav-link about" spy={true} smooth={true} offset={-10} duration={500}onClick={() => setToggle(false)} >
                  about me
                </Link>
              </li>
              <li key={`link-projects`}>
                <Link to="projects" className="nav-link projects" spy={true} smooth={true} offset={-30} duration={500}onClick={() => setToggle(false)} >
                  projects
                </Link>
              </li>
              <li key={`link-skills`}>
                <Link to="skills" className="nav-link skills" spy={true} smooth={true} offset={10} duration={500}onClick={() => setToggle(false)} >
                  skills
                </Link>
              </li>
              <li key={`link-contacts`}>
                <Link to="contacts" className="nav-link contact" spy={true} smooth={true} offset={0} duration={500}onClick={() => setToggle(false)} >
                  contacts
                </Link>
              </li>
              <li key={`link-resume`}>
                <Text
                className="nav-link resume"
                id="resume-button-1"
                  onClick={handleClick}
                  // href="https://drive.google.com/uc?export=download&id=1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv"
                  // download
                >
                  resume
                </Text>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
