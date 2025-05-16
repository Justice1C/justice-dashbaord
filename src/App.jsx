import React, { useState } from 'react';
import Main from './component/Main';
import SideBar from './component/SideBar';

import './App.css';

function App() {
  const [open, setOPen] = useState(false);

  return (
    <>
      <div className='bg-gray-900 flex h-full w-full overflow-hidden'>
        {/* Sidebar */}
        <div className='border-r border-gray-700'>
          <SideBar open={open} />
        </div>

        {/* Main Content */}
        <div className=''>
          <Main setOPen={setOPen} open={open} />
        </div>
      </div>
    </>
  );
}

export default App;