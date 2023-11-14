"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'

const Header = () => {

  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen((prevState) => !prevState )
  }

  return (
<header>
     <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-indigo-600
        "
      >
       <div>
          <a href="#">
           <Logo />
          </a>
        </div>
       
        
        {/* Button M */}
        <svg
          onClick={handleOpen}
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 fill-white cursor-pointer md:hidden block"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className={`w-full md:flex md:items-center md:w-auto
        ${!open ? 'hidden' : ""}

       `} id="menu">
          <ul
            className="
              pt-4
              text-base
              text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li className='text-white  hover:bg-white text-center hover:rounded-lg transition-all delay-75'>
              <Link
                className='md:p-4 py-2 block hover:text-purple-400 hover:font-bold '
                href={"/productos"} >
              Productos
              </Link>
            </li>
            <li className='text-white  hover:bg-white hover:text-black text-center hover:rounded-lg transition-all delay-75'>
              <a className="md:p-4 py-2 block hover:text-purple-400 hover:font-bold" href="#"
                >Contacto</a
              >
            </li>
            <li className='text-white  hover:bg-white hover:text-black text-center hover:rounded-lg transition-all delay-75'>
              <a className="md:p-4 py-2 block hover:text-purple-400 hover:font-bold" href="#"
                >Nostros</a
              >
            </li>
          </ul>
        </div>
    </nav>
  </header>
  )
}

export default Header
