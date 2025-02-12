import React from 'react'
import { HiOutlineMinus } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";


const Question = ({question,answer}:{question:string,answer:string}) => {
    const [isOpen, setIsOpen] =React.useState(false)

    const textColor=isOpen?'text-[#92DEED]':'text-white'
    const borderOpacity= isOpen?'border-opacity-100':'border-opacity-30'

    return (
        <div className={` ${borderOpacity} ' flex  justify-between items-start border-b border-white pb-8 p-6'`} >


            <div className= ' flex flex-col gap-y-4 justify-start items-start w-[90%]'>
                <h1 className={`${textColor} '  text-[18px] sm:text-[24px] font-Poppins font-[400] leading-10'`}>{question}</h1>
                { isOpen && <h1 className=' text-white text-[16px] sm:text-[18px] font-Poppins font-[300]'>{answer}</h1>}

            </div>
            
               { isOpen? <HiOutlineMinus onClick={()=> setIsOpen(false)} className='text-white text-[24px] hover:cursor-pointer' /> :  <HiOutlinePlus onClick={()=> setIsOpen(true)} className='text-white text-[24px] hover:cursor-pointer' />}
               

        </div>
    )

}


const questions=[
    {
        question:"What services does Algonix offer??",
        answer:"Algonix offers a wide range of services, including software development, cyber security, and IT consulting."
    },
    {
        question:"Which IT solution is for my business?",
        answer:"Algonix offers a wide range of services, including software development, cyber security, and IT consulting."
    },
    {
        question:"How much do the services cost?",
        answer:"Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. Contact us to learn more."
    },
    {
        question:"How do I get started with the IT solutions?",
        answer:"Contact us to learn more about our services and how we can help your business. We will work with you to determine the best solution for your needs."
    },
   
    

]

const Faq = () => {
  return (
    <div className='flex flex-col md:flex-row gap-y-16 justify-between items-start w-[100%] pt-40' >


        <div  className='flex flex-col justify-between items-start h-[100%]  w-[80%] md:w-[30%]'>


            <h1 className="text-white font-Space text-[40px] sm:text-[50px] font-semibold">Got Any Questions?</h1>


            {/* Button */}

            <div className=" hover:cursor-pointer flex flex-row justify-between px-[5%] nomd:w-[40vw] nomd:h-[8vw] items-center w-[20vw] h-[4vw] rounded-[10px] mt-[3vw]   border-[1px] border-[white] bg-[#11112B]">
                <span className=" font-Poppins whitespace-nowrap  pr-8 text-white font-[600] nomd:text-[2.8vw] text-[1.3vw]">
                  Ask A  Question
                </span>
               
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="16"
                  viewBox="0 0 101 16"
                  fill="none"
                >
                  <path
                    d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9H100V7H0L0 9Z"
                    fill="white"
                  />
                </svg>
              </div>


        
        </div>

        {/* frequently asked questions */}

        <div className='flex flex-col w-[100%] gap-y-6 md:w-[50%]' >
           
            
                {questions.map((question,index)=><Question key={index} question={question.question} answer={question.answer} />)}
           
                
        </div>
        
    </div>
  )
}

export default Faq