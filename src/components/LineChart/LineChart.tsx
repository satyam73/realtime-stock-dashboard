import React from 'react';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  LineController,
} from 'chart.js';
import { LineChartProps } from './lineChart.types';
import { time } from 'console';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  LineController,
  PointElement,
  Title,
  Tooltip
);
ChartJS.defaults.font.size = 16;
ChartJS.defaults.font.family = 'Montserrat';

function LineChart({ timeData, priceData }: LineChartProps) {
  const data = {
    labels: timeData,
    datasets: [
      {
        label: 'First dataset',
        data: priceData,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  return (
    <div>
      <Line data={data} />
    </div>
  );
}

export default LineChart;
