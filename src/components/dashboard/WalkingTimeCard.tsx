import { Card } from "@/components/ui/card";
import { Footprints } from "lucide-react";

export const WalkingTimeCard = () => {
  return (
    <Card className="mt-4 bg-[#F3E6FF] p-4 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Running with Kate</h3>
        <button className="text-sm text-[#9b87f5] hover:underline">
          View more
        </button>
      </div>
      <div className="text-sm text-gray-600 mb-4">
        9 Jan, 2025
      </div>
      <div className="flex justify-center mb-4">
        <div className="relative">
          <Footprints className="w-8 h-8 text-[#9b87f5] absolute -left-8" />
          <Footprints className="w-8 h-8 text-[#9b87f5] absolute -right-8 transform scale-x-[-1]" />
          <div className="border-t-2 border-[#9b87f5] w-16"></div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-sm text-gray-600">Double Walking Time</div>
        <div className="text-3xl font-bold text-[#9b87f5]">34 min</div>
      </div>
    </Card>
  );
};