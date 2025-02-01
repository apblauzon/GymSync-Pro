import { Activity, Dumbbell, Timer } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const progressData = [
  { name: 'Progress', value: 85 },
  { name: 'Remaining', value: 15 },
];

const COLORS = ['#9b87f5', '#E0E0E0'];

export const ProgressSection = () => {
  return (
    <Card className="h-full p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-lg">Progress</h2>
        <select className="bg-[#F3F0FF] px-3 py-1 rounded-full text-sm">
          <option>This Week</option>
        </select>
      </div>
      <div className="relative w-48 h-48 mx-auto mb-6">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={progressData}
              innerRadius={45}
              outerRadius={60}
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
          <div className="text-4xl font-bold">85%</div>
          <div className="text-sm text-gray-500">Goal</div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Dumbbell className="w-5 h-5 text-[#9b87f5]" />
            <span className="text-sm">Cardio Training</span>
          </div>
          <span className="text-sm font-medium">85%</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-[#9b87f5]" />
            <span className="text-sm">Strength Training</span>
          </div>
          <span className="text-sm font-medium">75%</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Timer className="w-5 h-5 text-[#9b87f5]" />
            <span className="text-sm">Flexibility Training</span>
          </div>
          <span className="text-sm font-medium">65%</span>
        </div>
      </div>
    </Card>
  );
};