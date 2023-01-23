import {useEffect, useState} from 'react'

import {close, logo, menu} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {

  const [show, handleShow] = useState(false)

    function scrollHandle() {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

  const [toggle, setToggle] = useState(false)
  useEffect(() => {
      window.addEventListener("scroll", scrollHandle);
      return () => {
          window.removeEventListener("scroll", scrollHandle);
      }
  })

  return (
    <nav className={`w-full flex py-6 xs:px-10 px-20 justify-between items-center navbar fixed top-0 left-0 right-0 z-50 ${show && "bg-primary transition-all ease-in delay-200 duration-200"}`}>
      <img src={logo} alt="hoobank"
        className='w-[124px] h-[32px]' />
      
      {/* Give class sm:flex hidden soon */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal 
            cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' } text-white hover:text-secondary`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(prev => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient 
        absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal 
                cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4' } text-white hover:text-secondary`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar