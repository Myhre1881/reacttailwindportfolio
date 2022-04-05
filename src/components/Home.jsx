import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
import Link from 'react-scroll/modules/components/Link'
const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f] w-full h-screen'>
    
    <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
      <p className='text-pink-600'> Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Thomas Myhre</h1>
      <h2 className=' text-4xl sm:text-7xl font-bold text-[#8892b0]'> I am a Frontend and Web3 developer.</h2>
      <p className='text-[#8892b0] py-4 max-w-[700px]'>  I'm a Frontend and Web3 developer specializing in building(and occasionally designing) practical and exceptional digital experiences. I also build Web3 applications that are connected to the Ethereum blockchain.  
      </p>
      <div>
        <button className=' group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 '> 
        
      <Link to="work"  smooth={true}  duration={500}>
        View Work
        </Link>
      
        <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3'/>
          </span> 
          </button>
      </div>
    </div>

    </div>
  )
}

export default Home