import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import blackman from '../assets/blackman.jpg'

const Tickets = () => {
  return (
  <main className=' space-y-3 rounded-md  h-[950px]'>
   
   <section className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] rounded-md px-4 py-2' >
   <header className=' py-3'> 
      <h1 className='text-gray-400 text-[19px]'>Tickets</h1>
  <div className='flex space-x-30 py-4'>
    <button className='text-gray-400 text-[10px] bg-blue-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] px-2 py-1 rounded-full'>3 ATIVE TASK</button>
    <button className='text-gray-400 text-[10px] bg-gray-800 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] px-2 py-1 rounded-full'>2 COMPLETED TASK</button>
  </div>
    </header>

    <h1 className='text-gray-400 text-[13px]  bg-gray-800 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] px-2 py-0.5 rounded-sm'>Add New Tickets</h1>


    <div className=' bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] mt-4 rounded'>
      <div className='flex justify-between p-3'>
  
  <div className='flex space-x-3'>

 
    <input
  type="checkbox"
  className=" w-3 h-3 rounded 
    bg-gray-600 
    checked:bg-blue-500 
    shadow-[inset_0_0_10px_10px_rgba(0,0,0,0.5)]"
/>

<h2 className='text-gray-300 font-bold'>
[PRE-111] Logo Making </h2>
 </div>
  <CiMenuKebab className='text-white' />
    </div>
 <div className='flex py-4'>
  <div className='border-l-4 border-pink-500 mr-8'></div>
      <p className='text-sm text-gray-300'>Culpa sint aliqua adipisicing officia aliquip excepteur occaecat dolor <br /> velit culpa ullamco.</p>
    </div>
    <button className='rounded-full text-md bg-pink-500  py-1 px-3 text-white text-sm ml-10 mb-3'>UX/UI</button>
    </div>
    <div className=' bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] mt-4 rounded'>
      <div className='flex justify-between p-3'>
  
  <div className='flex space-x-3'>

 
    <input
  type="checkbox"
  className=" w-3 h-3 rounded 
    bg-gray-600 
    checked:bg-blue-500 
    shadow-[inset_0_0_10px_10px_rgba(0,0,0,0.5)]"
/>

<h2 className='text-gray-300 font-bold'>

[UI-145] WireFrames and Design </h2>
 </div>
  <CiMenuKebab className='text-white' />
    </div>
 <div className='flex py-4'>
  <div className='border-l-4 border-blue-500 mr-8'></div>
      <p className='text-sm text-gray-300'>Minim fugiat labore est enim consectetur anim commodo irure reprehenderit est.</p>
    </div>
    <button className='rounded-full text-md bg-blue-500  py-1 px-3 text-white text-sm ml-10 mb-3'>UX/UI</button>
    </div>
    <div className=' bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] mt-4 rounded'>
      <div className='flex justify-between p-3'>
  
  <div className='flex space-x-3'>

 
    <input
  type="checkbox"
  className=" w-3 h-3 rounded 
    bg-gray-600 
    checked:bg-blue-500 
    shadow-[inset_0_0_10px_10px_rgba(0,0,0,0.5)]"
/>

<h2 className='text-gray-300 font-bold'>

[SV-180] Gather API requirement  </h2>
 </div>
  <CiMenuKebab className='text-white' />
    </div>
 <div className='flex py-4'>
  <div className='border-l-4 border-gray-400 mr-8'></div>
      <p className='text-sm text-gray-300'>Officia consectetur consectetur adipisicing consectetur commodo <br /> enim tempor nulla reprehenderit occaecat. </p>
    </div>
    <button className='rounded-full text-md bg-gray-400  py-1 px-3 text-white text-sm ml-10 mb-3'>UX/UI</button>
    </div>
   
   
         </section> 
  
         <section className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] rounded-md px-4 py-2' >
<h1 className='text-gray-400 text-[25px] pt-2'>
  Members
</h1>
<input type="text" className='w-full border-1 placeholder:text-gray-500 rounded-[3px] border-gray-300 px-2 shadow-[inset_0_0_10px_10px_rgba(0,0,0,0.5)]' placeholder='Search...'/>

<div className='flex justify-between items-center py-2'>
    <div className='flex space-x-5 items-center'>
      <img src={blackman} alt=""  className='w-12 h-12 rounded-full'/>

  <div>
<p className='text-gray-300 font-bold text-md'>Mary Jane</p>
<p className='text-gray-500 text-sm mt-[-5px]'>Designer</p>
  </div>
    </div>
  <FaPlus className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] rounded-full text-2xl  text-green-600 p-1'/>
</div>
<div className='flex justify-between items-center py-2'>
    <div className='flex space-x-5 items-center'>
      <img src={blackman} alt=""  className='w-12 h-12 rounded-full'/>

  <div>
<p className='text-gray-300 font-bold text-md'>Justice Chima</p>
<p className='text-gray-500 text-sm mt-[-5px]'>Programmer</p>
  </div>
    </div>
  <FaPlus className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] rounded-full text-2xl  text-green-600 p-1'/>
</div>
<div className='flex justify-between items-center py-2'>
    <div className='flex space-x-5 items-center'>
      <img src={blackman} alt=""  className='w-12 h-12 rounded-full'/>

  <div>
<p className='text-gray-300 font-bold text-md'>Baba Abel</p>
<p className='text-gray-500 text-sm mt-[-5px]'>Senior Developer</p>
  </div>
    </div>
  <FaPlus className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] rounded-full text-2xl  text-green-600 p-1'/>
</div>
<div className='flex justify-between items-center py-2'>
    <div className='flex space-x-5 items-center'>
      <img src={blackman} alt=""  className='w-12 h-12 rounded-full'/>

  <div>
<p className='text-gray-300 font-bold text-md'>John Deo</p>
<p className='text-gray-500 text-sm mt-[-5px]'>Teacher</p>
  </div>
    </div>
  <FaPlus className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] rounded-full text-2xl  text-green-600 p-1'/>
</div>
<div className='flex justify-between items-center py-2'>
    <div className='flex space-x-5 items-center'>
      <img src={blackman} alt=""  className='w-12 h-12 rounded-full'/>

  <div>
<p className='text-gray-300 font-bold text-md'>Evelyn John</p>
<p className='text-gray-500 text-sm mt-[-5px]'>Actress</p>
  </div>
    </div>
  <FaPlus className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] rounded-full text-2xl  text-green-600 p-1'/>
</div>
   
         </section> 
   </main>
  )
}

export default Tickets
