import { Card } from "@/components/ui/card";
import { MoreHorizontal, Heart, HeartPulse } from "lucide-react";

export const HeartMetrics = () => {
  return (
    <div className="grid grid-rows-[1.2fr,0.8fr] gap-4 h-full">
      {/* Heart Beat Card */}
      <Card className="bg-[#F3FFE5] p-5 rounded-[25px] flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-6 h-6 text-[#FF6B6B]" />
            <h3 className="text-lg font-semibold">Heart Beat</h3>
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold text-[#FF6B6B]">110</span>
            <span className="text-gray-600 text-lg">bpm</span>
          </div>
          <span className="inline-block bg-[#E5FFB6] text-gray-700 px-3 py-1 rounded-full text-sm w-fit mb-2">
            Normal
          </span>
          <p className="text-sm text-gray-600 mb-auto">
            You are calm and ready for exercises!
          </p>
          <div className="mt-2">
            <img 
              src="/lovable-uploads/c99e39bb-c731-41bb-b223-86357dc26fbf.png" 
              alt="Heart rate graph" 
              className="w-full h-14 object-contain"
            />
          </div>
        </div>
      </Card>

      {/* Heart Score Card */}
      <Card className="bg-[#D3E4FD] p-5 rounded-[25px]">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#FF6B6B]" />
            <h3 className="text-lg font-semibold">Heart Score</h3>
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-2xl shadow-sm">
            <Heart className="w-10 h-10 text-[#FF6B6B] fill-[#FF6B6B]" />
          </div>
          <div>
            <div className="flex items-baseline gap-1 mb-1.5">
              <span className="text-4xl font-bold text-gray-800">82</span>
              <span className="text-xl text-gray-600">%</span>
            </div>
            <span className="inline-block bg-white text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
              Very Healthy
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};