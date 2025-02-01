import { MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";

export const HeartBeatSection = () => {
  return (
    <Card className="col-span-6 bg-[#F2FCE2] p-4 h-full">
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
      <img 
        src="/lovable-uploads/663229aa-d481-4720-8da0-70823b3eecbb.png" 
        alt="Heart rate graph" 
        className="w-full h-20 object-contain"
      />
    </Card>
  );
};