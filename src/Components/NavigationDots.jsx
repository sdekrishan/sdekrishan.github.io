import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
     {['home','about me','projects','skills','contacts'].map((item,index)=>(

        <a
        href = {`#${item}`}
        key= {item+index}
        className='app__navigation-dot'
        style = {active === item ? {backgroundColor:"#313BAC"} :{}}
        />
        
       ))}
{console.log(active)}
    </div>
  )
}

export default NavigationDots