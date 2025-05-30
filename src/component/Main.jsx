import React from 'react';
import './Main.css';
import LatestMedia from './LatestMedia';
import Navbar from './Navbar';
import InfoSection from './InfoSection';
import KingBadoo from './KingBadoo';
import Tickets from './Tickets';
import Footer from './Footer';
import VoterBarChart from './VoterBarChart';

import 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import AreaChartToggle from './AreaChartToggle';

const Main = ({ setOPen, open }) => {
  return (
    <div className=' px-2 relative  h-screen w- overflow-y-auto overflow-x-hidden bg-gray-900 ml-5'>
      <Navbar setOPen={setOPen} open={open} className='z-1' />
      <main className='bg-gray-900 w-full overflow-y-auto'>
        <InfoSection />
        
        {/* First Section */}
        <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4'>
          <div className='rounded-md pt-5 pb-3 pl-2 pr-2 bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]'>
            <AreaChartToggle />
          </div>
          <div className='rounded-md p-4 bg-gray-700 shadow-[0_0_5px_6px_black,inset_0_0_10px_4px_rgba(0,0,0,0.5)]'>
            <VoterBarChart />
          </div>
        </section>

        {/* Second Section */}
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4'>
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