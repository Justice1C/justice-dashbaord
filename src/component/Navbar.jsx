import React from 'react'
import { MdDoubleArrow } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
import { FaRegMessage} from "react-icons/fa6";
import { IoMdSettings, IoIosContact } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";


import naija from '../assets/naija.svg'; 

const Navbar = ({setOPen, open}) => {


  return (
     <nav className='sticky w-full top-2 flex justify-between items-center py-2  bg-gray-800 rounded-md px-2 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]  '>
              <div className='flex space-x-6 items-center'>
<div onClick={() => setOPen(!open)}>

{open?< MdMenuOpen className='text-blue-500 text-3xl  bg-black p-1 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.1)] hover:bg-gray-500 rounded-full ease-in-out' />: <MdDoubleArrow className='text-red-500 text-3xl  bg-black p-1 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.1)] hover:bg-gray-500 rounded-full ' />  }
                
</div>
                <RiContactsBookFill className='text-blue-500 text-3xl  bg-black p-1 rounded-full shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] hover:bg-gray-500' />
                <FaRegMessage className='text-blue-500 text-3xl  bg-black p-1 rounded-full shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] hover:bg-gray-500' />
              </div>
              <div className='flex space-x-6 items-center'> 
                 < IoMdSettings className='text-blue-500 text-3xl  bg-black p-1 rounded-full shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] hover:bg-gray-500' />
                <img src={naija} alt="Naija Logo" className='w-8 h-8 bg-black rounded-full p-0 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] ' />
              < IoIosContact className='text-blue-500 text-3xl bg-black p-1 rounded-full shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] hover:bg-gray-500' />
              </div>
            </nav>
  )
}

export default Navbar
