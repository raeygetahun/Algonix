import React from 'react'

const Evidence = () => {
  return (
    <div className='bg-[#D9D9D9] mb-5 pb-20 px-4 sm:px-6'> {/* White Background */}
  <div className='bg-[#11112B] max-w-[1100px] mx-auto px-6 sm:px-8 py-8 sm:py-16 lg:py-20 rounded-3xl'> {/* Blue Background */}
    <div className='flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-6'>
      
      {/* Successful Projects */}
      <div className='flex flex-col items-center text-center'>
        <h1 className='font-SpaceGrotesk font-bold text-[#92DEED] text-5xl sm:text-6xl lg:text-7xl leading-[110%] mb-4'>
          10+
        </h1>
        <h2 className='font-Poppins font-semibold text-white text-lg sm:text-xl lg:text-2xl leading-[125%]'>
          Successful Projects
        </h2>
      </div>

      {/* Divider */}
      <div className='hidden lg:flex font-Poppins font-semibold text-2xl leading-[125%] text-[#92DEED]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="6" fill="#92DEED" />
        </svg>
      </div>

      {/* Satisfied Client */}
      <div className='flex flex-col items-center text-center'>
        <h1 className='font-SpaceGrotesk font-bold text-[#92DEED] text-5xl sm:text-6xl lg:text-7xl leading-[110%] mb-4'>
          98
        </h1>
        <h2 className='font-Poppins font-semibold text-white text-lg sm:text-xl lg:text-2xl leading-[125%]'>
          Satisfied Client
        </h2>
      </div>

      {/* Divider */}
      <div className='hidden lg:flex font-Poppins font-semibold text-2xl leading-[125%] text-[#92DEED]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="6" fill="#92DEED" />
        </svg>
      </div>

      {/* Handled Countries */}
      <div className='flex flex-col items-center text-center'>
        <h1 className='font-SpaceGrotesk font-bold text-[#92DEED] text-5xl sm:text-6xl lg:text-7xl leading-[110%] mb-4'>
          35+
        </h1>
        <h2 className='font-Poppins font-semibold text-white text-lg sm:text-xl lg:text-2xl leading-[125%]'>
          Handled Countries
        </h2>
      </div>

    </div>
  </div>
</div>


  )
}

export default Evidence