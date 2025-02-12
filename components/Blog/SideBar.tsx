import React from 'react'
import Search from './Search'
import Category from './Category'
import LatestPost from './LatestPost'
import Contact from './Contact'

const SideBar = () => {
  return (
    <div className='flex flex-col  w-[100%] sm:w-[90%] md:w-[35%] justify-start items-center gap-y-5 ' >
        {/* <Search/> */}
        <Category/>
        <LatestPost/>
        <Contact/>
        
        
    </div>
  )
}

export default SideBar