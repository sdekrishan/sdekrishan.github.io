import { useEffect, useState } from 'react';
import { Contact, Home, Skills, Projects } from './Container/index';
import { Navbar } from './Components';
import './App.scss';

const App = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSlideChanged, setIsSlideChanged] = useState(false);
  const carouselItems = [
    { id: 1, title: 'Home', link: '#home', component: <Home /> },
    { id: 2, title: 'Projects', link: '#projects', component: <Projects /> },
    { id: 3, title: 'Skills', link: '#skills', component: <Skills /> },
    { id: 4, title: 'Contact', link: '#contact', component: <Contact /> },
  ];

  useEffect(() => {
    setIsSlideChanged(true);
  },[activeSlide])

  console.log('Active Slide:', activeSlide);
  return (
    <div className="app">
      <Navbar setActiveSlide={setActiveSlide} />
      <div>
        {carouselItems[activeSlide].component}
      </div>
    </div>
  );
};

export default App;
