import React,{useState,useEffect} from 'react'
import {motion } from 'framer-motion'
import './About.scss'
import  {images}  from '../../constants';
// if you dont want to use cms for data, then just uncomment the abouts array and in img attribute src will be about.imgUrl
// const abouts = [
//   {title:'Full Stack Web Developer',description:'Result-oriented and Enthusiastic Full Stack Web Developer proficient in tech Stacks like JavaScript, React Js, Node Js, Redux,and Mongo DB. Enhance my skills by making many projects. Always looking for learning opportunities from where I can upgrade my skills and give better output to company. Eager to join my developer team and contribute to projects with my full potential.',imgUrl:images.about01},

// ]
import { urlFor,client } from '../../client';
import { AppWrap } from '../../Wrapper';
import {MotionWrap} from '../../Wrapper'

const About = () => {
  const [abouts, setAbouts] = useState({title:'Full Stack Web Developer',description:'Result-oriented and Enthusiastic Full Stack Web Developer proficient in tech Stacks like JavaScript, React Js, Node Js, Redux,and Mongo DB. Enhance my skills by making many projects. Always looking for learning opportunities from where I can upgrade my skills and give better output to company. Eager to join my developer team and contribute to projects with my full potential.'})

  return (
    <div className='about_container' id='about'>
    <h2 className='head-text'>About<span> Me</span></h2>
    <div className='app__profiles'> 
 
      <motion.div
      whileInView={{opacity:1}}
      whileHover={{scale:1.1}}
      transition={{duration:0.5,type:'tween'}}
      className="app__profile-item"
      >
        <div className='app__profile-subitem'>
        <h2 className='bold-text' style={{marginTop:20}}>{abouts.title}</h2>
        <img src={images.about01} alt= {abouts.title}/>
        </div>
        <div className='app__profile-description'>
        <p className='p-text' style={{marginTop:10}}>{abouts.description}</p>
        </div>
      </motion.div>
   
    </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About,'app__aboutme'),'about me','app__whitebg')