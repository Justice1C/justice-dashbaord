import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChartToggle = () => {
  const [view, setView] = useState('monthly');

  const monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const weeklyLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getData = (labels) => ({
    labels,
    datasets: [
      {
        label: 'Asia',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
      },
      {
        label: 'Africa',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        fill: true,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        tension: 0.4,
      },
      {
        label: 'Europe',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        fill: true,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.4,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className='container m-auto h-full w-full '>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }} className='space-x-3'>
        <button onClick={() => setView('monthly')} style={{ marginRight: '10px' }} className='bg-blue-300 p-2 rounded-sm'>
          Monthly
        </button>
        <button onClick={() => setView('weekly')} className='bg-blue-300 p-2 rounded-sm'>
          Weekly
        </button>
      </div>

      <Line className='mt-20'
        data={getData(view === 'monthly' ? monthlyLabels : weeklyLabels)}
        options={chartOptions}
      />
    </div>
  );
};

export default AreaChartToggle;
