import React from "react";
import "./About.scss";
import { images } from "../../constants";
import { AppWrap } from "../../Wrapper";
import { MotionWrap } from "../../Wrapper";

const About = () => {
  const abouts = {
    title: "Full Stack Web Developer",
    description:
      "Result-oriented and Enthusiastic Full Stack Web Developer proficient in tech Stacks like JavaScript, React Js, Node Js, Redux,and Mongo DB. Enhance my skills by making many projects. Always looking for learning opportunities from where I can upgrade my skills and give better output to company. Eager to join my developer team and contribute to projects with my full potential.",
  };

  return (
    <div className="about_container aboutsection" id="about">
      <h2 className="head-text">
        About<span> Me</span>
      </h2>
      <div className="app__profiles">
        <div className="app__profile-item">
          <div className="app__profile-subitem">
            <img src={images.about01} alt={abouts.title} />
          </div>
          <div className="app__profile-description">
            <p className="p-text" style={{ marginTop: 10 }} id="user-detail-intro">
              {abouts.description}
            </p>
            <a
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv/view?usp=sharing"
                );
              }}
              href="https://drive.google.com/uc?export=download&id=1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv"
              download
              className="button-5"
              id='resume-link-2'
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__aboutme"),
  "about me",
  "app__whitebg"
);
