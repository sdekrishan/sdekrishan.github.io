import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./Projects.scss";
import images from "../../constants/images";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);

  const works = [
    

    {
      imgUrl:
        images.jcrew,
      name: "krsihan",
      projectLink: "https://vintageattrie.netlify.app/",
      codeLink: "https://github.com/Raj-1313/The-Vintage-Attire",
      title: "The Vintage Attire",
      description:
        "TVA(the vintage attire) is an ecommerce app where you can shop for men, women, kids for home accessories.",
      textstack: [
        "Html 5",
        "CSS 3",
        "Chakra UI",
        "React Js",
        "Redux",
        "Thunk",
        "Node Js",
        "Express.js",
        "MongoDB",
        "Sass",
      ],
      tags: ["React Js", "All"],
    },
    {
      imgUrl:images.prodozen,
      name:"krsihan",
      projectLink:"https://allinone-azure.vercel.app/",
      codeLink:"https://github.com/sdekrishan/Allinone",
      title:"ProDozen",
      description:"ProDozen is a compilation of more than 13 projects (javascript and reactjs both).",
      textstack:['Html 5','CSS 3', "JavaScript","React.js","Chart.js","Redux","Chakra UI"],
      tags:['React Js','All','Fun App']
    },
    {
      imgUrl:
        "https://user-images.githubusercontent.com/107391017/213987948-993489bb-d89b-4024-9ff8-d9656819849a.png",
      name: "krsihan",
      projectLink: "https://stylelife.vercel.app",
      codeLink: "https://github.com/sdekrishan/Style-Life",
      title: "Style Life",
      description:
        "Style life helps you to live your life joyfully. You can eat in the best restaurants according to your location as well as you can book your appointment from doctors and massage services from spa centers.",
      textstack: [
        "Html 5",
        "CSS 3",
        "Chakra UI",
        "React Js",
        "Redux",
        "Thunk",
        "Node Js",
        "Express.js",
        "MongoDB",
      ],
      tags: ["React Js", "All"],
    },
 
    {
      imgUrl:
        "https://user-images.githubusercontent.com/101396134/209457493-6152e5ee-0035-4d8a-b53c-99fa72abb470.png",
      name: "krsihan",
      projectLink: "https://stayfits.vercel.app/",
      codeLink: "https://github.com/rajkumar7859/stayFit.com",
      title: "Stay Fit",
      description:
        "StayFit allows users to track calories, monitor progress toward weight-management goals, and gain support from an online community.",
      textstack: [
        "Html 5",
        "CSS 3",
        "Chakra UI",
        "React Js",
        "Redux",
        "Thunk",
        "Node Js",
        "Express.js",
        "MongoDB",
      ],
      tags: ["React Js", "All"],
    }
  ];
 

  useEffect(() => {
    setFilterWork(works);
  }, []);

  return (
    <>
      <h2 className="head-text">
        Projects <span>Section</span>
      </h2>
    
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
        id='projects'
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex project-card" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="work__title-text project-title">{work.title}</h4>
              <p className="work__tag-text project-description" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="work__text-stack project-tech-stack" >
                {work.textstack.map((ts, ind) => {
                  return (
                    <div className="work__text-stack_single" key={ind}>
                      {ts}
                    </div>
                  );
                })}
              </div>
              <div className="icon__div">
                <a href={work.projectLink} target="_blank" rel="noreferrer" className="project-deployed-link">
                  <div>
                    <AiFillEye className="custom_buttons" />
                  </div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer" className="project-github-link">
                  <div>
                    <AiFillGithub className="custom_buttons" />
                  </div>
                </a>
              </div>
              <div className="app__work-tag app__flex">
                <p className="work__tag-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div className="app__work-Github-Calender">
        <GitHubCalendar
          username="sdekrishan"
          color={"red"}
          blockSize={20}
          hideColorLegend
          // style={{margin:"auto",width:'100%'}}
          className="app__work-calender"
        >
          <ReactTooltip html />
        </GitHubCalendar>
      </motion.div>

      <motion.div
        className="app__work-git-stats1"
        transition={{ duration: 0.1 }}
      >
        <motion.div>
          <a href="https://github.com/sdekrishan">
            <img
              align="left"
              alt="readme"
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com/?user=sdekrishan&theme=monokai"
            />
          </a>
        </motion.div>
      </motion.div>
      <div className="app__work-git-stats2">
        <div>
          <a href="https://github.com/sdekrishan">
            <img
              align="center"
              alt="readme"
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=sdekrishan&theme=monokai" //launguages
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/sdekrishan">
            <img
              alt="name"
              align="left"
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=sdekrishan&count_private=true&show_icons=true&theme=monokai" //stats
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, "app__work"),
  "projects",
  "app__primarybg"
);
