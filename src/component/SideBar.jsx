import React from 'react'

const SideBar = ({open}) => {
  return (
    <div className={`
      ${open ? 'w-[300px]' : 'w-[30px]'} 
      transition-all duration-700 ease-in-out 
      bg-gray-800 
      shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]
    `}>
    </div>
  )
}

export default SideBar
