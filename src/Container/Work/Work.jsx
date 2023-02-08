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
  })},[]);

  return (
    <>
    <h2 className='head-text'>Projects <span>Section</span></h2>
    <div className='app__work-filter'>
      {['All','React Js','Fun App','JavaScript',].map((item,index)=>(
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
          <a href={work.codeLink} target="_blank" rel='norefer'>
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
            <h4 className='work__title-text' >
               {work.title}
            </h4>
            <p className='work__tag-text' style={{marginTop:10}}>{work.description}</p>

            <div className='work__text-stack'>
              {work.textstack.map((ts,ind)=>{
                return <div className='work__text-stack_single' key={ind}>{ts}</div>
              })}
            </div>
            <div className='icon__div'>
              <a href={work.projectLink} target="_blank">
              <div>
              <AiFillEye size={'1.5rem'} className='custom_buttons'/>
              </div>
              </a>
              <a href={work.codeLink} target="_blank">
              <div>
              <AiFillGithub size={'1.5rem'} className='custom_buttons'/>
              </div>
              </a>
            </div>
            <div className='app__work-tag app__flex'>
              <p className='work__tag-text'>{work.tags[0]}</p>
            </div>
          </div>
        </div>
      ))}
      
    </motion.div>
    <motion.div 

    className='app__work-Github-Calender'
     style={{width:'80%'}}>
      <GitHubCalendar username='sdekrishan' color={'red'}  blockSize={20} hideColorLegend
        style={{margin:"auto",width:'100%'}}
       className='app__work-calender'>
         <ReactTooltip html />
         </GitHubCalendar>
    </motion.div>

    <motion.div className='app__work-git-stats1'
     transition={{duration:0.25}}
     whileHover={{scale:[1,1.1]}}
     >
    <motion.div >
        <a href="https://github.com/sdekrishan">
          <img
            align="left"
            alt='readme'
            src="https://github-readme-streak-stats.herokuapp.com/?user=sdekrishan&theme=monokai"
          />
        </a>
      </motion.div>
      </motion.div>
      <motion.div className='app__work-git-stats2'
     whileInView={{scale:[0,1]}}
     transition={{duration:0.25}}
     >

      <motion.div
       whileHover={{scale:[1,1.1]}}>
        <a href="https://github.com/sdekrishan">  
          <img
            align="center"
            alt='readme'
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=sdekrishan&theme=monokai"  //launguages
          />
        </a>
        </motion.div>
        <motion.div   whileHover={{scale:[1,1.1]}}>
        <a href="https://github.com/sdekrishan">
          <img
alt= 'name'
align="left"
            src="https://github-readme-stats.vercel.app/api?username=sdekrishan&count_private=true&show_icons=true&theme=monokai" //stats
          />
        </a>
      </motion.div>
      </motion.div>
      
    </>
  )
  
}

export default AppWrap(MotionWrap(Work,'app__work'),'projects','app__primarybg')