import { Card } from "@/components/ui/card";
import { MoreHorizontal, Heart, HeartPulse, Activity, Timer } from "lucide-react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const generateHeartRateData = () => {
  return Array.from({ length: 12 }, () => Math.floor(Math.random() * (120 - 80) + 80));
};

const generatePerformanceData = () => {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * (100 - 60) + 60));
};

export const HeartMetrics = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const heartRateData = {
    labels: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '10m', '11m', '12m'],
    datasets: [
      {
        fill: true,
        label: 'BPM',
        data: generateHeartRateData(),
        borderColor: '#F97316',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const performanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        fill: true,
        label: 'Performance',
        data: generatePerformanceData(),
        borderColor: '#0EA5E9',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1f2937',
        bodyColor: '#1f2937',
        borderColor: '#e5e7eb',
        borderWidth: 1,
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280',
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 6,
        hoverBorderWidth: 2,
      },
    },
  };

  return (
    <div className="grid grid-rows-[1.3fr,0.7fr] gap-4 h-full">
      {/* Heart Beat Card */}
      <Card className="bg-gradient-to-br from-[#F97316]/10 to-[#FB923C]/5 p-5 rounded-[25px] flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-[#F97316]/10">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-7 h-7 text-[#F97316]" />
            <h3 className="text-2xl font-semibold text-gray-800">Heart Beat</h3>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-6xl font-bold text-[#F97316]">110</span>
            <span className="text-2xl text-gray-600">bpm</span>
          </div>
          <div className="flex gap-2 mb-3">
            <span className="inline-block bg-[#FFF7ED] text-[#F97316] px-3 py-1 rounded-full text-sm font-medium">
              Normal Range
            </span>
            <span className="inline-block bg-[#ECFDF5] text-[#059669] px-3 py-1 rounded-full text-sm font-medium">
              Optimal Zone
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-base text-gray-600">
              You are in the fat-burning zone! Keep it up!
            </p>
            {isExpanded && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Timer className="w-4 h-4" />
                  <span>Duration in zone: 15 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Activity className="w-4 h-4" />
                  <span>Trending: Stable</span>
                </div>
              </div>
            )}
          </div>
          <div className="mt-auto h-48">
            <Line data={heartRateData} options={chartOptions} />
          </div>
        </div>
      </Card>

      {/* Heart Score Card */}
      <Card className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#38BDF8]/5 p-5 rounded-[25px] hover:shadow-lg hover:shadow-[#0EA5E9]/10 transition-all duration-300">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <Heart className="w-7 h-7 text-[#0EA5E9]" />
            <h3 className="text-2xl font-semibold text-gray-800">Heart Score</h3>
          </div>
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-white p-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <Heart className="w-14 h-14 text-[#0EA5E9] fill-[#0EA5E9]" />
          </div>
          <div>
            <div className="flex items-baseline gap-1 mb-1.5">
              <span className="text-6xl font-bold text-gray-800">82</span>
              <span className="text-3xl text-gray-600">%</span>
            </div>
            <span className="inline-block bg-[#E0F2FE] text-[#0EA5E9] px-4 py-1.5 rounded-full text-lg font-medium shadow-sm">
              Very Healthy
            </span>
          </div>
        </div>
        <div className="h-32">
          <Line data={performanceData} options={chartOptions} />
        </div>
      </Card>
    </div>
  );
};