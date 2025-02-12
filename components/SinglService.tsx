import React from 'react'
import { AiOutlineSecurityScan } from 'react-icons/ai'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
type Props={
    
    cssStyle:any,
    content:string,
    child: React.ReactNode
}
    const SinglService = ({cssStyle,content,child}:Props) => {
      

  return (
    <div className={`nomd:w-[90%] p-8 w-[25vw] bg-gradient-to-t from-white  to-white-10 col-span-1 nomd:space-y-14 flex-shrink-0  rounded-[25px] border border-solid  backdrop-blur-md`}>
           <div className="flex flex-row justify-between items-center">
             {child}
              <HiOutlineArrowSmRight className={`text-[${cssStyle.textColor}] text-[4.5vw]`} />
            </div>

            <div  className={`text-[${cssStyle.textColor}]  flex flex-col text-[3vw]  font-Space `} >
              <span>{content.split(' ')[0]}</span>
              <span>{content.split(' ')[1]}</span>
            </div>
          </div>
    
        
  )
}

export default SinglService