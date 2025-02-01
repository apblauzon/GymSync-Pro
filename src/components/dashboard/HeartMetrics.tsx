import { Card } from "@/components/ui/card";
import { MoreHorizontal, Heart } from "lucide-react";

export const HeartMetrics = () => {
  return (
    <div className="grid grid-rows-[1fr,1fr] gap-4 h-full">
      {/* Heart Beat Card */}
      <Card className="bg-[#F3FFE5] p-6 rounded-[25px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Heart Beat</h3>
          <button className="text-gray-600 hover:text-gray-800">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-end gap-2 mb-3">
            <span className="text-4xl font-bold">110</span>
            <span className="text-gray-600 mb-1">bpm</span>
          </div>
          <span className="inline-block bg-[#E5FFB6] text-gray-700 px-3 py-1 rounded-full text-sm mb-3 w-fit">
            Normal
          </span>
          <p className="text-sm text-gray-600 mb-4">
            You are calm and ready for exercises!
          </p>
          <div className="mt-auto">
            <img 
              src="/lovable-uploads/c99e39bb-c731-41bb-b223-86357dc26fbf.png" 
              alt="Heart rate graph" 
              className="w-full h-16 object-contain"
            />
          </div>
        </div>
      </Card>

      {/* Heart Score Card */}
      <Card className="bg-[#D3E4FD] p-6 rounded-[25px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Heart Score</h3>
          <button className="text-gray-600 hover:text-gray-800">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <Heart className="w-12 h-12 text-[#FF6B6B] fill-[#FF6B6B]" />
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-gray-800">82%</span>
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