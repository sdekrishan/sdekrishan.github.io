import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../Wrapper/AppWrap";
import Type from "../../Components/Type";

const Home = () => {
  return (
    <div className="app__header app__flex" id="home">
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span className="span">👋</span>
            <div style={{ marginLeft: "1.5rem" }}>
              <p className="p-text">Hello I am </p>
              <h1 className="head-text">Krishan Kumar</h1>
              <br />
            </div>
          </div>
          <div className="typewriter">
            <Type />
          </div>
        </div>
      </motion.div>
      <motion.div className="app__header2-img">
        <img src={images.profile2} alt="profile_bg" />
      </motion.div>
    </div>
  );
};

export default AppWrap(Home, "home", "app__primarybg");

// export default AppWrap(MotionWrap(Work,'app__work'),'projects','app__primarybg')
