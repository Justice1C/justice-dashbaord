import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { IoMdContacts  } from "react-icons/io";
import { PiBackpackFill } from "react-icons/pi";
import { GoArrowSwitch } from "react-icons/go";
import { TfiBarChart } from "react-icons/tfi";


const InfoSection = () => {
  return (
 <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
 
 <div className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]  rounded-md p-4'>
   <h4 className='text-white text-2xl'>Sales</h4>
   <div className='
   flex items-center justify-between mt-4'>
     <div>
       <h1 className='text-white text-4xl'>350k</h1>
       <div className='flex items-center space-x-1 text-blue-600'>
       <FaArrowUpLong />
         <h3>+ 4.35%</h3>
       </div>
         <p className='text-[15px] text-amber-50'>Since last month</p>
     </div>
     
     <PiBackpackFill  className='text-4xl  text-blue-600 bg-black rounded-full p-1 font-bold' />
 
   </div>
 
 </div>
 
 <div className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] rounded-md p-4'>
   <h4 className='text-white text-2xl'>New Users</h4>
   <div className='
   flex items-center justify-between mt-4'>
     <div>
       <h1 className='text-white text-4xl'>350k</h1>
       <div className='flex items-center space-x-1 text-blue-600'>
       <FaArrowUpLong/>
         <h3>+ 4.35%</h3>
       </div>
         <p className='text-[15px] text-amber-50'>Since last month</p>
     </div>
     
     <IoMdContacts className='text-4xl text-yellow-500 bg-black rounded-full p-1 font-bold' />
 
   </div>
 
 </div>
 
 <div className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]  rounded-md p-4'>
   <h4 className='text-white text-2xl'>Traffic</h4>
   <div className='
   flex items-center justify-between mt-4'>
     <div>
       <h1 className='text-white text-4xl'>350k</h1>
       <div className='flex items-center space-x-1 text-blue-600'>
       <FaArrowUpLong />
         <h3>+ 4.35%</h3>
       </div>
         <p className='text-[15px] text-amber-50'>Since last month</p>
     </div>
     
     < GoArrowSwitch className='text-4xl text-red-600 bg-black rounded-full p-1 font-bold' />
 
   </div>
 
 </div>
 
 <div className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]  rounded-md p-4'>
   <h4 className='text-white text-2xl'>Performance</h4>
   <div className='
   flex items-center justify-between mt-4'>
     <div>
       <h1 className='text-white text-4xl'>350k</h1>
       <div className='flex items-center space-x-1 text-blue-600'>
       <FaArrowUpLong />
         <h3>+ 4.35%</h3>
       </div>
         <p className='text-[15px] text-amber-50'>Since last month</p>
     </div>
     
     <TfiBarChart   className='text-4xl text-blue-600 bg-black rounded-full p-1 font-bold' />
 
   </div>
 
 </div>
 
 </section>
  )
}

export default InfoSection
