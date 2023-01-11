import React from 'react'
import "./Header.scss"
import {motion } from 'framer-motion';
import { images } from "../../constants"
import AppWrap from '../../Wrapper/AppWrap';
import Type from '../../Components/Type';


const Header = () => {
  
  return (
    <div className='app__header app__flex' id='home'>
      <motion.div whileInView={{x:[-200,0 ],opacity:[0,1]}}
      transition={{duration:0.5}}
      className='app__header-info'>

        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span className='span'>👋</span>
            <div style = {{marginLeft:20}}>
              <p className='p-text'>Hello I am </p>
              <h1 className='head-text'>Krishan Kumar</h1>
              <br />
            </div>
          </div>
          <div className='typewriter'>
            <Type />
          </div>
          {/* <div className='tag-cmp app__flex'> */}
          {/* <h2 className='p-text'>Full Stack Web Developer</h2> */}
          {/* <p className='p-text'>Result-oriented and Enthusiastic Full Stack Web Developer
proficient in tech Stacks like JavaScript, React Js, Node Js, Redux,
and Mongo DB. Enhance my skills by making many projects.
Always looking for learning opportunities from where I can
upgrade my skills and give better output to company. Eager to
join my developer team and contribute to projects with my full
potential.  </p> */}

          {/* </div> */}
        </div>
        

                </motion.div>
        <motion.div
      className='app__header2-img'>
        <img src = {images.profile2} alt = 'profile_bg'/>
    
        </motion.div>
  
    </div>
  )
}

export default AppWrap(Header,'home','app__primarybg')

// export default AppWrap(MotionWrap(Work,'app__work'),'projects','app__primarybg')
