import { Card } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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

export const ActivityTracking = () => {
  const days = [
    { day: 'Sun', date: '18' },
    { day: 'Mon', date: '19' },
    { day: 'Tue', date: '20' },
    { day: 'Wed', date: '21' },
    { day: 'Thu', date: '22', isActive: true },
    { day: 'Fri', date: '23' },
    { day: 'Sat', date: '24' },
  ];

  const chartData = {
    labels: days.map(d => d.day),
    datasets: [
      {
        label: 'Activity',
        data: [65, 78, 82, 75, 85, 80, 77],
        fill: true,
        borderColor: '#FF6B6B',
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#FF6B6B',
        pointBorderColor: '#FFF',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          callback: (value: number) => value + '%',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <Card className="bg-white rounded-[25px] p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Activity Tracking</h2>
        <RefreshCw className="w-5 h-5 text-gray-500" />
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-sm text-gray-600 mb-1">{item.day}</div>
            <div className={`text-base font-medium p-2 rounded-lg ${
              item.isActive 
                ? 'bg-[#FF6B6B] text-white' 
                : 'text-gray-900'
            }`}>
              {item.date}
            </div>
          </div>
        ))}
      </div>

      {/* Activity Chart */}
      <div className="h-[250px]">
        <Line data={chartData} options={options} />
      </div>
    </Card>
  );
};