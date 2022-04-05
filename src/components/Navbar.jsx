import React, {useState} from 'react'
import {FaBars,FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"

import { Link } from 'react-scroll'

//Note lag din egen logo senere

export const Navbar = () => {
  const [nav,setNav]= useState(false)
  
  const handleClick =()=> setNav(!nav)
  
  return (
    <div className=' fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
       <div>
         <h1 className='text-3xl font-bold text-pink-600'> Web3 and Frontend </h1>
       </div>
        
        
        
       


          <ul className=' hidden md:flex' >
            <li>
            <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
            </li>
            <li>  <Link  to="about"  smooth={true}  duration={500} >
          About
        </Link></li>
            <li>  <Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
            <li>  <Link  to="work"  smooth={true}  duration={500} >
          Work
        </Link></li>
            <li>  <Link  to="contacts"  smooth={true}  duration={500} >
          Contact
        </Link></li>
          </ul>
        
        <div onClick={handleClick} className=' md:hidden z-10 '>
            {!nav ? <FaBars/> : <FaTimes/>}
         </div>
        
        
        <ul className={!nav ? "hidden":"absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <li className=' py-6 text-4xl'><Link onClick={handleClick}   to="home"  smooth={true}  duration={500} >
          Home
        </Link></li>
            <li className=' py-6 text-4xl'><Link onClick={handleClick}   to="about"  smooth={true}  duration={500} >
          About
        </Link></li>
            <li className=' py-6 text-4xl'><Link onClick={handleClick}   to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
            <li className=' py-6 text-4xl'><Link onClick={handleClick}   to="work"  smooth={true}  duration={500} >
          Work
        </Link></li>
            <li className=' py-6 text-4xl'><Link onClick={handleClick}   to="contacts"  smooth={true}  duration={500} >
          Contact
        </Link></li>
          </ul>
          
        <div className=' hidden  lg:flex fixed flex-col top-[35%] left-0 '>
          <ul>
          <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  bg-[#333333] duration-300'>
              <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Myhre1881?tab=repositories'>
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  bg-blue-600 duration-300'>
              <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                LinkedIn <FaLinkedin size={30}/>
              </a>
            </li>
            
            <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  bg-[#6fc2b0] duration-300'>
              <a className='flex justify-between items-center w-full text-gray-300' href='/'>
               Email <HiOutlineMail size={30}/>
              </a>
            </li>
            <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  bg-[#565f69] duration-300'>
              <a className='flex justify-between items-center w-full text-gray-300' href='/'>
               Resume <BsFillPersonLinesFill size={30}/>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
  )
}


