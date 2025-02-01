import { MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const activityData = [
  { value: 30 },
  { value: 40 },
  { value: 35 },
  { value: 50 },
  { value: 45 },
  { value: 60 },
  { value: 55 },
];

export const HeartBeatSection = () => {
  return (
    <Card className="col-span-6 bg-[#F2FCE2] p-4">
      <div className="flex justify-between mb-3">
        <h2 className="font-semibold text-lg">Heart Beat</h2>
        <MoreHorizontal className="text-gray-500" />
      </div>
      <div className="flex items-baseline gap-2 mb-2">
        <div className="text-4xl font-bold">110</div>
        <div className="text-lg">bpm</div>
      </div>
      <div className="inline-block bg-white px-3 py-1 rounded-full text-sm mb-3">
        Normal
      </div>
      <div className="text-sm text-gray-600 mb-3">
        You are calm and ready for exercises!
      </div>
      <ChartContainer className="h-20" config={{}}>
        <ResponsiveContainer>
          <LineChart data={activityData}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#4CAF50" 
              strokeWidth={2} 
              dot={false}
            />
            <ChartTooltip
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                return (
                  <ChartTooltipContent>
                    {payload[0].value} bpm
                  </ChartTooltipContent>
                );
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};