import React from 'react'
import './Toggle.css'

const Toggle = () => {
  return (
    <span className='switch'>
    <input type='checkbox' name='togglebutton' id='switcher' />
    <label htmlFor='switcher'/>
    </span>
  )
}

export default Toggle