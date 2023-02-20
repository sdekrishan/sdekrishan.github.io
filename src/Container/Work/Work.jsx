import React,{useState,useEffect} from 'react'
import { AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'
import {AppWrap, MotionWrap} from '../../Wrapper'
 import "./Work.scss"


const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y:0,opacity:1})
  const [filterWork,setFilterWork] = useState([])

  const works = [{
    imgUrl:'https://camo.githubusercontent.com/84e625826c7d0a53e4b3aa08165c2fb28b74769ba99f48eb379329b26e4d6bd0/68747470733a2f2f692e6962622e636f2f6e3179533242322f686f6d652e706e67',
    name:"krsihan",
    projectLink:"https://vintageattrie.netlify.app/",
    codeLink:"https://github.com/Raj-1313/The-Vintage-Attire",
    title:"The Vintage Attire",
    description:"TVA(the vintage attire) is an ecommerce app where you can shop for men, women, kids for home accessories.",
    textstack:['Html 5','CSS 3' , 'Chakra UI', 'React Js', "Redux","Thunk","Node Js","Express.js", "MongoDB","Sass"],
    tags:['React Js','All']
  },
  {
    imgUrl:'https://user-images.githubusercontent.com/101396134/209457493-6152e5ee-0035-4d8a-b53c-99fa72abb470.png',
    name:"krsihan",
    projectLink:"https://stayfits.vercel.app/",
    codeLink:"https://github.com/rajkumar7859/stayFit.com",
    title:"Stay Fit",
    description:"StayFit allows users to track calories, monitor progress toward weight-management goals, and gain support from an online community.",
    textstack:['Html 5','CSS 3' , 'Chakra UI', 'React Js', "Redux","Thunk","Node Js","Express.js", "MongoDB"],
    tags:['React Js','All']
  },
  {
    imgUrl:'https://user-images.githubusercontent.com/107391017/213987948-993489bb-d89b-4024-9ff8-d9656819849a.png',
    name:"krsihan",
    projectLink:"https://stylelife-sdekrishan.vercel.app/",
    codeLink:"https://github.com/sdekrishan/Style-Life",
    title:"Style Life",
    description:"Style life helps you to live your life joyfully. You can eat in the best restaurants according to your location as well as you can book your appointment from doctors and massage services from spa centers.",
    textstack:['Html 5','CSS 3' , 'Chakra UI', 'React Js', "Redux","Thunk","Node Js","Express.js", "MongoDB"],
    tags:['React Js','All']
  },
  {
    imgUrl:'https://user-images.githubusercontent.com/107391017/218407255-f0fdf475-88cb-4845-bc4e-0470c3780572.png',
    name:"krsihan",
    projectLink:"https://startling-starlight-5eea2b.netlify.app/",
    codeLink:"https://github.com/sdekrishan/Weather_Forecast",
    title:"Weather Forecast",
    description:"An app which shows you the weather forecasting of any city you want.",
    textstack:['Html 5','CSS 3' , "JavaScript"],
    tags:['JavaScript','All',"Fun App"]
  },
  // {
  //   imgUrl:'https://user-images.githubusercontent.com/107391017/218411688-d40d6ec2-7c17-4975-8168-fd6d8af9d58f.png',
  //   name:"krsihan",
  //   projectLink:"https://stupendous-douhua-79f5e2.netlify.app/",
  //   codeLink:"https://github.com/sdekrishan/SnakeGame",
  //   title:"Snake Game",
  //   description:"A traditional Snake game. By playing it you can remember your childhood memories",
  //   textstack:['Html 5','CSS 3' , "JavaScript"],
  //   tags:['JavaScript','All','Fun App']
  // },
  ]
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
    setFilterWork(works)
  },[]);

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
        <img src= {work.imgUrl} alt ={work.name}/>
        <motion.div
        whileHover={{opacity:[0,1]}}
        transition={{duration:0.25,ease:'easeInOut',staggerChildren:0.5}}
        className="app__work-hover app__flex">
          <a href={work.projectLink} target="_blank" rel='noreferrer'>
            <motion.div
            whileInView={{scale:[0,1]}}
            whileHover={{scale:[1,0.9]}}
            transition={{duration:0.25}}
            className="app__flex">
               <AiFillEye/>
            </motion.div>
          </a>
          <a href={work.codeLink} target="_blank" rel='noreferrer'>
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
              <a href={work.projectLink} target="_blank" rel='noreferrer'>
              <div>
              <AiFillEye  className='custom_buttons'/>
              </div>
              </a>
              <a href={work.codeLink} target="_blank"  rel='noreferrer'>
              <div>
              <AiFillGithub className='custom_buttons'/>
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
    >
      <GitHubCalendar username='sdekrishan' color={'red'}  blockSize={20} hideColorLegend
        // style={{margin:"auto",width:'100%'}}
       className='app__work-calender'>
         <ReactTooltip html />
         </GitHubCalendar>
    </motion.div>

    <motion.div className='app__work-git-stats1'
     transition={{duration:0.1}}>
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
      <div className='app__work-git-stats2'>

      <div >
        <a href="https://github.com/sdekrishan">  
          <img
            align="center"
            alt='readme'
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=sdekrishan&theme=monokai"  //launguages
          />
        </a>
        </div>
        <div>
        <a href="https://github.com/sdekrishan">
          <img
alt= 'name'
align="left"
            src="https://github-readme-stats.vercel.app/api?username=sdekrishan&count_private=true&show_icons=true&theme=monokai" //stats
          />
        </a>
      </div>
      </div>
      
    </>
  )
  
}

export default AppWrap(MotionWrap(Work,'app__work'),'projects','app__primarybg')