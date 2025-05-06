import React, {useState} from 'react'
import Main from './component/Main'
import SideBar from './component/SideBar'

import './App.css'

function App() {
  const [open, setOPen] = useState(false)

  return (
    <>
<div className='bg-gray-900 flex h-full '>
   <SideBar open={open} />
    <Main setOPen={setOPen} open={open}/>
    </div>
    </>
  )
}

export default App
