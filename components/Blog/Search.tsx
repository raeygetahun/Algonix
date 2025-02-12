import React from 'react'
import { IoIosSearch } from "react-icons/io";

// backgroundColor:'linear-gradient(180deg, rgba(255, 255, 255) 0%, rgba(255, 255, 255, 1) 100%))',

const Search = () => {
  return (
    <div  className=' p-[10%] w-[100%] rounded-[25px] flex flex-col gap-y-4 justify-center items-start bg-gradient-to-b from-white-30 to-white-10 border-white-20 ' >
      <p className=' font-Poppins text-[28px] font-[600] ' >Search</p>
      <div className='flex justify-between w-[100%] items-center border-b  border-[rgba(17,17,43,0.5)] p-1' >
        <input type="text" placeholder='Enter your keywords...' className='bg-transparent outline-none font-Poppins text-[18px] font-[400] text-[#11112B] opacity-100 ' />
        <IoIosSearch className='text-[#11112B] text-[28px]' />
      </div>

    </div>
  )
}

export default Search