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
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Progress</h2>
        <select className="bg-[#F3F0FF] px-3 py-1 rounded-full text-sm">
          <option>This Week</option>
        </select>
      </div>
      <div className="relative w-40 h-40 mx-auto mb-4">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={progressData}
              innerRadius={35}
              outerRadius={50}
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
          <div className="text-3xl font-bold">85%</div>
          <div className="text-xs text-gray-500">Goal</div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-4 h-4 text-[#9b87f5]" />
            <span className="text-sm">Cardio Training</span>
          </div>
          <span className="text-sm font-medium">85%</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#9b87f5]" />
            <span className="text-sm">Strength Training</span>
          </div>
          <span className="text-sm font-medium">75%</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Timer className="w-4 h-4 text-[#9b87f5]" />
            <span className="text-sm">Flexibility Training</span>
          </div>
          <span className="text-sm font-medium">65%</span>
        </div>
      </div>
    </Card>
  );
};