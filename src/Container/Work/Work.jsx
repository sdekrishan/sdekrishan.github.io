import React,{useState,useEffect} from 'react'
import { AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'
import {urlFor, client} from '../../client'
import {AppWrap, MotionWrap} from '../../Wrapper'
 import "./Work.scss"


const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y:0,opacity:1})
  const [works, setWorks] = useState([])
  const [filterWork,setFilterWork] = useState([])

  const handleWorkFilter=(item)=>{
    setActiveFilter(item);
    setAnimateCard([{y:100,opacity:0}])
console.log(item)
    setTimeout(()=>{
      setAnimateCard([{y:0,opacity:1}])
      if(item === 'All'){
        setFilterWork(works);

      }
      else{
        setFilterWork(works.filter((ele)=>ele.tags.includes(item)))
      }

    },500)
  }

  useEffect(()=>{
    const query = '*[_type == "works"]';
    client.fetch(query)
    .then((data)=>{
      setWorks(data)
    setFilterWork(data)
  })},[])
  //for github calender and stats
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <>
    <h2 className='head-text'>My Creative <span>Projects </span>Section</h2>
    <div className='app__work-filter'>
      {['Web App','React Js', 'Fun App','All'].map((item,index)=>(
        <div 
        key = {index}
        onClick={()=>handleWorkFilter(item)}
        className = {`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
        >
          {item}
        </div>
      ))}
    </div>

    <motion.div
    animate = {animateCard}
    transition={{duration:0.5,delayChildren:0.5}}
    className="app__work-portfolio">
      {filterWork.map((work,index)=>(
        <div className='app__work-item app__flex' key = {index}>
          <div className='app__work-img app__flex' >
        <img src= {urlFor(work.imgUrl)} alt ={work.name}/>
        <motion.div
        whileHover={{opacity:[0,1]}}
        transition={{duration:0.25,ease:'easeInOut',staggerChildren:0.5}}
        className="app__work-hover app__flex">
          <a href={work.projectLink} target="_blank" rel='norefer'>
            <motion.div
            whileInView={{scale:[0,1]}}
            whileHover={{scale:[1,0.9]}}
            transition={{duration:0.25}}
            className="app__flex">
               <AiFillEye/>
            </motion.div>
          </a>
          <a href={work.projectLink} target="_blank" rel='norefer'>
            <motion.div
            whileInView={{scale:[0,1]}}
            whileHover={{scale:[1,0.9]}}
            transition={{duration:0.25}}
            className="app__flex">
               <AiFillGithub/>
            </motion.div>
          </a>
        </motion.div>
          </div>
          <div className='app__work-content app__flex'>
            <h4 className='bold-text' >
               {work.title}
            </h4>
            <p className='p-text' style={{marginTop:10}}>{work.description}</p>
            <div className='app__work-tag app__flex'>
              <p className='p-text'>{work.tags[0]}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
    <motion.div 
    whileInView={{scale:[0,1]}}
    transition={{duration:0.25}}
    className='app__work-Github-Calender' style={{width:'80%',padding:'2rem',marginTop:"5rem",margin:'auto'}}>
      <GitHubCalendar username='sdekrishan' blockSize={20} hideColorLegend
       transformData={selectLastHalfYear} style={{margin:"auto",width:'90%'}}
       className='app__work-calender'>
         <ReactTooltip html />
         </GitHubCalendar>
    </motion.div>

    <motion.div className='app__work-git-stats1'
     whileInView={{scale:[0,1]}}
     transition={{duration:0.25}}
     >
    <motion.div   whileHover={{scale:[1,1.1]}}>
        <a href="https://github.com/sdekrishan">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=sdekrishan"
          />
        </a>
      </motion.div>
      </motion.div>
      <motion.div className='app__work-git-stats2'
     whileInView={{scale:[0,1]}}
     transition={{duration:0.25}}
     >

      <motion.div   whileHover={{scale:[1,1.1]}}>
        <a href="https://github.com/sdekrishan">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=sdekrishan"  //launguages
          />
        </a>
        </motion.div>
        <motion.div   whileHover={{scale:[1,1.1]}}>
        <a href="https://github.com/sdekrishan">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=sdekrishan&count_private=true&show_icons=true" //stats
          />
        </a>
      </motion.div>
      </motion.div>
      
    </>
  )
  
}

export default AppWrap(MotionWrap(Work,'app__work'),'projects','app__primarybg')