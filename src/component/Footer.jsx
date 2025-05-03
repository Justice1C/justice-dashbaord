import React from 'react'
import { GiLoveMystery } from "react-icons/gi";

const Footer = () => {
  return (
    <div className='flex justify-between bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] px-3 py-3 rounded-t-sm'>
      <h1 className='text-white text-sm'><span className='text-[19px]'>COPYRIGHT </span> &#64;2025 <span className='underline text-blue-600'>justice</span></h1>
      <div className='flex items-center space-x-3 text-gray-300'>
        <h1>Handcrafted by</h1>
      <GiLoveMystery className='text-red-700'/>

      </div>
    </div>
  )
}

export default Footer
