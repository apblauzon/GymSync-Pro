import { Activity, Dumbbell, Timer, Weight, Bike } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const progressData = [
  { name: 'Progress', value: 85 },
  { name: 'Remaining', value: 15 },
];

const COLORS = ['#33C3F0', '#E8F4FF'];

const timePeriods = [
  "This Week",
  "Last Week",
  "This Month",
  "Last Month",
  "Last 20 Days",
  "Last 30 Days",
  "Last 60 Days",
  "Last Quarter",
];

export const ProgressSection = () => {
  return (
    <Card className="h-full p-8 rounded-[25px] shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-xl">Progress</h2>
        <select className="bg-[#F3F0FF] px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-[#E8E3FF] transition-colors">
          {timePeriods.map((period) => (
            <option key={period} value={period}>
              {period}
            </option>
          ))}
        </select>
      </div>
      <div className="relative w-64 h-64 mx-auto mb-8">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={progressData}
              innerRadius={65}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
            >
              {progressData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-5xl font-bold text-[#33C3F0]">85%</div>
          <div className="text-base text-gray-500">Goal</div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Dumbbell className="w-6 h-6 text-[#33C3F0]" />
              <span className="text-base">Cardio Training</span>
            </div>
            <span className="text-base font-medium">85%</span>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-[#33C3F0]" />
              <span className="text-base">Strength Training</span>
            </div>
            <span className="text-base font-medium">75%</span>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Timer className="w-6 h-6 text-[#33C3F0]" />
              <span className="text-base">Flexibility Training</span>
            </div>
            <span className="text-base font-medium">65%</span>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Weight className="w-6 h-6 text-[#33C3F0]" />
              <span className="text-base">Weight Training</span>
            </div>
            <span className="text-base font-medium">70%</span>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Bike className="w-6 h-6 text-[#33C3F0]" />
              <span className="text-base">Cycling Training</span>
            </div>
            <span className="text-base font-medium">80%</span>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-[#33C3F0]" />
              <span className="text-base">Stretching Practice</span>
            </div>
            <span className="text-base font-medium">60%</span>
          </div>
        </div>
      </div>
    </Card>
  );
};