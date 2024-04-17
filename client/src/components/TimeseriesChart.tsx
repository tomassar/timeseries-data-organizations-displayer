// TimeSeriesChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions, Chart, TimeScale, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

interface TimeSeriesChartProps {
 timeseriesData: { timestamp: string; value: number }[];
}

Chart.register(TimeScale, ...registerables);

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ timeseriesData }) => {
 // Prepare data for the chart
 const chartData = {
    datasets: [
      {
        label: 'Time Series Data',
        data: timeseriesData.map(data => ({
          x: new Date(data.timestamp),
          y: data.value,
        })),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

 const options: ChartOptions<'line'> = {
    scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
          },
        },
      },
 };

 console.log("chartData", chartData)

 return <Line data={chartData} options={options} />;
};

export default TimeSeriesChart;
