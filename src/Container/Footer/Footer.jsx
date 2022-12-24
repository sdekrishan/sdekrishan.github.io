import React,{useState} from 'react'
import { images } from '../../constants'
import { AppWrap,MotionWrap } from '../../Wrapper'
import { client } from '../../client'
import "./Footer.scss"
const Footer = () => {
  const [formData, setFormData] = useState({name:'',email:'',message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {name,email,message} = formData;

  const handleChangeInput = (e)=>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
  }

  const handleSubmit = ()=>{
    setLoading(true);

    const contact = {
      _type:'contact',
      name:name,
      email:email,
      message:message
    }
    client.create(contact)
      .then(()=>{
        setLoading(false);
        setIsFormSubmitted(true)
      })
  }

  return (
    <>
    <h2 className='head-text'>Lets <span>Connect !</span></h2>
    <div className='app__footer-cards'>
      <div className='app__footer-card'>
        <img src={images.email} alt= 'email' />
        <a href="mailto:sdekrishan@gmail.com" className='work__tag-text'>sdekrishan@gmail.com</a>
      </div>
      <div className='app__footer-card'>
        <img src={images.mobile} alt= 'email' />
        <a href="tel:7988398651" className='work__tag-text'>7988398651</a>
      </div>
      </div>
    {!isFormSubmitted ?  
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Your Name' value={name} name='name' onChange={handleChangeInput} />
        </div>

        <div>
        <input className='p-text' type='email' placeholder='Your Email' value={email} name='email' onChange={handleChangeInput} />
        </div>

        <div>
          <textarea className='p-text'
           placeholder='Your Message'
            value={message}
            name='message'
            onChange={handleChangeInput}/>


        </div>
        <button type='button' className='p-text'
        onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'} </button>
        </div> 
        :<div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div> }
    </>
  )
}

export default AppWrap(MotionWrap(Footer,'app__footer'),'contacts','app__primarybg')