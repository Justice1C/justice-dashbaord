import React from 'react';
import './Main.css'; // Adjust the path based on your file structure
import LatestMedia from './LatestMedia';
import Navbar from './Navbar';
import InfoSection from './InfoSection';
import KingBadoo from './KingBadoo';
import Tickets from './Tickets';
import Footer from './Footer'


const Main = ({setOPen, open }) => {
  
  return (
    <div className=' relative mx-5 w-full '>
    <Navbar setOPen={setOPen} open={open}/>
      
      <main>

<InfoSection />

<section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>

<div className='bg-gray-700 shadow-2xl rounded-md p-4'>

</div>
<div className='bg-gray-700 shadow-2xl rounded-md p-4'>

</div>

</section>

<section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 h-[100%]'>

<LatestMedia />
<KingBadoo />
<Tickets />

</section>

<Footer />
      </main>
    </div>
  );
};

export default Main;