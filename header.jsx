import React from 'react'
import Logo from './assets/Images/bigdan.webp'
import './header.scss'

function Header() {
  return (
    <div className='Header'>
      <a ><img alt='Big Dans Logo' src={Logo}></img></a>
    </div>
  )
}

export default Header