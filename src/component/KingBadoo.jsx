import React from 'react'
// import { IoIosContact } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import blackman from '../assets/blackman.jpg'
import { GiLoveMystery } from "react-icons/gi";
import { FaRegCommentDots } from "react-icons/fa";

const KingBadoo = () => {
  return (
     <main className=' space-y-3 rounded-md h-[1150px]'>
    <section className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] rounded-md' >
    <div className='px-4 py-2 '>

   
     <header className='flex justify-between items-center py-1 '> 
      <div className='flex space-x-3 items-center'>
      <img src={blackman}  alt="" className='h-10 w-10 rounded-full object-center' />
         <h1 className='text-gray-200 text-md font-bold'>King Badoo</h1>
      </div>
     
     <CiMenuKebab className='text-white' />
     </header> 
     </div>
     <div className='mt-2 space-y-4 px-1'>
     
    <img src={blackman} className='w-full shadow-[0_0_2px_2px_,inset_0_0_2px_2px_rgba(0,0,0.1)] rounded-sm' alt="" />
    
     
  

<div className='p-4 space-y-3 mt-2'>
  <h1 className='font-bold text-4xl  text-white '>Street Uti</h1>
  <p className='text-gray-200 text-sm '>Aug 01, 2025</p>
  <p className='text-gray-200 text-sm'>Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.</p>
<div className='flex items-center space-x-10 font-bold'>
  <div className='flex space-x-2 items-center'>
  <GiLoveMystery className='text-red-700 text-xl font-bold' />
    <p className='text-gray-200 text-sm'>213 Likes</p>
  </div>
  <div className='flex items-center space-x-2'>
  <FaRegCommentDots className='text-white font-bold'/>
    <p className='text-gray-200 text-sm'>123 comments</p>
  </div>
</div>

</div> 
  </div>
       </section> 

       <section className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] py-6 px-4 rounded-md' >
   <div className='mb-2'>
    <h1  className='font-bold text-2xl  text-white '>Task Status</h1>
    <p className='text-gray-200 text-sm'>On Going</p>
   </div>
     
     <div className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] w-full py-4 px-2 rounded-md '>
      <section className='py-2'>
    <div className='flex justify-between'>
      <p className='text-gray-200 text-sm'>
      Sketch File
      </p>
      <p className='text-gray-200 text-sm'>
      4 weeks
      </p>
    </div>
   <div className="w-full bg-gray-300 rounded-sm h-2">
  <div className="bg-blue-500 h-2 rounded-l-sm w-[70%]"></div>
</div>
</section>
<section className='py-2'>
    <div className='flex justify-between'>
      <p className='text-gray-200 text-sm'>
      Adobe XD File
      </p>
      <p className='text-gray-200 text-sm'>
      3 weeks
      </p>
    </div>
   <div className="w-full bg-gray-300 rounded-sm h-2">
  <div className="bg-blue-500 h-2 rounded-l-sm w-[30%]"></div>
</div>
</section>
<section className='py-2'>
    <div className='flex justify-between'>
      <p className='text-gray-200 text-sm'>
      UI Implementation
      </p>
      <p className='text-gray-200 text-sm'>
      6 weeks
      </p>
    </div>
   <div className="w-full bg-gray-300 rounded-sm h-2">
  <div className="bg-blue-500 h-2 rounded-l-sm w-[80%]"></div>
</div>
</section>
</div>
<div className='my-2'>
    <h1  className='font-bold text-2xl  text-white '>Upcoming</h1>
   </div>

   <div className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] w-full py-4 px-2  rounded-md '>
      <section className='py-2'>
    <div className='flex justify-between'>
      <p className='text-gray-200 text-sm'>
      Upgrade Vuetify
      </p>
      <p className='text-gray-200 text-sm'>
      5 weeks
      </p>
    </div>
   <div className="w-full bg-gray-300 rounded-sm h-2">
  <div className="bg-blue-500 h-2 rounded-l-sm w-[40%]"></div>
</div>
</section>
<section className='py-2'>
    <div className='flex justify-between'>
      <p className='text-gray-200 text-sm'>
      Update Vue.js Version
      </p>
      <p className='text-gray-200 text-sm'>
      3 weeks
      </p>
    </div>
   <div className="w-full bg-gray-300 rounded-sm h-2">
  <div className="bg-blue-500 h-2 rounded-l-sm w-[20%]"></div>
</div>
</section>
<section className='py-2'>
    <div className='flex justify-between'>
      <p className='text-gray-200 text-sm'>
      Deployment
      </p>
      <p className='text-gray-200 text-sm'>
      2 weeks
      </p>
    </div>
   <div className="w-full bg-gray-300 rounded-sm h-2">
  <div className="bg-blue-500 h-2 rounded-l-sm w-[60%]"></div>
</div>
</section>
</div>
  
       </section> 


     </main>
  )
}

export default KingBadoo
