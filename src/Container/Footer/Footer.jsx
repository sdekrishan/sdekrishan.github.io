import React,{useRef, useState} from 'react'
import {Box, Flex, Link, Text} from '@chakra-ui/react'
import { AppWrap,MotionWrap } from '../../Wrapper'
import emailjs from '@emailjs/browser';
import {BsFillPhoneFill} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import { BsGithub,BsLinkedin } from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import "./Footer.scss"
const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form  = useRef()


  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true);

    emailjs.sendForm('service_7umul8l', 'template_5txgf5n', form.current, 'riJqoRxifxRvYX6Wt')
      .then((result) => {
        setLoading(false)
        setIsFormSubmitted(true)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
    <h2 className='head-text'>Lets <span>Connect !</span></h2>
    <Flex mt='1rem' pl= '0' className='app__footer-cards' flexDirection={{base:"column",sm:"column",md:"row",lg:"row"}} w='90%' boxShadow='5px 10px silver' borderRadius={'10px'}>
  <Box padding={'1rem'} bgColor='#d7323c' w={{base:"100%",sm:"100%",md:"100%",lg:"45%"}} borderRadius={'.5rem'}>
    <Text fontStyle={'italic'} fontSize='xl' color='white' textDecoration='underline' textAlign={'center'}>Contact Details</Text>
<div className='app__footer-card'>
        <SiGmail color='blue'/>
        <Link  ml='0.5rem' href="mailto:sdekrishan@gmail.com" className='work__tag-text'>sdekrishan@gmail.com</Link>
      </div>
      <div className='app__footer-card'>
      <HiLocationMarker color='green' />

        <Link href="https://goo.gl/maps/MqmZXBG7qWtSvNB86"  ml='0.5rem' className='work__tag-text'>Bahadurgarh, Haryana</Link>
      </div>
      <div className='app__footer-card'>
      <BsFillPhoneFill color='grey' />

        <Link href="tel:7988398651"  ml='0.5rem' className='work__tag-text'>7988398651</Link>
      </div>
      <div className='app__footer-card'>
      <BsGithub color='black' />

        <Link href="https://github.com/sdekrishan"  ml='0.5rem' className='work__tag-text'>sdekrishan</Link>
      </div>
      <div className='app__footer-card'>
      <BsLinkedin color='blue' />

        <Link href="https://www.linkedin.com/in/sdekrishan?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoBhtonT8QoelwDiylVoiWg%3D%3D"  ml='0.5rem' className='work__tag-text'>Krishan Kumar</Link>
      </div>
    </Box>      
  <Box w={{base:"100%",sm:"100%",md:"100%",lg:"55%"}} padding={'2rem'} >
  {!isFormSubmitted ?  
        <form ref={form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input  type="text" name="user_name" placeholder='Name'/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Email' />
      <label>Message</label>
      <textarea name="message" rows={'3'} placeholder='Message'/>
      <input type="submit" value={loading ? 'Sending...' : 'Send Message'} />
    </form>
        :<div>
          <Text fontSize={'2xl'} color='white' textAlign={'center'}>Thank you for getting in touch!😍</Text>
        </div> }
    </Box>      
      </Flex>
   <Text mt='2rem' fontSize={'2xl'} textAlign='left' fontFamily={'kalam'} color='white'>Made By Krishan with 😎</Text>
    </>
  )
}

export default AppWrap(MotionWrap(Footer,'app__footer'),'contacts','app__primarybg')




