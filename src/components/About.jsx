import React from 'react'

const About = () => {
  return (
    <div className=' w-full h-screen bg-[#0a192f] text-gray-300 ' name="about">
      <div className=' flex flex-col justify-center items-center w-full h-full'>
        <div className='max-width-[1000px] w-full  grid grid-cols-2 gap-8'>
          <div className=' sm:text-right pb-8 pl-4  '>
            <p className=' text-4xl font-bold inline border-b-4 border-pink-600 ' >About</p>
          </div>
          <div></div>
          </div>
          <div className='max-width-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
            <div className=' text-4xl font-bold    '>
              <p className=' '> Hey there!. Im Thomas, nice to meet you.  Please take a look around.</p>
            </div>
            <div>
             <p>
             I am passionate about finding beautiful yet practical solutions to any problem. I am specialized in React, as it provides me with a creative freedom that I love.I also build Web3 applications (aka dAPPS). I create custom smart contracts using Solidity and connect them to an application.  I create applications for clients ranging from individuals and small businesses all the way to large enterprise corporations. I look forward to working with you!
             </p>
            </div>
          </div>
        </div>
       

      </div>
    
  )
}

export default About