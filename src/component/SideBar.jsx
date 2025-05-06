import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiContactsBookFill } from "react-icons/ri";
import { IoChatboxEllipses,  IoColorPalette } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { IoHelpCircle } from "react-icons/io5";
import { TbTypographyOff } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";


const SideBar = ({open}) => {
  return (
    <div className={`
      ${open ? 'w-[300px]' : 'w-[50px]'} 
      transition-all duration-700 ease-in-out 
      bg-gray-800 
      shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] px-2 py-2 scroll-auto 
    `}>

<div className='flex items-center space-x-5  bg-gray-800 
      shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] '>
<h1 className='text-4xl font-extrabold p-1'>J</h1>
  <h2 className='text-blue-500 overflow-hidden truncate  '>

Vuse Admin
</h2>
  <hr />
</div>
<ul className='overflow-hidden'> 
        <li className='py-2 px-1  mt-4'>
          <a href="" className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
         <MdOutlineSpaceDashboard className='text-white text-xl'/>
         <span className='truncate text-sm text-white '>Dashboard</span>  
         </div>
         <IoIosArrowDown className='truncate  text-white ' />
          </a>
          </li>
          <li className='py-2 px-1 text-blue-600 bg-gray-800 shadow-[inset_0_0_10px_4px_rgba(0,0,0,0.5)] rounded-full '>
          <a href="" className='flex items-center justify-between'>
            <div className='flex space-x-4 items-center'>
        <h2 className=''>OP</h2>
         <span className='truncate text-sm  '>Operational</span>  
         </div>
          </a>
          </li>
          <li className='py-1 px-1 text-white'>
          <a href="" className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
            <h2 className=''>AN</h2>
         <span className='truncate text-sm text-white '>Analytical</span>  
         </div>
          </a>
          </li>
          <li className='py-2 px-1 text-white'>
          <a href="" className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
            <h2 className='text-[10px]'>App</h2>
         </div>
          </a>
          </li>
          <li className='py-2 px-1 '>
          <a href="" className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
         <RiContactsBookFill className='text-white text-xl'/>
         <span className='truncate text-sm text-white '>Contact</span>  
         </div>
          </a>
          </li>
          <li className='py-2 px-1 '>
          <a href="" className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
         <IoChatboxEllipses  className='text-white text-xl'/>
         <span className='truncate text-sm text-white '>Chat</span>  
         </div>
          </a>
          </li>
          <h4 className='truncate text-[10px] text-white px-1 py-1'>Style & User Interface</h4>
          <li className='py-2 px-1 '>
          <a href="" className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
         < IoColorPalette  className='text-white text-xl'/>
         <span className='truncate text-sm text-white '>Colour</span>  
         </div>
          </a>
          </li>
          <li className='py-2 px-1 '>
          <a href="" className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
         <   FaRegImage  className='text-white text-xl'/>
         <span className='truncate text-sm text-white '>Icon</span>  
         </div>
          </a>
          </li>
          <li className='py-2 px-1 '>
          <a href="" className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
         <  IoHelpCircle   className='text-white text-xl'/>
         <span className='truncate text-sm text-white '>Helper</span>  
         </div>
          </a>
          </li>
          <li className='py-2 px-1 '>
          <a href="" className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
         < IoHelpCircle  className='text-white text-xl'/>
         <span className='truncate text-sm text-white '>Border Radius</span>  
         </div>
         <h4 className='truncate text-[10px] text-white px-2 py-1 bg-blue-600 rounded-full'>New</h4>
          </a>
          </li>
          <li className='py-2 px-1 '>
          <a href="" className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
         < TbTypographyOff  className='text-white text-xl'/>
         <span className='truncate text-sm text-white '>Text & Typography</span>  
         </div>
         <h4 className='truncate text-[10px] text-white px-2 py-1 bg-blue-600 rounded-full'>New</h4>
          </a>
          </li>
          <li className='py-2 px-1 '>
          <a href="" className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
         < FaPlay  className='text-white text-xl'/>
         <span className='truncate text-sm text-white '>Motion</span>  
         </div>
          </a>
          </li>
          <li className='py-1 px-1 text-white'>
          <a href="" className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
            <h2 className=''>PR</h2>
         <span className='truncate text-sm text-white '>Programmatic Scrolling</span>  
         </div>
          </a>
          </li>
          <li className='py-2 px-1 '>
          <a href="" className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
         < FaPlay  className='text-white text-xl'/>
         <span className='truncate text-sm text-white '>Motion</span>  
         </div>
          </a>
          </li>
      </ul>
    </div>
  )
}

export default SideBar
