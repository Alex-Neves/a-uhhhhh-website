import React from 'react'
import Logo from './assets/Images/bigdan.webp'
import './header.scss'
import {Link} from 'react-router-dom'
import './assets/Fonts/Aerodynamic-aGag.otf'

function Header() {
  return (
    <div className='Header'>
      <div className='Top-Header-Content'>
        <Link to='/' className='ImgLink'><img alt='Big Dans Logo' src={Logo}></img></Link>
        <input type='search' placeholder ='What can we help you with?'/>
        <div className='sign-in-options'>
          <Link className='Header-Link' to ='/registration'>Register</Link>
          <p>or</p>
          <Link className='Header-Link' to ='/registration'>Sign Up</Link>
        </div>
      </div>
      <div className='navbar'>
        <Link className='subnav-link' to ='/shop'>Shop</Link>
        <Link className='subnav-link' to ='/contactus'>Contact Us</Link>
        <Link className='subnav-link' to ='/faqs'>FAQ's</Link>
        <Link className='subnav-link' to ='/aboutus'>About Us</Link>
        <Link className='subnav-link' to ='/locations'>Locations</Link>
        <div className='dropdown'>
          
        </div>
      </div>
    </div>
  )
}

export default Header