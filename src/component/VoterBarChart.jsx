import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VoterBarChart = () => {
  const [view, setView] = useState('monthly');

  const monthlyLabels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const weeklyLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const generateData = (labels) => ({
    labels,
    datasets: [
      {
        label: 'Registered',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Voted',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of People',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setView('monthly')}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Monthly
        </button>
        <button
          onClick={() => setView('weekly')}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Weekly
        </button>
      </div>

      <div style={{ height: '400px' }}>
        <Bar
          data={generateData(view === 'monthly' ? monthlyLabels : weeklyLabels)}
          options={options}
        />
      </div>
    </div>
  );
};

export default VoterBarChart;
