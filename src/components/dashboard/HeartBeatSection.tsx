import { MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";

export const HeartBeatSection = () => {
  return (
    <Card className="col-span-6 bg-[#F2FCE2] p-4 h-full">
      <div className="flex justify-between mb-2">
        <h2 className="text-base sm:text-lg font-semibold">Heart Beat</h2>
        <MoreHorizontal className="text-gray-500 w-5 h-5" />
      </div>
      <div className="flex items-baseline gap-1 mb-2">
        <div className="text-2xl sm:text-3xl font-bold">110</div>
        <div className="text-sm sm:text-base">bpm</div>
      </div>
      <div className="inline-block bg-white px-2 py-0.5 rounded-full text-xs sm:text-sm mb-2">
        Normal
      </div>
      <div className="text-xs sm:text-sm text-gray-600 mb-2">
        You are calm and ready for exercises!
      </div>
      <img 
        src="/lovable-uploads/c99e39bb-c731-41bb-b223-86357dc26fbf.png" 
        alt="Heart rate graph" 
        className="w-full h-16 sm:h-20 object-contain"
      />
    </Card>
  );
};