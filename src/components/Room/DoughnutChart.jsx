/* eslint-disable react/prop-types */
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(
  ChartDataLabels,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

const data = {
  labels: ['Water', 'Parking', 'Electricity', 'Rent'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  cutout: 50,
  maintainAspectRation: false,
  plugins: {
    tooltip: {
      enabled: true,
      showTooltips: true,
      callbacks: {
        label: (tooltipItem) => `$${tooltipItem.parsed}`,
      },
    },
    legend: {
      display: true,
    },
    datalabels: {
      display: false,
    },
  },
};

const DoughnutChart = ({ charges: { water, rent, electricity, parking } }) => (
  <Doughnut
    data={{
      labels: ['Water', 'Parking', 'Electricity', 'Rent'],
      datasets: [
        {
          data: [water, parking, electricity, rent],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
        },
      ],
    }}
    options={options}
    plugins={[ChartDataLabels]}
  />
);
export default DoughnutChart;
