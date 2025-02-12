import React from 'react'
import Main from './Main'
import SideBar from './SideBar'

const Hero = () => {
  return (
    <div className='bg-[#D5D9E5] py-20 px-[7%] '>
        <div className="flex gap-x-3" >
          <span className="text-[#11112B] font-Poppins text-lg font-[400]" >Home {'>  '}</span>
          <span className="text-[#11112B] font-Poppins text-lg font-[600]" >Blog</span>
      </div>
      <div className=" my-5">
        <p className=" text-5xl md:text-[5vw] font-Space font-bold text-[#11112B]">Blog</p>
      </div>


    {/* Hero section */}
    <div className='flex flex-wrap gap-10 justify-between items-start ' >
      <Main/>
      <SideBar/>
    </div>

    
    </div>
  )
}

export default Hero