import { MdOutlineAttachFile } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { VscProject } from 'react-icons/vsc';
import { HiX } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { Text } from '@chakra-ui/react';
import './Navbar.scss';
import { BsFillGearFill, BsPerson } from 'react-icons/bs';

const navItems = [
  {
    key: 'home',
    label: 'About Me',
    to: 'home',
    className: 'home',
    offset: -50,
    duration: 500,
    type: 'link',
    carouselSlide: 0,
    icon: <BsPerson />,
  },
  {
    key: 'projects',
    label: 'projects',
    to: 'projects',
    className: 'projects',
    offset: -30,
    duration: 500,
    type: 'link',
    carouselSlide: 1,
    icon: <VscProject />,
  },
  {
    key: 'skills',
    label: 'skills',
    to: 'skills',
    className: 'skills',
    offset: 10,
    duration: 500,
    type: 'link',
    carouselSlide: 2,
    icon: <BsFillGearFill />,
  },
  {
    key: 'contacts',
    label: 'contact',
    to: 'contacts',
    className: 'contact',
    offset: 0,
    duration: 500,
    type: 'link',
    carouselSlide: 3,
    icon: <BsTelephone />,
  },
  {
    key: 'resume',
    label: 'resume',
    className: 'resume glassy-link',
    id: 'resume-button-1',
    type: 'text', // special type to render <Text />
    icon: <MdOutlineAttachFile />,
  },
];

const Navbar = ({ setActiveSlide }) => {
  const handleClick = () => {
    window.open(
      'https://drive.google.com/file/d/1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv/view?usp=sharing'
    );
    const url =
      'https://drive.google.com/uc?export=download&id=1IvwRAj-3hldcDAgkUlGL7KP3FmoBySuv';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="app__navbar" id="nav-menu">
      <div className="app__navbar-logo">Krishan</div>
      <ul className="app__navbar-links">
        {navItems.map((item) => (
          <li className="p-text" key={`link-${item.key}`}>
            {item.type === 'link' ? (
              <Link
                to={item.to}
                className={item.className}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={item.duration}
                onClick={() => setActiveSlide(item.carouselSlide)}
              >
                {item.label}
              </Link>
            ) : (
              <Text
                className={item.className}
                id={item.id}
                onClick={handleClick}
              >
                {item.label}
              </Text>
            )}
          </li>
        ))}
      </ul>

      <ul className="app__navbar_mob-links">
        {navItems.map((item) => (
          <li
            onClick={() => setActiveSlide(item.carouselSlide)}
            className={`p-text ${item.className}`}
            key={`link-${item.key}`}
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
