import React from 'react'
import heroImg from '../../public/images/hero-bg1.jpg'
import Image from 'next/image'

const LatestPost = () => {
  return (
    <div  className=' p-[10%] w-[100%] rounded-[25px] flex flex-col gap-y-6 justify-center items-start bg-gradient-to-b from-white-30 to-white-10 border-white-20 ' >
    <p className=' font-Poppins text-[28px] font-[600] ' >Latest Post</p>


    {/* First post */}
    <div className='flex justify-center gap-x-4  items-center'>
            <div style={{backgroundImage:`url('/images/hero-bg1.jpg')`,backgroundSize:'cover'}} className='w-28 h-20 rounded-[10px]' >
            </div>

            <div className='flex flex-col justify-center items-start' >
            <p className=' font-Poppins text-[#11112B] text-[16px] font-normal'>April 20, 2021</p>
              <p className=' font-Poppins text-[#11112B] text-[20px] font-bold' >Cloud Computing: A Game-Changer</p>
             
            </div>

            </div>

            {/* Second post */}
            <div className='flex justify-center gap-x-4  items-center'>
            <div style={{backgroundImage:`url('/images/hero-bg1.jpg')`,backgroundSize:'cover'}} className='w-28 h-20 rounded-[10px]' >
            </div>

            <div className='flex flex-col justify-center items-start' >
            <p className=' font-Poppins text-[#11112B] text-[16px] font-normal'>April 20, 2021</p>
              <p className=' font-Poppins text-[#11112B] text-[20px] font-bold' >Cloud Computing: A Game-Changer</p>
             
            </div>

            </div>

            {/* Third post */}
            <div className='flex justify-center gap-x-4  items-center'>
            <div style={{backgroundImage:`url('/images/hero-bg1.jpg')`,backgroundSize:'cover'}} className='w-28 h-20 rounded-[10px]' >
            </div>

            <div className='flex flex-col justify-center items-start' >
            <p className=' font-Poppins text-[#11112B] text-[16px] font-normal'>April 20, 2021</p>
              <p className=' font-Poppins text-[#11112B] text-[20px] font-bold' >Cloud Computing: A Game-Changer</p>
             
            </div>

            </div>






    

  </div>
  )
}

export default LatestPost