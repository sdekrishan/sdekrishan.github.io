import React from 'react'


import {BsLinkedin , BsGithub,BsTwitter} from 'react-icons/bs'
const SocilaMedia = () => {
  const hn = ()=>{
    // <a href="github.com/sdekrishan"></a>
  }
  return (
    <div className='app__social'>
        <div>
          <a href="https://linkedin.com/in/sdekrishan" target={'_blank'} ><BsLinkedin/></a></div>

        <div><a href="https://github.com/sdekrishan" target={"_blank"}><BsGithub/></a></div>
        <div><a href="https://twitter.com/sdekrishan"target={"_blank"}><BsTwitter/></a></div>
        </div>
  )
}

export default SocilaMedia