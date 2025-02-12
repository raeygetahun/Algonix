import React from 'react'
import Blog from './Blog'
import { IoMdArrowRoundForward } from "react-icons/io";



const Main = () => {
  return (
    <main className=' w-[100%] sm:w-[90%] md:w-[60%]  flex flex-col gap-y-10 justify-start items-start'>
      <Blog/>
      <Blog/>
      <Blog/>
      <div className='flex justify-start items-center gap-x-4' >
      
      <p className='text-[white] bg-[#11112B]  w-10 h-10 flex flex-col justify-center items-center font-Poppins text-[24px] p-2 rounded-[10px] font-[600] ' >1</p>
      <p className='text-[#11112B] font-Poppins  w-10 h-10 flex flex-col justify-center items-center p-2 text-[24px] rounded-[10px] border-[1px] border-[#11112B] font-[600] ' >2</p>
      <p className='text-[#11112B] font-Poppins  w-10 h-10 flex flex-col justify-center items-center p-2 text-[24px] rounded-[10px] border-[1px] border-[#11112B] font-[600] ' >3</p>
      <p className='text-[#11112B] font-Poppins  w-10 h-10 flex flex-col justify-center items-center p-2 text-[24px] rounded-[10px] border-[1px] border-[#11112B] font-[600] ' ><IoMdArrowRoundForward /></p>

    

  </div>

    </main>
  )
}

export default Main