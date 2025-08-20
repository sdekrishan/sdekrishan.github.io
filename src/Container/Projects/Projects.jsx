import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import "./Projects.scss";
import VerticalCarousel from "../../Components/Carousel";

const Projects = () => {
  return (
    <motion.div
      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__projects_main"
    >
      <motion.h2
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        className="heading"
      >
        Projects Section
      </motion.h2>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
        id="projects"
      >
        <VerticalCarousel />
      </motion.div>
    </motion.div>
  );
};

export default AppWrap(Projects, "projects");
