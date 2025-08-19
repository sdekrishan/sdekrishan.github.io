import { FaAws } from "react-icons/fa";
import { motion } from 'framer-motion';
import { AppWrap } from '../../Wrapper';
import './Skills.scss';
import { images } from '../../constants';

const Skills = () => {
  const skills = [
    {
      name: 'Html 5',
      icon: images.html,
    },
    {
      name: 'CSS 3',
      icon: images.css,
    },
    {
      name: 'JavaScript',
      icon: images.javascript,
    },
    {
      name: 'TypeScript',
      icon: images.typescript,
    },
    {
      name: 'React Js',
      icon: images.react,
    },
    {
      name: 'Redux',
      icon: images.redux,
    },
    {
      name: 'Node Js',
      icon: images.node,
    },
    {
      name: 'Express',
      icon: images.express,
    },
    {
      name: 'Sass',
      icon: images.sass,
    },
    {
      name: 'Mongo DB',
      icon: images.mongodb,
    },
    {
      name: 'Github',
      icon: images.github,
    },
    {
      name: 'Chakra UI',
      icon: images.chakra,
    },
    {
      name: 'Next Js',
      icon: images.next,
    },
    {
      name: 'AWS',
      icon: images.aws
    }
  ];

  return (
    <motion.div id="skills" className="app__skills">
      <h2 className="heading">My Skills</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <motion.div className="app__flex">
                <motion.img
                  whileHover={{ scale: [1, 1.2] }}
                  src={skill.icon}
                  alt={skill.name}
                  className="skills-card-img"
                />
              </motion.div>
              <p className="p-text  skills-card-name">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppWrap(Skills, 'skills');
