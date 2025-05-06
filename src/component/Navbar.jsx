import React, { useState } from 'react';
import { MdDoubleArrow, MdMenuOpen,MdAccountBalanceWallet } from "react-icons/md";
import { RiContactsBookFill, RiInboxArchiveFill  } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdSettings, IoIosContact } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import naija from '../assets/naija.svg'; 
import america from '../assets/america.jpg'
import vietnam from '../assets/vietnam.jpg'
import ghana from '../assets/ghana.jpg'




const Navbar = ({ setOPen, open }) => {
  const [dropOpen, setDropOpen] = useState(false);
  const [profileDrop, setProfileDrop] = useState(false)

  const handleProfile = () => {
    setProfileDrop(!profileDrop)
    setDropOpen(false)
  }

  const handleDrop = () => { 
    setDropOpen(!dropOpen)
    setProfileDrop(false)
   
  }

  return (
    <nav className="sticky w-full top-2 flex justify-between items-center py-2 bg-gray-800 rounded-md px-2 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]">
      <div className="flex space-x-6 items-center">
        <div onClick={() => setOPen(!open)}>
          {open ? (
            <MdMenuOpen className="text-blue-500 text-3xl bg-black p-1 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.1)] hover:bg-gray-500 rounded-full ease-in-out" />
          ) : (
            <MdDoubleArrow className="text-red-500 text-3xl bg-black p-1 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.1)] hover:bg-gray-500 rounded-full" />
          )}
        </div>
        <RiContactsBookFill className="text-blue-500 text-3xl bg-black p-1 rounded-full shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] hover:bg-gray-500" />
        <FaRegMessage className="text-blue-500 text-3xl bg-black p-1 rounded-full shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] hover:bg-gray-500" />
      </div>

      <div className="flex space-x-6 items-center">
        <IoMdSettings
          className="text-blue-500 text-3xl bg-black p-1 rounded-full shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] hover:bg-gray-500"
         
        />
        <img
          src={naija}
          alt="Naija Logo"
          className="w-8 h-8 bg-black rounded-full p-0 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]"
          onClick={handleDrop}
        />
        <IoIosContact className="text-blue-500 text-3xl bg-black p-1 rounded-full shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] hover:bg-gray-500" onClick={handleProfile}/>
      </div>

      {/* Dropdown */}
      <div
        className={`absolute top-16 right-5 bg-gray-700 rounded-md p-4 z-10 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] 
          transition-all duration-500 ease-in-out transform 
          ${dropOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
        `}
      >
     <ul className='space-y-3'>
      <li className='flex space-x-3 items-center'><img src={america}   className="w-6 h-6 bg-black rounded-full p-0 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]" alt="" />
      <h1 className='text-md text-white font-medium'>America</h1>
      </li>
      <li className='flex space-x-3 items-center'><img src={ghana}   className="w-6 h-6 bg-black rounded-full p-0 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]" alt="" />
      <h1 className='text-md text-white font-medium'>Ghana</h1>
      </li>
      <li className='flex space-x-3 items-center'><img src={vietnam}  className="w-6 h-6 bg-black rounded-full p-0 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.1)]" alt="" />
      <h1 className='text-md text-white font-medium'>Vietnam</h1>
      </li>
      <li className='flex space-x-3 items-center'><img src={naija}   className="w-6 h-6 bg-green-800 rounded-full shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]  "alt="" />
      <h1 className='text-md text-white font-medium'>Nigeria</h1>
      </li>
     </ul>
      </div>
      <div
        className={`absolute top-16 right-3 bg-gray-700 rounded-md p-4 z-10 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] 
         space-y-2 
          ${profileDrop ? 'block' : 'hidden'}
        `}
      >
     <div className='flex items-center space-x-2'>
     <IoIosContact className='h-7 w-7 text-white' />
     <h1 className='font-md text-white'>Profile</h1>
     </div>
     <div className='flex items-center space-x-2'>
     <MdAccountBalanceWallet className='h-7 w-7 text-white' />
     <h1 className='font-md text-white'>Account</h1>
     </div>
     <div className='flex items-center space-x-2'>
     <IoMdSettings className='h-7 w-7 text-white' />
     <h1 className='font-md text-white'>Settings</h1>
     </div>
     <div className='flex items-center space-x-2'>
     < RiInboxArchiveFill className='h-7 w-7 text-white' />
     <h1 className='font-md text-white'>Inbox</h1>
     </div>
     <div className='flex items-center space-x-2'>
     <TbLogout className='h-7 w-7 text-white'  />
     <h1 className='font-md text-white'>Logout</h1>
     </div>
   
      </div>

      
   
   
    </nav>
  );
};

export default Navbar;
