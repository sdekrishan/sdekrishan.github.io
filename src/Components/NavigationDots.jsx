import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
     {['home','about me','projects','skills','contacts'].map((item,index)=>(

        <a
        href = {`#${item}`}
        key= {item+index}
        className='app__navigation-dot'
        style = {active === item ? {backgroundColor:"#d8323c"} :{}}
        />
        
       ))}

    </div>
  )
}

export default NavigationDots