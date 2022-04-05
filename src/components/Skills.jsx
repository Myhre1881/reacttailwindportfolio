import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';


import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

import {SiSolidity ,SiWeb3Dotjs} from "react-icons/si"

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300 '>
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=''>
            <p className=' text-4xl   font-bold border-b-4 border-pink-600 '>Skills</p>
            <p className='py-4'> These are the technologies that i work with on a regular basis</p>
          </div>
          <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className=' shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
              <img src={HTML} className="w-20 mx-auto" alt="HTML icon"/>
              <p className=' my-4'>HTML</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img src={CSS} className="w-20 mx-auto" alt="HTML icon"/>
              <p className=' my-4'>CSS</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img src={JavaScript} className="w-20 mx-auto" alt="HTML icon"/>
              <p className=' my-4'>JavaScript</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img src={ReactImg} className="w-20 mx-auto" alt="HTML icon"/>
              <p className=' my-4'>React</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img src={GitHub} className="w-20 mx-auto" alt="HTML icon"/>
              <p className=' my-4'>GitHub</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <SiSolidity className=" w-20 mx-auto h-20"/>
              <p className=' my-4'>Solidity</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img src={Tailwind} className="w-20 mx-auto" alt="HTML icon"/>
              <p className=' my-4'>Tailwind</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <SiWeb3Dotjs className=' w-20 mx-auto h-20 text-blue-600'/>
              <p className=' my-4'>Web3JS/EthersJS</p>
            </div>

          </div>
        </div>
      
      </div>
  )
}

export default Skills