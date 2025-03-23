import React from 'react'
import { RiPhoneFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div className='relative overflow-hidden bg-[#11112B] pb-48 rounded-[25px] '>

    
    <div  className=' z-10 p-[10%] w-[100%] flex flex-col gap-y-4 justify-center items-start ' >
    <p className=' font-Poppins text-[28px] font-[600] text-white ' >Contacts</p>

    

    {/* constacts */}

    <div className=' z-10 flex flex-col justify-center gap-y-4 w-[100%] items-center relative' >

    {/* <div className='w-5 h-5 bg-white  top-[15%] right-[15%]' >

</div> */}

        <div className='flex items-center justify-start gap-x-4  w-full '>
            <div className='flex flex-col justify-center items-center p-1 bg-[#92DEED] rounded-full'>
            <RiPhoneFill className='text-[#11112B] text-[20px]  ' />
           

            </div>
            <p className=' font-Poppins text-[20px] text-white font-[300] ' >+61 234 - 567 - 890</p>

        </div>

        <div className='flex items-center justify-start gap-x-4  w-full '>
            <div className='flex flex-col justify-center items-center p-1 bg-[#92DEED] rounded-full'>
            <MdOutlineMail className='text-[#11112B] text-[18px]  ' />
           

            </div>
            <p className=' font-Poppins text-[18px] text-white font-[300] ' >

            sales@algonixtechnologies.com
            </p>
                </div>

                <div className='flex items-center justify-start gap-x-4  w-full '>
            <div className='flex flex-col justify-center items-center p-1 bg-[#92DEED] rounded-full'>
            <GrLocation className='text-[#11112B] text-[18px]  ' />
           

            </div>
            <p className=' font-Poppins text-[18px] text-white font-[300] ' >
            Regus - Sydney Circular Quay, Level 17, 9 Castlereagh Street, Sydney, NSW 2000, Australia
            </p>
                </div>
      
    </div>



    

  </div>


  <div className='absolute top-[12%] bg-[#11112B]  z-0' >
    <svg xmlns="http://www.w3.org/2000/svg" className='absolute opacity-60 top-0' width="550" height="500" viewBox="0 0 550 500" fill="none">
  <path d="M1341.12 156.207C1330.81 62.8142 1245.23 3.33944 1154.4 1.13274C1063.57 -1.07396 970.315 43.3778 888.117 99.6689C805.919 155.96 730.918 224.635 648.845 281.139C566.772 337.642 473.767 382.614 382.806 381.231C272.489 379.544 183.685 311.272 83.2339 276.098C-75.0964 220.628 -269.524 251.963 -427.293 358.386C-508.622 413.236 -587.275 505.063 -576.43 596.936" stroke="white" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='absolute opacity-60 top-4' width="550" height="485" viewBox="0 0 550 485" fill="none">
  <path d="M1352.16 155.753C1341.85 62.3605 1256.27 2.88582 1165.44 0.679125C1074.61 -1.52757 981.356 42.9242 899.158 99.2153C816.96 155.506 741.959 224.181 659.886 280.685C577.813 337.188 484.808 382.161 393.847 380.777C283.53 379.09 194.726 310.819 94.2749 275.644C-64.0554 220.175 -258.483 251.509 -416.252 357.932C-497.581 412.782 -576.234 504.61 -565.389 596.482" stroke="white" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='absolute opacity-60 top-8' width="550" height="467" viewBox="0 0 550 467" fill="none">
  <path d="M1363.2 156.321C1352.9 62.9289 1267.31 3.45422 1176.49 1.24752C1085.66 -0.959186 992.401 43.4926 910.203 99.7837C828.005 156.075 753.004 224.75 670.931 281.253C588.858 337.757 495.853 382.729 404.891 381.346C294.575 379.659 205.771 311.387 105.32 276.213C-53.0105 220.743 -247.438 252.078 -405.208 358.501C-486.537 413.35 -565.189 505.178 -554.344 597.051" stroke="white" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='absolute opacity-60 top-12' width="550" height="448" viewBox="0 0 550 448" fill="none">
  <path d="M1374.23 155.898C1363.92 62.5058 1278.34 3.03109 1187.51 0.824388C1096.68 -1.38231 1003.42 43.0694 921.227 99.3605C839.029 155.652 764.027 224.327 681.954 280.83C599.881 337.334 506.877 382.306 415.915 380.923C305.599 379.236 216.794 310.964 116.343 275.79C-41.987 220.32 -236.415 251.655 -394.184 358.078C-475.513 412.927 -554.166 504.755 -543.321 596.628" stroke="white" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='absolute opacity-60 top-16' width="550" height="448" viewBox="0 0 550 448" fill="none">
  <path d="M1374.23 155.898C1363.92 62.5058 1278.34 3.03109 1187.51 0.824388C1096.68 -1.38231 1003.42 43.0694 921.227 99.3605C839.029 155.652 764.027 224.327 681.954 280.83C599.881 337.334 506.877 382.306 415.915 380.923C305.599 379.236 216.794 310.964 116.343 275.79C-41.987 220.32 -236.415 251.655 -394.184 358.078C-475.513 412.927 -554.166 504.755 -543.321 596.628" stroke="white" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='absolute opacity-60 top-20' width="550" height="430" viewBox="0 0 550 430" fill="none">
  <path d="M1385.27 156.467C1374.97 63.0742 1289.39 3.59943 1198.56 1.39273C1107.73 -0.813977 1014.47 43.6378 932.274 99.9289C850.076 156.22 775.074 224.895 693.001 281.399C610.928 337.902 517.924 382.874 426.962 381.491C316.645 379.804 227.841 311.532 127.39 276.358C-30.9402 220.888 -225.368 252.223 -383.137 358.646C-464.466 413.496 -543.119 505.323 -532.274 597.196" stroke="white" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='absolute opacity-60 top-24' width="550" height="411" viewBox="0 0 550 411" fill="none">
  <path d="M1396.31 156.013C1386.01 62.6203 1300.42 3.14563 1209.59 0.938923C1118.76 -1.26778 1025.51 43.184 943.313 99.4751C861.115 155.766 786.113 224.441 704.04 280.945C621.967 337.448 528.963 382.421 438.001 381.037C327.685 379.35 238.88 311.078 138.429 275.904C-19.9011 220.434 -214.329 251.769 -372.098 358.192C-453.427 413.042 -532.08 504.869 -521.235 596.742" stroke="white" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='absolute opacity-60 top-28' width="550" height="374" viewBox="0 0 550 374" fill="none">
  <path d="M1418.38 156.158C1408.07 62.7653 1322.49 3.29061 1231.66 1.08391C1140.83 -1.12279 1047.58 43.329 965.381 99.6201C883.183 155.911 808.182 224.586 726.109 281.09C644.036 337.593 551.031 382.566 460.069 381.182C349.753 379.495 260.949 311.223 160.498 276.049C2.16723 220.579 -192.261 251.914 -350.03 358.337C-431.359 413.187 -510.011 505.014 -499.166 596.887" stroke="white" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='absolute opacity-60 top-32' width="550" height="355" viewBox="0 0 550 355" fill="none">
  <path d="M1429.43 155.726C1419.12 62.3334 1333.54 2.85878 1242.71 0.65208C1151.88 -1.55462 1058.63 42.8971 976.428 99.1882C894.23 155.479 819.228 224.154 737.155 280.658C655.082 337.161 562.078 382.134 471.116 380.75C360.8 379.063 271.996 310.791 171.544 275.617C13.2142 220.147 -181.214 251.482 -338.983 357.905C-420.312 412.755 -498.965 504.582 -488.119 596.455" stroke="white" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='absolute opacity-60 top-36' width="550" height="337" viewBox="0 0 550 337" fill="none">
  <path d="M1440.47 156.294C1430.17 62.9016 1344.58 3.42684 1253.75 1.22014C1162.93 -0.986558 1069.67 43.4652 987.473 99.7563C905.275 156.047 830.273 224.723 748.2 281.226C666.127 337.729 573.123 382.702 482.161 381.318C371.845 379.631 283.04 311.36 182.589 276.185C24.259 220.716 -170.169 252.05 -327.938 358.473C-409.267 413.323 -487.92 505.151 -477.075 597.024" stroke="white" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>

     {/* Logo */}
    <div className='px-10'>
    <svg xmlns="http://www.w3.org/2000/svg" width="176" height="28" viewBox="0 0 176 28" fill="none">
  <path d="M3.67289 28L0 0H5.22988L7.94463 24.32H8.66323L12.1764 0H21.2788L24.792 24.32H25.5106L28.2254 0H33.4553L29.7824 28H20.68L17.0869 3.12H16.3683L12.7753 28H3.67289Z" fill="white"/>
  <path d="M34.6483 28L41.994 0H51.1763L58.5221 28H53.0926L51.5755 21.84H41.5948L40.0778 28H34.6483ZM42.8324 16.96H50.3379L46.9445 3.32H46.2259L42.8324 16.96Z" fill="white"/>
  <path d="M65.2247 28L58.1185 0H63.548L69.4565 24.6H70.0154L75.924 0H81.3535L74.2473 28H65.2247Z" fill="white"/>
  <path d="M84.7136 28V0H102.679V4.8H89.9834V11.48H101.561V16.28H89.9834V23.2H102.918V28H84.7136Z" fill="white"/>
  <path d="M108.031 28V0H113.101L124.519 26.48H124.998V0H127.553V28H122.483L111.065 1.48H110.586V28H108.031Z" fill="white"/>
  <path d="M134.425 28V0H151.313V2.32H136.981V12.8H150.195V15.12H136.981V25.68H151.472V28H134.425Z" fill="white"/>
  <path d="M164.103 28V2.32H154.761V0H176V2.32H166.658V28H164.103Z" fill="white"/>
</svg>
    </div>

    {/* image */}

    <div style={{backgroundImage:`url('/images/blog/contact-img5.png')`,backgroundSize:'cover'}} className='absolute bottom-4 right-4 z-20 w-[70%] h-[50%]' >

    </div>
    


  </div>
  )
}

export default Contact