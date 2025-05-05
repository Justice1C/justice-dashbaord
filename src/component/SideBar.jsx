import React from 'react'
import { SiJustgiving } from "react-icons/si";

const SideBar = ({open}) => {
  return (
    <div className={`
      ${open ? 'w-[300px]' : 'w-[50px]'} 
      transition-all duration-700 ease-in-out 
      bg-gray-800 
      shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] px-2 py-2
    `}>

<div className='flex items-center space-x-2'>
  <div>
    
<SiJustgiving className='text-blue-600 text-4xl p-1 rounded-full  bg-gray-800 
      shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] '/>
  </div>
  <div>


<h1 className='text-blue-700 text-xl'>Vuse Admin</h1>
  </div>
</div>
Lorem, ipsum.
    </div>
  )
}

export default SideBar
