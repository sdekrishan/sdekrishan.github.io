import React from 'react';
import './Navbar.scss';
import { HiX} from 'react-icons/hi';
import {GiHamburgerMenu} from 'react-icons/gi'
import {motion} from 'framer-motion'
import { useState } from 'react';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <p>KRISHAN KUMAR</p>
        </div>
        <ul className='app__navbar-links'>
    
            <li className='app__flex p-text' key ={`link-home`}>
                <div/>
                <a href='#home'>home</a></li>
            <li className='app__flex p-text' key ={`link-aboutme`}>
                <div/>
                <a href='#about me'>about me</a></li>
            <li className='app__flex p-text' key ={`link-projects`}>
                <div/>
                <a href='#projects'>projects</a></li>
            <li className='app__flex p-text' key ={`link-skills`}>
                <div/>
                <a href='#skills'>skills</a></li>
            <li className='app__flex p-text' key ={`link-contacts`}>
                <div/>
                <a href='#contacts'>contacts</a></li>
            <li className='app__flex p-text' key ={`link-resume`}>
                <div/>
                <a href='https://drive.google.com/uc?export=download&id=1nGtDsNq2AEbvCKysglW4SX2xQwwYHMet' download onClick={()=>window.open('https://drive.google.com/file/d/1nGtDsNq2AEbvCKysglW4SX2xQwwYHMet/view?usp=sharing')}>resume</a></li>
        </ul>

        <div className='app__navbar-menu'>
                <GiHamburgerMenu onClick={()=>setToggle(true)}/>
                {toggle && ( 
                        <motion.div whileInView={{x:[300,0]}} transition={{duration: 0.85, ease: 'easeOut'}}>
                            <HiX onClick={()=>setToggle(false)}/>   
                            <ul >
                            
                             <li key ={`link-home`}>
                
                <a onClick={()=>setToggle(false)} href='#home'>home</a></li>
            <li key ={`link-aboutme`}>
               
          <a onClick={()=>setToggle(false)} href='#about me'>about me</a></li>
            <li key ={`link-projects`}>
                
                <a onClick={()=>setToggle(false)} href='#projects'>projects</a></li>
            <li key ={`link-skills`}>
                
                <a onClick={()=>setToggle(false)} href='#skills'>skills</a></li>
            <li key ={`link-contacts`}>
                
                <a onClick={()=>setToggle(false)} href='#contacts'>contacts</a></li>
            <li key ={`link-resume`}>
                
                <a onClick={()=>setToggle(false)} href='https://drive.google.com/uc?export=download&id=1nGtDsNq2AEbvCKysglW4SX2xQwwYHMet' download >resume</a></li>
                            </ul>
                        </motion.div>
                    )
                }
        </div>
    </nav>
  )
}

export default Navbar