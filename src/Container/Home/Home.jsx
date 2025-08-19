import { BsArrowRightCircle } from 'react-icons/bs';
import './Home.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import AppWrap from '../../Wrapper/AppWrap';
import { useState } from 'react';
import Accordian from '../../Components/Accordian';

const experienceDetails = [
  'Built and deployed full-stack applications using React.js, Node.js, Express.js, and MongoDB, focusing on performance, scalability, and clean UI/UX.',
  'Developed and maintained RESTful APIs and backend services, including authentication, booking operations, and data management.',
  'Worked with AWS services such as S3, Lambda, API Gateway, ECS, and WAF to design secure, serverless, and event-driven architectures.',
  'Automated workflows for daily data uploads and email reports using AWS Lambda and S3.',
  'Implemented centralized error handling and optimized frontend performance for complex multi-component flows.',
  'Wrote unit and integration tests with Jest, ensuring robust code quality and reliability.',
  'Collaborated in team settings, practicing Agile methodologies, and contributing to code reviews and knowledge sharing.',
  'Passionate about problem-solving, clean code, and continuous learning, with a strong interest in DevOps practices and AI-powered development.',
];

const Home = () => {
  const [showQA, setShowQA] = useState({
    summary: true,
    experience: false,
    faqs: false,
    caseStudies: false,
  });

  const knowMeSections = [
    {
      key: 'experience',
      getLabel: () => (showQA.experience ? 'Summary' : 'Experience'),
      onClick: () => handleClick(showQA.experience ? 'summary' : 'experience'),
    },
    {
      key: 'faqs',
      label: "Let's save your Time",
      onClick: () => handleClick('faqs'),
    },
  ];

  const handleClick = (section) => {
    Object.keys(showQA).forEach((el) => {
      showQA[el] = false;
    });
    setShowQA({ ...showQA, [section]: true });
  };

  return (
    <div className="app__header" id="home">
      <div className="app__header_summary">
        <motion.div
          whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div>
            <h2 className="app__header_heading">Full Stack Web Developer</h2>
            <p
              className={`app__header_description ${
                showQA.experience || showQA.faqs ? 'hide_desc' : 'show_desc'
              }`}
            >
              Web Developer with +2 years of experience in building scalable and
              user-friendly applications. Skilled in frontend, backend, and
              cloud (AWS Lambda, S3, API Gateway), with a strong focus on
              problem-solving, clean code, and continuous learning. Currently
              exploring AI for web development and DevOps foundations to enhance
              productivity and innovation.
            </p>
          </div>
        </motion.div>
        <div className="app__header_QA">
          {knowMeSections.map(({ key, label, getLabel, onClick }) => (
            <button key={key} className="button" onClick={onClick}>
              {getLabel ? getLabel() : label}
              <BsArrowRightCircle />
            </button>
          ))}
        </div>
      </div>
      {showQA.summary && (
        <motion.div
          className="app__header2-img"
          whileInView={{ scale: [0.6, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <img src={images.pfp} alt="profile_bg" className="profile_bg" />
        </motion.div>
      )}
      {showQA.experience && (
        <motion.div
          className="app__header_QA_details"
          whileInView={{ y: [40, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="experience">
            <h2>
              Associate Product Engineer at <span>Travelopia</span>
            </h2>
            <p>From July 2023 - Present</p>

            {experienceDetails.map((detail, index) => (
              <li key={index} className="experience-detail">
                {detail}
              </li>
            ))}
          </div>
        </motion.div>
      )}

      {showQA.faqs && (
        <div className="app__header_FAQ_details">
          <Accordian />
        </div>
      )}
    </div>
  );
};

export default AppWrap(Home, 'home');
