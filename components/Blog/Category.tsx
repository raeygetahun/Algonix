import React from 'react'

const Category = () => {
  return (
    <div  className=' p-[10%] w-[100%] rounded-[25px] flex flex-col gap-y-4 justify-center items-start bg-gradient-to-b from-white-30 to-white-10 border-white-20 ' >
    <p className=' font-Poppins text-[28px] font-[600] ' >Category</p>
    <div className='flex justify-between w-[100%] items-center border-b ' >
      <p className='text-[#11112B] font-bold text-[20px] font-Poppins ' >Design</p>
      <p className='text-[#11112B] font-normal font-Poppins text-[18px]' >120</p>
      
    </div>
    <div className='flex justify-between w-[100%] items-center border-b ' >
      <p className='text-[#11112B] font-bold text-[20px] font-Poppins ' >Development</p>
      <p className='text-[#11112B] font-normal font-Poppins text-[18px]' >100</p>
      
    </div>
    <div className='flex justify-between w-[100%] items-center border-b ' >
      <p className='text-[#11112B] font-bold text-[20px] font-Poppins ' >Tips</p>
      <p className='text-[#11112B] font-normal font-Poppins text-[18px]' >80</p>
      
    </div>
    <div className='flex justify-between w-[100%] items-center border-b ' >
      <p className='text-[#11112B] font-bold text-[20px] font-Poppins ' >Review</p>
      <p className='text-[#11112B] font-normal font-Poppins text-[18px]' >60</p>
      
    </div>
    <div className='flex justify-between w-[100%] items-center border-b ' >
      <p className='text-[#11112B] font-bold text-[20px] font-Poppins ' >Events</p>
      <p className='text-[#11112B] font-normal font-Poppins text-[18px]' >40</p>
      
    </div>
    <div className='flex justify-between w-[100%] items-center border-b ' >
      <p className='text-[#11112B] font-bold text-[20px] font-Poppins ' >Collaboration</p>
      <p className='text-[#11112B] font-normal font-Poppins text-[18px]' >20</p>
      
    </div>

  </div>
  )
}

export default Category