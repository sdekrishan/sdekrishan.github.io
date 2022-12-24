import React from 'react'
import "./Header.scss"
import {motion } from 'framer-motion';
import { images } from "../../constants"
import AppWrap from '../../Wrapper/AppWrap';
const scaleVariants = {
    whileInView:{
      scale:[0,1],
      opacity:[0,1],
      transition:{
        duration :1,
        ease:'easeInOut'
      }
    }
}

const Header = () => {
  
  return (
    <div className='app__header app__flex' id='home'>
      <motion.div whileInView={{x:[-200,0 ],opacity:[0,1]}}
      transition={{duration:0.5}}
      className='app__header-info'>

        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style = {{marginLeft:20}}>
              <p className='p-text'>Hello I am </p>
              <h1 className='head-text'>Krishan Kumar</h1>

            </div>
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
     whileInView={{opacity:[0,1]}}
      transition={{duration:0.5 , delayChildren:0.5}}
      className='app__header-img'>
        <img src = {images.profile} alt = 'profile_bg'/>
        <motion.img
        whileInView={{scale:[0,1]}}
        transition={{duration:1 , ease:'easeInOut'}}
        src={images.circle}
        alt='profile_circle'
        className='overlay_circle'
        />
        </motion.div>
    
    
    <motion.div 
    variant ={scaleVariants}
    whileInView={scaleVariants.whileInView}
    className='app__header-circles'>
      {[images.react,images.redux,images.javascript].map((circle,index)=>(
        <div className='circle-cmp app__flex' key={`circle-${index}`}>
          <img src={circle} alt = 'circle'/>
        </div>
      ))}
    </motion.div>

    
    
     

    </div>
  )
}

export default AppWrap(Header,'home')