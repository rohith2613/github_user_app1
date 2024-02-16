import React from 'react'
import Logo1 from '../assets/social.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <div className='flex items-center justify-center gap-4 border-b-2 border-gray-300'>
      
      <img src={Logo1} alt="image" className='h-28 ' />
      <h1 id='head'  className='text-4xl px-2 first-letter:text-6xl tracking-wide '>GitHub Users</h1>
      
      
    </div>
    </Link>
    
  )
}

export default Logo
