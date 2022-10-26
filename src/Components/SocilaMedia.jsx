import React from 'react'


import {BsLinkedin , BsGithub,BsTwitter} from 'react-icons/bs'
const SocilaMedia = () => {
  const hn = ()=>{
    // <a href="github.com/sdekrishan"></a>
  }
  return (
    <div className='app__social'>
        <div><BsLinkedin onClick={hn}/></div>
        <div><BsGithub/></div>
        <div><BsTwitter/></div>
        </div>
  )
}

export default SocilaMedia