import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className="w-10 h-10 font-bold rounded-lg bg-white shadow-md flex items-center justify-center">
        <p className='blue-gradient_text'>AH</p>
      </NavLink>

      <nav className='flex gap-7 text-lg font-medium'>
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
          About
        </NavLink>

        <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
          Projects
        </NavLink>

        <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar