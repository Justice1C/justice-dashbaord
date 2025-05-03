import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg' 
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'

const LatestMedia = () => {
  return (
 
  
  <main className='bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] space-y-3 rounded-md p-4 h-[950px]'>
  
  <header className='flex justify-between items-center py-3'> 
    <h1 className='text-gray-400 text-sm'>Latest Media</h1>
  <CiMenuKebab className='text-white' />
  </header>
  <div className='mt-2 space-y-4'>
  <div className='shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]  rounded-md p-4'>
  <div className='flex items-center space-x-4'>
     <img src={image1} alt="Image 1" className='w-42 h-18 object-cover rounded-md shadow-lg' />
  <div className='text-gray-400'>
    <h4 className='font-bold text-sm '>Mary Beveridge</h4>
  <p className='text-sm'>Aug 01, 2022</p>
  </div>
  
  </div>
  <button className='bg-green-700 text-white px-4 py-2 rounded-md mt-2 hover:bg-green-600 transition duration-300 text-sm'>
   Published
  </button>
  </div>
  <div className='shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)] rounded-md p-4'>
  <div className='flex items-center space-x-4'>
     <img src={image2} alt="Image 2" className='w-42 h-18 object-cover rounded-md shadow-lg' />
  <div className='text-gray-400'>
    <h4 className='font-bold text-sm '>Mary Beveridge</h4>
  <p className='text-sm'>Aug 01, 2022</p>
  </div>
  
  </div>
  <button className='bg-yellow-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-green-600 transition duration-300 text-sm'>
   Published
  </button>
  </div>
  <div className='shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]  rounded-md p-4'>
  <div className='flex items-center space-x-4'>
     <img src={image3} alt="Image 3" className='w-42 h-18 object-cover rounded-md shadow-lg' />
  <div className='text-gray-400'>
    <h4 className='font-bold text-sm '>Mary Beveridge</h4>
  <p className='text-sm'>Aug 01, 2022</p>
  </div>
  
  </div>
  <button className='bg-blue-700 text-white px-4 py-2 rounded-md mt-2 hover:bg-green-600 transition duration-300 text-sm'>
   Published
  </button>
  </div>
  <div className='shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]  rounded-md p-4'>
  <div className='flex items-center space-x-4'>
     <img src={image4} alt="Image 4" className='w-42 h-18 object-cover rounded-md shadow-lg' />
  <div className='text-gray-400'>
    <h4 className='font-bold text-sm '>Mary Beveridge</h4>
  <p className='text-sm'>Aug 01, 2022</p>
  </div>
  
  </div>
  <button className='bg-yellow-700 text-white px-4 py-2 rounded-md mt-2 hover:bg-green-600 transition duration-300 text-sm'>
   Published
  </button>
  </div>
  <div className='shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]  rounded-md p-4'>
  <div className='flex items-center space-x-4'>
     <img src={image5} alt="Image 5" className='w-42 h-18 object-cover rounded-md shadow-lg' />
  <div className='text-gray-400'>
    <h4 className='font-bold text-sm '>Mary Beveridge</h4>
  <p className='text-sm'>Aug 01, 2022</p>
  </div>
  
  </div>
  <button className='bg-red-700 text-white px-4 py-2 rounded-md mt-2 hover:bg-green-600 transition duration-300 text-sm'>
   Published
  </button>
  </div>
  </div>
  
  </main>
  
  

  )
}

export default LatestMedia
