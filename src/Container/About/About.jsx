import React,{useState,useEffect} from 'react'
import {motion } from 'framer-motion'
import './About.scss'

// if you dont want to use cms for data, then just uncomment the abouts array and in img attribute src will be about.imgUrl
// const abouts = [
//   {title:'Web Development',description:'Build and maintain websites and web applications, using programming, design tools, and languages such as HTML, CSS, Nodejs and JavaScript to meet both client and end-user needs.',imgUrl:images.about01},
//   {title:'Backend Development',description:'Work on databases, scripting languages, and website design to create the logic upon which websites and web apps function.',imgUrl:images.about04},
//   {title:'Frontend Development',description:'With the help of web languages like HTML, CSS, DOM, and Javascript creates websites and web application for users.',imgUrl:images.about03},
//   {title:'MERN Stack',description:'Web Developer with knowledge of MERN stacks with effective knowledge of web tools such as VS code, Postman, Git and Github.',imgUrl:images.about02},

// ]
import { urlFor,client } from '../../client';
import { AppWrap } from '../../Wrapper';
import {MotionWrap} from '../../Wrapper'

const About = () => {
  const [abouts, setAbouts] = useState([])
  useEffect(()=>{
    const query = '*[_type == "abouts"]'
    client.fetch(query)
    .then((data)=>setAbouts(data))
  },[])
  return (
    <>
    <h2 className='head-text'>I Know that <span>Great Web</span><br/> means <span>Great Business</span></h2>
    <div className='app__profiles'> 
    {abouts.map((about,index)=>(
      <motion.div
      whileInView={{opacity:1}}
      whileHover={{scale:1.1}}
      transition={{duration:0.5,type:'tween'}}
      className="app__profile-item"
      key={about.title+index}>
        <img src={urlFor(about.imgUrl)} alt= {about.title} />
        <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
        <p className='p-text' style={{marginTop:10}}>{about.description}</p>

      </motion.div>
    ))}
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About,'app__aboutme'),'about me','app__whitebg')